(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&u(s)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function u(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();const A=`<div id="content">\r
  <img src="" alt="Album cover" id="album-cover">\r
  <form id="artist-form">\r
    <input type="text" name="artist" id="artist">\r
    <button id="guess">Guess</button>\r
  </form>\r
  <button id="next">Next</button>\r
</div>`,g=document.querySelector("#app"),E="https://theaudiodb.com/api/v1/json/2/album.php?m=";let h="2"+r(1,4)+r(1,10)+r(0,10)+r(0,10)+r(0,10)+r(0,10),y=I(),b=null,o="",i=null,v=null,L=null,m=null,c=0,f=0,p=0;function I(){return h="2"+r(1,4)+r(1,10)+r(0,10)+r(0,10)+r(0,10)+r(0,10),E+h}function r(l,n){return Math.floor(Math.random()*(n-l))+l}async function a(){y=I();const n=await(await fetch(y)).json();let d=JSON.stringify(n,null,2);console.log(d),n!==null?(b.innerHTML=M(n),v=document.getElementById("artist-form"),document.getElementById("album-cover"),i=document.getElementById("artist"),L=document.getElementById("next"),document.getElementById("guess"),result=document.getElementById("result"),m=document.getElementById("artist-guess"),console.log(o),i.placeholder=o.replace(o,"_".repeat(o.length)),m.innerHTML="Artista: "+i.placeholder+" - Intentos restantes: "+(5-c),v.addEventListener("submit",u=>{if(u.preventDefault(),console.log(o),i.value==o)c=0,f++,result.innerHTML="Wins: "+f+" - Loses: "+p,a();else if(c<5){let t=i.placeholder.split("");for(let s=0;s<=o.length;s++){var e=Math.floor(Math.random()*(s+1));if(t[e]=="_"){t[e]=o[e],c++;break}else continue}i.placeholder=t.join(""),m.innerHTML="Artista: "+i.placeholder+" - Intentos restantes: "+(5-c)}else c=0,p++,result.innerHTML="Wins: "+f+" - Loses: "+p,a()}),L.addEventListener("click",()=>{try{a()}catch(u){console.log(u)}})):b.innerHTML="<p>Error desconocido</p>"}function M(l){if(l.album!=null){o=l.album[0].strArtist;let n=l.album[0].strAlbumThumb;return n===null?(a(),"<p>Album not found</p>"):`<img src="${n}" alt="Album cover" id="album-cover">
    <p id="artist-guess"></p>
    <form action="#" id="artist-form">
      <input type="text" name="artist" id="artist" value="">
      <button id="guess">Guess</button>
    </form>
    <button id="next">Next</button>`}else return a(),"<p>Album not found</p>"}function x(){if(!g)throw new Error("error");g.innerHTML=`<h1>Adivina el artista</h1>
  ${A}
  <p id="result"></p>`,b=document.querySelector("div#content"),a()}x();
