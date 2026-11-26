import { after, before, test } from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { get } from 'node:http';

let child;
let origin;
before(async () => {
  child = spawn(process.execPath, ['server.mjs'], { env: { ...process.env, PORT: '0' }, stdio: ['ignore', 'pipe', 'pipe'] });
  origin = await new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('Server startup timed out')), 10_000);
    let output = '';
    child.on('error', error => { clearTimeout(timer); reject(error); });
    child.once('exit', code => { clearTimeout(timer); reject(new Error(`Server exited: ${code}`)); });
    child.stdout.on('data', chunk => {
      output += chunk;
      const match = output.match(/http:\/\/0\.0\.0\.0:(\d+)/);
      if (match) { clearTimeout(timer); resolve(`http://127.0.0.1:${match[1]}`); }
    });
  });
});
after(async () => {
  if (child && child.exitCode === null) {
    const stopped = once(child, 'exit');
    child.kill('SIGTERM');
    const [code] = await stopped;
    assert.equal(code, 0, 'graceful shutdown');
  }
});

test('Railway health endpoint responds on the configured port', async () => {
  const response = await fetch(`${origin}/health`);
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { status: 'ok' });
});
test('serves the page and all application assets with correct MIME types', async () => {
  for (const [path, type, expected] of [
    ['/?era=0093', 'text/html', 'U.C. ARCHIVE'],
    ['/style.css', 'text/css', ':root'],
    ['/app.js', 'text/javascript', 'selectEra'],
    ['/archive.js', 'text/javascript', 'renderSuits'],
    ['/archive-data.js', 'text/javascript', 'mobileSuits'],
    ['/assets/gundam.svg', 'image/svg+xml', '<svg'],
  ]) {
    const response = await fetch(origin + path);
    assert.equal(response.status, 200, path);
    assert.ok(response.headers.get('content-type').startsWith(type), path);
    assert.ok((await response.text()).includes(expected), path);
  }
});
test('HEAD works and unsupported methods are rejected', async () => {
  const response = await fetch(origin, { method: 'HEAD' });
  assert.equal(response.status, 200);
  assert.ok(Number(response.headers.get('content-length')) > 0);
  assert.equal(await response.text(), '');
  const post = await fetch(origin, { method: 'POST' });
  assert.equal(post.status, 405);
  assert.equal(post.headers.get('allow'), 'GET, HEAD');
});
test('does not expose repository files, dotfiles or invalid paths', async () => {
  // Raw HTTP paths avoid a client's URL normalizer hiding traversal attempts.
  for (const path of ['/server.mjs', '/package.json', '/README.md', '/.git/config', '/.openai/hosting.json', '/missing.js', '/assets/', '/%2e%2e%2fpackage.json', '/assets/%2e%2e%2f%2e%2e%2fpackage.json', '/%00', '/%ZZ']) {
    const status = await new Promise((resolve, reject) => {
      get(origin + path, response => { response.resume(); resolve(response.statusCode); }).on('error', reject);
    });
    assert.ok([400, 404].includes(status), `${path}: ${status}`);
  }
});
