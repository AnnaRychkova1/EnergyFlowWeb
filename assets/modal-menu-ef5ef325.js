import{a as R}from"./vendor-8cce9181.js";import{showLoader as G,hideLoader as b,show as w,hide as M}from"./visibility-9f0213da.js";import{refs as s}from"./refs-8128e65f.js";let k,O;const f=document.querySelector(".overlay-rating"),C=document.querySelector(".modal-rating"),T=document.querySelector(".close-modal-rating-btn"),B=document.querySelector(".star-container"),q=document.querySelector(".send-rating-btn");function I(){k=document.querySelector(".ex-rating-button"),k.addEventListener("click",A),T.addEventListener("click",p),f.addEventListener("click",U),B.addEventListener("click",_),q.addEventListener("click",H)}function N(){k.removeEventListener("click",A),T.removeEventListener("click",p),f.removeEventListener("click",U),B.removeEventListener("click",_),q.removeEventListener("click",H)}function A(e){e.preventDefault(),document.removeEventListener("keydown",v),O=e.target.dataset.id,V(),J()}function J(){C.classList.remove("is-hidden"),f.style.display="block",s.backdrop.style.display="none"}function _(e){if(e.target.tagName==="INPUT"){const t=e.target.value,n=document.querySelector(".rating-value");n.textContent=Number(t).toFixed(1)}}function H(e){e.preventDefault(),G(s.loaderModal);const t=document.querySelector(".rating-form"),n=t.elements.star.value,a=t.elements.email.value.trim(),r=t.elements.review.value.trim(),u=/\S+@\S+\.\S+/;if(n===""){console.log("Please set your estimation!","ERROR"),b(s.loaderModal);return}if(a===""||!u.test(a)){console.log("Please enter your email!","ERROR"),b(s.loaderModal);return}z(n,a,r).then(function(o){console.log("Thank you! Your rating has been sent!","OK");const c=document.querySelector(".rating-value");c.textContent="0.0",t.reset(),p()}).catch(function(o){o.response.status===409?console.log("Such email already exists!"):o.response.status===404?console.log("Such exercise not found!"):console.log(o.message,"ERROR")}),b(s.loaderModal)}async function z(e,t,n){const a="https://energyflow.b.goit.study/api",r="exercises";return e=Number(e),R.patch(`${a}/${r}/${O}/rating/`,{rate:e,email:t,review:n})}function p(){C.classList.add("is-hidden"),f.style.display="none",s.backdrop.style.display="block",W(),document.addEventListener("keydown",v)}function V(){document.querySelector(".modal-container").classList.add("is-hidden")}function W(){document.querySelector(".modal-container").classList.remove("is-hidden")}function U(e){e.target.classList.contains("overlay-rating")&&p()}const te=Object.freeze(Object.defineProperty({__proto__:null,addGiveRatingListener:I,removeGiveRatingListener:N},Symbol.toStringTag,{value:"Module"})),i="/EnergyFlowWeb/assets/symbol-defs-2055adde.svg";let $;async function K(e){w(s.backdrop),M(s.scrollUpBtn),s.backdrop.innerHTML="",$=e;try{let r=function(u){const o=u.target.closest(".ex-add-favorite"),c=o.dataset.id,g=localStorage.getItem("favorites");if(g){const d=JSON.parse(g);if(d.some(({_id:l})=>l===c)){localStorage.setItem("favorites",JSON.stringify(d.filter(({_id:m})=>m!==c))),o.innerHTML=x();const l=document.getElementById("card-"+c);l&&(l.remove(),onClick(),showAlert("Card removed from favorites!"))}else localStorage.setItem("favorites",JSON.stringify([...d,t])),o.innerHTML=x("remove")}else localStorage.setItem("favorites",JSON.stringify([t])),o.innerHTML=x("remove")};const t=await Y($);Q(t),document.querySelector(".modal-close-btn").addEventListener("click",h),document.addEventListener("keydown",v),s.backdrop.addEventListener("click",D),I(),document.querySelector(".ex-add-favorite").addEventListener("click",r)}catch(t){console.error("Error fetching images:",t)}}async function Y(e){try{const t="https://energyflow.b.goit.study/api",n="exercises",{data:a}=await R.get(`${t}/${n}/${e}`);return a}catch(t){console.error(t)}}function Q({_id:e,bodyPart:t,equipment:n,time:a,target:r,burnedCalories:u,gifUrl:o,name:c,popularity:g,rating:d,description:S}){let l=!1;const m=localStorage.getItem("favorites");m&&(l=JSON.parse(m).some(E=>E._id===e));const F=`
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
          <span class="ex-label">${u}/${a} min</span>
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
    `;s.backdrop.innerHTML=F,P(Math.round(d));function P(L){const j=[...s.backdrop.querySelectorAll(".ex-rate-icon")];for(let y=0;y<L;y+=1)j[y].classList.add("selected-stars")}}function h(){w(s.scrollUpBtn),M(s.backdrop),s.backdrop.innerHTML="",N(),document.removeEventListener("click",h),document.removeEventListener("keydown",v),document.contains(s.backdrop)&&s.backdrop.removeEventListener("click",D)}function D(e){e.target===s.backdrop&&h()}function v(e){e.preventDefault(),e.key==="Escape"&&h()}function x(e="add"){return e==="add"?`Add to favorites
        <svg class="heart-svg" width="18" height="18">
          <use href="${i}#icon-heart"></use>
        </svg>`:`Remove from
        <svg class="heart-svg" width="18" height="18">
          <use href="${i}#icon-heart"></use>
        </svg>`}const se=Object.freeze(Object.defineProperty({__proto__:null,onEscape:v,renderModalMenu:K},Symbol.toStringTag,{value:"Module"}));export{te as g,i,se as m,K as r};
//# sourceMappingURL=modal-menu-ef5ef325.js.map
