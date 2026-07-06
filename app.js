/* 11+ Trainer — app logic */
(function(){
"use strict";
const $ = sel => document.querySelector(sel);
const app = document.getElementById('app');

const SECTIONS = [
  {key:'eng', name:'English Comprehension', em:'📖', n:12, mins:10, cls:'eng'},
  {key:'vr',  name:'Verbal Reasoning',      em:'🔤', n:16, mins:12, cls:'vr'},
  {key:'nvr', name:'Non-Verbal Reasoning',  em:'🔷', n:18, mins:9,  cls:'nvr'},
  {key:'mat', name:'Maths',                 em:'🧮', n:19, mins:19, cls:'mat'},
];
const SEC = {}; SECTIONS.forEach(s=>SEC[s.key]=s);
const DATA = { eng: window.ENG_PAPERS, vr: window.VR_PAPERS, nvr: window.NVR_PAPERS, mat: window.MAT_PAPERS };
const LETTERS = ['A','B','C','D','E'];
const TARGET = 85;

/* ---------- storage ---------- */
const store = {
  get(k,d){ try{ const v = localStorage.getItem('ep11.'+k); return v?JSON.parse(v):d; }catch(e){ return d; } },
  set(k,v){ try{ localStorage.setItem('ep11.'+k, JSON.stringify(v)); }catch(e){} }
};
let settings = store.get('settings', {timer:true});
let history  = store.get('history', []);
let wrong    = store.get('wrong', []);   // [{sec,paper,qi}]
const saveAll = ()=>{ store.set('settings',settings); store.set('history',history); store.set('wrong',wrong); };

/* ---------- helpers ---------- */
function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function h(html){ app.innerHTML = html; window.scrollTo(0,0); }
function on(sel,ev,fn){ document.querySelectorAll(sel).forEach(el=>el.addEventListener(ev,fn)); }
function fmtTime(s){ s=Math.max(0,Math.round(s)); const m=Math.floor(s/60); return m+':'+String(s%60).padStart(2,'0'); }
function getQ(sec,paper,qi){ return DATA[sec][paper][qi]; }
function wrongKey(w){ return w.sec+'-'+w.paper+'-'+w.qi; }
function addWrong(sec,paper,qi){
  if(!wrong.some(w=>w.sec===sec&&w.paper===paper&&w.qi===qi)) wrong.push({sec,paper,qi});
}
function removeWrong(sec,paper,qi){ wrong = wrong.filter(w=>!(w.sec===sec&&w.paper===paper&&w.qi===qi)); }
function bestFor(paper, mode, sec){
  let best=null;
  history.forEach(a=>{
    if(a.paper===paper && a.mode===mode && (mode!=='section'||a.sec===sec)){
      if(best===null||a.pct>best) best=a.pct;
    }
  });
  return best;
}

/* ---------- NVR SVG renderer ---------- */
function polyPts(n, s, rotDeg){
  const pts=[]; const rot=(rotDeg-90)*Math.PI/180;
  for(let i=0;i<n;i++){ const a=rot+i*2*Math.PI/n; pts.push([s*Math.cos(a), s*Math.sin(a)]); }
  return pts.map(p=>p[0].toFixed(2)+','+p[1].toFixed(2)).join(' ');
}
function starPts(s, rotDeg){
  const pts=[]; const rot=(rotDeg-90)*Math.PI/180;
  for(let i=0;i<10;i++){ const r=(i%2===0)?s:s*0.45; const a=rot+i*Math.PI/5; pts.push([r*Math.cos(a),r*Math.sin(a)]); }
  return pts.map(p=>p[0].toFixed(2)+','+p[1].toFixed(2)).join(' ');
}
function fillOf(f){
  if(f==='b') return '#16264C';
  if(f==='g') return '#B9C2D8';
  if(f==='h') return 'url(#hatchp)';
  if(f==='n') return 'none';
  return '#FFFFFF';
}
function shapeSVG(el){
  const s = el.s||26, f = fillOf(el.f||'w'), r = el.r||0;
  const common = `fill="${f}" stroke="#16264C" stroke-width="3.4" stroke-linejoin="round"`;
  let inner='';
  switch(el.sh){
    case 'cir': inner=`<circle r="${s}" ${common}/>`; break;
    case 'dot': inner=`<circle r="${s}" fill="#16264C"/>`; break;
    case 'ring': inner=`<circle r="${s}" ${common}/><circle r="${(s*0.45).toFixed(1)}" ${common}/>`; break;
    case 'sq': inner=`<rect x="${-s}" y="${-s}" width="${2*s}" height="${2*s}" ${common}/>`; break;
    case 'rect': inner=`<rect x="${-s*1.25}" y="${-s*0.65}" width="${2.5*s}" height="${1.3*s}" ${common}/>`; break;
    case 'tri': inner=`<polygon points="${polyPts(3,s*1.12,0)}" ${common}/>`; break;
    case 'dia': inner=`<polygon points="0,${-s*1.15} ${s*0.8},0 0,${s*1.15} ${-s*0.8},0" ${common}/>`; break;
    case 'pent': inner=`<polygon points="${polyPts(5,s*1.05,0)}" ${common}/>`; break;
    case 'hex': inner=`<polygon points="${polyPts(6,s*1.05,0)}" ${common}/>`; break;
    case 'star': inner=`<polygon points="${starPts(s*1.15,0)}" ${common}/>`; break;
    case 'cross': {
      const a=s*0.38,b=s;
      inner=`<polygon points="${-a},${-b} ${a},${-b} ${a},${-a} ${b},${-a} ${b},${a} ${a},${a} ${a},${b} ${-a},${b} ${-a},${a} ${-b},${a} ${-b},${-a} ${-a},${-a}" ${common}/>`; break;
    }
    case 'arrow': {
      const L=s*1.2, w=s*0.34, hw=s*0.75, hl=s*0.62;
      inner=`<polygon points="${-L},${-w} ${L-hl},${-w} ${L-hl},${-hw} ${L},0 ${L-hl},${hw} ${L-hl},${w} ${-L},${w}" ${common}/>`; break;
    }
    case 'semi': inner=`<path d="M ${-s} 0 A ${s} ${s} 0 0 1 ${s} 0 Z" ${common}/>`; break;
    case 'trap': inner=`<polygon points="${-s*0.6},${-s*0.7} ${s*0.6},${-s*0.7} ${s*1.1},${s*0.7} ${-s*1.1},${s*0.7}" ${common}/>`; break;
    case 'flag': {
      // chiral: pole with triangle to the right
      inner=`<line x1="0" y1="${s}" x2="0" y2="${-s}" stroke="#16264C" stroke-width="3.4" stroke-linecap="round"/>`+
            `<polygon points="0,${-s} ${s*1.05},${-s*0.45} 0,${s*0.1}" ${common}/>`; break;
    }
    case 'ell': { // chiral L shape
      const a=s*0.42;
      inner=`<polygon points="${-s},${-s} ${-s+2*a},${-s} ${-s+2*a},${s-2*a} ${s},${s-2*a} ${s},${s} ${-s},${s}" ${common}/>`; break;
    }
    case 'seg': inner=`<line x1="${-s}" y1="0" x2="${s}" y2="0" stroke="#16264C" stroke-width="3.6" stroke-linecap="round"/>`; break;
  }
  let t = `translate(${el.x||0},${el.y||0})`;
  if(el.sc) t += ` scale(${el.sc})`;
  if(el.m) t += ` scale(-1,1)`;
  if(r) t += ` rotate(${r})`;
  return `<g transform="${t}">${inner}</g>`;
}
function figSVG(fig, px){
  px = px || 84;
  const defs = `<defs><pattern id="hatchp" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)"><rect width="8" height="8" fill="#fff"/><line x1="0" y1="0" x2="0" y2="8" stroke="#16264C" stroke-width="2.4"/></pattern></defs>`;
  return `<svg viewBox="-50 -50 100 100" width="${px}" height="${px}" xmlns="http://www.w3.org/2000/svg">${defs}${fig.map(shapeSVG).join('')}</svg>`;
}

/* ---------- question rendering ---------- */
function stemHTML(q){
  if(q.kind==='next'){
    return `<div class="stemrow">`+
      q.stem.map(f=>`<div class="figbox">${figSVG(f,74)}</div>`).join(`<span class="sep">→</span>`)+
      `<span class="sep">→</span><div class="figbox q" style="width:86px;height:86px;">?</div></div>`;
  }
  if(q.kind==='analogy'){
    return `<div class="stemrow">
      <div class="figbox">${figSVG(q.stem[0],80)}</div><span class="sep">is to</span>
      <div class="figbox">${figSVG(q.stem[1],80)}</div><span class="sep">as</span>
      <div class="figbox">${figSVG(q.stem[2],80)}</div><span class="sep">is to</span>
      <div class="figbox q" style="width:92px;height:92px;">?</div></div>`;
  }
  if(q.kind==='matrix'){
    let cells = q.stem.map(f=>`<div class="figbox">${figSVG(f,72)}</div>`);
    cells.push(`<div class="figbox q" style="height:84px;">?</div>`);
    return `<div style="display:grid;grid-template-columns:repeat(3,84px);gap:8px;margin:6px 0 16px;">${cells.join('')}</div>`;
  }
  if(q.kind==='code'){
    return `<div class="stemrow">`+
      q.stem.map(p=>`<div><div class="figbox">${figSVG(p.f,80)}</div><div class="codelbl">${esc(p.c)}</div></div>`).join('')+
      `<span class="sep" style="margin:0 6px;">then</span>`+
      `<div><div class="figbox">${figSVG(q.tgt,80)}</div><div class="codelbl">?</div></div></div>`;
  }
  if(q.kind==='odd'){ return ''; }
  return '';
}
function optHTML(q, oi, state){ // state: '', 'sel', 'correct', 'wrong'
  const o = q.opts[oi];
  const inner = Array.isArray(o) ? figSVG(o,84) : `<span>${o}</span>`;
  return `<button class="opt ${state}" data-oi="${oi}"><span class="letter">${LETTERS[oi]}</span>${inner}</button>`;
}
function optsWrap(q, inner){
  const fig = Array.isArray(q.opts[0]);
  return `<div class="opts ${fig?'figrow':''}">${inner}</div>`;
}
function questionBlock(sec, q, chosen, reveal){
  let html = '';
  if(sec==='nvr') html += stemHTML(q);
  html += `<div class="qtext">${q.q||''}</div>`;
  let inner='';
  for(let oi=0; oi<q.opts.length; oi++){
    let st='';
    if(reveal){
      if(oi===q.a) st='correct';
      else if(chosen===oi) st='wrong';
    } else if(chosen===oi) st='sel';
    inner += optHTML(q,oi,st);
  }
  html += optsWrap(q, inner);
  if(reveal) html += `<div class="explain">💡 ${q.ex}</div>`;
  return html;
}

/* ---------- screens ---------- */
function timerToggleCard(){
  return `<div class="card tog">
    <div><b>⏱️ Exam timer</b><div class="sub" style="margin:2px 0 0;">Times each section like the real exam</div></div>
    <label class="switch"><input type="checkbox" id="timerTog" ${settings.timer?'checked':''}><span class="slider"></span></label>
  </div>`;
}
function bindTimerToggle(){
  const t = $('#timerTog');
  if(t) t.addEventListener('change', ()=>{ settings.timer = t.checked; saveAll(); });
}

function home(){
  const nWrong = wrong.length;
  const attempts = history.length;
  h(`
    <h1>11+ Trainer</h1>
    <p class="sub">Trafford Consortium practice · Target: <b style="color:var(--gold);">${TARGET}%+</b></p>
    ${timerToggleCard()}
    <button class="btn" id="goFull"><span class="em">📝</span>Full mock exam<span class="note">All 4 sections · 65 questions · 50 minutes</span></button>
    <button class="btn" id="goSec"><span class="em">🎯</span>Practise one section<span class="note">English, Verbal, Non-Verbal or Maths</span></button>
    <button class="btn" id="goFix"><span class="em">🔧</span>Fix my mistakes<span class="note">Retry questions you got wrong</span>${nWrong?`<span class="badge">${nWrong}</span>`:''}</button>
    <button class="btn" id="goProg"><span class="em">📈</span>My progress<span class="note">Scores and history</span>${attempts?`<span class="badge gold">${attempts}</span>`:''}</button>
  `);
  bindTimerToggle();
  $('#goFull').onclick = ()=>paperPicker('full');
  $('#goSec').onclick  = sectionPicker;
  $('#goFix').onclick  = mistakes;
  $('#goProg').onclick = progress;
}

function paperPicker(mode, sec){
  const title = mode==='full' ? 'Full mock exam' : SEC[sec].name;
  let cards='';
  for(let p=0;p<6;p++){
    const best = bestFor(p, mode, sec);
    cards += `<button class="pcard" data-p="${p}">
      <div class="t">Paper ${p+1}</div>
      <div class="s">${mode==='full'?'65 questions':SEC[sec].n+' questions · '+SEC[sec].mins+' min'}</div>
      <div class="best" style="color:${best===null?'#9AA3BC':(best>=TARGET?'var(--ok)':'var(--gold)')};">${best===null?'Not tried yet':'Best: '+best+'%'}</div>
    </button>`;
  }
  h(`
    <div class="topbar"><button class="back" id="bk">←</button><div class="grow">${title}</div></div>
    ${timerToggleCard()}
    <p class="sub">Choose a paper — every paper has different questions.</p>
    <div class="grid">${cards}</div>
  `);
  bindTimerToggle();
  $('#bk').onclick = mode==='full'? home : sectionPicker;
  on('.pcard','click', e=>{
    const p = +e.currentTarget.dataset.p;
    startExam(mode, p, sec);
  });
}

function sectionPicker(){
  h(`
    <div class="topbar"><button class="back" id="bk">←</button><div class="grow">Practise one section</div></div>
    ${SECTIONS.map(s=>`<button class="btn" data-k="${s.key}"><span class="em">${s.em}</span>${s.name}
      <span class="note">${s.n} questions · ${s.mins} minutes</span>
      <span class="chip b-${s.cls}" style="position:absolute;right:16px;top:50%;transform:translateY(-50%);">GO</span></button>`).join('')}
  `);
  $('#bk').onclick = home;
  on('.btn','click', e=>paperPicker('section', e.currentTarget.dataset.k));
}

/* ---------- exam runner ---------- */
let EX = null;      // exam state
let tickId = null;

function startExam(mode, paper, sec){
  const secs = mode==='full' ? SECTIONS.map(s=>s.key) : [sec];
  EX = { mode, paper, secs, si:0, answers:{}, timed: settings.timer };
  secs.forEach(k=>{ EX.answers[k] = new Array(DATA[k][paper].length).fill(null); });
  sectionIntro();
}
function stopTick(){ if(tickId){ clearInterval(tickId); tickId=null; } }

function sectionIntro(){
  stopTick();
  const k = EX.secs[EX.si], s = SEC[k];
  h(`
    <div class="topbar"><button class="back" id="bk">✕</button>
      <div class="grow">Paper ${EX.paper+1} · ${EX.mode==='full'?('Section '+(EX.si+1)+' of '+EX.secs.length):'Practice'}</div></div>
    <div class="card center">
      <div class="introEm">${s.em}</div>
      <h2><span class="c-${s.cls}">${s.name}</span></h2>
      <ul class="introList">
        <li>❓ <b>${s.n}</b> questions</li>
        <li>⏱️ <b>${s.mins}</b> minutes ${EX.timed?'(timed)':'(timer off)'}</li>
        <li>✅ Choose one answer for each question</li>
      </ul>
      <button class="primary" id="startSec">Start ${EX.mode==='full'&&EX.si>0?'section':''} ▶</button>
    </div>
    ${EX.timed?'<p class="sub center">The section will finish automatically when time runs out — just like the real exam.</p>':''}
  `);
  $('#bk').onclick = quitConfirm;
  $('#startSec').onclick = ()=>{
    EX.qi = 0;
    if(EX.timed) EX.deadline = Date.now() + s.mins*60*1000;
    renderQ();
    if(EX.timed){
      tickId = setInterval(()=>{
        const left = (EX.deadline-Date.now())/1000;
        const el = $('#tmr');
        if(el){ el.textContent = fmtTime(left); el.classList.toggle('warn', left<=60); }
        if(left<=0){ stopTick(); alert("⏱️ Time's up for this section!"); finishSection(); }
      }, 250);
    }
  };
}
function quitConfirm(){
  if(confirm('Leave this paper? Your answers so far will not be saved.')){ stopTick(); EX=null; home(); }
}

function renderQ(){
  const k = EX.secs[EX.si], s = SEC[k];
  const qs = DATA[k][EX.paper];
  const q = qs[EX.qi];
  const chosen = EX.answers[k][EX.qi];
  const answered = EX.answers[k].filter(a=>a!==null).length;

  let passage = '';
  if(k==='eng'){
    const pz = ENG_PASSAGES[EX.paper];
    passage = `<div class="passage"><div class="pin"><span>📖 ${esc(pz.title)} — read carefully, then answer</span></div>${pz.body}</div>`;
  }
  const dots = qs.map((_,i)=>`<button class="dot ${EX.answers[k][i]!==null?'done':''} ${i===EX.qi?'cur':''}" data-i="${i}">${i+1}</button>`).join('');

  h(`
    <div class="topbar">
      <button class="back" id="bk">✕</button>
      <div class="grow"><span class="chip b-${s.cls}">${s.name}</span></div>
      ${EX.timed?`<div class="pill" id="tmr">${fmtTime((EX.deadline-Date.now())/1000)}</div>`:`<div class="pill">☀️ No timer</div>`}
    </div>
    ${passage}
    <div class="card">
      <div class="qhead"><span class="qnum">Question ${EX.qi+1} of ${qs.length}</span></div>
      ${questionBlock(k,q,chosen,false)}
    </div>
    <div class="navrow">
      <button class="secondary" id="prev" ${EX.qi===0?'disabled style="opacity:.4;"':''}>← Back</button>
      ${EX.qi<qs.length-1
        ? `<button class="primary" id="next" style="flex:1.6;">Next →</button>`
        : `<button class="primary" id="fin" style="flex:1.6;background:var(--ok);">Finish section ✓</button>`}
    </div>
    <div class="dots">${dots}</div>
    <p class="sub center">${answered}/${qs.length} answered</p>
  `);
  $('#bk').onclick = quitConfirm;
  on('.opt','click', e=>{
    EX.answers[k][EX.qi] = +e.currentTarget.dataset.oi;
    renderQ();
  });
  on('.dot','click', e=>{ EX.qi = +e.currentTarget.dataset.i; renderQ(); });
  if($('#prev')) $('#prev').onclick = ()=>{ if(EX.qi>0){EX.qi--; renderQ();} };
  if($('#next')) $('#next').onclick = ()=>{ EX.qi++; renderQ(); };
  if($('#fin')) $('#fin').onclick = ()=>{
    const blank = qs.length - EX.answers[k].filter(a=>a!==null).length;
    if(blank>0 && !confirm(blank+' question'+(blank>1?'s':'')+' unanswered. Finish anyway?')) return;
    stopTick(); finishSection();
  };
}

function finishSection(){
  const k = EX.secs[EX.si];
  if(EX.si < EX.secs.length-1){ EX.si++; sectionIntro(); }
  else results();
}

function results(){
  stopTick();
  // score
  const secScores = {};
  let tot=0, totN=0;
  EX.secs.forEach(k=>{
    const qs = DATA[k][EX.paper];
    let c=0;
    qs.forEach((q,i)=>{
      const ch = EX.answers[k][i];
      if(ch===q.a){ c++; removeWrong(k,EX.paper,i); }
      else addWrong(k,EX.paper,i);
    });
    secScores[k]={c,n:qs.length};
    tot+=c; totN+=qs.length;
  });
  const pct = Math.round(100*tot/totN);
  const attempt = { date: Date.now(), mode: EX.mode, paper: EX.paper, sec: EX.mode==='section'?EX.secs[0]:null,
    pct, tot, totN, secScores };
  history.push(attempt); saveAll();

  const hit = pct>=TARGET;
  const R=52, C=2*Math.PI*R;
  const ringCol = hit?'var(--ok)':(pct>=70?'var(--gold)':'var(--bad)');
  const ring = `<svg width="150" height="150" viewBox="0 0 130 130">
      <circle cx="65" cy="65" r="${R}" fill="none" stroke="#E7EBF5" stroke-width="12"/>
      <circle cx="65" cy="65" r="${R}" fill="none" stroke="${ringCol}" stroke-width="12" stroke-linecap="round"
        stroke-dasharray="${(C*pct/100).toFixed(1)} ${C.toFixed(1)}" transform="rotate(-90 65 65)"/>
      <text x="65" y="63" text-anchor="middle" font-size="27" font-weight="800" fill="#16264C">${pct}%</text>
      <text x="65" y="84" text-anchor="middle" font-size="11" fill="#3A4A73">${tot}/${totN}</text>
    </svg>`;
  const rows = EX.secs.map(k=>{
    const s=SEC[k], sc=secScores[k];
    const p = Math.round(100*sc.c/sc.n);
    return `<div class="secrow"><span><span class="chip b-${s.cls}">${s.em}</span> &nbsp;${s.name}</span>
      <span class="sc" style="color:${p>=TARGET?'var(--ok)':(p>=70?'var(--gold)':'var(--bad)')};">${sc.c}/${sc.n} · ${p}%</span></div>`;
  }).join('');

  const msg = hit ? '🌟 Brilliant — that beats the 85% target!'
    : pct>=70 ? '👍 Good work — a little more practice and the target is yours.'
    : '💪 Keep going — check the explanations below and try again.';

  h(`
    <div class="topbar"><button class="back" id="bk">🏠</button><div class="grow">Results · Paper ${EX.paper+1}</div></div>
    <div class="card center">
      <div class="ring">${ring}</div>
      <div class="target">Target: ${TARGET}%</div>
      <p style="font-size:16.5px;font-weight:600;margin:10px 4px 4px;">${msg}</p>
    </div>
    <div class="card">${rows}</div>
    <button class="primary" id="seeAns" style="background:var(--ink);">See answers &amp; explanations</button>
    <div id="ansArea"></div>
    <button class="ghost" id="again">Try another paper</button>
  `);
  const exSnapshot = EX;
  $('#bk').onclick = ()=>{ EX=null; home(); };
  $('#again').onclick = ()=>{ const m=exSnapshot.mode, s=exSnapshot.secs[0]; EX=null; paperPicker(m, m==='section'?s:undefined); };
  $('#seeAns').onclick = ()=>{
    let html='';
    exSnapshot.secs.forEach(k=>{
      const s=SEC[k];
      html+=`<div class="card"><h2 class="c-${s.cls}">${s.em} ${s.name}</h2>`;
      DATA[k][exSnapshot.paper].forEach((q,i)=>{
        const ch = exSnapshot.answers[k][i];
        const ok = ch===q.a;
        html+=`<div class="rvq"><div class="qnum">Q${i+1} — <span class="${ok?'tag-ok':'tag-bad'}">${ok?'Correct ✓':(ch===null?'Not answered':'Wrong ✗')}</span></div>
          ${questionBlock(k,q,ch,true)}</div>`;
      });
      html+='</div>';
    });
    $('#ansArea').innerHTML = html;
    $('#seeAns').classList.add('hide');
  };
  EX = null;
}

/* ---------- mistakes ---------- */
function mistakes(){
  if(wrong.length===0){
    h(`<div class="topbar"><button class="back" id="bk">←</button><div class="grow">Fix my mistakes</div></div>
       <div class="card empty">🎉 No mistakes waiting!<br>Do a paper and any wrong answers will appear here to retry.</div>`);
    $('#bk').onclick = home; return;
  }
  const bySec = {};
  wrong.forEach(w=>{ (bySec[w.sec]=bySec[w.sec]||[]).push(w); });
  let html = `<div class="topbar"><button class="back" id="bk">←</button><div class="grow">Fix my mistakes</div></div>
    <p class="sub">Answer a question correctly and it disappears from this list. ${wrong.length} to fix.</p>`;
  SECTIONS.forEach(s=>{
    const list = bySec[s.key]; if(!list) return;
    html += `<div class="card"><h2 class="c-${s.cls}">${s.em} ${s.name} <span style="font-size:14px;color:var(--ink2);">(${list.length})</span></h2>`;
    list.forEach(w=>{
      html += `<button class="opt" data-k="${wrongKey(w)}"><span class="letter">↻</span><span>Paper ${w.paper+1} · Question ${w.qi+1}</span></button>`;
    });
    html += `</div>`;
  });
  h(html);
  $('#bk').onclick = home;
  on('.opt','click', e=>{
    const [sec,paper,qi] = e.currentTarget.dataset.k.split('-');
    retry(sec, +paper, +qi);
  });
}
function retry(sec, paper, qi){
  const q = getQ(sec,paper,qi), s = SEC[sec];
  let chosen = null, revealed = false;
  function draw(){
    let passage='';
    if(sec==='eng'){
      const pz = ENG_PASSAGES[paper];
      passage = `<div class="passage"><div class="pin"><span>📖 ${esc(pz.title)}</span></div>${pz.body}</div>`;
    }
    h(`
      <div class="topbar"><button class="back" id="bk">←</button>
        <div class="grow"><span class="chip b-${s.cls}">${s.name}</span> &nbsp;Paper ${paper+1} · Q${qi+1}</div></div>
      ${passage}
      <div class="card">${questionBlock(sec,q,chosen,revealed)}</div>
      ${revealed
        ? (chosen===q.a
            ? `<div class="card center" style="color:var(--ok);font-weight:800;">✓ Fixed! Removed from your list.</div>`
            : `<div class="card center" style="color:var(--bad);font-weight:800;">Not quite — read the explanation, it will come back later.</div>`)
        : ''}
      ${revealed?'<button class="primary" id="bkList">Back to my mistakes</button>':''}
    `);
    $('#bk').onclick = mistakes;
    if(!revealed){
      on('.opt','click', e=>{
        chosen = +e.currentTarget.dataset.oi;
        revealed = true;
        if(chosen===q.a) removeWrong(sec,paper,qi);
        saveAll();
        draw();
      });
    } else $('#bkList').onclick = mistakes;
  }
  draw();
}

/* ---------- progress ---------- */
function progress(){
  if(history.length===0){
    h(`<div class="topbar"><button class="back" id="bk">←</button><div class="grow">My progress</div></div>
       <div class="card empty">No papers done yet.<br>Your scores will appear here after your first paper.</div>`);
    $('#bk').onclick = home; return;
  }
  const recent = history.slice(-12);
  const bw=46, gap=12, W=Math.max(320, recent.length*(bw+gap)+30), H=190, base=150;
  let bars='';
  recent.forEach((a,i)=>{
    const x=20+i*(bw+gap), bh=Math.max(3, a.pct/100*120), col = a.pct>=TARGET?'var(--ok)':(a.pct>=70?'var(--gold)':'#C7CEDF');
    bars+=`<rect x="${x}" y="${base-bh}" width="${bw}" height="${bh}" rx="8" fill="${col}"/>
      <text x="${x+bw/2}" y="${base-bh-7}" text-anchor="middle" font-size="12.5" font-weight="800" fill="#16264C">${a.pct}</text>
      <text x="${x+bw/2}" y="${base+16}" text-anchor="middle" font-size="10.5" fill="#3A4A73">P${a.paper+1}${a.mode==='section'?'·'+SEC[a.sec].em:''}</text>`;
  });
  const ty = base-TARGET/100*120;
  const chart = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
    <line x1="12" y1="${ty}" x2="${W-8}" y2="${ty}" stroke="var(--gold)" stroke-width="2" stroke-dasharray="6 5"/>
    <text x="${W-10}" y="${ty-6}" text-anchor="end" font-size="11" font-weight="700" fill="var(--gold)">target ${TARGET}%</text>
    ${bars}</svg>`;

  // per-section averages (full + section attempts)
  const agg={}; SECTIONS.forEach(s=>agg[s.key]={c:0,n:0});
  history.forEach(a=>{ Object.keys(a.secScores).forEach(k=>{ agg[k].c+=a.secScores[k].c; agg[k].n+=a.secScores[k].n; }); });
  const chips = SECTIONS.filter(s=>agg[s.key].n>0).map(s=>{
    const p=Math.round(100*agg[s.key].c/agg[s.key].n);
    return `<span class="chip b-${s.cls}">${s.em} ${p}%</span>`;
  }).join('');

  const best = Math.max(...history.map(a=>a.pct));
  const rows = history.slice().reverse().slice(0,20).map(a=>{
    const d=new Date(a.date);
    const what = a.mode==='full'?'Full mock':SEC[a.sec].name;
    return `<div class="secrow"><span>${d.getDate()}/${d.getMonth()+1} · Paper ${a.paper+1} · ${what}</span>
      <span class="sc" style="color:${a.pct>=TARGET?'var(--ok)':(a.pct>=70?'var(--gold)':'var(--bad)')};">${a.pct}%</span></div>`;
  }).join('');

  h(`
    <div class="topbar"><button class="back" id="bk">←</button><div class="grow">My progress</div></div>
    <div class="card"><b>Recent scores</b><div class="chart">${chart}</div>
      <div class="avgchips">${chips}</div>
      <div class="sub" style="margin-top:10px;">Best so far: <b>${best}%</b> · Section chips show your average per subject.</div></div>
    <div class="card"><b>History</b>${rows}</div>
    <button class="ghost" id="reset" style="color:var(--bad);">Reset all progress</button>
  `);
  $('#bk').onclick = home;
  $('#reset').onclick = ()=>{
    if(confirm('Delete all scores and mistake history? This cannot be undone.')){
      history=[]; wrong=[]; saveAll(); progress();
    }
  };
}

home();
})();
