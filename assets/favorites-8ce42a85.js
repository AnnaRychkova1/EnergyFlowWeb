import{i as c,r as p}from"./modal-menu-45995f81.js";import{show as f,hide as g}from"./visibility-9f0213da.js";import{refs as s}from"./refs-83aa709d.js";import"./vendor-8cce9181.js";const m=localStorage.getItem("favorites"),r=JSON.parse(m);console.log(r);h();async function h(){try{if(!Array.isArray(r)||r.length===0){console.log("Array in local storage is empty or does not exist."),f(s.favoritesMessage);return}s.favoritesMessage&&g(s.favoritesMessage),s.favoritesGallery&&(s.favoritesGallery.innerHTML=""),y(r)}catch(a){console.error("Error refreshing gallery:",a)}}function y(a){const l=a.map(({_id:e,bodyPart:t,name:n,target:d,burnedCalories:v,time:u})=>`
       <li class="favorites-gallery-item" data-id="${e}" id="card-${e}">

        <div class="favorites-card-top">
          <div class="favorites-workout-block">
            <div class="workout">Workout</div>
            <button type="button" data-id=${e} data-favorites-remove class="favorites-remove-btn">
              <svg class="favorites-remove-icon" width="16" height="16">
                <use href="${c}#icon-basket"></use>
              </svg>
            </button>
          </div>
          <button class="to-favorites-start" type="click" data-id=${e}>
            <span data-id=${e}>Start</span>
            <svg data-id=${e} class="filtered-start" width="16" height="16">
              <use href="${c}#icon-arrow-right"></use>
            </svg>
          </button>
        </div>

        <div class="card-box-title">
          <div class="filtered-athlete-box">
            <svg class="filtered-athlete" width="16" height="16">
              <use href="${c}#icon-Man"></use>
            </svg>
          </div>
          <h3 class="filtered-title">${n.charAt(0).toUpperCase()+n.slice(1)}</h3>
        </div>

         <ul class="filtered-description">
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Burned calories: <span class="filtered-descr-value">${v} / ${u} min</span></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Body part: <span class="filtered-descr-value">${t.charAt(0).toUpperCase()+t.slice(1)}</span></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Target: <span class="filtered-descr-value">${d.charAt(0).toUpperCase()+d.slice(1)}</span></p>
          </li>
        </ul>

       </li>`).join("");s.favoritesGallery&&s.favoritesGallery.insertAdjacentHTML("beforeend",l);function o(){document.querySelectorAll("[data-favorites-remove]").forEach(t=>{t.addEventListener("click",b)})}o();function i(){document.querySelectorAll(".to-favorites-start").forEach(t=>{t.addEventListener("click",$)})}i()}function b(a){const o=a.currentTarget.getAttribute("data-id"),i=document.getElementById(`card-${o}`);i&&i.remove();const e=r.filter(t=>t._id!==o);localStorage.setItem("favorites",JSON.stringify(e)),r.splice(r.findIndex(t=>t._id===o),1),r.length===0&&(f(s.favoritesMessage),console.log("Array in local storage is empty or does not exist."))}function $(a){console.log(s.backdrop);const o=a.currentTarget.getAttribute("data-id");p(o)}
//# sourceMappingURL=favorites-8ce42a85.js.map
