import{a as x}from"./vendor-8cce9181.js";const n="/EnergyFlowWeb/assets/symbol-defs-251afd51.svg";document.querySelector(".results");const g=document.querySelector(".backdrop"),h=document.querySelector(".modal");document.querySelector(".ex-add-favorite");let c;async function y(s){c=s;try{let t=function(o){console.log(o),console.log(c)};const e=await m(c);console.log(e),b(e),console.log(c),document.querySelector(".ex-add-favorite").addEventListener("click",t),g.classList.remove("is-hidden")}catch(e){console.error("Error fetching images:",e)}}async function m(s){console.log(s);try{const e="https://energyflow.b.goit.study/api",a="exercises",{data:t}=await x.get(`${e}/${a}/${s}`);return t}catch(e){console.error(e)}}function b({_id:s,bodyPart:e,equipment:a,time:t,target:o,burnedCalories:r,gifUrl:l,name:i,popularity:d,rating:u,description:p}){const v=`<div class="modal-container">
            <button class="modal-close-btn">
                <svg
                    class="modal-close-icon"
                    width="24"
                    height="24">
                    <use href="${n}#icon-x"></use>
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
                    src="${l}"
                    width="295"
                    height="258"
                    alt="${i}"
                  />
              </picture>
            </div>
            <div class="ex-content-container">
                <h3 class="exercise-name">${i}</h3>
               <div class="rating-container">
                <p class="ex-current-rating">${u}</p>
                <ul class="exercise-stars-list">
                     
                </ul>
                </div>
                <div class="exercise-information">
                    <div class="ex-block">
                        <span class="exercise-value">Target</span>
                        <span class="exercise-label">${o}</span>
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
                        <span class="exercise-label">${d}</span>
                    </div>
                    <div class="ex-block">
                        <span class="exercise-value">Burned calories</span>
                        <span class="exercise-label">${r}/3 min</span>
                    </div>

                    <p class="exercise-description">
                        ${p}
                    </p>

                    <div class="ex-add-btn-container">
                        <button type="button" data-id="${s}" class="ex-add-favorite">
                            Add to favorites
                            <svg
                                class="heart-svg"
                                width="18"
                                height="18">
                                <use href="${n}#icon-heart"></use>
                            </svg>
                        </button>
                         <button data-id="${s}" class="ex-rating-button">
                           Give a rating
                         </button>
                    </div>
                </div>
            </div>
        </div>
    `;h.innerHTML=v}document.querySelectorAll(".ex-rate-icon");export{y as createModalMenu};
//# sourceMappingURL=modal-menu-dfca6fcc.js.map
