import{a as S}from"./vendor-8cce9181.js";import{show as C,hide as $}from"./visibility-9f0213da.js";import{refs as o}from"./refs-20f87826.js";const k="/EnergyFlowWeb/assets/symbol-defs-544a0e4e.svg";let x;async function w(e){C(o.backdrop),x=e;try{let c=function(n){const r=n.target.dataset.id||x,d=document.querySelector(".exercise-name").textContent,v=document.querySelector(".exercise-information .ex-block:nth-child(1).exercise-label").textContent,u=document.querySelector(".exercise-information .ex-block:nth-child(2).exercise-label").textContent,m=document.querySelector(".exercise-information .ex-block:nth-child(3).exercise-label").textContent,p=document.querySelector(".exercise-information .ex-block:nth-child(4).exercise-label").textContent,f=document.querySelector(".exercise-information .ex-block:nth-child(5).exercise-label").textContent,b=document.querySelector(".exercise-gif img").src;let s=JSON.parse(localStorage.getItem("exerciseFavorites"))||[];const h=s.some(a=>a._id===r);if(h?n.target.textContent="Add to favorites":n.target.textContent="Remove from favorites",h)s=s.filter(a=>a._id!==r),localStorage.setItem("exerciseFavorites",JSON.stringify(s));else{const a={_id:r,name:d,bodyPart:v,equipment:u,time:m,target:p,burnedCalories:f,gifUrl:b};s.push(a),localStorage.setItem("exerciseFavorites",JSON.stringify(s))}};const t=await E(x);q(t),console.log(x),document.querySelector(".ex-add-favorite").addEventListener("click",c),document.querySelector(".modal-close-btn").addEventListener("click",l),document.addEventListener("keydown",escapeClickHandler)}catch(t){console.error("Error fetching images:",t)}}async function E(e){console.log(e);try{const t="https://energyflow.b.goit.study/api",i="exercises",{data:c}=await S.get(`${t}/${i}/${e}`);return c}catch(t){console.error(t)}}function q({_id:e,bodyPart:t,equipment:i,time:c,target:g,burnedCalories:n,gifUrl:r,name:d,popularity:v,rating:u,description:m}){let p=u.toFixed(1);const f=`
  <div class="modal-container">

    <button class="modal-close-btn">
      <svg
          class="modal-close-icon"
          width="24"
          height="24">
          <use href="${k}#icon-x"></use>
      </svg>
    </button>

    <img
      class="gif-ex"
      src="${r}"
      alt="${d}"
    />
  
    <div class="ex-box-info">

      <h3 class="ex-title">${d}</h3>

      <div class="ex-rating-container">
        <p class="ex-current-rating">${p}</p>
        <ul class="ex-stars-list">
          <li>
            <svg
              class="ex-rate-icon selected-stars"
              width="18"
              height="18"
              aria-label="rating icon"
            >
              <use href="../img/icons/symbol-defs.svg#icon-Star-1"></use>
            </svg>
          </li>
          <li>
            <svg
              class="ex-rate-icon selected-stars"
              width="18"
              height="18"
              aria-label="rating icon"
            >
              <use href="../img/icons/symbol-defs.svg#icon-Star-1"></use>
            </svg>
          </li>
          <li>
            <svg
              class="ex-rate-icon selected-stars"
              width="18"
              height="18"
              aria-label="rating icon"
            >
              <use href="../img/icons/symbol-defs.svg#icon-Star-1"></use>
            </svg>
          </li>
          <li>
            <svg
              class="ex-rate-icon selected-stars"
              width="18"
              height="18"
              aria-label="rating icon"
            >
              <use href="../img/icons/symbol-defs.svg#icon-Star-1"></use>
            </svg>
          </li>
          <li>
            <svg
              class="ex-rate-icon"
              width="18"
              height="18"
              aria-label="rating icon"
            >
              <use href="../img/icons/symbol-defs.svg#icon-Star-1"></use>
            </svg>
          </li>
        </ul>
      </div>

      <div class="ex-information">
        <div class="ex-block">
          <span class="ex-value">Target</span>
          <span class="ex-label">${g.charAt(0).toUpperCase()+g.slice(1)}</span>
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
          <span class="ex-label">${v}</span>
        </div>
        <div class="ex-block">
          <span class="ex-value">Burned calories</span>
          <span class="ex-label">${n}/${c} min</span>
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
            <use href="${k}#icon-heart"></use>
          </svg>
        </button>
        <button type="button" data-id="${e}" class="ex-rating-button">
          Give a rating
        </button>
      </div>  
    </div>
  </div>
    `;o.backdrop.innerHTML=f,b(Math.round(u));function b(s){const a=[...document.querySelectorAll(".ex-rate-icon")];for(let y=0;y<s;y+=1)a[y].classList.add(".selected-stars")}}function l(){$(o.backdrop),document.removeEventListener("click",l),document.removeEventListener("keydown",escapeClickHandler),document.contains(o.backdrop)&&o.backdrop.removeEventListener("click",B)}function B(e){e.target===o.backdrop&&l(),l()}function F(e){e.preventDefault(),e.key==="Escape"&&l()}const M=Object.freeze(Object.defineProperty({__proto__:null,onEscape:F,renderModalMenu:w},Symbol.toStringTag,{value:"Module"}));export{k as i,M as m,w as r};
//# sourceMappingURL=modal-menu-4ad1c539.js.map
