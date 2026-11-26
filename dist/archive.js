'use strict';
const suitState={query:'',work:'all',kind:'all',limit:12};
function sourceLink(key){const s=archiveSources[key]||archiveSources.history;return `<p class="source-line">참고 자료: <a href="${s.url}" target="_blank" rel="noopener noreferrer">${s.label}</a></p>`;}
function unitLink(m){return `<button class="unit-link" data-unit="${m.id}"><span>${m.model}</span><strong>${m.name}</strong><small>${m.pilot}</small></button>`;}
function renderEraDetails(){
 const era=eras.find(e=>e.year===state.era),d=eraDetails[era.year];
 const units=mobileSuits.filter(m=>m.works.some(w=>d.works.includes(w)));
 const index=eras.indexOf(era),next=eras[index+1];
 $('#era-depth').innerHTML=`<div class="depth-heading"><span class="eyebrow">READ THE HISTORY</span><span>${d.period}</span></div><div class="history-layout"><article class="history-narrative"><h3>전쟁의 배경과 쟁점</h3>${d.background.map(p=>`<p>${p}</p>`).join('')}<div class="faction-reading"><h3>누가, 무엇을 위해 싸웠나</h3>${d.groups.map(([name,text])=>`<article><h4>${name}</h4><p>${text}</p></article>`).join('')}</div></article><article class="event-list"><h3>주요 사건의 흐름</h3><ol>${d.events.map(([time,title,body])=>`<li><span class="event-time">${time}</span><h4>${title}</h4><p>${body}</p></li>`).join('')}</ol></article></div><details class="era-outcome"><summary>결과와 다음 시대의 연결 <span>결말 내용 포함</span></summary><div><h3>이 사건이 남긴 것</h3><p>${d.result}</p><h3>다음 이야기를 읽는 열쇠</h3><p>${d.connection}</p>${next?`<button class="outline-button" data-era-next="${next.year}">U.C. ${pad(next.year)} ${next.title} 읽기</button>`:''}</div></details><div class="era-machines"><div class="subsection-heading"><h3>이 시대의 주요 기체 <span>${units.length}</span></h3><button class="text-button" data-era-suits="${era.year}">도감에서 보기</button></div><div class="unit-links">${units.map(unitLink).join('')}</div></div><div class="era-work-links"><h3>함께 읽는 작품</h3>${d.works.map(id=>`<button class="text-button" data-work="${id}">${works.find(w=>w.id===id).title}</button>`).join('')}</div>${sourceLink(d.source)}`;
}
function suitKind(m){return (/건담|백식/.test(m.name)||m.id==='banshee')?'gundam':m.type.includes('양산')?'production':'other';}
function renderSuits(){
 const normalize=s=>s.toLocaleLowerCase().replace(/\s+/g,'');
 const q=normalize(suitState.query);
 const aliases={nu:'뉴 건담 nu gundam',xi:'크시 쿠스이 xi gundam',zeta:'제타 zeta',zz:'더블 제타 double zeta',banshee:'유니콘 건담 2호기 밴시 노른',phenex:'페넥스 피닉스 phenex',hyaku:'백식 hyaku shiki'};
 const list=mobileSuits.filter(m=>(suitState.work==='all'||m.works.includes(suitState.work)||(suitState.work.startsWith('era-')&&m.works.some(w=>eraDetails[Number(suitState.work.slice(4))].works.includes(w))))&&(suitState.kind==='all'||suitKind(m)===suitState.kind)&&normalize([m.name,m.model,m.pilot,m.faction,m.type,aliases[m.id]||'',...m.works.map(id=>works.find(w=>w.id===id).title)].join(' ')).includes(q));
 const visible=list.slice(0,suitState.limit);
 $('#suit-count').textContent=`${list.length}개 기체 중 ${visible.length}개 표시`;
 $('#suit-grid').innerHTML=visible.length?visible.map(m=>`<button class="suit-card" data-unit="${m.id}" aria-label="${m.name} 기체 상세 정보"><div class="suit-card-top"><span class="suit-code">${m.model}</span><span class="suit-type">${m.type}</span></div><h3>${m.name}</h3><p class="suit-faction">${m.faction}</p><p class="suit-summary">${m.description}</p><div class="suit-pilot"><span>주요 탑승자</span>${m.pilot}</div><div class="suit-works">${m.works.map(id=>works.find(w=>w.id===id).title.replace('기동전사 ','')).join(' · ')}</div></button>`).join(''):'<div class="empty"><p>검색 조건에 맞는 기체가 없습니다.</p><button data-suit-reset>필터 초기화</button></div>';
 $('#suit-more').hidden=visible.length===list.length;
 $('#suit-more').textContent=`기체 더 보기 (${list.length-visible.length}개 남음)`;
}
function resetSuits(){Object.assign(suitState,{query:'',work:'all',kind:'all',limit:12});$('#suit-search').value='';$('#suit-work').value='all';$('#suit-kind').value='all';renderSuits();}
function showUnit(id){
 const m=mobileSuits.find(m=>m.id===id);if(!m)return;
 showDialog(`<p class="eyebrow">MOBILE SUIT DOSSIER</p><div class="unit-model">${m.model}</div><h2 id="dialog-title">${m.name}</h2><div class="factions"><span>${m.type}</span><span>${m.faction}</span></div><p>${m.description}</p><div class="dialog-meta"><div><span>주요 탑승자</span>${m.pilot}</div><div><span>운용 세력</span>${m.faction}</div></div><h3 class="reading-title">주요 무장과 장비</h3><p>${m.weapons}</p><h3 class="reading-title">알아두면 좋은 차이</h3><p>${m.point}</p><h3 class="reading-title">등장 작품</h3><div class="unit-work-buttons">${m.works.map(id=>`<button class="outline-button" data-work="${id}">${works.find(w=>w.id===id).title}</button>`).join('')}</div><p class="scope-note">이 도감에 수록된 작품 기준입니다. 다른 작품의 카메오와 모든 장비 변형을 포함한 전체 출연 목록은 아닙니다.</p>${m.works.map(sourceLink).join('')}`);
}
$('#suit-work').insertAdjacentHTML('beforeend',`<optgroup label="시대별">${eras.map(e=>`<option value="era-${e.year}">U.C. ${pad(e.year)} · ${e.label}</option>`).join('')}</optgroup><optgroup label="작품별">${works.map(w=>`<option value="${w.id}">${w.title}</option>`).join('')}</optgroup>`);
$('#unit-total').textContent=`${mobileSuits.length} MOBILE SUITS & MACHINES`;
$('#suit-search').addEventListener('input',e=>{suitState.query=e.target.value;suitState.limit=12;renderSuits();});
$('#suit-work').addEventListener('change',e=>{suitState.work=e.target.value;suitState.limit=12;renderSuits();});
$('#suit-kind').addEventListener('change',e=>{suitState.kind=e.target.value;suitState.limit=12;renderSuits();});
$('#suit-reset').addEventListener('click',resetSuits);
$('#suit-more').addEventListener('click',()=>{const oldCount=$$('#suit-grid .suit-card').length;suitState.limit+=12;renderSuits();$$('#suit-grid .suit-card')[oldCount]?.focus({preventScroll:true});});
function $$(s){return [...document.querySelectorAll(s)];}
document.addEventListener('click',e=>{
 const unit=e.target.closest('[data-unit]');if(unit)showUnit(unit.dataset.unit);
 if(e.target.closest('[data-dialog-back]')){const prev=dialogHistory.pop();if(prev){$('#dialog-content').innerHTML=prev.html;dialog.scrollTop=prev.scroll;($('.dialog-back')||$('.close-dialog')).focus({preventScroll:true});}}
 const next=e.target.closest('[data-era-next]');if(next){selectEra(Number(next.dataset.eraNext));$('#timeline').scrollIntoView({behavior:motion?'smooth':'instant'});$(`[data-year="${state.era}"]`).focus({preventScroll:true});}
 const era=e.target.closest('[data-era-suits]');if(era){resetSuits();suitState.work=`era-${era.dataset.eraSuits}`;$('#suit-work').value=suitState.work;renderSuits();$('#suits').scrollIntoView({behavior:motion?'smooth':'instant'});$('#suit-search').focus({preventScroll:true});}
 if(e.target.closest('[data-suit-reset]'))resetSuits();
});
$('#glossary-grid').innerHTML=glossary.map(([term,body])=>`<details class="glossary-entry"><summary>${term}</summary><p>${body}</p></details>`).join('');
renderEraDetails();renderSuits();
