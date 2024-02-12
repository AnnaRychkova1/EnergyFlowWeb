import"./vendor-65c0bc71.js";import{s as c}from"./mainApi-88c0b17e.js";import{hide as f,show as v}from"./visibility-9f0213da.js";import{refs as a}from"./refs-53a62ef5.js";import"./isiToast-262f9325.js";const m=JSON.parse(localStorage.getItem("quoteResponse"));console.log(m);p();a.addToFavoritesBtn.addEventListener("click",g);async function g(o){o.preventDefault();const s=o.target.closest(".ex-add-btn"),e=s.dataset.id,i=localStorage.getItem("favorites");if(i){const r=JSON.parse(i);if(r.some(({_id:t})=>t===e))localStorage.setItem("favorites",JSON.stringify(r.filter(({_id:t})=>t!==e))),s.innerHTML=addInnerHTML();else{const t=await c(e);localStorage.setItem("favorites",JSON.stringify([...r,t])),s.innerHTML=addInnerHTML("remove")}}}async function p(o){if(a.favoritesGallery.innerHTML="",f(a.favoritesMessage),!localStorage.getItem("favorites")){v(a.favoritesMessage);return}try{const e=await JSON.parse(localStorage.getItem("favorites"));if(a.favoritesGallery.insertAdjacentHTML("afterbegin",d()),e>=9)u();else return}catch(e){console.error(e)}finally{console.log(),a.favoritesGallery.reset()}}function d({_id:o,bodyPart:s,name:e,target:i,burnedCalories:r,time:l}){const t=localStorage.getItem("favorites");return t&&JSON.parse(t).some(n=>n._id===o),`
           <ul class="favorites-gallery">
             <li class="favorites-gallery-item">
                 <span class="workout">workout</span>
                 <a class="favorites-remove" href="#">
                   <button class="favorites-remove-btn" type="button">
                     <img class="favorites-remove-icon" src="./img/icons/all icons/basket.svg" alt="remove-icon"/>
                   </button>
                 </a>
                 <a class="favorites-start" href="#">
                   <button class="favorites-start-btn" type="button">Start
                     <img class="favorites-start-icon" src="./img/icons/all icons/line.svg" alt="start-icon"/>
                   </button>
                 </a>
                 <img class="favorites-man-icon" src="../img/icons/all icons/Man.svg" alt="man-icon"/>
                 <h3 class="favorites-item-title">${e}</h3>
                 <ul class="favorites-gallery-info">
                   <li class="favorites-gallery-info-item">Burned calories: <span class="descr-span">${r} / ${l} min</span></li>
                   <li class="favorites-gallery-info-item">Body part: <span class="descr-span">${s}</span></li>
                   <li class="favorites-gallery-info-item">Target: <span class="descr-span">${i}</span></li>
                 </ul>
             </li>
           </ul>`}function u(){window.scrollBy({top:2*document.querySelector(".favorites-gallery-item").getBoundingClientRect().height,behavior:"smooth"})}
//# sourceMappingURL=favorites-7096c781.js.map
