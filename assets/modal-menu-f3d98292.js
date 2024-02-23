import{a as $}from"./vendor-8cce9181.js";import{show as C,hide as E}from"./visibility-9f0213da.js";import{refs as c}from"./refs-20f87826.js";const k="/EnergyFlowWeb/assets/symbol-defs-544a0e4e.svg",S=document.querySelector(".modal");let g;async function I(e){C(c.backdrop),g=e;try{let l=function(a){const o=a.target.dataset.id||g,d=document.querySelector(".exercise-name").textContent,m=document.querySelector(".exercise-information .ex-block:nth-child(1).exercise-label").textContent,u=document.querySelector(".exercise-information .ex-block:nth-child(2).exercise-label").textContent,v=document.querySelector(".exercise-information .ex-block:nth-child(3).exercise-label").textContent,p=document.querySelector(".exercise-information .ex-block:nth-child(4).exercise-label").textContent,x=document.querySelector(".exercise-information .ex-block:nth-child(5).exercise-label").textContent,f=document.querySelector(".exercise-gif img").src;let t=JSON.parse(localStorage.getItem("exerciseFavorites"))||[];const h=t.some(i=>i._id===o);if(h?a.target.textContent="Add to favorites":a.target.textContent="Remove from favorites",h)t=t.filter(i=>i._id!==o),localStorage.setItem("exerciseFavorites",JSON.stringify(t));else{const i={_id:o,name:d,bodyPart:m,equipment:u,time:v,target:p,burnedCalories:x,gifUrl:f};t.push(i),localStorage.setItem("exerciseFavorites",JSON.stringify(t))}};const s=await q(g);console.log(s),L(s),console.log(g),document.querySelector(".ex-add-favorite").addEventListener("click",l),document.querySelector(".modal-close-btn").addEventListener("click",r),document.addEventListener("keydown",escapeClickHandler),c.backdrop.addEventListener("click",w)}catch(s){console.error("Error fetching images:",s)}}async function q(e){console.log(e);try{const s="https://energyflow.b.goit.study/api",n="exercises",{data:l}=await $.get(`${s}/${n}/${e}`);return l}catch(s){console.error(s)}}function L({_id:e,bodyPart:s,equipment:n,time:l,target:y,burnedCalories:a,gifUrl:o,name:d,popularity:m,rating:u,description:v}){let p=u.toFixed(1);const x=`<div class="modal-container">
            <button class="modal-close-btn">
                <svg
                    class="modal-close-icon"
                    width="24"
                    height="24">
                    <use href="${k}#icon-x"></use>
                </svg>
            </button>
            <div class="exercise-gif">
              <picture>
                <source
                  media="(max-width:767.98px)"
                  type="gif"
                  width="295"
                  height="258"
                  />
                <source
                  media="(min-width:768px)"
                  type="gif"
                  width="270"
                  height="259"
                  />
                  <img
                    class="gif-ex"
                    src="${o}"
                    width="295"
                    height="258"
                    alt="${d}"
                  />
              </picture>
              <div class="exercises-modal-content"></div>
            </div>
            <div class="ex-content-container">
                <h3 class="exercise-name">${d}</h3>
               <div class="rating-container">
                <p class="ex-current-rating">${p}</p>
                <ul class="exercise-stars-list">
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
                <div class="exercise-information">
                    <div class="ex-block">
                        <span class="exercise-value">Target</span>
                        <span class="exercise-label">${y}</span>
                    </div>
                    <div class="ex-block">
                        <span class="exercise-value">Body part</span>
                        <span class="exercise-label">${s}</span>
                    </div>
                    <div class="ex-block">
                        <span class="exercise-value">Equipment</span>
                        <span class="exercise-label">${n}</span>
                    </div>
                    <div class="ex-block">
                        <span class="exercise-value">Popular</span>
                        <span class="exercise-label">${m}</span>
                    </div>
                    <div class="ex-block">
                        <span class="exercise-value">Burned calories</span>
                        <span
class="exercise-label">${a}/3 min</span>
                    </div>

                    <p class="exercise-description">
                        ${v}
                    </p>

                    <div class="ex-add-btn-container">
                        <button type="button" data-id="${e}"
class="ex-add-favorite">
                            Add to favorites
                            <svg
                                class="heart-svg"
                                width="18"
                                height="18">
                                <use href="${k}#icon-heart"></use>
                            </svg>
                        </button>
                         <button type="button" data-id="${e}" class="ex-rating-button">
                           Give a rating
                         </button>
                    </div>
                </div>
            </div>
        </div>
    `;S.innerHTML=x,S.insertAdjacentHTML("beforeend",x),f(Math.round(u));function f(t){const i=[...document.querySelectorAll(".ex-rate-icon")];for(let b=0;b<t;b+=1)i[b].classList.add(".selected-stars")}}function r(){E(c.backdrop),document.removeEventListener("click",r),document.removeEventListener("keydown",escapeClickHandler),document.contains(c.backdrop)&&c.backdrop.removeEventListener("click",w)}function w(e){e.target===c.backdrop&&r(),r()}function M(e){e.preventDefault(),e.key==="Escape"&&r()}export{I as createModalMenu,M as onEscape};
//# sourceMappingURL=modal-menu-f3d98292.js.map
