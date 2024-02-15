import{a as $}from"./vendor-8cce9181.js";import{show as q,hide as w}from"./visibility-9f0213da.js";const b="/EnergyFlowWeb/assets/symbol-defs-251afd51.svg";document.querySelector(".results");const c=document.querySelector(".backdrop"),C=document.querySelector(".modal");let d;async function T(e){q(c),d=e;try{let a=function(o){const i=o.target.dataset.id||d,l=document.querySelector(".exercise-name").textContent,x=document.querySelector(".exercise-information .ex-block:nth-child(1) .exercise-label").textContent,m=document.querySelector(".exercise-information .ex-block:nth-child(2) .exercise-label").textContent,v=document.querySelector(".exercise-information .ex-block:nth-child(3) .exercise-label").textContent,p=document.querySelector(".exercise-information .ex-block:nth-child(4) .exercise-label").textContent,k=document.querySelector(".exercise-information .ex-block:nth-child(5) .exercise-label").textContent,S=document.querySelector(".exercise-gif img").src;let s=JSON.parse(localStorage.getItem("exerciseFavorites"))||[];const f=s.some(n=>n._id===i);if(f?o.target.textContent="Add to favorites":o.target.textContent="Remove from favorites",f)s=s.filter(n=>n._id!==i),localStorage.setItem("exerciseFavorites",JSON.stringify(s));else{const n={_id:i,name:l,bodyPart:x,equipment:m,time:v,target:p,burnedCalories:k,gifUrl:S};s.push(n),localStorage.setItem("exerciseFavorites",JSON.stringify(s))}};const t=await E(d);console.log(t),B(t),console.log(d),document.querySelector(".ex-add-favorite").addEventListener("click",a),document.querySelector(".modal-close-btn").addEventListener("click",u),document.addEventListener("keydown",y),c.addEventListener("click",h)}catch(t){console.error("Error fetching images:",t)}}async function E(e){console.log(e);try{const t="https://energyflow.b.goit.study/api",r="exercises",{data:a}=await $.get(`${t}/${r}/${e}`);return a}catch(t){console.error(t)}}function B({_id:e,bodyPart:t,equipment:r,time:a,target:g,burnedCalories:o,gifUrl:i,name:l,popularity:x,rating:m,description:v}){const p=`<div class="modal-container">
            <button class="modal-close-btn">
                <svg
                    class="modal-close-icon"
                    width="24"
                    height="24">
                    <use href="${b}#icon-x"></use>
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
                    src="${i}"
                    width="295"
                    height="258"
                    alt="${l}"
                  />
              </picture>
            </div>
            <div class="ex-content-container">
                <h3 class="exercise-name">${l}</h3>
               <div class="rating-container">
                <p class="ex-current-rating">${m}</p>
                <ul class="exercise-stars-list">
                     
                </ul>
                </div>
                <div class="exercise-information">
                    <div class="ex-block">
                        <span class="exercise-value">Target</span>
                        <span class="exercise-label">${g}</span>
                    </div>
                    <div class="ex-block">
                        <span class="exercise-value">Body part</span>
                        <span class="exercise-label">${t}</span>
                    </div>
                    <div class="ex-block">
                        <span class="exercise-value">Equipment</span>
                        <span class="exercise-label">${r}</span>
                    </div>
                    <div class="ex-block">
                        <span class="exercise-value">Popular</span>
                        <span class="exercise-label">${x}</span>
                    </div>
                    <div class="ex-block">
                        <span class="exercise-value">Burned calories</span>
                        <span class="exercise-label">${o}/3 min</span>
                    </div>

                    <p class="exercise-description">
                        ${v}
                    </p>

                    <div class="ex-add-btn-container">
                        <button type="button" data-id="${e}" class="ex-add-favorite">
                            Add to favorites
                            <svg
                                class="heart-svg"
                                width="18"
                                height="18">
                                <use href="${b}#icon-heart"></use>
                            </svg>
                        </button>
                         <button data-id="${e}" class="ex-rating-button">
                           Give a rating
                         </button>
                    </div>
                </div>
            </div>
        </div>
    `;C.innerHTML=p}function u(){w(c),document.removeEventListener("click",u),document.removeEventListener("keydown",y),document.contains(c)&&c.removeEventListener("click",h)}function h(e){e.target===c&&u()}function y(e){e.key==="Escape"&&u()}document.querySelectorAll(".ex-rate-icon");export{T as createModalMenu};
//# sourceMappingURL=modal-menu-4ed12095.js.map
