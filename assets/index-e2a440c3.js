(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();const A=`<div id="content">\r
  <img src="" alt="Album cover" id="album-cover">\r
  <form id="artist-form">\r
    <input type="text" name="artist" id="artist">\r
    <button id="guess">Guess</button>\r
  </form>\r
  <button id="next">Next</button>\r
</div>`,b=document.querySelector("#app"),E="https://theaudiodb.com/api/v1/json/2/album.php?m=";let g="2"+r(1,4)+r(1,10)+r(0,10)+r(0,10)+r(0,10)+r(0,10),y=L(),p=null,o="",c=null,h=null,v=null,a=0,m=0,f=0;function L(){return g="2"+r(1,4)+r(1,10)+r(0,10)+r(0,10)+r(0,10)+r(0,10),E+g}function r(l,n){return Math.floor(Math.random()*(n-l))+l}async function u(){y=L();const n=await(await fetch(y)).json();let d=JSON.stringify(n,null,2);console.log(d),n!==null?(p.innerHTML=I(n),h=document.getElementById("artist-form"),document.getElementById("album-cover"),c=document.getElementById("artist"),v=document.getElementById("next"),document.getElementById("guess"),result=document.getElementById("result"),console.log(o),c.placeholder=o.replace(o,"_".repeat(o.length)),h.addEventListener("submit",s=>{if(s.preventDefault(),console.log(o),c.value==o)a=0,m++,result.innerHTML="Wins: "+m+" - Loses: "+f,u();else if(a<5){let t=c.placeholder.split("");for(let i=0;i<=o.length;i++){var e=Math.floor(Math.random()*(i+1));if(t[e]=="_"){t[e]=o[e],a++;break}else continue}c.placeholder=t.join("")}else a=0,f++,result.innerHTML="Wins: "+m+" - Loses: "+f,u()}),v.addEventListener("click",()=>{try{u()}catch(s){console.log(s)}})):p.innerHTML="<p>Error desconocido</p>"}function I(l){if(l.album!=null){o=l.album[0].strArtist;let n=l.album[0].strAlbumThumb;return n===null?(u(),"<p>Album not found</p>"):`<img src="${n}" alt="Album cover" id="album-cover">
    <form action="#" id="artist-form">
      <input type="text" name="artist" id="artist" value="">
      <button id="guess">Guess</button>
    </form>
    <button id="next">Next</button>`}else return u(),"<p>Album not found</p>"}function M(){if(!b)throw new Error("error");b.innerHTML=`<h1>Adivina el artista</h1>
  ${A}
  <p id="result"></p>`,p=document.querySelector("div#content"),u()}M();
