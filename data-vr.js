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

/* ---------------- PAPER 7 ---------------- */
VR_PAPERS.push([
{q:"Which word is closest in meaning to WEARY?", opts:["tired","bored","hungry","annoyed"], a:0, ex:"'Weary' means very tired."},
{q:"Which word is closest in meaning to GIGANTIC?", opts:["clumsy","enormous","frightening","ancient"], a:1, ex:"'Gigantic' means extremely large — enormous."},
{q:"Which word is most OPPOSITE in meaning to ARRIVE?", opts:["reach","leave","stay","enter"], a:1, ex:"To arrive is to reach a place; to leave is to go away from it."},
{q:"Which word is most OPPOSITE in meaning to CRUEL?", opts:["fierce","kind","strict","selfish"], a:1, ex:"A cruel person causes pain; a kind person is gentle and caring."},
{q:"Puppy is to dog as kitten is to …", opts:["mouse","kitten","cat","paw"], a:2, ex:"A puppy is a young dog; a kitten is a young cat."},
{q:"Petal is to flower as feather is to …", opts:["wing","bird","sky","nest"], a:1, ex:"A flower is covered in petals; a bird is covered in feathers."},
{q:"What comes next in this sequence?  C,  F,  I,  L,  ( ? )", opts:["N","O","P","M"], a:1, ex:"Each letter jumps forward three places: L(+3)=O."},
{q:"What comes next in this sequence?  BA,  DC,  FE,  HG,  ( ? )", opts:["JI","IJ","JK","IH"], a:0, ex:"The pairs go up in twos but each pair is reversed: JI comes after HG."},
{q:"In a secret code, LAMP is written as MBNQ. How would DESK be written in the same code?", opts:["EFTL","CDRJ","EFTK","EGTL"], a:0, ex:"Each letter moves forward one place: D→E, E→F, S→T, K→L, giving EFTL."},
{q:"In a code, A=1, B=2, C=3 and so on. FROG is written 6-18-15-7. How would GOLD be written?", opts:["7-15-12-4","7-14-12-4","6-15-12-4","7-15-11-4"], a:0, ex:"G=7, O=15, L=12, D=4: 7-15-12-4."},
{q:"A four-letter word is hidden between two words in this sentence:  \"The dog ran across the park.\"  Which word is it?", opts:["gran","grin","gram","grip"], a:0, ex:"The hidden word is G-R-A-N, bridging two words in the sentence."},
{q:"A four-letter word is hidden between two words in this sentence:  \"Please hand over the map.\"  Which word is it?", opts:["dove","done","dime","dose"], a:0, ex:"The end of 'hand' and start of 'over' spell D-O-V-E: 'han(d ove)r'."},
{q:"Which word is the odd one out?", opts:["sofa","chair","table","carpet","stool"], a:3, ex:"A carpet covers the floor; the others are furniture you sit at or on."},
{q:"Which word is the odd one out?", opts:["red","blue","bright","green","yellow"], a:2, ex:"'Bright' describes how vivid a colour is; the others are actual colours."},
{q:"Which word can go in front of both BOW and DROP to make two new words?", opts:["rain","sun","snow","tear"], a:0, ex:"RAINBOW and RAINDROP are both real words."},
{q:"Which word fits both meanings?  \"a large body of salt water\"  and  \"to notice with your eyes\" (sounds the same)", opts:["lake","sea","see","view"], a:1, ex:"SEA is a large body of salt water, and it sounds exactly like SEE (to notice with your eyes)."}
]);

/* ---------------- PAPER 8 ---------------- */
VR_PAPERS.push([
{q:"Which word is closest in meaning to BRIEF?", opts:["short","boring","urgent","clear"], a:0, ex:"'Brief' means lasting only a short time — short."},
{q:"Which word is closest in meaning to REPAIR?", opts:["break","fix","paint","clean"], a:1, ex:"To 'repair' something is to fix it."},
{q:"Which word is most OPPOSITE in meaning to ROUGH?", opts:["bumpy","smooth","hard","sharp"], a:1, ex:"A rough surface is uneven; a smooth surface is even — opposites."},
{q:"Which word is most OPPOSITE in meaning to PERMANENT?", opts:["lasting","solid","temporary","fixed"], a:2, ex:"'Permanent' means lasting forever; 'temporary' means lasting only a short time."},
{q:"Hive is to bee as web is to …", opts:["fly","spider","net","silk"], a:1, ex:"A bee lives in a hive; a spider lives on a web."},
{q:"Captain is to ship as pilot is to …", opts:["runway","aeroplane","sky","ticket"], a:1, ex:"A captain steers a ship; a pilot flies an aeroplane."},
{q:"What comes next in this sequence?  A,  D,  G,  J,  ( ? )", opts:["L","M","N","K"], a:1, ex:"Each letter jumps forward three places: J(+3)=M."},
{q:"What comes next in this sequence?  ZX,  YW,  XV,  WU,  ( ? )", opts:["VT","VU","UT","VS"], a:0, ex:"Both letters move back one each time: W→V and U→T, giving VT."},
{q:"In a secret code, GIFT is written as EGDR. How would HAND be written in the same code?", opts:["FYLB","FZLB","GYLB","FYKB"], a:0, ex:"Each letter moves back two places: H→F, A→Y, N→L, D→B, giving FYLB."},
{q:"In a code, A=1, B=2, C=3 and so on. 4-1-18-11 spells DARK. What does 12-1-13-16 spell?", opts:["LAMP","LIMP","LUMP","LAME"], a:0, ex:"12=L, 1=A, 13=M, 16=P, spelling LAMP."},
{q:"A four-letter word is hidden between two words in this sentence:  \"Please hand over your ticket.\"  Which word is it?", opts:["dove","dime","dole","dusk"], a:0, ex:"The hidden word is D-O-V-E, bridging two words in the sentence."},
{q:"A four-letter word is hidden between two words in this sentence:  \"Our team ate a huge lunch.\"  Which word is it?", opts:["mate","mile","mild","mole"], a:0, ex:"The hidden word is M-A-T-E, bridging two words in the sentence."},
{q:"Which word is the odd one out?", opts:["hammer","saw", "drill","nail","screwdriver"], a:3, ex:"A nail is a fastening you use tools on; the others are all tools."},
{q:"Which word is the odd one out?", opts:["Monday","Tuesday","January","Friday","Sunday"], a:2, ex:"January is a month; all the others are days of the week."},
{q:"Which word can go in front of both PORT and SIDE to make two new words?", opts:["air","sea","car","road"], a:1, ex:"SEAPORT and SEASIDE are both real words."},
{q:"Which word fits both meanings?  \"a flat surface you eat from\"  and  \"a chart of rows and columns\"", opts:["plate","board","table","desk"], a:2, ex:"A TABLE is a piece of furniture you eat at, and a TABLE is also a grid of information."}
]);

/* ---------------- PAPER 9 ---------------- */
VR_PAPERS.push([
{q:"Which word is closest in meaning to DAMP?", opts:["dry","moist","cold","dirty"], a:1, ex:"'Damp' means slightly wet — moist."},
{q:"Which word is closest in meaning to REPLY?", opts:["question","answer","letter","message"], a:1, ex:"To 'reply' is to answer."},
{q:"Which word is most OPPOSITE in meaning to WILD?", opts:["fierce","tame","free","natural"], a:1, ex:"A wild animal is untamed; a tame animal is gentle and trained."},
{q:"Which word is most OPPOSITE in meaning to ACCEPT?", opts:["agree","refuse","receive","allow"], a:1, ex:"To accept is to say yes; to refuse is to say no."},
{q:"Fish is to fin as bird is to …", opts:["beak","wing","nest","feather"], a:1, ex:"A fish uses a fin to move through water; a bird uses a wing to move through air."},
{q:"Cub is to bear as calf is to …", opts:["sheep","cow","goat","horse"], a:1, ex:"A cub is a young bear; a calf is a young cow."},
{q:"What comes next in this sequence?  E,  H,  K,  N,  ( ? )", opts:["P","Q","R","O"], a:1, ex:"Each letter jumps forward three places: N(+3)=Q."},
{q:"What comes next in this sequence?  AC,  CE,  EG,  GI,  ( ? )", opts:["IK","HJ","IJ","JL"], a:0, ex:"Both letters jump forward two places: G(+2)=I and I(+2)=K, giving IK."},
{q:"In a secret code, MILK is written as NJML. How would BOOK be written in the same code?", opts:["CPPL","APPL","CPPK","CQPL"], a:0, ex:"Each letter moves forward one place: B→C, O→P, O→P, K→L, giving CPPL."},
{q:"In a code, A=1, B=2, C=3 and so on. SWIM is written 19-23-9-13. How would WISH be written?", opts:["23-9-19-8","23-8-19-9","22-9-19-8","23-9-18-8"], a:0, ex:"W=23, I=9, S=19, H=8: 23-9-19-8."},
{q:"A four-letter word is hidden between two words in this sentence:  \"The chef instantly began to cook.\"  Which word is it?", opts:["fins","find","fine","fint"], a:0, ex:"The end of 'chef' and start of 'instantly' spell F-I-N-S: 'che(f ins)tantly'."},
{q:"A four-letter word is hidden between two words in this sentence:  \"Give me at least three sweets.\"  Which word is it?", opts:["meat","melt","mist","mask"], a:0, ex:"The end of 'me' and start of 'at least' spell M-E-A-T: 'm(e at) least'."},
{q:"Which word is the odd one out?", opts:["London","Paris","France","Rome","Madrid"], a:2, ex:"France is a country; all the others are capital cities."},
{q:"Which word is the odd one out?", opts:["swim","run","jump","water","climb"], a:3, ex:"'Water' is a thing (a noun); all the others are actions (verbs)."},
{q:"Which word can go in front of both PRINT and BALL to make two new words?", opts:["foot","hand","snow","play"], a:0, ex:"FOOTPRINT and FOOTBALL are both real words."},
{q:"Which word fits both meanings?  \"a farm animal that gives wool\"  and  \"to move timidly\" (as in feeling ___ish)", opts:["sheep","goat","lamb","hen"], a:0, ex:"A SHEEP gives wool, and 'sheepish' means shy or timid — both come from SHEEP."}
]);

/* ---------------- PAPER 10 ---------------- */
VR_PAPERS.push([
{q:"Which word is closest in meaning to SWIFT?", opts:["slow","quick","steady","careful"], a:1, ex:"'Swift' means very fast — quick."},
{q:"Which word is closest in meaning to TASK?", opts:["game","reward","job","rest"], a:2, ex:"A 'task' is a piece of work you have to do — a job."},
{q:"Which word is most OPPOSITE in meaning to EMPTY?", opts:["hollow","full","open","clear"], a:1, ex:"Empty means containing nothing; full means containing as much as possible."},
{q:"Which word is most OPPOSITE in meaning to ANCIENT?", opts:["old","recent","past","historic"], a:1, ex:"'Ancient' means from very long ago; 'recent' means from a short time ago."},
{q:"Book is to library as painting is to …", opts:["artist","brush","gallery","frame"], a:2, ex:"Books are kept in a library; paintings are kept in a gallery."},
{q:"Cygnet is to swan as duckling is to …", opts:["pond","goose","duck","chick"], a:2, ex:"A cygnet is a baby swan; a duckling is a baby duck."},
{q:"What comes next in this sequence?  Z,  W,  T,  Q,  ( ? )", opts:["N","O","P","M"], a:0, ex:"Each letter jumps back three places: Q(−3)=N."},
{q:"What comes next in this sequence?  DA,  EB,  FC,  GD,  ( ? )", opts:["HE","HF","IE","HD"], a:0, ex:"The first letter moves forward one (D,E,F,G,H) and the second moves forward one (A,B,C,D,E): HE."},
{q:"In a secret code, JUMP is written as LWOR. How would WALK be written in the same code?", opts:["YCNM","XBNM","YCNL","ZCNM"], a:0, ex:"Each letter moves forward two places: W→Y, A→C, L→N, K→M, giving YCNM."},
{q:"In a code, A=1, B=2, C=3 and so on. 3-15-12-4 spells COLD. What does 7-15-12-4 spell?", opts:["GOLD","BOLD","HOLD","FOLD"], a:0, ex:"7=G, 15=O, 12=L, 4=D, spelling GOLD."},
{q:"A four-letter word is hidden between two words in this sentence:  \"They both index their notes.\"  Which word is it?", opts:["thin","thud","tusk","tint"], a:0, ex:"The hidden word is T-H-I-N, bridging two words in the sentence."},
{q:"A four-letter word is hidden between two words in this sentence:  \"Give me at least three.\"  Which word is it?", opts:["meat","melt","mist","mask"], a:0, ex:"The hidden word is M-E-A-T, bridging two words in the sentence."},
{q:"Which word is the odd one out?", opts:["glove","scarf","umbrella","hat","coat"], a:2, ex:"An umbrella is carried; the others are all worn on the body."},
{q:"Which word is the odd one out?", opts:["mile","metre","litre","kilometre","inch"], a:2, ex:"A litre measures volume; all the others measure length or distance."},
{q:"Which word can go in front of both LACE and STRING to make two new words?", opts:["boot","shoe","hair","neck"], a:1, ex:"SHOELACE and SHOESTRING are both real words."},
{q:"Which word fits both meanings?  \"the part of your body on your shoulders\"  and  \"the person in charge of a school\"", opts:["chief","boss","head","top"], a:2, ex:"Your HEAD sits on your shoulders, and the HEAD is the person in charge of a school."}
]);

/* ---------------- PAPER 11 ---------------- */
VR_PAPERS.push([
{q:"Which word is closest in meaning to FAMOUS?", opts:["wealthy","well-known","talented","proud"], a:1, ex:"'Famous' means known by many people — well-known."},
{q:"Which word is closest in meaning to CHILLY?", opts:["warm","cold","damp","windy"], a:1, ex:"'Chilly' means unpleasantly cold."},
{q:"Which word is most OPPOSITE in meaning to LOOSE?", opts:["baggy","tight","free","slack"], a:1, ex:"Loose means not firmly fixed; tight means firmly fixed or close-fitting."},
{q:"Which word is most OPPOSITE in meaning to ANCESTOR?", opts:["relative","descendant","parent","stranger"], a:1, ex:"An ancestor comes before you in your family; a descendant comes after you."},
{q:"Knife is to cut as broom is to …", opts:["clean","sweep","dust","handle"], a:1, ex:"A knife is used to cut; a broom is used to sweep."},
{q:"Herd is to cattle as flock is to …", opts:["fish","wolves","sheep","lions"], a:2, ex:"A group of cattle is a herd; a group of sheep is a flock."},
{q:"What comes next in this sequence?  B,  F,  J,  N,  ( ? )", opts:["Q","R","S","P"], a:1, ex:"Each letter jumps forward four places: N(+4)=R."},
{q:"What comes next in this sequence?  MN,  KP,  IR,  GT,  ( ? )", opts:["EV","FV","EW","EU"], a:0, ex:"The first letter moves back two (M,K,I,G,E) and the second moves forward two (N,P,R,T,V): EV."},
{q:"In a secret code, GLASS is written as HMBTT. How would WATER be written in the same code?", opts:["XBUFS","VZSDQ","XBUFR","XCUFS"], a:0, ex:"Each letter moves forward one place: W→X, A→B, T→U, E→F, R→S, giving XBUFS."},
{q:"In a code, A=1, B=2, C=3 and so on. PLANT is written 16-12-1-14-20. How would PLAN be written?", opts:["16-12-1-14","16-12-2-14","15-12-1-14","16-11-1-14"], a:0, ex:"P=16, L=12, A=1, N=14: 16-12-1-14."},
{q:"A four-letter word is hidden between two words in this sentence:  \"The team ate lunch quickly.\"  Which word is it?", opts:["mate","meat","mata","mear"], a:0, ex:"The end of 'team' and start of 'ate' spell M-A-T-E: 'tea(m ate)'."},
{q:"A four-letter word is hidden between two words in this sentence:  \"I hope net curtains will help.\"  Which word is it?", opts:["open","oven","omen","oval"], a:0, ex:"The end of 'hope' and start of 'net' spell O-P-E-N: 'h(ope net)'."},
{q:"Which word is the odd one out?", opts:["oak","pine","birch","ivy","willow"], a:3, ex:"Ivy is a climbing plant; all the others are trees."},
{q:"Which word is the odd one out?", opts:["shout","whisper","yell","scream","bellow"], a:1, ex:"To whisper is to speak very quietly; all the others mean to make a loud noise."},
{q:"Which word can go in front of both PAPER and STAND to make two new words?", opts:["news","note","book","home"], a:0, ex:"NEWSPAPER and NEWSSTAND are both real words."},
{q:"Which word fits both meanings?  \"a colour like the sky\"  and  \"feeling sad\"", opts:["grey","blue","dark","low"], a:1, ex:"BLUE is a colour like the sky, and to feel BLUE means to feel sad."}
]);

/* ---------------- PAPER 12 ---------------- */
VR_PAPERS.push([
{q:"Which word is closest in meaning to QUARREL?", opts:["chat","argument","promise","meeting"], a:1, ex:"A 'quarrel' is an angry disagreement — an argument."},
{q:"Which word is closest in meaning to MEND?", opts:["break","repair","lose","build"], a:1, ex:"To 'mend' something is to repair it."},
{q:"Which word is most OPPOSITE in meaning to SHALLOW?", opts:["wide","deep","narrow","calm"], a:1, ex:"Shallow water is not deep; the opposite is deep."},
{q:"Which word is most OPPOSITE in meaning to ARTIFICIAL?", opts:["false","fake","natural","plastic"], a:2, ex:"'Artificial' means made by people; 'natural' means made by nature."},
{q:"Clock is to time as thermometer is to …", opts:["heat","temperature","weather","glass"], a:1, ex:"A clock measures time; a thermometer measures temperature."},
{q:"Wheel is to car as sail is to …", opts:["wind","boat","mast","rope"], a:1, ex:"A wheel helps a car move; a sail helps a boat move."},
{q:"What comes next in this sequence?  Y,  U,  Q,  M,  ( ? )", opts:["I","J","K","H"], a:0, ex:"Each letter jumps back four places: M(−4)=I."},
{q:"What comes next in this sequence?  AB,  BD,  CF,  DH,  ( ? )", opts:["EJ","EI","FJ","EK"], a:0, ex:"The first letter goes up by one (A,B,C,D,E) and the second goes up by two (B,D,F,H,J): EJ."},
{q:"In a secret code, TRAIN is written as VTCKP. How would BRAKE be written in the same code?", opts:["DTCMG","CSBLF","DTCLG","DUCMG"], a:0, ex:"Each letter moves forward two places: B→D, R→T, A→C, K→M, E→G, giving DTCMG."},
{q:"In a code, A=1, B=2, C=3 and so on. 13-15-21-19-5 spells MOUSE. What does 8-15-21-19-5 spell?", opts:["HOUSE","MOUSE","HORSE","HOSES"], a:0, ex:"8=H, 15=O, 21=U, 19=S, 5=E, spelling HOUSE."},
{q:"A four-letter word is hidden between two words in this sentence:  \"Give me at least three sweets.\"  Which word is it?", opts:["meat","meet","mear","mead"], a:0, ex:"The end of 'me' and start of 'at least' spell M-E-A-T: 'm(e at) least'."},
{q:"A four-letter word is hidden between two words in this sentence:  \"The dog rushed to the door.\"  Which word is it?", opts:["grum","grus","grut","grub"], a:1, ex:"The end of 'dog' and start of 'rushed' spell G-R-U-S: 'do(g rus)hed'."},
{q:"Which word is the odd one out?", opts:["thumb","finger","glove","wrist","palm"], a:2, ex:"A glove is worn on the hand; all the others are parts of the hand or arm."},
{q:"Which word is the odd one out?", opts:["car","bus","road","train","lorry"], a:2, ex:"A road is something you travel on; all the others are vehicles."},
{q:"Which word can go in front of both FALL and FLAKE to make two new words?", opts:["rain","snow","water","ice"], a:1, ex:"SNOWFALL and SNOWFLAKE are both real words."},
{q:"Which word fits both meanings?  \"the middle of an apple\"  and  \"the most important part of something\"", opts:["seed","core","heart","centre"], a:1, ex:"The CORE is the middle of an apple, and the CORE of something is its most important part."}
]);
