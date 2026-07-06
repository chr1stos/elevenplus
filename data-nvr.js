/* Non-Verbal Reasoning — 6 papers, 18 questions each.
   Questions are built by small generator functions so that answers and
   explanations are correct by construction. */
window.NVR_PAPERS = [];
(function(){
"use strict";
const FN = {w:'white', b:'black', g:'grey', h:'striped'};
const SN = {cir:'circle', sq:'square', tri:'triangle', dia:'diamond', pent:'pentagon', hex:'hexagon',
  star:'star', arrow:'arrow', semi:'semicircle', cross:'cross', flag:'flag', ell:'L-shape',
  trap:'trapezium', rect:'rectangle', dot:'dot', ring:'ring'};
const norm = r => ((r%360)+360)%360;
function E(sh,f,r,s,x,y,m){
  const e = {sh, f:f||'w', r:norm(r||0), s:(s===undefined?26:s), x:x||0, y:y||0};
  if(m) e.m = 1;
  return e;
}
const DOTPOS = [[0,0],[-15,-15],[15,15],[15,-15],[-15,15],[0,-18],[0,18],[-18,0],[18,0]];
function dotsFig(outer, idxs){
  const f = [E(outer,'w',0,34)];
  idxs.forEach(i=>f.push(E('dot','b',0,5,DOTPOS[i][0],DOTPOS[i][1])));
  return f;
}
function nDots(outer, n){ return dotsFig(outer, Array.from({length:n},(_,i)=>i)); }
function place(correct, ds, aIdx){
  const opts = ds.slice(0,4); opts.splice(aIdx,0,correct);
  return {opts, a:aIdx};
}

/* ---- series generators ---- */
function rotSeries(sh, start, step, fill, altFill, altSh, aIdx){
  const stem = [0,1,2,3].map(i=>[E(sh,fill,start+i*step)]);
  const ans = [E(sh,fill,start+4*step)];
  const p = place(ans, [
    [E(sh,fill,start+3*step)],
    [E(sh,fill,start+5*step)],
    [E(sh,altFill,start+4*step)],
    [E(altSh,fill,start+4*step)],
  ], aIdx);
  return {kind:'next', stem, opts:p.opts, a:p.a,
    ex:`The ${SN[sh]} turns ${step}° clockwise each time, so the next one is turned ${step}° further and stays ${FN[fill]}.`};
}
function shadeCycle(sh, fills, altSh, aIdx){
  const seq = [fills[0],fills[1],fills[2],fills[0]];
  const stem = seq.map(f=>[E(sh,f)]);
  const ans = [E(sh,fills[1])];
  const p = place(ans, [
    [E(sh,fills[0])],
    [E(sh,fills[2])],
    [E(altSh,fills[1])],
    [E(sh,fills[1],0,16)],
  ], aIdx);
  return {kind:'next', stem, opts:p.opts, a:p.a,
    ex:`The shading repeats in the cycle ${FN[fills[0]]} → ${FN[fills[1]]} → ${FN[fills[2]]}. After ${FN[fills[0]]} comes ${FN[fills[1]]} again, with the shape staying the same size.`};
}
function countSeries(outer, start, step, altOuter, aIdx){
  const stem = [0,1,2,3].map(i=>nDots(outer,start+i*step));
  const n = start+4*step;
  const cand = [n-step, n+step, n+2*step, n-2*step, n+1, n-1]
    .filter((v,i,arr)=>v>=1 && v<=9 && v!==n && arr.indexOf(v)===i);
  const ds = cand.slice(0,3).map(c=>nDots(outer,c));
  ds.push(nDots(altOuter, n));
  const p = place(nDots(outer,n), ds, aIdx);
  return {kind:'next', stem, opts:p.opts, a:p.a,
    ex:`The number of dots changes by ${step>0?'+':''}${step} each time: ${[0,1,2,3].map(i=>start+i*step).join(', ')}, so the next figure has ${n} dots inside the same ${SN[outer]}.`};
}
function sizeAlt(sh, fill, altFill, altSh, aIdx){
  const stem = [[E(sh,fill,0,30)],[E(sh,fill,0,15)],[E(sh,fill,0,30)],[E(sh,fill,0,15)]];
  const ans = [E(sh,fill,0,30)];
  const p = place(ans, [
    [E(sh,fill,0,15)],
    [E(sh,fill,0,22)],
    [E(sh,altFill,0,30)],
    [E(altSh,fill,0,30)],
  ], aIdx);
  return {kind:'next', stem, opts:p.opts, a:p.a,
    ex:`The ${SN[sh]} alternates big, small, big, small — so the next one is big again, with the same ${FN[fill]} shading.`};
}
function twoStep(sh, step, aIdx){
  const stem = [0,1,2,3].map(i=>[E(sh, i%2===0?'w':'b', i*step)]);
  const ans = [E(sh,'w',4*step)];
  const p = place(ans, [
    [E(sh,'b',4*step)],
    [E(sh,'w',3*step)],
    [E(sh,'g',4*step)],
    [E(sh,'b',3*step)],
  ], aIdx);
  return {kind:'next', stem, opts:p.opts, a:p.a,
    ex:`Two things change together: the ${SN[sh]} turns ${step}° each time AND the shading alternates white, black, white, black. The next figure is turned ${step}° further and is white.`};
}

/* ---- odd-one-out generators ---- */
function oddMirror(sh, rots, mrot, aIdx){
  const figs = rots.map(r=>[E(sh,'w',r)]);
  figs.splice(aIdx,0,[E(sh,'w',mrot,26,0,0,true)]);
  return {kind:'odd', q:"Which figure is the odd one out?", stem:[], opts:figs, a:aIdx,
    ex:`Four of the figures are exactly the same ${SN[sh]} simply turned round. The odd one out is a MIRROR IMAGE — no amount of turning can make it match the others.`};
}
function oddSwap(outer, inner, rots, aIdx){
  const mk = (fo,fi,r)=>[E(outer,fo,r,30),E(inner,fi,r,12)];
  const figs = rots.map(r=>mk('w','b',r));
  figs.splice(aIdx,0,mk('b','w',15));
  return {kind:'odd', q:"Which figure is the odd one out?", stem:[], opts:figs, a:aIdx,
    ex:`In four figures the outer ${SN[outer]} is white and the inner ${SN[inner]} is black. In the odd one out the shading is swapped round.`};
}
function oddCount(outer, n, sets, oddSet, aIdx){
  const figs = sets.map(s=>dotsFig(outer,s));
  figs.splice(aIdx,0,dotsFig(outer,oddSet));
  return {kind:'odd', q:"Which figure is the odd one out?", stem:[], opts:figs, a:aIdx,
    ex:`Count the dots: four figures contain ${n} dots, but the odd one out contains ${oddSet.length}.`};
}
function oddSides(quads, oddShape, aIdx){
  const figs = quads.map(q=>[E(q[0],'w',q[1])]);
  figs.splice(aIdx,0,[E(oddShape,'w',10)]);
  return {kind:'odd', q:"Which figure is the odd one out?", stem:[], opts:figs, a:aIdx,
    ex:`Count the sides: four of the shapes have exactly 4 sides, but the ${SN[oddShape]} does not.`};
}

/* ---- analogy generators ---- */
function anaSize(shA, shC, fill, altFill, aIdx){
  const stem = [[E(shA,fill,0,15)],[E(shA,fill,0,31)],[E(shC,fill,0,15)]];
  const ans = [E(shC,fill,0,31)];
  const p = place(ans, [
    [E(shC,fill,0,15)],
    [E(shC,fill,0,23)],
    [E(shC,altFill,0,31)],
    [E(shA,fill,0,31)],
  ], aIdx);
  return {kind:'analogy', stem, opts:p.opts, a:p.a,
    ex:`The small ${SN[shA]} becomes a BIG ${SN[shA]} — nothing else changes. So the small ${SN[shC]} must become a big ${SN[shC]}.`};
}
function anaFill(shA, shC, f1, f2, f3, altSh, aIdx){
  const stem = [[E(shA,f1)],[E(shA,f2)],[E(shC,f1)]];
  const ans = [E(shC,f2)];
  const p = place(ans, [
    [E(shC,f1)],
    [E(shC,f3)],
    [E(altSh,f2)],
    [E(shC,f2,0,15)],
  ], aIdx);
  return {kind:'analogy', stem, opts:p.opts, a:p.a,
    ex:`The ${SN[shA]} changes from ${FN[f1]} to ${FN[f2]} but keeps its shape and size. So the ${FN[f1]} ${SN[shC]} becomes a ${FN[f2]} ${SN[shC]}.`};
}
function anaRot(shA, shC, rot, fill, altFill, aIdx){
  const stem = [[E(shA,fill,0)],[E(shA,fill,rot)],[E(shC,fill,0)]];
  const ans = [E(shC,fill,rot)];
  const rcand = [0, -rot, 2*rot, 90, 270, rot+90]
    .map(norm)
    .filter((v,i,arr)=>v!==norm(rot) && arr.indexOf(v)===i)
    .slice(0,3);
  const ds = rcand.map(r=>[E(shC,fill,r)]);
  ds.push([E(shC,altFill,rot)]);
  const p = place(ans, ds, aIdx);
  return {kind:'analogy', stem, opts:p.opts, a:p.a,
    ex:`The ${SN[shA]} is turned ${rot}° clockwise. Apply the same turn to the ${SN[shC]}.`};
}
function anaSwapIn(x, y, pp, qq, aIdx){
  const mk=(o,i)=>[E(o,'w',0,30),E(i,'b',0,12)];
  const stem=[mk(x,y),mk(y,x),mk(pp,qq)];
  const ans=mk(qq,pp);
  const p = place(ans, [
    mk(pp,qq),
    mk(qq,qq),
    mk(pp,pp),
    mk(x,y),
  ], aIdx);
  return {kind:'analogy', stem, opts:p.opts, a:p.a,
    ex:`The two shapes swap places: the outer shape moves inside and the inner shape moves outside. So the ${SN[qq]} goes on the outside with the ${SN[pp]} inside it.`};
}
function anaDouble(shA, shC, fill, aIdx){
  const one = s=>[E(s,fill,0,24)];
  const two = s=>[E(s,fill,0,15,-17,0),E(s,fill,0,15,17,0)];
  const three = s=>[E(s,fill,0,11,-24,0),E(s,fill,0,11,0,0),E(s,fill,0,11,24,0)];
  const stem=[one(shA),two(shA),one(shC)];
  const ans=two(shC);
  const altF = fill==='b' ? 'g' : 'b';
  const p = place(ans, [
    one(shC),
    three(shC),
    two(shA),
    [E(shC,altF,0,15,-17,0),E(shC,altF,0,15,17,0)],
  ], aIdx);
  return {kind:'analogy', stem, opts:p.opts, a:p.a,
    ex:`One ${SN[shA]} becomes TWO smaller ${SN[shA]}s side by side. So one ${SN[shC]} becomes two ${SN[shC]}s, keeping the ${FN[fill]} shading.`};
}

/* ---- matrix generators ---- */
function matShapeFill(rows, fills, aIdx){
  const stem=[];
  for(let i=0;i<3;i++) for(let j=0;j<3;j++){
    if(i===2&&j===2) continue;
    stem.push([E(rows[i],fills[j],0,20)]);
  }
  const ans=[E(rows[2],fills[2],0,20)];
  const p = place(ans, [
    [E(rows[2],fills[0],0,20)],
    [E(rows[2],fills[1],0,20)],
    [E(rows[0],fills[2],0,20)],
    [E(rows[1],fills[2],0,20)],
  ], aIdx);
  return {kind:'matrix', q:"Which figure completes the grid?", stem, opts:p.opts, a:p.a,
    ex:`Each ROW uses one shape and each COLUMN uses one shading. The missing square is in the ${SN[rows[2]]} row and the ${FN[fills[2]]} column, so it must be a ${FN[fills[2]]} ${SN[rows[2]]}.`};
}
function matRotate(shapes, rots, fill, altFill, aIdx){
  const stem=[];
  for(let i=0;i<3;i++) for(let j=0;j<3;j++){
    if(i===2&&j===2) continue;
    stem.push([E(shapes[i],fill,rots[j],20)]);
  }
  const ans=[E(shapes[2],fill,rots[2],20)];
  const p = place(ans, [
    [E(shapes[2],fill,rots[0],20)],
    [E(shapes[2],fill,rots[1],20)],
    [E(shapes[0],fill,rots[2],20)],
    [E(shapes[2],altFill,rots[2],20)],
  ], aIdx);
  return {kind:'matrix', q:"Which figure completes the grid?", stem, opts:p.opts, a:p.a,
    ex:`Each row uses one shape, and moving across the columns the shape turns further (${rots.join('°, ')}°). The missing square is the ${SN[shapes[2]]} turned ${rots[2]}°.`};
}

/* ---- code generators ---- */
function codeShapeFill(s1,s2,f1,f2,L1,L2,M1,M2,aIdx){
  const stem=[
    {f:[E(s1,f1)], c:L1+M1},
    {f:[E(s2,f1)], c:L2+M1},
    {f:[E(s1,f2)], c:L1+M2},
  ];
  const tgt=[E(s2,f2)];
  const opts=[L1+M2, L2+M1, L1+M1]; opts.splice(aIdx,0,L2+M2);
  return {kind:'code', q:"Work out the code for the last figure.", stem, tgt, opts, a:aIdx,
    ex:`The FIRST letter stands for the shape (${L1} = ${SN[s1]}, ${L2} = ${SN[s2]}) and the SECOND letter stands for the shading (${M1} = ${FN[f1]}, ${M2} = ${FN[f2]}). A ${FN[f2]} ${SN[s2]} is therefore ${L2}${M2}.`};
}
function codeShapeCount(s1,s2,n1,n2,L1,L2,M1,M2,aIdx){
  const mk=(s,n)=>{ const f=[E(s,'w',0,34)]; for(let i=0;i<n;i++) f.push(E('dot','b',0,5,DOTPOS[i][0],DOTPOS[i][1])); return f; };
  const stem=[
    {f:mk(s1,n1), c:L1+M1},
    {f:mk(s2,n1), c:L2+M1},
    {f:mk(s1,n2), c:L1+M2},
  ];
  const tgt=mk(s2,n2);
  const opts=[L1+M2, L2+M1, L1+M1]; opts.splice(aIdx,0,L2+M2);
  return {kind:'code', q:"Work out the code for the last figure.", stem, tgt, opts, a:aIdx,
    ex:`The FIRST letter stands for the outer shape (${L1} = ${SN[s1]}, ${L2} = ${SN[s2]}) and the SECOND letter stands for the number of dots (${M1} = ${n1} dot${n1>1?'s':''}, ${M2} = ${n2} dots). So the answer is ${L2}${M2}.`};
}

/* =================== PAPERS =================== */
const q = s => Object.assign({q:"Which figure comes next in the series?"}, s);

/* ---------------- PAPER 1 ---------------- */
NVR_PAPERS.push([
q(rotSeries('arrow',0,45,'w','b','flag',2)),
q(shadeCycle('sq',['w','g','b'],'cir',0)),
q(countSeries('cir',1,1,'sq',3)),
q(sizeAlt('tri','w','b','pent',1)),
q(twoStep('flag',90,4)),
oddMirror('flag',[0,90,180,270],45,2),
oddSwap('cir','tri',[0,20,40,60],0),
oddCount('sq',3,[[0,1,2],[0,3,4],[1,2,5],[2,3,6]],[0,1,2,3],3),
oddSides([['sq',15],['dia',0],['rect',0],['trap',0]],'tri',1),
anaSize('cir','star','w','b',3),
anaFill('sq','tri','w','b','g','cir',0),
anaRot('arrow','semi',90,'w','g',2),
anaSwapIn('sq','cir','hex','tri',1),
matShapeFill(['cir','tri','sq'],['w','g','b'],2),
matShapeFill(['star','hex','dia'],['b','w','g'],0),
matRotate(['arrow','flag','semi'],[0,90,180],'w','g',3),
codeShapeFill('cir','tri','b','w','A','B','X','Y',1),
codeShapeCount('sq','hex',1,3,'F','G','P','R',2),
]);

/* ---------------- PAPER 2 ---------------- */
NVR_PAPERS.push([
q(rotSeries('flag',0,90,'w','g','arrow',0)),
q(shadeCycle('cir',['b','w','g'],'hex',3)),
q(countSeries('sq',2,1,'cir',1)),
q(sizeAlt('pent','g','w','hex',2)),
q(twoStep('semi',90,1)),
oddMirror('ell',[0,90,180,270],30,4),
oddSwap('sq','star',[0,15,30,45],2),
oddCount('cir',4,[[0,1,2,3],[0,1,4,5],[2,3,4,6],[1,3,5,7]],[0,2,4],1),
oddSides([['sq',30],['dia',10],['rect',20],['trap',180]],'pent',0),
anaFill('cir','pent','g','b','w','sq',2),
anaRot('flag','trap',180,'w','b',0),
anaSwapIn('tri','sq','cir','star',3),
anaDouble('cir','tri','w',1),
matShapeFill(['tri','pent','cir'],['g','b','w'],1),
matRotate(['semi','arrow','trap'],[0,90,270],'g','w',4),
matShapeFill(['hex','sq','star'],['w','b','g'],3),
codeShapeFill('sq','pent','g','w','L','M','S','T',0),
codeShapeCount('tri','cir',2,4,'D','E','U','V',3),
]);

/* ---------------- PAPER 3 ---------------- */
NVR_PAPERS.push([
q(rotSeries('semi',0,45,'g','w','trap',1)),
q(shadeCycle('tri',['g','b','w'],'dia',2)),
q(countSeries('hex',3,1,'tri',0)),
q(sizeAlt('dia','b','g','cross',3)),
q(twoStep('ell',90,2)),
oddMirror('flag',[0,45,135,225],90,0),
oddSwap('hex','cir',[0,10,20,30],4),
oddCount('tri',5,[[0,1,2,3,4],[0,1,2,5,6],[1,2,3,6,7],[0,3,4,5,8]],[0,1,2,3,4,5],2),
oddSides([['sq',45],['dia',20],['rect',90],['trap',15]],'hex',3),
anaRot('arrow','flag',90,'g','w',4),
anaSwapIn('cir','sq','pent','dia',0),
anaDouble('sq','star','w',2),
anaSize('tri','hex','b','w',1),
matShapeFill(['dia','cross','pent'],['b','g','w'],4),
matRotate(['flag','semi','ell'],[0,180,90],'w','b',0),
matShapeFill(['cir','star','tri'],['g','w','b'],2),
codeShapeFill('tri','hex','w','g','P','Q','J','K',3),
codeShapeCount('pent','sq',1,4,'A','C','M','N',0),
]);

/* ---------------- PAPER 4 ---------------- */
NVR_PAPERS.push([
q(rotSeries('trap',0,90,'w','b','semi',3)),
q(shadeCycle('pent',['w','b','g'],'tri',1)),
q(countSeries('tri',1,2,'hex',2)),
q(sizeAlt('sq','w','g','dia',0)),
q(twoStep('arrow',90,3)),
oddMirror('ell',[0,45,180,315],135,1),
oddSwap('tri','dia',[0,25,50,75],3),
oddCount('hex',4,[[0,5,6,7],[1,2,5,8],[0,1,6,7],[3,4,7,8]],[0,1,2,3,4],4),
oddSides([['sq',60],['dia',30],['rect',45],['trap',200]],'cir',2),
anaSwapIn('hex','tri','sq','cir',2),
anaDouble('tri','pent','g',3),
anaSize('sq','cross','w','g',0),
anaFill('pent','star','b','g','w','hex',1),
matShapeFill(['sq','cir','hex'],['g','w','b'],0),
matRotate(['arrow','trap','flag'],[0,45,90],'b','w',2),
matShapeFill(['tri','dia','cross'],['w','g','b'],1),
codeShapeFill('dia','cir','w','b','R','S','E','F',2),
codeShapeCount('hex','tri',3,5,'T','V','W','Z',1),
]);

/* ---------------- PAPER 5 ---------------- */
NVR_PAPERS.push([
q(rotSeries('ell',0,45,'w','g','sq',4)),
q(shadeCycle('hex',['g','w','b'],'pent',0)),
q(countSeries('dia',5,-1,'cir',1)),
q(sizeAlt('hex','g','b','tri',2)),
q(twoStep('flag',45,0)),
oddMirror('flag',[0,60,120,300],180,3),
oddSwap('pent','sq',[0,18,36,54],1),
oddCount('cir',3,[[5,6,7],[0,1,3],[2,4,8],[1,5,8]],[0,5,6,7],0),
oddSides([['sq',75],['dia',40],['rect',60],['trap',30]],'star',4),
anaDouble('pent','cir','w',4),
anaSize('star','trap','w','b',2),
anaFill('hex','arrow','w','g','b','tri',3),
anaRot('semi','ell',90,'w','b',1),
matShapeFill(['pent','star','sq'],['b','w','g'],3),
matRotate(['trap','ell','arrow'],[0,90,180],'g','b',1),
matShapeFill(['cross','hex','cir'],['g','b','w'],4),
codeShapeFill('star','sq','g','b','G','H','L','N',0),
codeShapeCount('cir','pent',2,5,'B','D','R','S',3),
]);

/* ---------------- PAPER 6 ---------------- */
NVR_PAPERS.push([
q(rotSeries('arrow',30,60,'b','w','trap',0)),
q(shadeCycle('dia',['b','g','w'],'sq',4)),
q(countSeries('pent',6,-1,'sq',2)),
q(sizeAlt('cir','b','w','star',3)),
q(twoStep('semi',45,1)),
oddMirror('ell',[0,30,150,240],60,2),
oddSwap('dia','pent',[0,22,44,66],4),
oddCount('sq',6,[[0,1,2,3,4,5],[0,1,2,5,6,7],[1,2,3,4,7,8],[0,2,4,6,7,8]],[0,1,2,3,4],1),
oddSides([['sq',20],['dia',50],['rect',75],['trap',110]],'cross',0),
anaSize('hex','flag','w','g',4),
anaRot('trap','arrow',180,'w','g',3),
anaDouble('dia','hex','b',0),
anaSwapIn('sq','tri','cir','hex',2),
matShapeFill(['star','tri','pent'],['w','b','g'],1),
matRotate(['ell','flag','semi'],[0,270,180],'w','g',2),
matShapeFill(['sq','dia','hex'],['b','g','w'],0),
codeShapeFill('pent','tri','b','g','U','W','C','D',3),
codeShapeCount('sq','dia',1,2,'J','K','X','Y',2),
]);
})();
