import{a as y}from"./vendor-8cce9181.js";import{show as S,hide as $}from"./visibility-9f0213da.js";import{refs as c}from"./refs-20f87826.js";const a="/EnergyFlowWeb/assets/symbol-defs-544a0e4e.svg";let v;async function C(e){S(c.backdrop),v=e;try{let r=function(n){const l=n.target.dataset.id||v,u=document.querySelector(".exercise-name").textContent,g=document.querySelector(".exercise-information .ex-block:nth-child(1).exercise-label").textContent,x=document.querySelector(".exercise-information .ex-block:nth-child(2).exercise-label").textContent,m=document.querySelector(".exercise-information .ex-block:nth-child(3).exercise-label").textContent,h=document.querySelector(".exercise-information .ex-block:nth-child(4).exercise-label").textContent,b=document.querySelector(".exercise-information .ex-block:nth-child(5).exercise-label").textContent,k=document.querySelector(".exercise-gif img").src;let o=JSON.parse(localStorage.getItem("exerciseFavorites"))||[];const p=o.some(s=>s._id===l);if(p?n.target.textContent="Add to favorites":n.target.textContent="Remove from favorites",p)o=o.filter(s=>s._id!==l),localStorage.setItem("exerciseFavorites",JSON.stringify(o));else{const s={_id:l,name:u,bodyPart:g,equipment:x,time:m,target:h,burnedCalories:b,gifUrl:k};o.push(s),localStorage.setItem("exerciseFavorites",JSON.stringify(o))}};const t=await w(v);E(t),console.log(v),document.querySelector(".ex-add-favorite").addEventListener("click",r),document.querySelector(".modal-close-btn").addEventListener("click",d),document.addEventListener("keydown",escapeClickHandler)}catch(t){console.error("Error fetching images:",t)}}async function w(e){console.log(e);try{const t="https://energyflow.b.goit.study/api",i="exercises",{data:r}=await y.get(`${t}/${i}/${e}`);return r}catch(t){console.error(t)}}function E({_id:e,bodyPart:t,equipment:i,time:r,target:f,burnedCalories:n,gifUrl:l,name:u,popularity:g,rating:x,description:m}){const h=`
  <div class="modal-container">

    <button class="modal-close-btn">
      <svg
          class="modal-close-icon"
          width="24"
          height="24">
          <use href="${a}#icon-x"></use>
      </svg>
    </button>

    <img
      class="gif-ex"
      src="${l}"
      alt="${u}"
    />
  
    <div class="ex-box-info">

      <h3 class="ex-title">${u}</h3>

      <div class="ex-rating-container">
        <p class="ex-current-rating">${x.toFixed(1)}</p>
        <ul class="ex-stars-list">
          <li>
             <svg
              class="ex-rate-icon"
              width="18"
              height="18">
              <use href="${a}#icon-Star-1"></use>
            </svg>
          </li>
          <li>
            <svg
              class="ex-rate-icon"
              width="18"
              height="18">
              <use href="${a}#icon-Star-1"></use>
            </svg>
          </li>
          <li>
             <svg
              class="ex-rate-icon"
              width="18"
              height="18">
              <use href="${a}#icon-Star-1"></use>
            </svg>
          </li>
          <li>
             <svg
              class="ex-rate-icon"
              width="18"
              height="18">
              <use href="${a}#icon-Star-1"></use>
            </svg>
          </li>
          <li>
             <svg
              class="ex-rate-icon"
              width="18"
              height="18">
              <use href="${a}#icon-Star-1"></use>
            </svg>
          </li>
        </ul>
      </div>

      <div class="ex-information">
        <div class="ex-block">
          <span class="ex-value">Target</span>
          <span class="ex-label">${f.charAt(0).toUpperCase()+f.slice(1)}</span>
        </div>
        <div class="ex-block">
          <span class="ex-value">Body part</span>
          <span class="ex-label">${t.charAt(0).toUpperCase()+t.slice(1)}</span>
        </div>
        <div class="ex-block">
          <span class="ex-value">Equipment</span>
          <span class="ex-label">${i.charAt(0).toUpperCase()+i.slice(1)}</span>
        </div>
        <div class="ex-block">
          <span class="ex-value">Popular</span>
          <span class="ex-label">${g}</span>
        </div>
        <div class="ex-block">
          <span class="ex-value">Burned calories</span>
          <span class="ex-label">${n}/${r} min</span>
        </div>
      </div>

      <p class="ex-description">${m}</p>

      <div class="ex-add-btn-container">
        <button type="button" data-id="${e}" class="ex-add-favorite">
          Add to favorites
          <svg
            class="heart-svg"
            width="18"
            height="16">
            <use href="${a}#icon-heart"></use>
          </svg>
        </button>
        <button type="button" data-id="${e}" class="ex-rating-button">
          Give a rating
        </button>
      </div>  
    </div>
  </div>
    `;c.backdrop.innerHTML=h,b(Math.round(x));function b(k){const p=[...c.backdrop.querySelectorAll(".ex-rate-icon")];for(let s=0;s<k;s+=1)p[s].classList.add("selected-stars")}}function d(){$(c.backdrop),document.removeEventListener("click",d),document.removeEventListener("keydown",escapeClickHandler),document.contains(c.backdrop)&&c.backdrop.removeEventListener("click",q)}function q(e){e.target===c.backdrop&&d(),d()}function B(e){e.preventDefault(),e.key==="Escape"&&d()}const T=Object.freeze(Object.defineProperty({__proto__:null,onEscape:B,renderModalMenu:C},Symbol.toStringTag,{value:"Module"}));export{a as i,T as m,C as r};
//# sourceMappingURL=modal-menu-3e25db67.js.map
