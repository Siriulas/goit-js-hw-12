import{S as u,i as f}from"./assets/vendor-0fc460d7.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();function p(e){return fetch(`https://pixabay.com/api/?key=44807177-c49104cccf7249c598a5adf77&q=${e}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>r.hits).catch(r=>{throw console.error("Fetch error: ",r),r})}let c;function m(e){const n=document.querySelector(".gallery");n.innerHTML=e.map(i=>h(i)).join(""),c?c.refresh():c=new u(".gallery a")}function h(e){return`
    <div class="image-card">
      <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
      </a>
      <div class="info">
       <div> <p>Likes: <p>${e.likes}</p></p></div>
        <div><p>Views: <p>${e.views}</p></p></div>
        <div><p>Comments: <p>${e.comments}</p></p></div>
       <div> <p>Downloads: <p>${e.downloads}</p></p></div>
      </div>
    </div>
  `}function l(){const e=document.querySelector(".gallery");e.innerHTML=""}function a(e){f.error({message:e,messageColor:"#fff",position:"topRight",color:"#ef4040"})}function y(){const e=document.createElement("div");e.classList.add("loader"),document.body.appendChild(e)}function d(){const e=document.querySelector(".loader");e&&e.remove()}const g=document.querySelector("#search-form"),v=document.querySelector("#search-input");g.addEventListener("submit",e=>{e.preventDefault();const n=v.value.trim();if(!n){a("Please enter a search term");return}l(),y(),p(n).then(i=>{d(),i.length===0?a("Sorry, there are no images matching your search query. Please try again!"):m(i)}).catch(i=>{d(),l(),a("Failed to fetch images. Please try again later."),console.error("Fetch error: ",i)})});
//# sourceMappingURL=commonHelpers.js.map
