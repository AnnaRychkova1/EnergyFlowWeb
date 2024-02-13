import{a as b}from"./vendor-65c0bc71.js";const m="/EnergyFlowWeb/assets/symbol-defs-99a4d0de.svg",L="https://energyflow.b.goit.study/api",k="exercises";document.querySelector(".results");const i=document.querySelector(".backdrop"),c=document.querySelector(".modal");document.querySelector(".ex-add-favorite");const S="64f389465ae26083f39b17c0";T();let E="favorites",r=localStorage.getItem(E);r?r=JSON.parse(r):r=[];const $=document.querySelector(".ex-add-favorite");$.addEventListener("click",I);const w=document.querySelector(".modal-close-btn");w.addEventListener("click",M);i.addEventListener("click",o);document.addEventListener("keydown",d);async function I(e){const s=e.target.closest(".ex-add-favorite");if(!s)return;const a=s.dataset.id,n=JSON.parse(localStorage.getItem("favorites"))||[];if(n.some(t=>t._id===a)){const t=n.filter(u=>u._id!==a);localStorage.setItem("favorites",JSON.stringify(t)),s.classList.remove("is-favorite"),s.innerHTML=changingButtonName("add")}else{const t=await f(a);localStorage.setItem("favorites",JSON.stringify([...n,t])),s.classList.add("is-favorite"),s.innerHTML=changingButtonName("remove")}}function M(){c.classList.add("is-hidden"),i.classList.add("is-hidden"),c.innerHTML="",document.removeEventListener("keydown",d),i.removeEventListener("click",o)}function o(e){e.target.closest(".modal")||(c.classList.add("is-hidden"),i.classList.add("is-hidden"),c.innerHTML="",document.removeEventListener("keydown",d),i.removeEventListener("click",o))}function d(e){e.preventDefault(),e.key==="Escape"&&(c.classList.add("is-hidden"),i.classList.add("is-hidden"),c.innerHTML="",document.removeEventListener("keydown",d),i.removeEventListener("click",o))}async function f(e){try{const{data:s}=await b.get(`${L}/${k}/${e}`);return s}catch(s){console.error(s)}}async function T(){try{const{results:e}=await f(S);C(e),console.log(e)}catch(e){console.error(e.message)}finally{}}function C(e={}){const{_id:s,bodyPart:a,equipment:n,time:l,target:t,burnedCalories:u,gifUrl:g,name:v,popularity:p,rating:h,description:x}=e,y=`<div class="modal">
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
                    ${q(p)}
                </ul>

                <div class="exercise-information">
                    <div class="ex-block">
                        <span class="exercise-value">Target</span>
                        <span class="exercise-label">${t}</span>
                    </div>
                    <div class="ex-block">
                        <span class="exercise-value">Body part</span>
                        <span class="exercise-label">${a}</span>
                    </div>
                    <div class="ex-block">
                        <span class="exercise-value">Equipment</span>
                        <span class="exercise-label">${n}</span>
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
    `;return c.innerHTML=y}function q(e){const s='<span class="star">&#9733;</span>',a='<span class="star">&#9734;</span>',n=s.repeat(Math.floor(e)),l=e%1!==0?'<span class="star">&#9733;</span>':"",t=a.repeat(5-Math.ceil(e));return n+l+t}export{f as getCardInfo,T as renderCard};
//# sourceMappingURL=modal-menu-de0c5a99.js.map
