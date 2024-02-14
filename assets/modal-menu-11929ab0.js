import{a as b}from"./vendor-8cce9181.js";const p="/EnergyFlowWeb/assets/symbol-defs-251afd51.svg";document.querySelector(".results");const i=document.querySelector(".backdrop"),c=document.querySelector(".modal");document.querySelector(".ex-add-favorite");async function q(s){i.classList.remove("is-hidden");try{const e=await m(s),t=$(e)}catch(e){console.error("Error fetching images:",e)}}const L=document.querySelector(".ex-add-favorite");L.addEventListener("click",S);const k=document.querySelector(".modal-close-btn");k.addEventListener("click",E);i.addEventListener("click",o);document.addEventListener("keydown",d);async function S(s){const e=s.target.closest(".ex-add-favorite");if(!e)return;const t=e.dataset.id,a=JSON.parse(localStorage.getItem("favorites"))||[];if(a.some(n=>n._id===t)){const n=a.filter(l=>l._id!==t);localStorage.setItem("favorites",JSON.stringify(n)),e.classList.remove("is-favorite"),e.innerHTML=changingButtonName("add")}else{const n=await m(t);localStorage.setItem("favorites",JSON.stringify([...a,n])),e.classList.add("is-favorite"),e.innerHTML=changingButtonName("remove")}}function E(){c.classList.add("is-hidden"),i.classList.add("is-hidden"),c.innerHTML="",document.removeEventListener("keydown",d),i.removeEventListener("click",o)}function o(s){s.target.closest(".modal")||(c.classList.add("is-hidden"),i.classList.add("is-hidden"),c.innerHTML="",document.removeEventListener("keydown",d),i.removeEventListener("click",o))}function d(s){s.preventDefault(),s.key==="Escape"&&(c.classList.add("is-hidden"),i.classList.add("is-hidden"),c.innerHTML="",document.removeEventListener("keydown",d),i.removeEventListener("click",o))}async function m(s){try{const e="https://energyflow.b.goit.study/api",t="exercises",{data:a}=await b.get(`${e}/${t}/${s}`);return a}catch(e){console.error(e)}}function $(s={}){const{_id:e,bodyPart:t,equipment:a,time:r,target:n,burnedCalories:l,gifUrl:g,name:u,popularity:v,rating:h,description:x}=s,y=`<div class="modal">
            <button class="modal-close-btn">
                <svg
                    class="modal-close-icon"
                    width="24"
                    height="24">
                    <use href="${p}#icon-x"></use>
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
                    src="${g}"
                    width="295"
                    height="258"
                    alt="${u}"
                  />
              </picture>
            </div>
            <div class="ex-content-container">
                <h3 class="exercise-name">${u}</h3>
               <div class="rating-container">
                <p class="ex-current-rating">${h}</p>
                <ul class="exercise-stars-list">
                    ${f(v)}
                </ul>
                </div>
                <div class="exercise-information">
                    <div class="ex-block">
                        <span class="exercise-value">Target</span>
                        <span class="exercise-label">${n}</span>
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
                        <span class="exercise-label">${v}</span>
                    </div>
                    <div class="ex-block">
                        <span class="exercise-value">Burned calories</span>
                        <span class="exercise-label">${l}/3 min</span>
                    </div>

                    <p class="exercise-description">
                        ${x}
                    </p>

                    <div class="ex-add-btn-container">
                        <button data-id="${e}" class="ex-add-favorite">
                            Add to favorites
                            <svg
                                class="heart-svg"
                                width="18"
                                height="18">
                                <use href="use href="${p}#icon-heart"></use>
                            </svg>
                        </button>
                         <button data-id="${e}" class="ex-rating-button">
                           Give a rating
                         </button>
                    </div>
                </div>
            </div>
        </div>
    `;return c.innerHTML=y}const w="#eea10c",M="#e8e8e8",T=document.querySelectorAll(".ex-rate-icon");T.forEach((s,e)=>{const t=Number(s.getAttribute("data-rating")),r=(f(t).match(/&#9733;/g)||[]).length;e<r?s.style.fill=w:s.style.fill=M});function f(s){const e='<span class="star">&#9733;</span>',t='<span class="star">&#9734;</span>',a=e.repeat(Math.floor(s)),r=s%1!==0?'<span class="star">&#9733;</span>':"",n=t.repeat(5-Math.ceil(s));return a+r+n}export{q as createModalMenu};
//# sourceMappingURL=modal-menu-11929ab0.js.map
