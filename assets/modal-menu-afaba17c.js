import{a as g}from"./vendor-8cce9181.js";const v="/EnergyFlowWeb/assets/symbol-defs-251afd51.svg";document.querySelector(".results");const m=document.querySelector(".backdrop"),x=document.querySelector(".modal");document.querySelector(".ex-add-favorite");let o;async function y(s){o=s;try{let n=function(d){const a=JSON.parse(localStorage.getItem("favorites"))||[];if(console.log(a),a.some(t=>t._id===o)){const t=a.filter(l=>l._id!==o);localStorage.setItem("favorites",JSON.stringify(t)),element.classList.remove("is-favorite"),element.innerHTML=changingButtonName("add")}else localStorage.setItem("favorites",JSON.stringify([...a,e])),element.classList.add("is-favorite"),element.innerHTML=changingButtonName("remove")};const e=await f(o);console.log(e),h(e),document.querySelector(".ex-add-favorite").addEventListener("click",n),document.querySelector(".modal-close-btn").addEventListener("click",onCloseModal),m.classList.remove("is-hidden"),console.log(o)}catch(e){console.error("Error fetching images:",e)}}async function f(s){console.log(s);try{const e="https://energyflow.b.goit.study/api",i="exercises",{data:c}=await g.get(`${e}/${i}/${s}`);return c}catch(e){console.error(e)}}function h({_id:s,bodyPart:e,equipment:i,time:c,target:n,burnedCalories:d,gifUrl:a,name:r,popularity:t,rating:l,description:u}){const p=`<div class="modal-container">
            <button class="modal-close-btn">
                <svg
                    class="modal-close-icon"
                    width="24"
                    height="24">
                    <use href="${v}#icon-x"></use>
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
                    src="${a}"
                    width="295"
                    height="258"
                    alt="${r}"
                  />
              </picture>
            </div>
            <div class="ex-content-container">
                <h3 class="exercise-name">${r}</h3>
               <div class="rating-container">
                <p class="ex-current-rating">${l}</p>
                <ul class="exercise-stars-list">
                     
                </ul>
                </div>
                <div class="exercise-information">
                    <div class="ex-block">
                        <span class="exercise-value">Target</span>
                        <span class="exercise-label">${n}</span>
                    </div>
                    <div class="ex-block">
                        <span class="exercise-value">Body part</span>
                        <span class="exercise-label">${e}</span>
                    </div>
                    <div class="ex-block">
                        <span class="exercise-value">Equipment</span>
                        <span class="exercise-label">${i}</span>
                    </div>
                    <div class="ex-block">
                        <span class="exercise-value">Popular</span>
                        <span class="exercise-label">${t}</span>
                    </div>
                    <div class="ex-block">
                        <span class="exercise-value">Burned calories</span>
                        <span class="exercise-label">${d}/3 min</span>
                    </div>

                    <p class="exercise-description">
                        ${u}
                    </p>

                    <div class="ex-add-btn-container">
                        <button data-id="${s}" class="ex-add-favorite">
                            Add to favorites
                            <svg
                                class="heart-svg"
                                width="18"
                                height="18">
                                <use href="${v}#icon-heart"></use>
                            </svg>
                        </button>
                         <button data-id="${s}" class="ex-rating-button">
                           Give a rating
                         </button>
                    </div>
                </div>
            </div>
        </div>
    `;x.innerHTML=p}document.querySelectorAll(".ex-rate-icon");export{y as createModalMenu};
//# sourceMappingURL=modal-menu-afaba17c.js.map
