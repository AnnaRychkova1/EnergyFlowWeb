import{a as y}from"./vendor-8cce9181.js";import{hideLoader as L}from"./visibility-9f0213da.js";const p="/EnergyFlowWeb/assets/symbol-defs-69626409.svg",b=document.querySelector(".results"),n=document.querySelector(".backdrop"),r=document.querySelector(".modal");document.querySelector(".ex-add-favorite");b.addEventListener("click",k);async function k(e){if(e.target===e.currentTarget)return;const s=e.target.closest(".to-favorites-start");if(s===null)return;getLoader();const t=s.dataset.id,a=await m(t);n.classList.remove("is-hidden");const c=T(a);r.innerHTML=c,L()}const S=document.querySelector(".ex-add-favorite");S.addEventListener("click",$);const E=document.querySelector(".modal-close-btn");E.addEventListener("click",w);n.addEventListener("click",o);document.addEventListener("keydown",d);async function $(e){const s=e.target.closest(".ex-add-favorite");if(!s)return;const t=s.dataset.id,a=JSON.parse(localStorage.getItem("favorites"))||[];if(a.some(i=>i._id===t)){const i=a.filter(l=>l._id!==t);localStorage.setItem("favorites",JSON.stringify(i)),s.classList.remove("is-favorite"),s.innerHTML=changingButtonName("add")}else{const i=await m(t);localStorage.setItem("favorites",JSON.stringify([...a,i])),s.classList.add("is-favorite"),s.innerHTML=changingButtonName("remove")}}function w(){r.classList.add("is-hidden"),n.classList.add("is-hidden"),r.innerHTML="",document.removeEventListener("keydown",d),n.removeEventListener("click",o)}function o(e){e.target.closest(".modal")||(r.classList.add("is-hidden"),n.classList.add("is-hidden"),r.innerHTML="",document.removeEventListener("keydown",d),n.removeEventListener("click",o))}function d(e){e.preventDefault(),e.key==="Escape"&&(r.classList.add("is-hidden"),n.classList.add("is-hidden"),r.innerHTML="",document.removeEventListener("keydown",d),n.removeEventListener("click",o))}async function m(e){try{const s="https://energyflow.b.goit.study/api",t="exercises",{data:a}=await y.get(`${s}/${t}/${e}`);return a}catch(s){console.error(s)}}function T(e={}){const{_id:s,bodyPart:t,equipment:a,time:c,target:i,burnedCalories:l,gifUrl:f,name:u,popularity:v,rating:g,description:h}=e,x=`<div class="modal">
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
                    src="${f}"
                    width="295"
                    height="258"
                    alt="${u}"
                  />
              </picture>
            </div>
            <div class="ex-content-container">
                <h3 class="exercise-name">${u}</h3>
               <div class="rating-container">
                <p class="ex-current-rating">${g}</p>
                <ul class="exercise-stars-list">
                    ${C(v)}
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
                        <span class="exercise-label">${v}</span>
                    </div>
                    <div class="ex-block">
                        <span class="exercise-value">Burned calories</span>
                        <span class="exercise-label">${l}/3 min</span>
                    </div>

                    <p class="exercise-description">
                        ${h}
                    </p>

                    <div class="ex-add-btn-container">
                        <button data-id="${s}" class="ex-add-favorite">
                            Add to favorites
                            <svg
                                class="heart-svg"
                                width="18"
                                height="18">
                                <use href="use href="${p}#icon-heart"></use>
                            </svg>
                        </button>
                         <button data-id="${s}" class="ex-rating-button">
                           Give a rating
                         </button>
                    </div>
                </div>
            </div>
        </div>
    `;return r.innerHTML=x}function C(e){const s='<span class="star">&#9733;</span>',t='<span class="star">&#9734;</span>',a=s.repeat(Math.floor(e)),c=e%1!==0?'<span class="star">&#9733;</span>':"",i=t.repeat(5-Math.ceil(e));return a+c+i}
//# sourceMappingURL=modal-menu-f086f2fb.js.map
