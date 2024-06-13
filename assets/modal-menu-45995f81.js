import{a as M}from"./vendor-8cce9181.js";import{showLoader as J,hideLoader as v,hide as S,show as O}from"./visibility-9f0213da.js";import{refs as n}from"./refs-83aa709d.js";let k,C;const p=document.querySelector(".overlay-rating"),T=document.querySelector(".modal-rating"),q=document.querySelector(".close-modal-rating-btn"),B=document.querySelector(".star-container"),I=document.querySelector(".send-rating-btn");function N(){k=document.querySelector(".ex-rating-button"),k.addEventListener("click",A),q.addEventListener("click",h),p.addEventListener("click",P),B.addEventListener("click",F),I.addEventListener("click",H)}function _(){k.removeEventListener("click",A),q.removeEventListener("click",h),p.removeEventListener("click",P),B.removeEventListener("click",F),I.removeEventListener("click",H)}function A(e){e.preventDefault(),document.removeEventListener("keydown",g),C=e.target.dataset.id,W(),z()}function z(){T.classList.remove("is-hidden"),p.style.display="block",n.backdrop.style.display="none"}function F(e){if(e.target.tagName==="INPUT"){const t=e.target.value,o=document.querySelector(".rating-value");o.textContent=Number(t).toFixed(1)}}function H(e){e.preventDefault(),J(n.loaderModal);const t=document.querySelector(".rating-form"),o=t.elements.star.value,s=t.elements.email.value.trim(),i=t.elements.review.value.trim(),u=/\S+@\S+\.\S+/;if(o===""){console.log("Please set your estimation!","ERROR"),v(n.loaderModal);return}if(s===""||!u.test(s)){console.log("Please enter your email!","ERROR"),v(n.loaderModal);return}if(i===""){console.log("Please enter your review!","ERROR"),v(n.loaderModal);return}V(o,s,i).then(function(a){console.log("Thank you! Your rating has been sent!","OK");const c=document.querySelector(".rating-value");c.textContent="0.0",t.reset(),h()}).catch(function(a){a.response.status===409?console.log("Such email already exists!"):a.response.status===404?console.log("Such exercise not found!"):console.log(a.message,"ERROR")}),v(n.loaderModal)}async function V(e,t,o){const s="https://energyflow.b.goit.study/api",i="exercises";return e=Number(e),M.patch(`${s}/${i}/${C}/rating/`,{rate:e,email:t,review:o})}function h(){S(T),p.style.display="none",n.backdrop.style.display="flex",K(),document.addEventListener("keydown",g)}function W(){document.querySelector(".modal-container").classList.add("is-hidden")}function K(){document.querySelector(".modal-container").classList.remove("is-hidden")}function P(e){e.target.classList.contains("overlay-rating")&&h()}const ne=Object.freeze(Object.defineProperty({__proto__:null,addGiveRatingListener:N,removeGiveRatingListener:_},Symbol.toStringTag,{value:"Module"})),r="/EnergyFlowWeb/assets/symbol-defs-b9bca9d4.svg";let $;const w=document.querySelector(".ex-add-favorite");async function Y(e){O(n.backdrop),S(n.scrollUpBtn),v(n.loaderModal),n.backdrop.innerHTML="",$=e;try{let i=function(u){const a=u.target.closest(".ex-add-favorite"),c=a.dataset.id,m=localStorage.getItem("favorites");if(m){const d=JSON.parse(m);if(d.some(({_id:l})=>l===c)){localStorage.setItem("favorites",JSON.stringify(d.filter(({_id:f})=>f!==c))),a.innerHTML=x();const l=document.getElementById("card-"+c);l&&l.remove()}else localStorage.setItem("favorites",JSON.stringify([...d,t])),a.innerHTML=x("remove")}else localStorage.setItem("favorites",JSON.stringify([t])),a.innerHTML=x("remove")};const t=await Q($);X(t),document.querySelector(".modal-close-btn").addEventListener("click",y),document.addEventListener("keydown",g),n.backdrop.addEventListener("click",U),N();const s=document.querySelector(".ex-add-favorite");document.contains(s)&&s.addEventListener("click",i)}catch(t){console.error("Error fetching cards:",t)}}async function Q(e){try{const t="https://energyflow.b.goit.study/api",o="exercises",{data:s}=await M.get(`${t}/${o}/${e}`);return s}catch(t){console.error(t)}}function X({_id:e,bodyPart:t,equipment:o,time:s,target:i,burnedCalories:u,gifUrl:a,name:c,popularity:m,rating:d,description:L}){let l=!1;const f=localStorage.getItem("favorites");f&&(l=JSON.parse(f).some(R=>R._id===e));const D=`
  <div class="modal-container">

    <button class="modal-close-btn">
      <svg
          class="modal-close-icon"
          width="24"
          height="24">
          <use href="${r}#icon-x"></use>
      </svg>
    </button>

    <img
      class="gif-ex"
      src="${a}"
      alt="${c}"
    />
  
    <div class="ex-box-info">

      <h3 class="ex-title">${c}</h3>

      <div class="ex-rating-container">
        <p class="ex-current-rating">${d.toFixed(1)}</p>
        <ul class="ex-stars-list">
          <li>
             <svg
              class="ex-rate-icon"
              width="18"
              height="18">
              <use href="${r}#icon-Star-1"></use>
            </svg>
          </li>
          <li>
            <svg
              class="ex-rate-icon"
              width="18"
              height="18">
              <use href="${r}#icon-Star-1"></use>
            </svg>
          </li>
          <li>
             <svg
              class="ex-rate-icon"
              width="18"
              height="18">
              <use href="${r}#icon-Star-1"></use>
            </svg>
          </li>
          <li>
             <svg
              class="ex-rate-icon"
              width="18"
              height="18">
              <use href="${r}#icon-Star-1"></use>
            </svg>
          </li>
          <li>
             <svg
              class="ex-rate-icon"
              width="18"
              height="18">
              <use href="${r}#icon-Star-1"></use>
            </svg>
          </li>
        </ul>
      </div>

      <div class="ex-information">
        <div class="ex-block">
          <span class="ex-value">Target</span>
          <span class="ex-label">${i.charAt(0).toUpperCase()+i.slice(1)}</span>
        </div>
        <div class="ex-block">
          <span class="ex-value">Body part</span>
          <span class="ex-label">${t.charAt(0).toUpperCase()+t.slice(1)}</span>
        </div>
        <div class="ex-block">
          <span class="ex-value">Equipment</span>
          <span class="ex-label">${o.charAt(0).toUpperCase()+o.slice(1)}</span>
        </div>
        <div class="ex-block">
          <span class="ex-value">Popular</span>
          <span class="ex-label">${m}</span>
        </div>
        <div class="ex-block">
          <span class="ex-value">Burned calories</span>
          <span class="ex-label">${u}/${s} min</span>
        </div>
      </div>

      <div class="ex-modal-container-text"">
        <p class="ex-description">${L}</p>
      </div>

      <div class="ex-add-btn-container">
        <button type="button" data-id="${e}" class="ex-add-favorite">
             ${l?"Remove from":"Add to favorites"}
          <svg
            class="heart-svg"
            width="18"
            height="16">
            <use href="${r}#icon-heart"></use>
          </svg>
        </button>
        <button type="button" data-id="${e}" class="ex-rating-button">
          Give a rating
        </button>
      </div>  
    </div>
  </div>
    `;n.backdrop.innerHTML=D,j(Math.round(d));function j(E){const G=[...n.backdrop.querySelectorAll(".ex-rate-icon")];for(let b=0;b<E;b+=1)G[b].classList.add("selected-stars")}}function y(){O(n.scrollUpBtn),S(n.backdrop),n.backdrop.innerHTML="",_(),document.removeEventListener("click",y),document.removeEventListener("keydown",g),document.contains(w)&&w.removeEventListener("click",addToFavoriteOnClick),document.contains(n.backdrop)&&n.backdrop.removeEventListener("click",U)}function U(e){e.target===n.backdrop&&y()}function g(e){e.preventDefault(),e.key==="Escape"&&y()}function x(e="add"){return e==="add"?`Add to favorites
        <svg class="heart-svg" width="18" height="18">
          <use href="${r}#icon-heart"></use>
        </svg>`:`Remove from
        <svg class="heart-svg" width="18" height="18">
          <use href="${r}#icon-heart"></use>
        </svg>`}const oe=Object.freeze(Object.defineProperty({__proto__:null,onEscape:g,renderModalMenu:Y},Symbol.toStringTag,{value:"Module"}));export{ne as g,r as i,oe as m,Y as r};
//# sourceMappingURL=modal-menu-45995f81.js.map
