import{a as k}from"./vendor-8cce9181.js";import{show as S}from"./visibility-9f0213da.js";const h="/EnergyFlowWeb/assets/symbol-defs-251afd51.svg";document.querySelector(".results");const v=document.querySelector(".backdrop"),g=document.querySelector(".modal");let l;async function F(e){S(v),l=e;try{let r=function(i){const c=i.target.dataset.id||l,d=document.querySelector(".exercise-name").textContent,n=document.querySelector(".exercise-information .ex-block:nth-child(1) .exercise-label").textContent,u=document.querySelector(".exercise-information .ex-block:nth-child(2) .exercise-label").textContent,x=document.querySelector(".exercise-information .ex-block:nth-child(3) .exercise-label").textContent,m=document.querySelector(".exercise-information .ex-block:nth-child(4) .exercise-label").textContent,p=document.querySelector(".exercise-information .ex-block:nth-child(5) .exercise-label").textContent,y=document.querySelector(".exercise-gif img").src;let s=JSON.parse(localStorage.getItem("exerciseFavorites"))||[];const f=s.some(o=>o._id===c);if(f?i.target.textContent="Add to favorites":i.target.textContent="Remove from favorites",f)s=s.filter(o=>o._id!==c),localStorage.setItem("exerciseFavorites",JSON.stringify(s));else{const o={_id:c,name:d,bodyPart:n,equipment:u,time:x,target:m,burnedCalories:p,gifUrl:y};s.push(o),localStorage.setItem("exerciseFavorites",JSON.stringify(s))}};const t=await $(l);console.log(t),q(t),console.log(l),document.querySelector(".ex-add-favorite").addEventListener("click",r)}catch(t){console.error("Error fetching images:",t)}}async function $(e){console.log(e);try{const t="https://energyflow.b.goit.study/api",a="exercises",{data:r}=await k.get(`${t}/${a}/${e}`);return r}catch(t){console.error(t)}}function q({_id:e,bodyPart:t,equipment:a,time:r,target:i,burnedCalories:c,gifUrl:d,name:n,popularity:u,rating:x,description:m}){const p=`<div class="modal-container">
            <button class="modal-close-btn">
                <svg
                    class="modal-close-icon"
                    width="24"
                    height="24">
                    <use href="${h}#icon-x"></use>
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
                <p class="ex-current-rating">${x}</p>
                <ul class="exercise-stars-list">
                     
                </ul>
                </div>
                <div class="exercise-information">
                    <div class="ex-block">
                        <span class="exercise-value">Target</span>
                        <span class="exercise-label">${i}</span>
                    </div>
                    <div class="ex-block">
                        <span class="exercise-value">Body part</span>
                        <span class="exercise-label">${t}</span>
                    </div>
                    <div class="ex-block">
                        <span class="exercise-value">Equipment</span>
                        <span class="exercise-label">${a}</span>
                    </div>
                    <div class="ex-block">
                        <span class="exercise-value">Popular</span>
                        <span class="exercise-label">${u}</span>
                    </div>
                    <div class="ex-block">
                        <span class="exercise-value">Burned calories</span>
                        <span class="exercise-label">${c}/3 min</span>
                    </div>

                    <p class="exercise-description">
                        ${m}
                    </p>

                    <div class="ex-add-btn-container">
                        <button type="button" data-id="${e}" class="ex-add-favorite">
                            Add to favorites
                            <svg
                                class="heart-svg"
                                width="18"
                                height="18">
                                <use href="${h}#icon-heart"></use>
                            </svg>
                        </button>
                         <button data-id="${e}" class="ex-rating-button">
                           Give a rating
                         </button>
                    </div>
                </div>
            </div>
        </div>
    `;g.innerHTML=p}function w(e){e.target.closest(".modal")||b()}function C(e){e.preventDefault(),e.key==="Escape"&&b()}function b(){g.classList.add("visually-hidden"),v.classList.add("visually-hidden"),g.innerHTML="",document.removeEventListener("keydown",C),v.removeEventListener("click",w)}document.querySelectorAll(".ex-rate-icon");export{F as createModalMenu,C as onEscape};
//# sourceMappingURL=modal-menu-390e7289.js.map
