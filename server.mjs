import { createServer } from 'node:http';
import { readFile, realpath, stat } from 'node:fs/promises';
import { dirname, extname, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = await realpath(resolve(dirname(fileURLToPath(import.meta.url)), 'dist'));
// Fail startup if the deployment is missing the actual application.
await stat(resolve(root, 'index.html'));
const port = Number(process.env.PORT ?? 3000);
if (!Number.isInteger(port) || port < 0 || port > 65535) {
  throw new Error('PORT must be an integer between 0 and 65535');
}
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
};
const server = createServer(async (request, response) => {
  response.setHeader('X-Content-Type-Options', 'nosniff');
  response.setHeader('Cache-Control', 'no-cache');
  const send = (status, body, type = 'text/plain; charset=utf-8') => {
    response.writeHead(status, { 'Content-Type': type, 'Content-Length': Buffer.byteLength(body) });
    response.end(request.method === 'HEAD' ? undefined : body);
  };
  if (!['GET', 'HEAD'].includes(request.method)) {
    response.setHeader('Allow', 'GET, HEAD');
    return send(405, 'Method not allowed');
  }
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
  } catch {
    return send(400, 'Bad request');
  }
  if (pathname === '/health') return send(200, '{"status":"ok"}', types['.json']);
  // Serve only public dist files, never dotfiles or deployment metadata.
  if (pathname.includes('\0') || pathname.includes('\\') || pathname.split('/').some(part => part.startsWith('.'))) {
    return send(404, 'Not found');
  }
  try {
    const path = await realpath(resolve(root, `.${pathname === '/' ? '/index.html' : pathname}`));
    const rel = relative(root, path);
    if (rel === '..' || rel.startsWith(`..${sep}`) || !rel || !(await stat(path)).isFile()) {
      return send(404, 'Not found');
    }
    const body = await readFile(path);
    send(200, body, types[extname(path)] || 'application/octet-stream');
  } catch (error) {
    if (['ENOENT', 'ENOTDIR', 'EACCES'].includes(error.code)) return send(404, 'Not found');
    console.error('Static file request failed:', error.code || error.name);
    send(500, 'Internal server error');
  }
});
server.listen(port, '0.0.0.0', () => {
  console.log(`U.C. ARCHIVE listening on http://0.0.0.0:${server.address().port}`);
});
for (const signal of ['SIGTERM', 'SIGINT']) {
  process.once(signal, () => {
    server.close(() => process.exit(0));
    setTimeout(() => process.exit(1), 10_000).unref();
  });
}
