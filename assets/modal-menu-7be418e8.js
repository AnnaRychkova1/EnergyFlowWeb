import{a as x}from"./vendor-8cce9181.js";const u="/EnergyFlowWeb/assets/symbol-defs-251afd51.svg";document.querySelector(".results");const i=document.querySelector(".backdrop"),o=document.querySelector(".modal");document.querySelector(".ex-add-favorite");async function M(e){try{const s=await p(e);console.log(s);const t=L(s);document.querySelector(".ex-add-favorite").addEventListener("click",y),document.querySelector(".modal-close-btn").addEventListener("click",b),i.classList.remove("is-hidden")}catch(s){console.error("Error fetching images:",s)}}i.addEventListener("click",r);document.addEventListener("keydown",d);async function y(e){const s=e.target.closest(".ex-add-favorite");if(!s)return;const t=s.dataset.id,a=JSON.parse(localStorage.getItem("favorites"))||[];if(a.some(n=>n._id===t)){const n=a.filter(l=>l._id!==t);localStorage.setItem("favorites",JSON.stringify(n)),s.classList.remove("is-favorite"),s.innerHTML=changingButtonName("add")}else{const n=await p(t);localStorage.setItem("favorites",JSON.stringify([...a,n])),s.classList.add("is-favorite"),s.innerHTML=changingButtonName("remove")}}function b(){o.classList.add("is-hidden"),i.classList.add("is-hidden"),o.innerHTML="",document.removeEventListener("keydown",d),i.removeEventListener("click",r)}function r(e){e.target.closest(".modal")||(o.classList.add("is-hidden"),i.classList.add("is-hidden"),o.innerHTML="",document.removeEventListener("keydown",d),i.removeEventListener("click",r))}function d(e){e.preventDefault(),e.key==="Escape"&&(o.classList.add("is-hidden"),i.classList.add("is-hidden"),o.innerHTML="",document.removeEventListener("keydown",d),i.removeEventListener("click",r))}async function p(e){try{const s="https://energyflow.b.goit.study/api",t="exercises",{data:a}=await x.get(`${s}/${t}/${e}`);return a}catch(s){console.error(s)}}function L({_id:e,bodyPart:s,equipment:t,time:a,target:c,burnedCalories:n,gifUrl:l,name:v,popularity:m,rating:f,description:h}){const g=`<div>
            <button class="modal-close-btn">
                <svg
                    class="modal-close-icon"
                    width="24"
                    height="24">
                    <use href="${u}#icon-x"></use>
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
                    alt="${v}"
                  />
              </picture>
            </div>
            <div class="ex-content-container">
                <h3 class="exercise-name">${v}</h3>
               <div class="rating-container">
                <p class="ex-current-rating">${f}</p>
                <ul class="exercise-stars-list">
                     
                </ul>
                </div>
                <div class="exercise-information">
                    <div class="ex-block">
                        <span class="exercise-value">Target</span>
                        <span class="exercise-label">${c}</span>
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
                        <span class="exercise-label">${m}</span>
                    </div>
                    <div class="ex-block">
                        <span class="exercise-value">Burned calories</span>
                        <span class="exercise-label">${n}/3 min</span>
                    </div>

                    <p class="exercise-description">
                        ${h}
                    </p>

                    <div class="ex-add-btn-container">
                        <button data-id="${e}" class="ex-add-favorite">
                            Add to favorites
                            <svg
                                class="heart-svg"
                                width="18"
                                height="18">
                                <use href="use href="${u}#icon-heart"></use>
                            </svg>
                        </button>
                         <button data-id="${e}" class="ex-rating-button">
                           Give a rating
                         </button>
                    </div>
                </div>
            </div>
        </div>
    `;o.innerHTML=g}const k="#eea10c",S="#e8e8e8",E=document.querySelectorAll(".ex-rate-icon");E.forEach((e,s)=>{const t=Number(e.getAttribute("data-rating")),c=(w(t).match(/&#9733;/g)||[]).length;s<c?e.style.fill=k:e.style.fill=S});function w(e){const s='<span class="star">&#9733;</span>',t='<span class="star">&#9734;</span>',a=s.repeat(Math.floor(e)),c=e%1!==0?'<span class="star">&#9733;</span>':"",n=t.repeat(5-Math.ceil(e));return a+c+n}export{M as createModalMenu};
//# sourceMappingURL=modal-menu-7be418e8.js.map
