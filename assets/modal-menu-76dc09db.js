import{a as h}from"./vendor-8cce9181.js";const m="/EnergyFlowWeb/assets/symbol-defs-251afd51.svg";document.querySelector(".results");const a=document.querySelector(".backdrop"),i=document.querySelector(".modal");document.querySelector(".ex-add-favorite");async function w(e){try{let n=function(l){const c=JSON.parse(localStorage.getItem("favorites"))||[];if(console.log(c),c.some(r=>r._id===e)){const r=c.filter(p=>p._id!==e);localStorage.setItem("favorites",JSON.stringify(r)),element.classList.remove("is-favorite"),element.innerHTML=changingButtonName("add")}else localStorage.setItem("favorites",JSON.stringify([...c,s])),element.classList.add("is-favorite"),element.innerHTML=changingButtonName("remove")};const s=await x(e);console.log(s),y(s),document.querySelector(".ex-add-favorite").addEventListener("click",n),document.querySelector(".modal-close-btn").addEventListener("click",b),a.classList.remove("is-hidden"),console.log(e)}catch(s){console.error("Error fetching images:",s)}}async function x(e){console.log(e);try{const s="https://energyflow.b.goit.study/api",t="exercises",{data:o}=await h.get(`${s}/${t}/${e}`);return o}catch(s){console.error(s)}}function y({_id:e,bodyPart:s,equipment:t,time:o,target:n,burnedCalories:l,gifUrl:c,name:u,popularity:r,rating:p,description:f}){const g=`<div>
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
                    src="${c}"
                    width="295"
                    height="258"
                    alt="${u}"
                  />
              </picture>
            </div>
            <div class="ex-content-container">
                <h3 class="exercise-name">${u}</h3>
               <div class="rating-container">
                <p class="ex-current-rating">${p}</p>
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
                        <span class="exercise-label">${l}/3 min</span>
                    </div>

                    <p class="exercise-description">
                        ${f}
                    </p>

                    <div class="ex-add-btn-container">
                        <button data-id="${e}" class="ex-add-favorite">
                            Add to favorites
                            <svg
                                class="heart-svg"
                                width="18"
                                height="18">
                                <use href="use href="${m}#icon-heart"></use>
                            </svg>
                        </button>
                         <button data-id="${e}" class="ex-rating-button">
                           Give a rating
                         </button>
                    </div>
                </div>
            </div>
        </div>
    `;i.innerHTML=g}a.addEventListener("click",d);document.addEventListener("keydown",v);function b(){i.classList.add("is-hidden"),a.classList.add("is-hidden"),i.innerHTML="",document.removeEventListener("keydown",v),a.removeEventListener("click",d)}function d(e){e.target.closest(".modal")||(i.classList.add("is-hidden"),a.classList.add("is-hidden"),i.innerHTML="",document.removeEventListener("keydown",v),a.removeEventListener("click",d))}function v(e){e.preventDefault(),e.key==="Escape"&&(i.classList.add("is-hidden"),a.classList.add("is-hidden"),i.innerHTML="",document.removeEventListener("keydown",v),a.removeEventListener("click",d))}const L="#eea10c",k="#e8e8e8",S=document.querySelectorAll(".ex-rate-icon");S.forEach((e,s)=>{const t=Number(e.getAttribute("data-rating")),n=(E(t).match(/&#9733;/g)||[]).length;s<n?e.style.fill=L:e.style.fill=k});function E(e){const s='<span class="star">&#9733;</span>',t='<span class="star">&#9734;</span>',o=s.repeat(Math.floor(e)),n=e%1!==0?'<span class="star">&#9733;</span>':"",l=t.repeat(5-Math.ceil(e));return o+n+l}export{w as createModalMenu};
//# sourceMappingURL=modal-menu-76dc09db.js.map
