import{a as T}from"./vendor-fd853f38.js";import{refs as t}from"./refs-89afcfb6.js";import{showLoader as S,hideLoader as L,hide as E,show as O}from"./visibility-9f0213da.js";import{errorResult as c,successResult as V}from"./iziToast-3e8613ac.js";const i="/EnergyFlowWeb/assets/symbol-defs-1f3e8c1b.svg";let k,B;const p=document.querySelector(".overlay-rating"),q=document.querySelector(".modal-rating"),I=document.querySelector(".close-modal-rating-btn"),N=document.querySelector(".star-container"),_=document.querySelector(".send-rating-btn");function A(){k=document.querySelector(".ex-rating-button"),k.addEventListener("click",H),I.addEventListener("click",h),p.addEventListener("click",D),N.addEventListener("click",P),_.addEventListener("click",U)}function F(){k.removeEventListener("click",H),I.removeEventListener("click",h),p.removeEventListener("click",D),N.removeEventListener("click",P),_.removeEventListener("click",U)}function H(e){e.preventDefault(),document.removeEventListener("keydown",f),B=e.target.dataset.id,K(),W()}function W(){q.classList.remove("is-hidden"),p.style.display="block",t.backdrop.style.display="none"}function P(e){if(e.target.tagName==="INPUT"){const n=e.target.value,s=document.querySelector(".rating-value");s.textContent=Number(n).toFixed(1)}}function U(e){e.preventDefault();const n=document.querySelector(".rating-form"),s=n.elements.star.value,a=n.elements.email.value.trim(),r=n.elements.review.value.trim(),v=/\S+@\S+\.\S+/;if(s===""){c("Please set your estimation!");return}if(a===""||!v.test(a)){c("Please enter your email!");return}if(r===""){c("Please enter your review!");return}Y(s,a,r).then(function(o){V("Thank you! Your rating has been sent!");const l=document.querySelector(".rating-value");l.textContent="0.0",n.reset(),h()}).catch(function(o){o.response.status===409?c("Such email already exists!"):o.response.status===404?c("Such exercise not found!"):c("Server Rating did not responded")})}async function Y(e,n,s){S(t.loaderModal);try{const a="https://energyflow.b.goit.study/api",r="exercises";return e=Number(e),T.patch(`${a}/${r}/${B}/rating/`,{rate:e,email:n,review:s})}catch{c("Server Rating did not responded")}finally{L(t.loaderModal)}}function h(){E(q),p.style.display="none",t.backdrop.style.display="flex",Q(),document.addEventListener("keydown",f)}function K(){document.querySelector(".modal-container").classList.add("is-hidden")}function Q(){document.querySelector(".modal-container").classList.remove("is-hidden")}function D(e){e.target.classList.contains("overlay-rating")&&h()}const oe=Object.freeze(Object.defineProperty({__proto__:null,addGiveRatingListener:A,removeGiveRatingListener:F},Symbol.toStringTag,{value:"Module"}));let R;const C=document.querySelector(".ex-add-favorite");async function X(e){O(t.backdrop),E(t.scrollUpBtn),t.backdrop.innerHTML="",R=e,S(t.loaderModal);try{let r=function(v){const o=v.target.closest(".ex-add-favorite"),l=o.dataset.id,m=localStorage.getItem("favorites");if(m){const u=JSON.parse(m);if(u.some(({_id:d})=>d===l)){localStorage.setItem("favorites",JSON.stringify(u.filter(({_id:g})=>g!==l))),o.innerHTML=b();const d=document.getElementById("card-"+l);d&&d.remove()}else localStorage.setItem("favorites",JSON.stringify([...u,n])),o.innerHTML=b("remove")}else localStorage.setItem("favorites",JSON.stringify([n])),o.innerHTML=b("remove")};const n=await Z(R);ee(n),document.querySelector(".modal-close-btn").addEventListener("click",y),document.addEventListener("keydown",f),t.backdrop.addEventListener("click",j),A();const a=document.querySelector(".ex-add-favorite");document.contains(a)&&a.addEventListener("click",r)}catch{c("Error creating Modal Menu. Try Later")}finally{L(t.loaderModal)}}async function Z(e){S(t.loaderModal);try{const n="https://energyflow.b.goit.study/api",s="exercises",{data:a}=await T.get(`${n}/${s}/${e}`);return a}catch{c("Server Exercises By Id did not responded")}finally{L(t.loaderModal)}}function ee({_id:e,bodyPart:n,equipment:s,time:a,target:r,burnedCalories:v,gifUrl:o,name:l,popularity:m,rating:u,description:$}){let d=!1;const g=localStorage.getItem("favorites");g&&(d=JSON.parse(g).some(w=>w._id===e));const G=`
  <div class="modal-container">

    <button class="modal-close-btn">
      <svg
          class="modal-close-icon"
          width="24"
          height="24">
          <use href="${i}#icon-x"></use>
      </svg>
    </button>

    <img
      class="gif-ex"
      src="${o}"
      alt="${l}"
    />
  
    <div class="ex-box-info">

      <h3 class="ex-title">${l}</h3>

      <div class="ex-rating-container">
        <p class="ex-current-rating">${u.toFixed(1)}</p>
        <ul class="ex-stars-list">
          <li>
             <svg
              class="ex-rate-icon"
              width="18"
              height="18">
              <use href="${i}#icon-Star-1"></use>
            </svg>
          </li>
          <li>
            <svg
              class="ex-rate-icon"
              width="18"
              height="18">
              <use href="${i}#icon-Star-1"></use>
            </svg>
          </li>
          <li>
             <svg
              class="ex-rate-icon"
              width="18"
              height="18">
              <use href="${i}#icon-Star-1"></use>
            </svg>
          </li>
          <li>
             <svg
              class="ex-rate-icon"
              width="18"
              height="18">
              <use href="${i}#icon-Star-1"></use>
            </svg>
          </li>
          <li>
             <svg
              class="ex-rate-icon"
              width="18"
              height="18">
              <use href="${i}#icon-Star-1"></use>
            </svg>
          </li>
        </ul>
      </div>

      <div class="ex-information">
        <div class="ex-block">
          <span class="ex-value">Target</span>
          <span class="ex-label">${r.charAt(0).toUpperCase()+r.slice(1)}</span>
        </div>
        <div class="ex-block">
          <span class="ex-value">Body part</span>
          <span class="ex-label">${n.charAt(0).toUpperCase()+n.slice(1)}</span>
        </div>
        <div class="ex-block">
          <span class="ex-value">Equipment</span>
          <span class="ex-label">${s.charAt(0).toUpperCase()+s.slice(1)}</span>
        </div>
        <div class="ex-block">
          <span class="ex-value">Popular</span>
          <span class="ex-label">${m}</span>
        </div>
        <div class="ex-block">
          <span class="ex-value">Burned calories</span>
          <span class="ex-label">${v}/${a} min</span>
        </div>
      </div>

      <div class="ex-modal-container-text"">
        <p class="ex-description">${$}</p>
      </div>

      <div class="ex-add-btn-container">
        <button type="button" data-id="${e}" class="ex-add-favorite">
             ${d?"Remove from":"Add to favorites"}
          <svg
            class="heart-svg"
            width="18"
            height="16">
            <use href="${i}#icon-heart"></use>
          </svg>
        </button>
        <button type="button" data-id="${e}" class="ex-rating-button">
          Give a rating
        </button>
      </div>  
    </div>
  </div>
    `;t.backdrop.innerHTML=G,J(Math.round(u));function J(M){const z=[...t.backdrop.querySelectorAll(".ex-rate-icon")];for(let x=0;x<M;x+=1)z[x].classList.add("selected-stars")}}function y(){O(t.scrollUpBtn),E(t.backdrop),t.backdrop.innerHTML="",F(),document.removeEventListener("click",y),document.removeEventListener("keydown",f),document.contains(C)&&C.removeEventListener("click",addToFavoriteOnClick),document.contains(t.backdrop)&&t.backdrop.removeEventListener("click",j)}function j(e){e.target===t.backdrop&&y()}function f(e){e.preventDefault(),e.key==="Escape"&&y()}function b(e="add"){return e==="add"?`Add to favorites
        <svg class="heart-svg" width="18" height="18">
          <use href="${i}#icon-heart"></use>
        </svg>`:`Remove from
        <svg class="heart-svg" width="18" height="18">
          <use href="${i}#icon-heart"></use>
        </svg>`}const re=Object.freeze(Object.defineProperty({__proto__:null,onEscape:f,renderModalMenu:X},Symbol.toStringTag,{value:"Module"}));export{oe as g,i,re as m,X as r};
//# sourceMappingURL=modal-menu-6599d7f5.js.map
