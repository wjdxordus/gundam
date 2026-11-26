'use strict';
const works = [
{id:'first',title:'기동전사 건담',en:'MOBILE SUIT GUNDAM',uc:79,year:1979,type:'TV',pilot:'아무로 레이',ms:'RX-78-2 건담',color:'#52634b',hue:0,tag:'모든 이야기의 시작',desc:'일년전쟁 속에서 소년 아무로 레이는 건담의 파일럿이 된다. 화이트 베이스의 여정과 샤아와의 만남을 통해 우주세기의 핵심인 전쟁, 성장, 그리고 뉴타입을 만나는 작품.'},
{id:'08',title:'기동전사 건담 제08MS소대',en:'THE 08TH MS TEAM',uc:79,year:1996,type:'OVA',pilot:'시로 아마다',ms:'육전형 건담',color:'#5b6540',hue:20,tag:'지상에서 마주한 전쟁의 얼굴',desc:'동남아시아 전선에 배치된 시로 아마다와 제08MS소대의 이야기. 우주의 영웅들에서 시선을 돌려, 지상전의 병사들과 적으로 만난 두 사람의 관계를 그린다.'},
{id:'pocket',title:'기동전사 건담 0080',en:'WAR IN THE POCKET',uc:79,ucLabel:'0079–0080',year:1989,type:'OVA',pilot:'알프레드 이즈루하 · 버나드 와이즈먼',ms:'건담 NT-1 / 자쿠 II 改',color:'#67413e',hue:320,tag:'주머니 속의 전쟁',desc:'중립 콜로니에서 살아가는 소년 알은 지온 병사 버니와 친구가 된다. 일년전쟁 말기의 작은 사건을 통해, 평범한 일상에 찾아온 전쟁을 바라보는 6부작 OVA.'},
{id:'igloo',title:'기동전사 건담 MS IGLOO',en:'MS IGLOO',uc:79,year:2004,type:'OVA',pilot:'올리버 마이',ms:'지온군 시험 병기',color:'#4e5750',hue:60,tag:'기록되지 않은 시험 병기들',desc:'지온군의 기술 시험 부대에서 바라본 일년전쟁. 올리버 마이 기술중위와 요툰헤임 승무원들이 시험 병기를 실전에 투입하며 목격하는 전장을 다룬다. 초기 작품은 특별 상영으로 공개되었다.'},
{id:'thunderbolt',title:'기동전사 건담 썬더볼트',en:'THUNDERBOLT',uc:79,year:2015,type:'ONA',pilot:'이오 플레밍 · 대릴 로렌츠',ms:'풀 아머 건담 / 사이코 자쿠',color:'#58476d',hue:280,tag:'잔해 속에 울려 퍼지는 재즈',desc:'잔해와 방전으로 가득한 썬더볼트 주역에서 연방군과 지온군의 두 파일럿이 충돌한다. 일년전쟁을 배경으로 하되, 메카와 설정에 독자적인 해석을 더한 작품이다.'},
{id:'stardust',title:'기동전사 건담 0083',en:'STARDUST MEMORY',uc:83,year:1991,type:'OVA',pilot:'코우 우라키',ms:'건담 시작 1호기 / 3호기',color:'#4b5470',hue:190,tag:'스타더스트 메모리',desc:'지온 잔당의 건담 강탈로 시작되는 데라즈 분쟁. 신참 파일럿 코우 우라키의 추격전을 따라가며 일년전쟁 이후와 Z 건담 시대 사이의 정치적 변화를 만난다.'},
{id:'zeta',title:'기동전사 Z 건담',en:'ZETA GUNDAM',uc:87,year:1985,type:'TV',pilot:'카미유 비단',ms:'건담 Mk-II / Z 건담',color:'#4a596c',hue:180,tag:'새로운 시대, 새로운 갈등',desc:'지구연방의 정예 조직 티탄즈와 이에 맞서는 에우고. 소년 카미유 비단은 두 세력의 충돌에 휘말리고, 복잡한 전쟁 속에서 뉴타입의 가능성과 상처를 경험한다.'},
{id:'zz',title:'기동전사 건담 ZZ',en:'GUNDAM ZZ',uc:88,year:1986,type:'TV',pilot:'쥬도 아시타',ms:'ZZ 건담',color:'#7d6042',hue:30,tag:'샹그릴라의 소년들',desc:'그리프스 전역 이후, 하만 칸의 네오 지온이 세력을 넓힌다. 샹그릴라의 소년 쥬도 아시타와 동료들은 아가마에 합류하며 거대한 전쟁을 마주하게 된다.'},
{id:'cca',title:'기동전사 건담 역습의 샤아',en:'CHAR’S COUNTERATTACK',uc:93,year:1988,type:'영화',pilot:'아무로 레이 · 샤아 아즈나블',ms:'ν 건담 / 사자비',color:'#773c30',hue:335,tag:'아무로와 샤아, 마지막 대결',desc:'샤아가 이끄는 네오 지온과 아무로가 소속된 론도 벨의 충돌. 지구의 미래를 둘러싼 두 사람의 오랜 갈등이 액시즈를 향해 수렴한다.'},
{id:'unicorn',title:'기동전사 건담 UC',en:'GUNDAM UNICORN',uc:96,year:2010,type:'OVA',pilot:'버나지 링크스',ms:'유니콘 건담',color:'#476e61',hue:95,tag:'가능성이라는 이름의 짐승',desc:'버나지 링크스가 유니콘 건담과 만나면서 라플라스의 상자를 둘러싼 추적이 시작된다. 연방과 지온의 대립 속에서 우주세기의 기원과 뉴타입의 가능성을 되짚는다.'},
{id:'narrative',title:'기동전사 건담 NT',en:'GUNDAM NARRATIVE',uc:97,year:2018,type:'영화',pilot:'요나 바슈타',ms:'내러티브 건담 / 페넥스',color:'#7c6a43',hue:25,tag:'불사조를 쫓는 사람들',desc:'라플라스 사변 이후, 모습을 드러낸 황금빛 유니콘 건담 3호기 페넥스. 요나 바슈타와 과거를 공유한 이들의 이야기가 사이코 프레임의 미지의 힘과 연결된다.'},
{id:'hathaway',title:'기동전사 건담 섬광의 하사웨이',en:'HATHAWAY',uc:105,year:2021,type:'영화',pilot:'하사웨이 노아',ms:'Ξ 건담 / 페넬로페',color:'#3e6067',hue:130,tag:'이상을 물려받은 자의 선택',desc:'지구연방 정부의 정책에 저항하는 조직 마프티. 하사웨이 노아의 신념과 개인적인 만남이 교차하면서 우주세기의 새로운 갈등을 그린다. 여기서는 2021년 첫 극장판을 소개한다.'},
{id:'f91',title:'기동전사 건담 F91',en:'GUNDAM F91',uc:123,year:1991,type:'영화',pilot:'시북 아노',ms:'건담 F91',color:'#5c5874',hue:240,tag:'새로운 세대의 우주세기',desc:'크로스본 뱅가드의 침공으로 프론티어 IV의 일상이 무너진다. 시북 아노와 세실리 페어차일드가 새로운 귀족주의와 전쟁의 소용돌이 속에서 자신의 길을 찾아간다.'},
{id:'victory',title:'기동전사 V 건담',en:'VICTORY GUNDAM',uc:153,year:1993,type:'TV',pilot:'웃소 에빈',ms:'V 건담 / V2 건담',color:'#456677',hue:170,tag:'먼 미래에도 이어지는 희망',desc:'잔스칼 제국이 지구권을 위협하는 시대. 소년 웃소 에빈은 리가 밀리티어와 함께 싸우며, 전쟁이 빼앗아 가는 것들과 지켜야 할 삶을 마주한다.'}
];
const eras = [
{year:79,label:'일년전쟁',en:'THE ONE YEAR WAR',title:'일년전쟁',desc:'지온 공국의 독립 전쟁으로 지구권 전체가 전장으로 변한다. 모빌슈트의 시대가 열리고, 아무로와 샤아의 운명적인 만남이 시작된다.',factions:['지구연방군','지온 공국'],related:['first','08','pocket']},
{year:83,label:'데라즈 분쟁',en:'THE DELAZ CONFLICT',title:'데라즈 분쟁',desc:'전쟁이 끝난 뒤에도 남아 있던 불씨. 지온 잔당의 별 부스러기 작전은 연방의 정치 지형을 바꾸고 티탄즈 결성으로 이어진다.',factions:['지구연방군','데라즈 플리트'],related:['stardust']},
{year:87,label:'그리프스 전역',en:'THE GRYPS CONFLICT',title:'그리프스 전역',desc:'티탄즈와 에우고의 대립에 액시즈가 개입한다. 연방 내부의 갈등은 세 세력이 맞서는 복잡한 전쟁으로 확대된다.',factions:['에우고','티탄즈','액시즈'],related:['zeta']},
{year:88,label:'제1차 네오 지온',en:'THE FIRST NEO ZEON WAR',title:'제1차 네오 지온 항쟁',desc:'그리프스 전역으로 소모된 지구권에 하만 칸의 네오 지온이 진출한다. 아가마의 새로운 동료들이 그 앞에 선다.',factions:['에우고','네오 지온'],related:['zz']},
{year:93,label:'제2차 네오 지온',en:'THE SECOND NEO ZEON WAR',title:'제2차 네오 지온 항쟁',desc:'샤아 아즈나블이 이끄는 네오 지온이 다시 움직인다. 지구를 둘러싼 위기 앞에서 론도 벨과 아무로가 출격한다.',factions:['론도 벨','신생 네오 지온'],related:['cca']},
{year:96,label:'라플라스 사변',en:'THE LAPLACE INCIDENT',title:'라플라스 사변',desc:'우주세기의 비밀을 품은 라플라스의 상자. 그 행방을 쫓는 세력들 사이에서 유니콘 건담과 버나지의 여정이 시작된다.',factions:['지구연방군','소데츠키','비스트 재단'],related:['unicorn']},
{year:97,label:'불사조 사냥',en:'THE PHOENIX HUNT',title:'불사조 사냥',desc:'행방불명되었던 페넥스가 다시 목격된다. 각 세력은 사이코 프레임의 힘을 쫓고, 세 사람의 오래된 인연이 교차한다.',factions:['지구연방군','지온 잔당','루오 상회'],related:['narrative']},
{year:105,label:'마프티 동란',en:'THE MAFTY UPRISING',title:'마프티 동란',desc:'지구연방의 특권과 강압적인 정책에 대한 저항이 거세진다. 마프티를 이끄는 하사웨이 노아는 자신의 방식으로 변화를 꿈꾼다.',factions:['지구연방군','마프티'],related:['hathaway']},
{year:123,label:'코스모 바빌로니아',en:'COSMO BABYLONIA',title:'코스모 바빌로니아 건국전쟁',desc:'크로스본 뱅가드가 귀족주의 국가 건설을 위해 프론티어 사이드를 침공한다. 새로운 세대의 소년과 소녀가 전쟁에 휘말린다.',factions:['지구연방군','크로스본 뱅가드'],related:['f91']},
{year:153,label:'잔스칼 전쟁',en:'THE ZANSCARE WAR',title:'잔스칼 전쟁',desc:'약화된 연방의 영향력 아래 잔스칼 제국이 세력을 확장한다. 리가 밀리티어의 저항과 함께 또 다른 세대의 이야기가 펼쳐진다.',factions:['리가 밀리티어','잔스칼 제국'],related:['victory']}
];
const $ = s => document.querySelector(s);
const pad = year => String(year).padStart(4,'0');
const state = {era:79,filter:'all',query:'',sort:'uc'};
const mediaQuery = matchMedia('(prefers-reduced-motion: reduce)');
let motion = !mediaQuery.matches;
try { if(localStorage.getItem('uc-motion') === 'off') motion = false; } catch {}
function selectEra(year, updateURL = true) {
 const era = eras.find(e => e.year === year) || eras[0]; state.era = era.year;
 $('#year-nav').innerHTML = eras.map(e => `<button class="year-button" data-year="${e.year}" aria-label="U.C. ${pad(e.year)} ${e.label}" aria-pressed="${e.year === era.year}"><strong>${pad(e.year)}</strong><span class="dot"></span><small>${e.label}</small></button>`).join('');
 $('#era-panel').innerHTML = `<div class="era-year"><span class="mini">UNIVERSAL CENTURY</span><div class="year-number"><span>U.C.</span>${pad(era.year)}</div><p>${era.en}</p></div><div class="era-info"><span class="era-badge">HISTORICAL RECORD</span><h3>${era.title}</h3><p>${era.desc}</p><div class="factions">${era.factions.map(f=>`<span>${f}</span>`).join('')}</div></div><div class="era-related"><p>이 시대의 주요 작품</p>${era.related.map(id=>{const w=works.find(w=>w.id===id);return `<button class="related-button" data-work="${id}"><span>${w.type}</span><span><strong>${w.title}</strong><small>${w.year} · ${w.en}</small></span></button>`}).join('')}</div>`;
 $('#era-panel').classList.remove('panel-enter'); void $('#era-panel').offsetWidth; $('#era-panel').classList.add('panel-enter');
 if(typeof renderEraDetails === 'function') renderEraDetails();
 if(updateURL){const url=new URL(location.href);url.searchParams.set('era',pad(era.year));history.replaceState(null,'',url);}
}
$('#year-nav').addEventListener('click',e=>{const b=e.target.closest('[data-year]');if(b){const y=Number(b.dataset.year);selectEra(y);const active=$(`[data-year="${y}"]`);active.focus({preventScroll:true});active.scrollIntoView({behavior:motion?'smooth':'instant',block:'nearest',inline:'nearest'});}});
$('#year-nav').addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;e.preventDefault();let i=eras.findIndex(x=>x.year===state.era);i=e.key==='Home'?0:e.key==='End'?eras.length-1:Math.max(0,Math.min(eras.length-1,i+(e.key==='ArrowRight'?1:-1)));selectEra(eras[i].year);$(`[data-year="${state.era}"]`).focus({preventScroll:true});$(`[data-year="${state.era}"]`).scrollIntoView({block:'nearest',inline:'nearest'});});
function renderWorks(){
 const q=state.query.trim().toLocaleLowerCase();
 const list=works.filter(w=>(state.filter==='all'||w.type===state.filter||(state.filter==='OVA'&&w.type==='ONA'))&&[w.title,w.en,w.pilot,w.ms,pad(w.uc),w.ucLabel||'',String(w.year)].join(' ').toLocaleLowerCase().includes(q)).sort((a,b)=>state.sort==='release'?a.year-b.year:a.uc-b.uc||a.year-b.year);
 $('#results-label').textContent=`${list.length}개의 작품 · ${state.sort==='uc'?'이야기 속 시간순':'첫 공개 연도순'}`;
 $('#work-grid').innerHTML=list.length?list.map(w=>`<button class="work-card" data-work="${w.id}" aria-label="${w.title} 상세 보기"><div class="card-art" style="--card-color:${w.color};--hue:${w.hue}deg"><span class="art-year">${pad(w.uc)}</span><img src="assets/gundam.svg" alt="" loading="lazy"><span class="uc-tag">U.C. ${w.ucLabel||pad(w.uc)}</span><span class="art-title">${w.en}</span></div><div class="card-copy"><h3>${w.title}</h3><p>${w.tag}</p><div class="card-meta"><span>${w.type==='영화'?'MOVIE':w.type}</span><span>${w.year} · 작품 살펴보기</span></div></div></button>`).join(''):'<div class="empty"><p>검색 조건에 맞는 작품이 없습니다.</p><button id="reset-search">검색 초기화</button></div>';
}
$('.filter-tabs').addEventListener('click',e=>{const b=e.target.closest('[data-filter]');if(!b)return;state.filter=b.dataset.filter;document.querySelectorAll('[data-filter]').forEach(el=>{const active=el===b;el.classList.toggle('selected',active);el.setAttribute('aria-pressed',active)});renderWorks();});
$('#search').addEventListener('input',e=>{state.query=e.target.value;renderWorks();});
$('#sort').addEventListener('change',e=>{state.sort=e.target.value;renderWorks();});
const dialog=$('#detail-dialog');
const dialogHistory=[];
function showDialog(content){
 if(dialog.open) dialogHistory.push({html:$('#dialog-content').innerHTML,scroll:dialog.scrollTop});
 $('#dialog-content').innerHTML=(dialogHistory.length?'<button class="dialog-back" data-dialog-back>이전 화면</button>':'')+content;
 dialog.setAttribute('aria-labelledby','dialog-title');if(!dialog.open)dialog.showModal();
 dialog.scrollTop=0;document.body.style.overflow='hidden';$('.close-dialog').focus({preventScroll:true});
}
function showWork(id){
 const w=works.find(w=>w.id===id);if(!w)return;
 const notes=workDetails[id]||[];const units=mobileSuits.filter(m=>m.works.includes(id));
 showDialog(`<p class="eyebrow">${w.en}</p><div class="dialog-year">U.C. ${w.ucLabel||pad(w.uc)}</div><h2 id="dialog-title">${w.title}</h2><div class="factions"><span>${w.type==='ONA'?'ONA · 웹 애니메이션':w.type}</span><span>${w.year}년 첫 공개</span></div><p>${w.desc}</p><div class="dialog-meta"><div><span>주요 인물</span>${w.pilot}</div><div><span>시대</span>${eras.find(e=>e.year===w.uc).title}</div></div><h3 class="reading-title">이 작품을 읽는 관점</h3>${notes.map(n=>`<p>${n}</p>`).join('')}<h3 class="reading-title">주요 등장 기체 <span>${units.length}</span></h3><div class="unit-links">${units.map(m=>unitLink(m)).join('')}</div><p class="scope-note">주요 기체 선별 목록입니다. 기체를 선택하면 상세 정보가 열립니다.</p>${sourceLink(id)}<button class="outline-button" data-jump="${w.uc}">이 시대의 상세 연표 보기</button>`);
}
function showGuide(){showDialog(`<p class="eyebrow">A BEGINNER’S FIELD GUIDE</p><h2 id="dialog-title">나의 첫 우주세기.</h2><p>우주세기는 하나의 연대기이지만, 모든 작품을 순서대로 볼 필요는 없어요. 아래는 이 아카이브가 제안하는 세 가지 출발점입니다.</p><div class="guide-route"><h3>세계관의 뿌리부터 알고 싶다면</h3><p>기동전사 건담 → Z 건담 → ZZ 건담 → 역습의 샤아<br>공개 순서대로 인물과 시대의 변화를 따라가는 기본 코스입니다.</p><button data-work="first">기동전사 건담 살펴보기</button></div><div class="guide-route"><h3>짧고 밀도 있는 이야기부터</h3><p>0080 주머니 속의 전쟁<br>6부작으로 한 소년의 눈에 비친 전쟁을 만날 수 있습니다. 일년전쟁의 큰 구도만 알고 시작해도 좋습니다.</p><button data-work="pocket">0080 살펴보기</button></div><div class="guide-route"><h3>현대적인 영상미가 궁금하다면</h3><p>건담 UC(유니콘)<br>우주세기의 분위기를 생생하게 느낄 수 있는 작품입니다. 처음에는 낯선 세력과 용어가 많을 수 있어 연표와 함께 보기를 권합니다.</p><button data-work="unicorn">건담 UC 살펴보기</button></div><p>작품 공개 연도와 이야기 속 U.C. 연도는 다릅니다. 썬더볼트처럼 설정에 독자적인 해석이 있는 외전도 있습니다. 이 페이지는 주요 애니메이션을 추린 입문용 연표입니다.</p>`);}
$('#guide-open').addEventListener('click',showGuide);$('#guide-banner-open').addEventListener('click',showGuide);
$('.close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('close',()=>{document.body.style.overflow='';dialogHistory.length=0;});
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
document.addEventListener('click',e=>{const work=e.target.closest('[data-work]');if(work)showWork(work.dataset.work);const jump=e.target.closest('[data-jump]');if(jump){dialog.close();selectEra(Number(jump.dataset.jump));$('#timeline').scrollIntoView({behavior:motion?'smooth':'instant'});$(`[data-year="${state.era}"]`).focus({preventScroll:true});}if(e.target.closest('#reset-search')){state.query='';state.filter='all';$('#search').value='';document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('selected',b.dataset.filter==='all');b.setAttribute('aria-pressed',b.dataset.filter==='all')});renderWorks();}});
document.addEventListener('keydown',e=>{if(e.key==='/'&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)&&!dialog.open){e.preventDefault();$('#search').focus();}});
const canvas=$('#stars'),ctx=canvas.getContext('2d');let stars=[],width=0,height=0,raf=0,visible=true;
function resize(){const r=canvas.getBoundingClientRect();width=r.width;height=r.height;const dpr=Math.min(devicePixelRatio||1,2);canvas.width=width*dpr;canvas.height=height*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);stars=Array.from({length:65},()=>({x:Math.random()*width,y:Math.random()*height,r:Math.random()*1.15+.2,s:Math.random()*.1+.02,a:Math.random()*.5+.15}));draw();}
function draw(){ctx.clearRect(0,0,width,height);for(const star of stars){if(motion){star.y-=star.s;if(star.y<0)star.y=height;}ctx.beginPath();ctx.arc(star.x,star.y,star.r,0,Math.PI*2);ctx.fillStyle=`rgba(204,215,185,${star.a})`;ctx.fill();}}
function loop(){draw();if(motion&&visible&&!document.hidden)raf=requestAnimationFrame(loop);else raf=0;}
function syncAnimation(){cancelAnimationFrame(raf);raf=0;draw();if(motion&&visible&&!document.hidden)raf=requestAnimationFrame(loop);}
function setMotion(value){motion=value;document.documentElement.classList.toggle('motion-off',!motion);$('#effects').setAttribute('aria-pressed',String(motion));$('#effects').innerHTML=`<span class="live-dot" style="opacity:${motion?1:.25}"></span> MOTION ${motion?'ON':'OFF'}`;$('.mecha').style.transform='';syncAnimation();try{localStorage.setItem('uc-motion',motion?'on':'off');}catch{}}
$('#effects').addEventListener('click',()=>setMotion(!motion));mediaQuery.addEventListener('change',e=>{if(e.matches)setMotion(false);});
$('.hero').addEventListener('pointermove',e=>{if(!motion||e.pointerType==='touch'||innerWidth<760)return;const r=$('.hero').getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;$('.mecha').style.transform=`rotate(-6deg) rotateY(${x*9}deg) translate(${x*9}px,${y*6}px)`;});$('.hero').addEventListener('pointerleave',()=>{$('.mecha').style.transform='';});
new ResizeObserver(resize).observe(canvas);new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;syncAnimation();}).observe($('.hero'));document.addEventListener('visibilitychange',syncAnimation);
const navSections=['timeline','suits','works','glossary'];
window.addEventListener('scroll',()=>{const current=navSections.filter(id=>$('#'+id).getBoundingClientRect().top<innerHeight*.4).at(-1)||'timeline';document.querySelectorAll('nav a').forEach(a=>a.classList.toggle('active',a.hash==='#'+current));},{passive:true});
selectEra(Number(new URL(location.href).searchParams.get('era'))||79,false);renderWorks();resize();setMotion(motion);
