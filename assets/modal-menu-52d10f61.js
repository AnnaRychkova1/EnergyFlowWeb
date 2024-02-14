import{a as x}from"./vendor-8cce9181.js";const f="/EnergyFlowWeb/assets/symbol-defs-251afd51.svg";document.querySelector(".results");const a=document.querySelector(".backdrop"),i=document.querySelector(".modal");document.querySelector(".ex-add-favorite");let l;async function M(e){l=e;try{let n=function(d){const o=JSON.parse(localStorage.getItem("favorites"))||[];if(console.log(o),o.some(r=>r._id===l)){const r=o.filter(m=>m._id!==l);localStorage.setItem("favorites",JSON.stringify(r)),element.classList.remove("is-favorite"),element.innerHTML=changingButtonName("add")}else localStorage.setItem("favorites",JSON.stringify([...o,s])),element.classList.add("is-favorite"),element.innerHTML=changingButtonName("remove")};const s=await y(l);console.log(s),b(s),document.querySelector(".ex-add-favorite").addEventListener("click",n),document.querySelector(".modal-close-btn").addEventListener("click",L),a.classList.remove("is-hidden"),console.log(l)}catch(s){console.error("Error fetching images:",s)}}async function y(e){console.log(e);try{const s="https://energyflow.b.goit.study/api",t="exercises",{data:c}=await x.get(`${s}/${t}/${e}`);return c}catch(s){console.error(s)}}function b({_id:e,bodyPart:s,equipment:t,time:c,target:n,burnedCalories:d,gifUrl:o,name:p,popularity:r,rating:m,description:g}){const h=`<div>
            <button class="modal-close-btn">
                <svg
                    class="modal-close-icon"
                    width="24"
                    height="24">
                    <use href="${f}#icon-x"></use>
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
                    alt="${p}"
                  />
              </picture>
            </div>
            <div class="ex-content-container">
                <h3 class="exercise-name">${p}</h3>
               <div class="rating-container">
                <p class="ex-current-rating">${m}</p>
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
                        <span class="exercise-label">${s}</span>
                    </div>
                    <div class="ex-block">
                        <span class="exercise-value">Equipment</span>
                        <span class="exercise-label">${t}</span>
                    </div>
                    <div class="ex-block">
                        <span class="exercise-value">Popular</span>
                        <span class="exercise-label">${r}</span>
                    </div>
                    <div class="ex-block">
                        <span class="exercise-value">Burned calories</span>
                        <span class="exercise-label">${d}/3 min</span>
                    </div>

                    <p class="exercise-description">
                        ${g}
                    </p>

                    <div class="ex-add-btn-container">
                        <button data-id="${e}" class="ex-add-favorite">
                            Add to favorites
                            <svg
                                class="heart-svg"
                                width="18"
                                height="18">
                                <use href="use href="${f}#icon-heart"></use>
                            </svg>
                        </button>
                         <button data-id="${e}" class="ex-rating-button">
                           Give a rating
                         </button>
                    </div>
                </div>
            </div>
        </div>
    `;i.innerHTML=h}a.addEventListener("click",v);document.addEventListener("keydown",u);function L(){i.classList.add("is-hidden"),a.classList.add("is-hidden"),i.innerHTML="",document.removeEventListener("keydown",u),a.removeEventListener("click",v)}function v(e){e.target.closest(".modal")||(i.classList.add("is-hidden"),a.classList.add("is-hidden"),i.innerHTML="",document.removeEventListener("keydown",u),a.removeEventListener("click",v))}function u(e){e.preventDefault(),e.key==="Escape"&&(i.classList.add("is-hidden"),a.classList.add("is-hidden"),i.innerHTML="",document.removeEventListener("keydown",u),a.removeEventListener("click",v))}const k="#eea10c",S="#e8e8e8",E=document.querySelectorAll(".ex-rate-icon");E.forEach((e,s)=>{const t=Number(e.getAttribute("data-rating")),n=($(t).match(/&#9733;/g)||[]).length;s<n?e.style.fill=k:e.style.fill=S});function $(e){const s='<span class="star">&#9733;</span>',t='<span class="star">&#9734;</span>',c=s.repeat(Math.floor(e)),n=e%1!==0?'<span class="star">&#9733;</span>':"",d=t.repeat(5-Math.ceil(e));return c+n+d}export{M as createModalMenu};
//# sourceMappingURL=modal-menu-52d10f61.js.map
