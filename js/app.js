const SUB={id:{name:"Bahasa Indonesia",char:"cat",...ID},en:{name:"Bahasa Inggris",char:"bear",...EN,note:"Kunci Bahasa Inggris disusun berdasarkan isi teks karena PDF-nya tidak memuat kunci."},mtk:{name:"Matematika",char:"bunny",...MTK}};
ID.Q.forEach((q,i)=>{q.c=CID[i]});
EN.Q.forEach((q,i)=>{q.c=CEN[i];q.x=XEN[i]});
const KEY="dedee-tercintaa-tka-v1",L="ABCDE",ROM=["I","II","III","IV"];
const CH=["pinter bangett dedee tercintaa","terus semangat sayang","dikit lagi yaa dede","abang bangga sama dede","dede pasti bisaaa"];
const P="M12 21s-8-5.3-8-11a4.6 4.6 0 0 1 8-3 4.6 4.6 0 0 1 8 3c0 5.7-8 11-8 11z";
const heart=c=>`<svg class="${c||"hi"}" viewBox="0 0 24 24" aria-hidden="true"><path d="${P}"/></svg>`;
const ico=d=>`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${d}"/></svg>`;
const IC={back:ico("M19 12H5m6-6-6 6 6 6"),next:ico("M5 12h14m-6-6 6 6-6 6"),bulb:ico("M9 18h6m-5 3h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"),x:ico("M6 6l12 12M18 6 6 18")};
const mk=()=>({ans:{},idx:0,done:false,res:null,best:null,clue:{}});
let S={id:mk(),en:mk(),mtk:mk()},sid="id",view="home";
try{let r=localStorage.getItem(KEY),o=null;if(r)o=JSON.parse(r);else{r=localStorage.getItem("dede-keysha-tka-v2");if(r)o=JSON.parse(r);else{r=localStorage.getItem("dede-tka-bahasa-indonesia-v1");if(r)o={id:JSON.parse(r)}}}if(o){S.id=Object.assign(mk(),o.id);S.en=Object.assign(mk(),o.en);S.mtk=Object.assign(mk(),o.mtk)}}catch(e){}
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}};
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
const nl=s=>esc(s).replace(/\n/g,"<br>");
const paras=s=>s.split("\n").map(x=>`<p>${esc(x)}</p>`).join("");
const LOADED=new Set();
function imgOk(e){LOADED.add(e.getAttribute("src"));e.parentNode.classList.add("ok")}
function imgErr(e){e.closest(".fig").classList.add("bad")}
const jn=q=>q.t=="pg"?"Pilihan Ganda":q.t=="pk"?"Pilihan Ganda Kompleks":q.cols?"Tabel Kategori":"Benar / Salah";
const ht=q=>q.t=="pg"?"Pilih satu jawaban yang paling tepat.":q.t=="pk"?"Pilih semua jawaban yang tepat. Boleh lebih dari satu.":q.cols?"Pilih satu kolom untuk setiap baris.":"Tentukan Benar atau Salah untuk setiap pernyataan.";
function isDone(id,i){const q=SUB[id].Q[i],a=S[id].ans[i];if(q.t=="pg")return typeof a=="number";if(q.t=="pk")return Array.isArray(a)&&a.length>0;return Array.isArray(a)&&q.o.every((_,j)=>a[j]===0||a[j]===1)}
function isRight(id,i){const q=SUB[id].Q[i],a=S[id].ans[i];if(!isDone(id,i))return false;if(q.t=="pg")return a===q.k;if(q.t=="pk")return a.slice().sort().join()==q.k.slice().sort().join();return q.k.every((v,j)=>a[j]===v)}
const nDone=id=>SUB[id].Q.reduce((n,_,i)=>n+(isDone(id,i)?1:0),0);
const nClue=id=>Object.values(S[id].clue).filter(v=>v>=1).length;
function key(id,i){const q=SUB[id].Q[i];if(q.t=="pg")return L[q.k];if(q.t=="pk")return q.k.map(j=>L[j]).join(", ");const c=q.cols||["Benar","Salah"];return q.k.map(v=>c[v?0:1]).join(", ")}
function infoGrid(P){return `<div class="info">`+P.info.map((x,k)=>`<div class="inf"><span class="no">${k+1}</span><div><b>${esc(x[0])}</b><p>${esc(x[1])}</p></div></div>`).join("")+`</div>`}
function pass(id,q){const P=SUB[id].PS[q.p];let h="";
if(P.intro)h+=`<p class="intro">${nl(P.intro)}</p>`;
if(P.t)h+=`<h3>${esc(P.t)}</h3>`;
if(P.img)h+=`<figure class="fig${P.tall?" tall":""}"><button type="button" class="zoom" data-a="zoom" data-src="${P.img}" data-alt="${esc(P.alt)}" aria-label="Perbesar gambar"><span class="shim${LOADED.has(P.img)?" ok":""}"><img src="${P.img}" alt="${esc(P.alt)}" onload="imgOk(this)" onerror="imgErr(this)"></span></button><figcaption class="mini">Ketuk gambar untuk memperbesar.</figcaption><p class="ierr">Gambar tidak bisa dimuat. Pastikan folder assets ikut diekstrak bersama index.html.</p></figure>`;
if(P.info)h+=P.img?`<details class="txtv"><summary>Lihat versi teks infografik</summary>${infoGrid(P)}</details>`:infoGrid(P);
h+=(P.p||[]).map(x=>`<p>${esc(x)}</p>`).join("");
if(P.v)h+=`<p class="poem">${P.v.map(esc).join("<br>")}</p>`;
if(P.tbl)h+=`<div class="tw"><table class="tb"><caption>${esc(P.tbl.cap)}</caption><tr>${P.tbl.h.map(x=>`<th>${esc(x)}</th>`).join("")}</tr>${P.tbl.r.map(r=>`<tr>${r.map(x=>`<td>${esc(x)}</td>`).join("")}</tr>`).join("")}</table></div>`;
if(P.n)h+=`<p class="nt">${esc(P.n)}</p>`;
if(P.src)h+=`<p class="src">${esc(P.src)}</p>`;
return h}
function qBody(id,i,rev){const q=SUB[id].Q[i],a=S[id].ans[i],cols=q.cols||["Benar","Salah"];let h=`<div class="q">${paras(q.q)}<p class="hint">${ht(q)}</p>`;
if(q.t=="bs"){h+=`<div class="tw"><table class="bs"><tr><th></th>${cols.map(c=>`<th>${esc(c)}</th>`).join("")}</tr>`+q.o.map((t,j)=>{const c=rev?(a&&a[j]===q.k[j]?"ok":"no"):"",lb=q.r?ROM[j]:j+1;return `<tr class="${c}"><td>${lb}. ${esc(t)}${rev?`<div class="mini">Kunci: ${esc(cols[q.k[j]?0:1])}</div>`:""}</td>`+[1,0].map(v=>`<td class="c"><input type="radio" name="r${j}" data-j="${j}" value="${v}" ${a&&a[j]===v?"checked":""} ${rev?"disabled":""} aria-label="${esc(cols[v?0:1])} untuk baris ${lb}"></td>`).join("")+`</tr>`}).join("")+`</table></div>`}
else h+=q.o.map((t,j)=>{const on=q.t=="pg"?a===j:Array.isArray(a)&&a.includes(j),ok=q.t=="pg"?q.k===j:q.k.includes(j),c="opt"+(on?" on":"")+(rev?(ok?" ok":on?" no":""):"");return `<label class="${c}"><input type="${q.t=="pg"?"radio":"checkbox"}" name="q" value="${j}" ${on?"checked":""} ${rev?"disabled":""}><b>${L[j]}</b><span>${nl(t)}</span></label>`}).join("");
return h+`</div>`}
function home(){
const fh=[[8,70,0,""],[30,12,1.4,"b"],[52,86,2.6,""],[72,30,.8,"b"],[90,64,3.4,""]].map(x=>`<svg class="fh ${x[3]}" style="left:${x[0]}%;top:${x[1]}%;animation-delay:${x[2]}s" viewBox="0 0 24 24" aria-hidden="true"><path d="${P}"/></svg>`).join("");
const tile=id=>{const s=S[id],d=SUB[id],n=nDone(id),p=n/d.Q.length;
return `<article class="tile glass t-${id} rv" style="--i:${{id:3,en:4,mtk:5}[id]}"><div class="peek">${ch(d.char)}</div><p class="tk">${d.Q.length} soal · ada tombol clue</p><h2>${d.name}</h2>
<div class="stats"><div><b>${s.res?s.res.nilai:"–"}</b><span>Nilai terakhir</span></div><div><b>${s.best!==null?s.best:"–"}</b><span>Nilai terbaik</span></div><div><b>${n}/${d.Q.length}</b><span>Terjawab</span></div></div>
<div class="pb" role="progressbar" aria-valuenow="${Math.round(p*100)}" aria-valuemin="0" aria-valuemax="100"><i style="width:100%;transform:scaleX(${p});transform-origin:left"></i></div>
<div class="row"><button class="btn pri" data-a="start" data-s="${id}">${s.done?"Kerjakan lagi dari awal":n?"Lanjutkan (soal "+(s.idx+1)+")":"Mulai belajar"}</button>${s.done?`<button class="btn" data-a="res" data-s="${id}">Lihat nilai dan pembahasan</button>`:""}${!s.done&&n?`<button class="btn" data-a="reset" data-s="${id}">Hapus jawaban</button>`:""}</div>${d.note?`<p class="mini">${d.note}</p>`:""}</article>`};
return `<main><section class="hero"><div class="hl"><p class="kick rv" style="--i:0">${heart()}buat dedee tercintaa</p><h1 class="msg rv" style="--i:1">semangat yaa dede sayang belajarnya abang tau dede pasti bisa dapat nilai yang terbaikkkk. semangat sayangg<span class="hrt">🤍</span></h1><p class="lead rv" style="--i:2">abang siapin soal-soal ini khusus buat dedee tercintaa, dikerjain pelan-pelan aja yaa sayang. kalau bingung, pencet tombol clue, nanti abang kasih petunjuk.</p><a class="btn pri cta rv" style="--i:2" href="#mapel">Pilih pelajaran</a></div>
<div class="stage rv" style="--i:2">${ch("cloud","c-cloud")}${ch("star","c-star")}${ch("bear","c-bear")}${ch("bunny","c-main")}${fh}</div></section>
<section class="mapel" id="mapel">${tile("id")}${tile("en")}${tile("mtk")}</section><p class="foot">dari abang, buat dedee tercintaa ${heart()}</p></main>`}
const pbox=(id,q)=>{const h=pass(id,q);return h?`<div class="pass">${h}</div>`:""};
const topic=q=>q.topic?`<span class="tag s">${esc(q.topic)}</span>`:"";
const MASC=["bunny","bear","cat","cloud","star"];
const mapHtml=()=>{const s=S[sid];return SUB[sid].Q.map((_,k)=>`<button class="mb ${k==s.idx?"cur":isDone(sid,k)?"dn":""}" data-a="jump" data-i="${k}" aria-label="Soal ${k+1}${isDone(sid,k)?", sudah dijawab":""}">${k+1}</button>`).join("")};
const pbarHtml=()=>{const n=nDone(sid),t=SUB[sid].Q.length;return `<div class="pb"><i style="width:100%;transform:scaleX(${n/t});transform-origin:left"></i></div><p class="mini">Terjawab ${n} dari ${t}. Jawabanmu tersimpan otomatis.</p>`};
const bubText=()=>{const s=S[sid];return isDone(sid,s.idx)?CH[s.idx%CH.length]:"ayo dedee tercintaa, pelan-pelan aja yaa"};
function qMain(){const s=S[sid],i=s.idx,q=SUB[sid].Q[i],op=s.clue[i]===1;
return `<div class="tags"><span class="tag">${jn(q)}</span><span class="tag s">${SUB[sid].name}</span>${topic(q)}${s.clue[i]?`<span class="tag c">clue dipakai</span>`:""}</div>${pbox(sid,q)}${qBody(sid,i,false)}<div class="clue"><button class="btn gold" data-a="clue" aria-expanded="${op}">${IC.bulb}${op?"Tutup clue":"Butuh clue?"}</button>${op?`<div class="cbox">${ch("bulb","cb")}<p><b>Clue dari abang</b>${esc(q.c)}</p></div>`:""}</div>`}
function quiz(){const s=S[sid],Q=SUB[sid].Q,i=s.idx,d=SUB[sid];
return `<main class="t-${sid}"><header class="qtop"><button class="btn ghost" data-a="home">${IC.back}Beranda</button><div class="qt"><b>${d.name}</b><span>Soal ${i+1} dari ${Q.length}</span></div></header>
<div class="qgrid"><section class="qmain glass"><div id="qmain">${qMain()}</div><div class="qnav"><button class="btn" data-a="prev" ${i?"":"disabled"}>${IC.back}Sebelumnya</button>${i<Q.length-1?`<button class="btn pri" data-a="next">Berikutnya${IC.next}</button>`:`<button class="btn pri" data-a="fin">Selesai dan lihat nilai</button>`}</div></section>
<aside class="qside"><div class="mascot">${ch(MASC[i%5],"mc")}<p class="bubble" id="bub" aria-live="polite">${bubText()}</p></div><div class="glass pnl"><div id="pbar">${pbarHtml()}</div><div class="map" id="map">${mapHtml()}</div><button class="btn text" data-a="fin">Selesai sekarang</button></div></aside></div></main>`}
const msg=n=>n>=80?"wihh dedee tercintaa pinter bangettt, abang bangga banget sayangg":n>=60?"udah bagus banget sayang, dikit lagi pasti sempurna yaa":"gapapa sayang, abang tetep bangga sama dede. kita coba lagi pelan-pelan yaa, dede pasti bisa";
function result(){const s=S[sid],d=SUB[sid],Q=d.Q,en=sid=="en";
const top=`<header class="qtop"><button class="btn ghost" data-a="home">${IC.back}Beranda</button><div class="qt"><b>${d.name}</b><span>Hasil latihan</span></div></header>`;
if(!s.res)return `<main class="t-${sid}">${top}<section class="glass empty">${ch("cloud","mc")}<h2>Belum ada nilai</h2><p>Kerjakan soalnya dulu, nanti nilainya muncul di sini.</p><button class="btn pri" data-a="start" data-s="${sid}">Mulai belajar</button></section></main>`;
const r=s.res,mc=r.nilai>=80?"bunny":r.nilai>=60?"bear":"cloud";
const sts=[[4,8,0],[70,4,1.3],[82,52,2.4]].map(x=>`<span class="st" style="left:${x[0]}%;top:${x[1]}%;animation-delay:${x[2]}s">${ch("star")}</span>`).join("");
return `<main class="t-${sid}">${top}<section class="glass score"><div><p class="mini" style="margin:0">Nilai dedee tercintaa</p><div class="n">${r.nilai}</div><p style="margin:6px 0 12px">Benar ${r.benar} dari ${Q.length} soal · Salah ${Q.length-r.benar} · Clue dipakai ${nClue(sid)}x</p><p class="m">${msg(r.nilai)}</p><p class="mini">Soal pilih-semua dan tabel dinilai benar jika semua pilihannya tepat.${en?" "+d.note:""}</p><div class="row"><button class="btn pri" data-a="start" data-s="${sid}">Kerjakan lagi</button></div></div><div class="cel">${sts}${ch(mc)}</div></section>
<div class="rv2">${Q.map((q,i)=>{const ok=isRight(sid,i);return `<article class="glass rcard"><div class="tags"><span class="tag">${jn(q)}</span><span class="tag s">${d.name}</span>${topic(q)}</div><h2>Nomor ${i+1}. ${isDone(sid,i)?(ok?"Benar":"Salah"):"Belum dijawab"}</h2>${pass(sid,q)?`<details><summary>Lihat teks soal</summary>${pbox(sid,q)}</details>`:""}${qBody(sid,i,true)}<div class="pem ${ok?"":"x"}"><p><b>Jawaban: ${key(sid,i)}</b></p><p><b>${en?"Alasan singkat:":"Pembahasan:"}</b></p>${paras(q.x)}</div></article>`}).join("")}</div></main>`}
function render(anim){const a=$("#app");a.className=anim?"enter":"";a.innerHTML=view=="home"?home():view=="quiz"?quiz():result()}
function go(v){view=v;render(true);window.scrollTo(0,0)}
function refresh(){$("#qmain").innerHTML=qMain();$("#map").innerHTML=mapHtml();$("#pbar").innerHTML=pbarHtml();$("#bub").textContent=bubText()}
function finish(){const Q=SUB[sid].Q,s=S[sid],un=Q.length-nDone(sid);if(un&&!confirm(`Masih ada ${un} soal belum dijawab. Tetap selesai dan lihat nilai?`))return;const b=Q.reduce((n,_,i)=>n+(isRight(sid,i)?1:0),0),nilai=Math.round(b/Q.length*100);s.done=true;s.res={benar:b,nilai};if(s.best===null||nilai>s.best)s.best=nilai;save();go("result")}
function fresh(){const b=S[sid];b.ans={};b.idx=0;b.done=false;b.clue={};save();go("quiz")}
function openZoom(src,alt){closeZoom();const d=document.createElement("div");d.className="lb";d.id="lb";d.setAttribute("role","dialog");d.setAttribute("aria-label","Gambar diperbesar");d.dataset.a="unzoom";d.innerHTML=`<img src="${src}" alt="${alt}"><button class="btn" type="button" data-a="unzoom" aria-label="Tutup">${IC.x}Tutup</button>`;document.body.appendChild(d);d.querySelector("button").focus()}
function closeZoom(){const d=$("#lb");if(d)d.remove()}
document.addEventListener("keydown",e=>{if(e.key=="Escape")closeZoom()});
document.addEventListener("click",e=>{const t=e.target.closest("[data-a]");if(!t)return;const a=t.dataset.a;if(a=="unzoom"){closeZoom();return}if(!$("#app").contains(t))return;e.preventDefault();if(t.dataset.s)sid=t.dataset.s;const s=S[sid];
if(a=="home")go("home");
else if(a=="start"){if(s.done){if(confirm("Mulai lagi dari awal? Jawaban sebelumnya dihapus, nilai terakhir dan nilai terbaik tetap tersimpan."))fresh()}else go("quiz")}
else if(a=="res")go("result");
else if(a=="reset"){if(confirm("Hapus semua jawaban yang sudah tersimpan untuk pelajaran ini?")){s.ans={};s.idx=0;s.clue={};save();render()}}
else if(a=="jump"){s.idx=+t.dataset.i;save();render(true);window.scrollTo(0,0)}
else if(a=="prev"&&s.idx>0){s.idx--;save();render(true);window.scrollTo(0,0)}
else if(a=="next"&&s.idx<SUB[sid].Q.length-1){s.idx++;save();render(true);window.scrollTo(0,0)}
else if(a=="clue"){s.clue[s.idx]=s.clue[s.idx]===1?2:1;save();refresh()}
else if(a=="zoom")openZoom(t.dataset.src,t.dataset.alt)
else if(a=="fin")finish()});
document.addEventListener("change",e=>{if(view!="quiz"||e.target.tagName!="INPUT")return;const s=S[sid],i=s.idx,q=SUB[sid].Q[i],v=e.target;
if(q.t=="pg")s.ans[i]=+v.value;
else if(q.t=="pk"){const st=new Set(s.ans[i]||[]);v.checked?st.add(+v.value):st.delete(+v.value);s.ans[i]=[...st].sort()}
else{const a=Array.isArray(s.ans[i])?s.ans[i].slice():q.o.map(()=>null);a[+v.dataset.j]=+v.value;s.ans[i]=a}
save();refresh()});
render(true);
