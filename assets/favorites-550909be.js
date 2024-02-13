import"./mainApi-8210f2b2.js";import{refs as a}from"./refs-326154d5.js";import"./vendor-65c0bc71.js";import"./exercises-details-debaffd3.js";import"./visibility-9f0213da.js";import"./isiToast-262f9325.js";const o="quoteResponse",n=JSON.parse(localStorage.getItem(o));console.log(n);const t="favorites";async function i(){try{const s=JSON.parse(localStorage.getItem("favorites"));if(!Array.isArray(s)||s.length===0){console.log("Array in local storage is empty or does not exist."),apiIsiToastError();return}a.favoritesGallery.innerHTML="",s.forEach(e=>{const r=f(e);a.favoritesGallery.insertAdjacentHTML("afterbegin",r)}),console.log("Gallery refreshed successfully.")}catch(s){console.error("Error refreshing gallery:",s),apiIsiToastError()}}a.onRemoveBtn.addEventListener("click",l);async function l(s){try{let e=JSON.parse(localStorage.getItem(t));if(!Array.isArray(e)||e.length===0){console.log("Array in local storage is empty or does not exist.");return}e=e.filter(r=>r._id!==s),localStorage.setItem(t,JSON.stringify(e)),console.log(`Object with ID ${s} removed from local storage.`),await i()}catch(e){console.error("Error removing object from local storage:",e)}}a.onStartBtn.addEventListener("click",c);function c(s){s.preventDefault(),p()}function p(){document.querySelector(".modal").classList.add("open")}function f(s){return s.map(e=>`
        <li class="favorites-gallery-item" data-id="${e._id}" id="card-${e._id}">
           <p class="favorites-item-head">
              <span class="favorites-item-head-wrapper">
                <span class="workout">WORKOUT</span>
                  <button class="favorites-remove-btn">
                    <svg class="favorites-remove-icon" width="12" height="13">
                      <use href="${icons}#icon-basket"></use>
                    </svg>
                  </button>
                  <a class="ex-item-start" href="" data-id="${e._id}">
                    <span>Start</span>
                     <svg class="favorites-arrow-icon" width="14" height="14">
                      <use href="${icons}#icon-line"></use>
                    </svg>
                  </a>
             </p>
              <span class="favorites-item-title">
                <span class="favorites-man-icon"><svg class="ex-icon-run" width="14" height="14">
                  <use href="${icons}#icon-Man"></use>
                </svg>
              </span>
              
            <h3 class="favorites-item-title">${e.name.charAt(0).toUpperCase()+e.name.slice(1)}</h3>
            </span>
            </span>
            <p class="favorites-item-info">
             <span class="ex-info-group"><span class="favorites-item-desc">Burned calories:</span> <span
                class="favorites-item-value">${e.burnedCalories} / ${e.time} min</span>
        </span>
        <span class="favorites-info-group"><span class="favorites-item-desc">Body part:</span> <span
                class="favorites-item-value">${e.bodyPart.charAt(0).toUpperCase()+e.bodyPart.slice(1)}</span>
        </span>
        <span class="favorites-info-group"><span class="favorites-item-desc">Target:</span> <span
                class="favorites-item-value">${e.target.charAt(0).toUpperCase()+e.target.slice(1)}</span>
        </span>
    </p>
</li>
        `).join("")}
//# sourceMappingURL=favorites-550909be.js.map
