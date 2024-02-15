import{a as h}from"./vendor-8cce9181.js";const g="/EnergyFlowWeb/assets/symbol-defs-251afd51.svg";document.querySelector(".results");document.querySelector(".backdrop");const b=document.querySelector(".modal");document.querySelector(".ex-add-favorite");let l;async function q(t){l=t;try{let r=function(s){const i=s.target.dataset.id||l,d=document.querySelector(".exercise-name").textContent,n=document.querySelector(".exercise-information .ex-block:nth-child(1) .exercise-label").textContent,x=document.querySelector(".exercise-information .ex-block:nth-child(2) .exercise-label").textContent,u=document.querySelector(".exercise-information .ex-block:nth-child(3) .exercise-label").textContent,m=document.querySelector(".exercise-information .ex-block:nth-child(4) .exercise-label").textContent,v=document.querySelector(".exercise-information .ex-block:nth-child(5) .exercise-label").textContent,f=document.querySelector(".exercise-gif img").src;let c=JSON.parse(localStorage.getItem("exerciseFavorites"))||[];const p=c.some(o=>o._id===i);if(p?s.target.textContent="Remove from favorites":s.target.textContent="Add to favorites",p)c=c.filter(o=>o._id!==i),localStorage.setItem("exerciseFavorites",JSON.stringify(c)),s.target.textContent="Removed from favorites!";else{const o={_id:i,name:d,bodyPart:n,equipment:x,time:u,target:m,burnedCalories:v,gifUrl:f};c.push(o),localStorage.setItem("exerciseFavorites",JSON.stringify(c))}};const e=await y(l);console.log(e),S(e),console.log(l),document.querySelector(".ex-add-favorite").addEventListener("click",r)}catch(e){console.error("Error fetching images:",e)}}async function y(t){console.log(t);try{const e="https://energyflow.b.goit.study/api",a="exercises",{data:r}=await h.get(`${e}/${a}/${t}`);return r}catch(e){console.error(e)}}function S({_id:t,bodyPart:e,equipment:a,time:r,target:s,burnedCalories:i,gifUrl:d,name:n,popularity:x,rating:u,description:m}){const v=`<div class="modal-container">
            <button class="modal-close-btn">
                <svg
                    class="modal-close-icon"
                    width="24"
                    height="24">
                    <use href="${g}#icon-x"></use>
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
                    src="${d}"
                    width="295"
                    height="258"
                    alt="${n}"
                  />
              </picture>
            </div>
            <div class="ex-content-container">
                <h3 class="exercise-name">${n}</h3>
               <div class="rating-container">
                <p class="ex-current-rating">${u}</p>
                <ul class="exercise-stars-list">
                     
                </ul>
                </div>
                <div class="exercise-information">
                    <div class="ex-block">
                        <span class="exercise-value">Target</span>
                        <span class="exercise-label">${s}</span>
                    </div>
                    <div class="ex-block">
                        <span class="exercise-value">Body part</span>
                        <span class="exercise-label">${e}</span>
                    </div>
                    <div class="ex-block">
                        <span class="exercise-value">Equipment</span>
                        <span class="exercise-label">${a}</span>
                    </div>
                    <div class="ex-block">
                        <span class="exercise-value">Popular</span>
                        <span class="exercise-label">${x}</span>
                    </div>
                    <div class="ex-block">
                        <span class="exercise-value">Burned calories</span>
                        <span class="exercise-label">${i}/3 min</span>
                    </div>

                    <p class="exercise-description">
                        ${m}
                    </p>

                    <div class="ex-add-btn-container">
                        <button type="button" data-id="${t}" class="ex-add-favorite">
                            Add to favorites
                            <svg
                                class="heart-svg"
                                width="18"
                                height="18">
                                <use href="${g}#icon-heart"></use>
                            </svg>
                        </button>
                         <button data-id="${t}" class="ex-rating-button">
                           Give a rating
                         </button>
                    </div>
                </div>
            </div>
        </div>
    `;b.innerHTML=v}document.querySelectorAll(".ex-rate-icon");export{q as createModalMenu};
//# sourceMappingURL=modal-menu-761ed87b.js.map
