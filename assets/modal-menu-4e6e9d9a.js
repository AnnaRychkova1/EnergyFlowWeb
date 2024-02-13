import{a as b}from"./vendor-65c0bc71.js";const m="/EnergyFlowWeb/assets/symbol-defs-99a4d0de.svg";document.querySelector(".results");const i=document.querySelector(".backdrop"),c=document.querySelector(".modal");document.querySelector(".ex-add-favorite");const L="64f389465ae26083f39b17c0";I();let k="favorites",r=localStorage.getItem(k);r?r=JSON.parse(r):r=[];const S=document.querySelector(".ex-add-favorite");S.addEventListener("click",w);const $=document.querySelector(".modal-close-btn");$.addEventListener("click",E);i.addEventListener("click",o);document.addEventListener("keydown",d);async function w(e){const s=e.target.closest(".ex-add-favorite");if(!s)return;const t=s.dataset.id,a=JSON.parse(localStorage.getItem("favorites"))||[];if(a.some(n=>n._id===t)){const n=a.filter(u=>u._id!==t);localStorage.setItem("favorites",JSON.stringify(n)),s.classList.remove("is-favorite"),s.innerHTML=changingButtonName("add")}else{const n=await f(t);localStorage.setItem("favorites",JSON.stringify([...a,n])),s.classList.add("is-favorite"),s.innerHTML=changingButtonName("remove")}}function E(){c.classList.add("is-hidden"),i.classList.add("is-hidden"),c.innerHTML="",document.removeEventListener("keydown",d),i.removeEventListener("click",o)}function o(e){e.target.closest(".modal")||(c.classList.add("is-hidden"),i.classList.add("is-hidden"),c.innerHTML="",document.removeEventListener("keydown",d),i.removeEventListener("click",o))}function d(e){e.preventDefault(),e.key==="Escape"&&(c.classList.add("is-hidden"),i.classList.add("is-hidden"),c.innerHTML="",document.removeEventListener("keydown",d),i.removeEventListener("click",o))}async function f(e){try{const s="https://energyflow.b.goit.study/api",t="exercises",{data:a}=await b.get(`${s}/${t}/${e}`);return a}catch(s){console.error(s)}}async function I(){try{const{results:e}=await f(L);M(e),console.log(e)}catch(e){console.error(e.message)}finally{}}function M(e={}){const{_id:s,bodyPart:t,equipment:a,time:l,target:n,burnedCalories:u,gifUrl:g,name:v,popularity:p,rating:h,description:x}=e,y=`<div class="modal">
            <button class="modal-close-btn">
                <svg
                    class="modal-close-icon"
                    width="24"
                    height="24">
                    <use href="${m}#icon-x"></use>
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
                    alt="${v}"
                  />
              </picture>   
            </div>
            <div class="ex-content-container">
                <h3 class="exercise-name">${v}</h3>
                <p class="ex-current-rating">${h}</p>
                <ul class="exercise-stars-list">
                    ${T(p)}
                </ul>

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
                        <span class="exercise-label">${p}</span>
                    </div>
                    <div class="ex-block">
                        <span class="exercise-value">Burned calories</span>
                        <span class="exercise-label">${u}/3 min</span>
                    </div>

                    <p class="exercise-description">
                        ${x}
                    </p>

                    <div class="ex-add-btn">
                        <button data-id="${s}" class="add-btn-icon">
                            Add to favorites
                            <svg
                                class="heart-svg"
                                width="18"
                                height="18">
                                <use href="use href="${m}#icon-heart"></use>
                            </svg>
                        </button>
                         <button data-id="${s}" class="ex-rating-button">
                           Give a rating
                         </button>
                    </div>
                </div>
            </div>
        </div>
    `;return c.innerHTML=y}function T(e){const s='<span class="star">&#9733;</span>',t='<span class="star">&#9734;</span>',a=s.repeat(Math.floor(e)),l=e%1!==0?'<span class="star">&#9733;</span>':"",n=t.repeat(5-Math.ceil(e));return a+l+n}export{f as getCardInfo,I as renderCard};
//# sourceMappingURL=modal-menu-4e6e9d9a.js.map
