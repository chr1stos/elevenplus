/* Verbal Reasoning — 6 papers, 16 questions each */
window.VR_PAPERS = [];

/* ---------------- PAPER 1 ---------------- */
VR_PAPERS.push([
{q:"Which word is closest in meaning to BEGIN?", opts:["finish","commence","pause","borrow"], a:1, ex:"'Commence' means to begin or start something."},
{q:"Which word is closest in meaning to RAPID?", opts:["gentle","careful","swift","distant"], a:2, ex:"'Rapid' and 'swift' both mean very fast."},
{q:"Which word is most OPPOSITE in meaning to EXPAND?", opts:["stretch","shrink","explode","widen"], a:1, ex:"To expand is to get bigger; to shrink is to get smaller — opposites."},
{q:"Which word is most OPPOSITE in meaning to GENEROUS?", opts:["kindly","miserly","wealthy","cheerful"], a:1, ex:"A generous person gives freely; a miserly person hates giving or spending — opposites."},
{q:"Glove is to hand as sock is to …", opts:["shoe","wool","foot","toe"], a:2, ex:"A glove is worn on a hand; a sock is worn on a foot."},
{q:"Author is to book as sculptor is to …", opts:["chisel","statue","museum","stone"], a:1, ex:"An author creates a book; a sculptor creates a statue."},
{q:"What comes next in this sequence?  AC,  BD,  CE,  DF,  ( ? )", opts:["EG","EF","FG","DG"], a:0, ex:"Each letter moves on one place: A→B→C→D→E and C→D→E→F→G, giving EG."},
{q:"What comes next in this sequence?  ZY,  XW,  VU,  TS,  ( ? )", opts:["SR","RQ","QP","RP"], a:1, ex:"The alphabet is being written backwards in pairs: ZY, XW, VU, TS, then RQ."},
{q:"In a secret code, FISH is written as GJTI. How would BOAT be written in the same code?", opts:["CPBU","APZS","CQBU","CPBV"], a:0, ex:"Each letter moves forward one place: B→C, O→P, A→B, T→U, giving CPBU."},
{q:"In a code, A=1, B=2, C=3 and so on. CAB is written 3-1-2. How would BED be written?", opts:["2-5-4","2-4-5","3-5-4","2-6-4"], a:0, ex:"B is the 2nd letter, E is the 5th and D is the 4th: 2-5-4."},
{q:"A four-letter word is hidden between two words in this sentence:  \"He missed the bus and walked to school.\"  Which word is it?", opts:["send","sand","band","dust"], a:1, ex:"The end of 'bus' and start of 'and' spell S-A-N-D: 'the bu(s and) walked'."},
{q:"A four-letter word is hidden between two words in this sentence:  \"There was much industry in the town.\"  Which word is it?", opts:["chin","hint","must","dust"], a:0, ex:"The end of 'much' and start of 'industry' spell C-H-I-N: 'mu(ch in)dustry'."},
{q:"Which word is the odd one out?", opts:["apple","banana","carrot","plum","cherry"], a:2, ex:"A carrot is a vegetable; all the others are fruits."},
{q:"Which word is the odd one out?", opts:["oak","ash","rose","elm","beech"], a:2, ex:"Oak, ash, elm and beech are all trees; a rose is a flowering shrub."},
{q:"Which word can go in front of both BALL and PRINT to make two new words?", opts:["hand","foot","finger","snow"], a:1, ex:"FOOTBALL and FOOTPRINT are both real words."},
{q:"Which word fits both meanings?  \"The sound a dog makes\"  and  \"the outer covering of a tree\"", opts:["howl","bark","trunk","growl"], a:1, ex:"A dog can BARK, and a tree is covered in BARK."}
]);

/* ---------------- PAPER 2 ---------------- */
VR_PAPERS.push([
{q:"Which word is closest in meaning to ANCIENT?", opts:["broken","old","valuable","foreign"], a:1, ex:"'Ancient' means very old."},
{q:"Which word is closest in meaning to FEEBLE?", opts:["weak","angry","tiny","unwell"], a:0, ex:"'Feeble' means lacking strength — weak."},
{q:"Which word is most OPPOSITE in meaning to VICTORY?", opts:["battle","defeat","surrender","draw"], a:1, ex:"Victory means winning; defeat means losing."},
{q:"Which word is most OPPOSITE in meaning to SCARCE?", opts:["rare","hidden","plentiful","expensive"], a:2, ex:"'Scarce' means in short supply; 'plentiful' means there is lots of it."},
{q:"Bird is to nest as bee is to …", opts:["honey","sting","hive","flower"], a:2, ex:"A bird lives in a nest; a bee lives in a hive."},
{q:"Lamb is to sheep as foal is to …", opts:["cow","horse","goat","deer"], a:1, ex:"A lamb is a baby sheep; a foal is a baby horse."},
{q:"What comes next in this sequence?  B,  E,  H,  K,  ( ? )", opts:["M","N","O","L"], a:1, ex:"Each letter jumps forward three places: B(+3)=E, E(+3)=H, H(+3)=K, K(+3)=N."},
{q:"What comes next in this sequence?  AB,  CD,  EF,  GH,  ( ? )", opts:["HI","IJ","JK","IK"], a:1, ex:"The alphabet is written in pairs: AB, CD, EF, GH, then IJ."},
{q:"In a secret code, COLD is written as DPME. How would WARM be written in the same code?", opts:["XBSN","VZQL","XBSM","YCTO"], a:0, ex:"Each letter moves forward one place: W→X, A→B, R→S, M→N, giving XBSN."},
{q:"In a secret code, TIGER is written as SHFDQ. How would LION be written in the same code?", opts:["MJPO","KHNM","KHMN","JGML"], a:1, ex:"Each letter moves back one place: L→K, I→H, O→N, N→M, giving KHNM."},
{q:"A four-letter word is hidden between two words in this sentence:  \"The hero sees danger everywhere.\"  Which word is it?", opts:["rose","hose","seed","eyes"], a:0, ex:"The end of 'hero' and start of 'sees' spell R-O-S-E: 'he(ro se)es'."},
{q:"A four-letter word is hidden between two words in this sentence:  \"We arrived just in time at the station.\"  Which word is it?", opts:["mate","team","meat","time"], a:2, ex:"The end of 'time' and start of 'at' spell M-E-A-T: 'ti(me at) the station'."},
{q:"Which word is the odd one out?", opts:["trout","salmon","shark","otter","cod"], a:3, ex:"An otter is a mammal; all the others are fish."},
{q:"Which word is the odd one out?", opts:["violin","flute","cello","harp","guitar"], a:1, ex:"A flute is a wind instrument; all the others have strings."},
{q:"Which word can go in front of both LIGHT and TIME to make two new words?", opts:["night","day","sun","bed"], a:1, ex:"DAYLIGHT and DAYTIME are both real words. (Night works with 'time' but 'nightlight' is written as two joined words less commonly tested — DAY fits the standard pair.)"},
{q:"Which word fits both meanings?  \"a piece of equipment used in cricket\"  and  \"a flying animal that comes out at night\"", opts:["ball","bat","wing","club"], a:1, ex:"You hit a ball with a BAT, and a BAT is a nocturnal flying mammal."}
]);

/* ---------------- PAPER 3 ---------------- */
VR_PAPERS.push([
{q:"Which word is closest in meaning to ENORMOUS?", opts:["heavy","huge","frightening","round"], a:1, ex:"'Enormous' means extremely large — huge."},
{q:"Which word is closest in meaning to FURIOUS?", opts:["speedy","angry","noisy","confused"], a:1, ex:"'Furious' means extremely angry."},
{q:"Which word is most OPPOSITE in meaning to BRAVE?", opts:["foolish","strong","cowardly","careful"], a:2, ex:"A brave person faces danger; a cowardly person runs from it."},
{q:"Which word is most OPPOSITE in meaning to ARRIVE?", opts:["travel","depart","return","delay"], a:1, ex:"To arrive is to reach a place; to depart is to leave it."},
{q:"Pen is to write as scissors are to …", opts:["paper","sharp","cut","craft"], a:2, ex:"A pen is used to write; scissors are used to cut."},
{q:"France is to Paris as Spain is to …", opts:["Barcelona","Lisbon","Madrid","Rome"], a:2, ex:"Paris is the capital of France; Madrid is the capital of Spain."},
{q:"What comes next in this sequence?  AZ,  BY,  CX,  ( ? )", opts:["DV","DW","EW","DY"], a:1, ex:"The first letters go forwards (A, B, C, D) while the second letters go backwards (Z, Y, X, W): DW."},
{q:"What comes next in this sequence?  CF,  FI,  IL,  LO,  ( ? )", opts:["OR","OQ","PR","NR"], a:0, ex:"Both letters jump forward three places each time: L(+3)=O and O(+3)=R, giving OR."},
{q:"In a code, A=1, B=2, C=3 and so on. DICE is written 4-9-3-5. How would BEAD be written?", opts:["2-5-1-4","2-4-1-5","3-5-1-4","2-5-2-4"], a:0, ex:"B=2, E=5, A=1, D=4: 2-5-1-4."},
{q:"In a secret code, MOON is written as OQQP. How would STAR be written in the same code?", opts:["UVCT","TUBS","UVCS","VWDU"], a:0, ex:"Each letter moves forward two places: S→U, T→V, A→C, R→T, giving UVCT."},
{q:"A four-letter word is hidden between two words in this sentence:  \"The hungry dog ate everything in its bowl.\"  Which word is it?", opts:["gate","goat","tear","yoga"], a:0, ex:"The end of 'dog' and start of 'ate' spell G-A-T-E: 'do(g ate)'."},
{q:"A four-letter word is hidden between two words in this sentence:  \"The fish edged closer to the bait.\"  Which word is it?", opts:["dish","shed","heed","fetch"], a:1, ex:"The end of 'fish' and start of 'edged' spell S-H-E-D: 'fi(sh ed)ged'."},
{q:"Which word is the odd one out?", opts:["circle","square","triangle","cube","pentagon"], a:3, ex:"A cube is a 3D solid; all the others are flat 2D shapes."},
{q:"Which word is the odd one out?", opts:["happy","cheerful","glum","joyful","merry"], a:2, ex:"'Glum' means miserable; all the other words mean happy."},
{q:"Which word can go in front of both WORK and MADE to make two new words?", opts:["hand","house","home","team"], a:2, ex:"HOMEWORK and HOMEMADE are both real words."},
{q:"Which word fits both meanings?  \"part of the eye\"  and  \"a school student\"", opts:["iris","pupil","lens","junior"], a:1, ex:"The PUPIL is the dark centre of the eye, and a PUPIL is a student."}
]);

/* ---------------- PAPER 4 ---------------- */
VR_PAPERS.push([
{q:"Which word is closest in meaning to FRAGILE?", opts:["precious","delicate","tiny","ancient"], a:1, ex:"'Fragile' means easily broken — delicate."},
{q:"Which word is closest in meaning to VACANT?", opts:["empty","dusty","quiet","open"], a:0, ex:"'Vacant' means unoccupied or empty."},
{q:"Which word is most OPPOSITE in meaning to ANCIENT?", opts:["young","modern","fresh","early"], a:1, ex:"'Ancient' describes things from long ago; 'modern' describes things of the present day."},
{q:"Which word is most OPPOSITE in meaning to TRANSPARENT?", opts:["clear","shiny","opaque","fragile"], a:2, ex:"Transparent materials let light through; opaque materials do not."},
{q:"Caterpillar is to butterfly as tadpole is to …", opts:["pond","fish","frog","newt"], a:2, ex:"A caterpillar grows into a butterfly; a tadpole grows into a frog."},
{q:"Thermometer is to temperature as ruler is to …", opts:["straightness","length","wood","numbers"], a:1, ex:"A thermometer measures temperature; a ruler measures length."},
{q:"What comes next in this sequence?  A,  C,  F,  J,  O,  ( ? )", opts:["T","U","S","V"], a:1, ex:"The jumps grow by one each time: +2, +3, +4, +5, then +6. O(+6)=U."},
{q:"What comes next in this sequence?  MN,  LO,  KP,  JQ,  ( ? )", opts:["IR","IS","HR","JR"], a:0, ex:"The first letter moves back one (M,L,K,J,I) and the second moves forward one (N,O,P,Q,R): IR."},
{q:"In a secret code where each letter moves forward two places, DOOR is written FQQT. What word does ECMG stand for?", opts:["CAKE","CAGE","LAKE","COAL"], a:0, ex:"Move each letter back two places to decode: E→C, C→A, M→K, G→E, spelling CAKE."},
{q:"In a code, A=1, B=2, C=3 and so on. MEAL is written 13-5-1-12. How would LAME be written?", opts:["12-1-13-5","12-1-12-5","13-1-13-5","12-2-13-5"], a:0, ex:"L=12, A=1, M=13, E=5: 12-1-13-5."},
{q:"A four-letter word is hidden between two words in this sentence:  \"My uncle apologised for being late.\"  Which word is it?", opts:["clap","leap","plea","pale"], a:1, ex:"The end of 'uncle' and start of 'apologised' spell L-E-A-P: 'unc(le ap)ologised'."},
{q:"A four-letter word is hidden between two words in this sentence:  \"That piano sells for a thousand pounds.\"  Which word is it?", opts:["nose","anon","sell","onus"], a:0, ex:"The end of 'piano' and start of 'sells' spell N-O-S-E: 'pia(no se)lls'."},
{q:"Which word is the odd one out?", opts:["copper","iron","marble","tin","gold"], a:2, ex:"Marble is a type of stone; all the others are metals."},
{q:"Which word is the odd one out?", opts:["gale","breeze","hurricane","drizzle","gust"], a:3, ex:"Drizzle is light rain; all the other words describe wind."},
{q:"Which word can go in front of both MAN and FLAKE to make two new words?", opts:["snow","corn","rain","ice"], a:0, ex:"SNOWMAN and SNOWFLAKE are both real words."},
{q:"Which word fits both meanings?  \"not heavy\"  and  \"the glow from a lamp\"", opts:["faint","light","bright","pale"], a:1, ex:"LIGHT means not heavy, and a lamp gives out LIGHT."}
]);

/* ---------------- PAPER 5 ---------------- */
VR_PAPERS.push([
{q:"Which word is closest in meaning to ODOUR?", opts:["colour","smell","sound","taste"], a:1, ex:"An 'odour' is a smell."},
{q:"Which word is closest in meaning to PECULIAR?", opts:["special","strange","secret","particular"], a:1, ex:"'Peculiar' means odd or strange."},
{q:"Which word is most OPPOSITE in meaning to RIGID?", opts:["solid","flexible","brittle","upright"], a:1, ex:"'Rigid' means stiff and unbending; 'flexible' means able to bend easily."},
{q:"Which word is most OPPOSITE in meaning to ABUNDANT?", opts:["scarce","generous","overflowing","small"], a:0, ex:"'Abundant' means existing in large amounts; 'scarce' means in very short supply."},
{q:"Library is to books as gallery is to …", opts:["visitors","paintings","walls","frames"], a:1, ex:"A library is a place full of books; a gallery is a place full of paintings."},
{q:"Second is to minute as minute is to …", opts:["hour","day","clock","time"], a:0, ex:"There are 60 seconds in a minute and 60 minutes in an hour — the same relationship."},
{q:"What comes next in this sequence?  DW,  EV,  FU,  GT,  ( ? )", opts:["HS","HR","IS","GS"], a:0, ex:"The first letter moves forward one (D,E,F,G,H) and the second moves back one (W,V,U,T,S): HS."},
{q:"What comes next in this sequence?  A,  B,  D,  G,  K,  ( ? )", opts:["O","P","N","Q"], a:1, ex:"The jumps grow by one: +1, +2, +3, +4, then +5. K(+5)=P."},
{q:"In a secret code, PLANT is written as QMBOU. How would FRUIT be written in the same code?", opts:["GSVJU","ESTHS","GSVIU","GTVJU"], a:0, ex:"Each letter moves forward one place: F→G, R→S, U→V, I→J, T→U, giving GSVJU."},
{q:"In a code, A=1, B=2, C=3 and so on. 8-5-1-16 spells HEAP. What does 16-1-12-5 spell?", opts:["PALE","LEAP","PEAL","PLEA"], a:0, ex:"16=P, 1=A, 12=L, 5=E, spelling PALE."},
{q:"A four-letter word is hidden between two words in this sentence:  \"The castle was of a size never seen before.\"  Which word is it?", opts:["safe","sofa","oafs","fawn"], a:1, ex:"The end of 'was', all of 'of' and the start of 'a' spell S-O-F-A: 'wa(s of a) size'."},
{q:"A four-letter word is hidden between two words in this sentence:  \"They were both inside when it rained.\"  Which word is it?", opts:["thin","hint","shin","tins"], a:0, ex:"The end of 'both' and start of 'inside' spell T-H-I-N: 'bo(th in)side'."},
{q:"Which word is the odd one out?", opts:["whisper","mutter","murmur","shout","mumble"], a:3, ex:"To shout is to speak very loudly; all the other words mean to speak quietly."},
{q:"Which word is the odd one out?", opts:["daffodil","tulip","oak","crocus","daisy"], a:2, ex:"An oak is a tree; all the others are flowers."},
{q:"Which word can go in front of both SHINE and FLOWER to make two new words?", opts:["moon","sun","rain","spring"], a:1, ex:"SUNSHINE and SUNFLOWER are both real words."},
{q:"Which word fits both meanings?  \"a sea animal\"  and  \"to close something tightly\"", opts:["shell","seal","clam","lock"], a:1, ex:"A SEAL is a sea mammal, and to SEAL something is to close it tightly."}
]);

/* ---------------- PAPER 6 ---------------- */
VR_PAPERS.push([
{q:"Which word is closest in meaning to CONCEAL?", opts:["steal","hide","protect","freeze"], a:1, ex:"'Conceal' means to hide something from view."},
{q:"Which word is closest in meaning to SELDOM?", opts:["never","sometimes","rarely","quietly"], a:2, ex:"'Seldom' means not often — rarely."},
{q:"Which word is most OPPOSITE in meaning to MAXIMUM?", opts:["average","minimum","medium","empty"], a:1, ex:"Maximum is the largest possible amount; minimum is the smallest."},
{q:"Which word is most OPPOSITE in meaning to HUMBLE?", opts:["famous","wealthy","arrogant","noble"], a:2, ex:"A humble person is modest; an arrogant person is full of self-importance."},
{q:"Teacher is to pupils as doctor is to …", opts:["nurses","medicine","patients","hospitals"], a:2, ex:"A teacher looks after pupils; a doctor looks after patients."},
{q:"Triangle is to three as hexagon is to …", opts:["five","six","seven","eight"], a:1, ex:"A triangle has three sides; a hexagon has six sides."},
{q:"What comes next in this sequence?  ZA,  YB,  XC,  WD,  ( ? )", opts:["VE","UE","VF","WE"], a:0, ex:"The first letters go backwards (Z,Y,X,W,V) and the second letters go forwards (A,B,C,D,E): VE."},
{q:"What comes next in this sequence?  B,  C,  E,  H,  L,  ( ? )", opts:["P","O","Q","R"], a:2, ex:"The jumps grow by one: +1, +2, +3, +4, then +5. L(+5)=Q."},
{q:"In a secret code, SNOW is written as UPQY. How would RAIN be written in the same code?", opts:["TCKP","SBJO","TCLP","UDKP"], a:0, ex:"Each letter moves forward two places: R→T, A→C, I→K, N→P, giving TCKP."},
{q:"In a code, A=1, B=2, C=3 and so on. GLOVE is written 7-12-15-22-5. How would LOVE be written?", opts:["12-15-22-5","12-16-22-5","11-15-22-5","12-15-21-5"], a:0, ex:"L=12, O=15, V=22, E=5: 12-15-22-5."},
{q:"A four-letter word is hidden between two words in this sentence:  \"She said each word slowly and clearly.\"  Which word is it?", opts:["dice","idea","dear","each"], a:1, ex:"The end of 'said' and start of 'each' spell I-D-E-A: 'sa(id ea)ch'."},
{q:"A four-letter word is hidden between two words in this sentence:  \"Have you seen this hippo before?\"  Which word is it?", opts:["ship","hips","spin","this"], a:0, ex:"The end of 'this' and start of 'hippo' spell S-H-I-P: 'thi(s hip)po'."},
{q:"Which word is the odd one out?", opts:["baker","plumber","hammer","tailor","joiner"], a:2, ex:"A hammer is a tool; all the others are people's jobs."},
{q:"Which word is the odd one out?", opts:["north","south","east","left","west"], a:3, ex:"North, south, east and west are compass directions; 'left' is not."},
{q:"Which word can go in front of both POT and CUP to make two new words?", opts:["milk","tea","egg","tin"], a:1, ex:"TEAPOT and TEACUP are both real words. (Eggcup works, but 'eggpot' is not a word.)"},
{q:"Which word fits both meanings?  \"a season of the year\"  and  \"a coil of metal that bounces back\"", opts:["summer","spring","coil","fall"], a:1, ex:"SPRING is a season, and a SPRING is a bouncy metal coil."}
]);
