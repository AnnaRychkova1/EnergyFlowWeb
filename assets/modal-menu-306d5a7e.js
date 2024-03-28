import{a as R}from"./vendor-8cce9181.js";import{showLoader as U,hideLoader as b,show as j,hide as G}from"./visibility-9f0213da.js";import{refs as s}from"./refs-20f87826.js";let k,w;const f=document.querySelector(".overlay-rating"),M=document.querySelector(".modal-rating"),O=document.querySelector(".close-modal-rating-btn"),C=document.querySelector(".star-container"),T=document.querySelector(".send-rating-btn");function q(){k=document.querySelector(".ex-rating-button"),k.addEventListener("click",B),O.addEventListener("click",p),f.addEventListener("click",_),C.addEventListener("click",N),T.addEventListener("click",A)}function I(){k.removeEventListener("click",B),O.removeEventListener("click",p),f.removeEventListener("click",_),C.removeEventListener("click",N),T.removeEventListener("click",A)}function B(e){e.preventDefault(),document.removeEventListener("keydown",v),w=e.target.dataset.id,V(),J()}function J(){M.classList.remove("is-hidden"),f.style.display="block",s.backdrop.style.display="none"}function N(e){if(e.target.tagName==="INPUT"){const t=e.target.value,n=document.querySelector(".rating-value");n.textContent=Number(t).toFixed(1)}}function A(e){e.preventDefault(),U(s.loaderModal);const t=document.querySelector(".rating-form"),n=t.elements.star.value,o=t.elements.email.value.trim(),r=t.elements.review.value.trim(),u=/\S+@\S+\.\S+/;if(n===""){console.log("Please set your estimation!","ERROR"),b(s.loaderModal);return}if(o===""||!u.test(o)){console.log("Please enter your email!","ERROR"),b(s.loaderModal);return}z(n,o,r).then(function(a){console.log("Thank you! Your rating has been sent!","OK");const c=document.querySelector(".rating-value");c.textContent="0.0",t.reset(),p()}).catch(function(a){a.response.status===409?console.log("Such email already exists!"):a.response.status===404?console.log("Such exercise not found!"):console.log(a.message,"ERROR")}),b(s.loaderModal)}async function z(e,t,n){const o="https://energyflow.b.goit.study/api",r="exercises";return e=Number(e),R.patch(`${o}/${r}/${w}/rating/`,{rate:e,email:t,review:n})}function p(){M.classList.add("is-hidden"),f.style.display="none",s.backdrop.style.display="block",W(),document.addEventListener("keydown",v)}function V(){document.querySelector(".modal-container").classList.add("is-hidden")}function W(){document.querySelector(".modal-container").classList.remove("is-hidden")}function _(e){e.target.classList.contains("overlay-rating")&&p()}const te=Object.freeze(Object.defineProperty({__proto__:null,addGiveRatingListener:q,removeGiveRatingListener:I},Symbol.toStringTag,{value:"Module"})),i="/EnergyFlowWeb/assets/symbol-defs-544a0e4e.svg";let $;async function K(e){j(s.backdrop),s.backdrop.innerHTML="",$=e;try{let r=function(u){const a=u.target.closest(".ex-add-favorite"),c=a.dataset.id,g=localStorage.getItem("favorites");if(g){const d=JSON.parse(g);if(d.some(({_id:l})=>l===c)){localStorage.setItem("favorites",JSON.stringify(d.filter(({_id:m})=>m!==c))),a.innerHTML=x();const l=document.getElementById("card-"+c);l&&(l.remove(),onClick(),showAlert("Card removed from favorites!"))}else localStorage.setItem("favorites",JSON.stringify([...d,t])),a.innerHTML=x("remove")}else localStorage.setItem("favorites",JSON.stringify([t])),a.innerHTML=x("remove")};const t=await Y($);Q(t),document.querySelector(".modal-close-btn").addEventListener("click",h),document.addEventListener("keydown",v),s.backdrop.addEventListener("click",H),q(),document.querySelector(".ex-add-favorite").addEventListener("click",r)}catch(t){console.error("Error fetching images:",t)}}async function Y(e){try{const t="https://energyflow.b.goit.study/api",n="exercises",{data:o}=await R.get(`${t}/${n}/${e}`);return o}catch(t){console.error(t)}}function Q({_id:e,bodyPart:t,equipment:n,time:o,target:r,burnedCalories:u,gifUrl:a,name:c,popularity:g,rating:d,description:S}){let l=!1;const m=localStorage.getItem("favorites");m&&(l=JSON.parse(m).some(E=>E._id===e));const D=`
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
          <span class="ex-label">${t.charAt(0).toUpperCase()+t.slice(1)}</span>
        </div>
        <div class="ex-block">
          <span class="ex-value">Equipment</span>
          <span class="ex-label">${n.charAt(0).toUpperCase()+n.slice(1)}</span>
        </div>
        <div class="ex-block">
          <span class="ex-value">Popular</span>
          <span class="ex-label">${g}</span>
        </div>
        <div class="ex-block">
          <span class="ex-value">Burned calories</span>
          <span class="ex-label">${u}/${o} min</span>
        </div>
      </div>

      <div class="ex-modal-container-text"">
        <p class="ex-description">${S}</p>
      </div>

      <div class="ex-add-btn-container">
        <button type="button" data-id="${e}" class="ex-add-favorite">
             ${l?"Remove from":"Add to favorites"}
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
    `;s.backdrop.innerHTML=D,F(Math.round(d));function F(L){const P=[...s.backdrop.querySelectorAll(".ex-rate-icon")];for(let y=0;y<L;y+=1)P[y].classList.add("selected-stars")}}function h(){G(s.backdrop),s.backdrop.innerHTML="",I(),document.removeEventListener("click",h),document.removeEventListener("keydown",v),document.contains(s.backdrop)&&s.backdrop.removeEventListener("click",H)}function H(e){e.target===s.backdrop&&h()}function v(e){e.preventDefault(),e.key==="Escape"&&h()}function x(e="add"){return e==="add"?`Add to favorites
        <svg class="heart-svg" width="18" height="18">
          <use href="${i}#icon-heart"></use>
        </svg>`:`Remove from
        <svg class="heart-svg" width="18" height="18">
          <use href="${i}#icon-heart"></use>
        </svg>`}const se=Object.freeze(Object.defineProperty({__proto__:null,onEscape:v,renderModalMenu:K},Symbol.toStringTag,{value:"Module"}));export{te as g,i,se as m,K as r};
//# sourceMappingURL=modal-menu-306d5a7e.js.map
