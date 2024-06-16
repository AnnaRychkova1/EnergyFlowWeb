import{i as c,r as g}from"./modal-menu-85beae49.js";import{refs as e}from"./refs-89afcfb6.js";import y from"./scrollFavorites-579ce649.js";import{showLoader as d,show as p,hide as b,hideLoader as n}from"./visibility-9f0213da.js";import{errorResult as f}from"./iziToast-77b847f7.js";import"./vendor-fd853f38.js";const M=localStorage.getItem("favorites"),s=JSON.parse(M);$();async function $(){d(e.loaderModal);try{if(!Array.isArray(s)||s.length===0){p(e.favoritesMessage);return}e.favoritesMessage&&b(e.favoritesMessage),e.favoritesGallery.innerHTML="",k(s),y()}catch{f("Error creating favorites gallery")}finally{n(e.loaderModal)}}function k(o){const l=o.map(({_id:t,bodyPart:r,name:v,target:u,burnedCalories:m,time:h})=>`
       <li class="favorites-gallery-item" data-id="${t}" id="card-${t}">

        <div class="favorites-card-top">
          <div class="favorites-workout-block">
            <div class="workout">Workout</div>
            <button type="button" data-id=${t} class="favorites-remove-btn">
              <svg class="favorites-remove-icon" width="16" height="16">
                <use href="${c}#icon-basket"></use>
              </svg>
            </button>
          </div>
          <button class="to-favorites-start" type="click" data-id=${t}>
            <span data-id=${t}>Start</span>
            <svg data-id=${t} class="filtered-start" width="16" height="16">
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
          <h3 class="filtered-title">${v.charAt(0).toUpperCase()+v.slice(1)}</h3>
        </div>

         <ul class="filtered-description">
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Burned calories: <span class="filtered-descr-value">${m} / ${h} min</span></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Body part: <span class="filtered-descr-value">${r.charAt(0).toUpperCase()+r.slice(1)}</span></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Target: <span class="filtered-descr-value">${u.charAt(0).toUpperCase()+u.slice(1)}</span></p>
          </li>
        </ul>

       </li>`).join("");e.favoritesGallery&&e.favoritesGallery.insertAdjacentHTML("beforeend",l);function a(){document.querySelectorAll(".favorites-remove-btn").forEach(r=>{r.addEventListener("click",A)})}a();function i(){document.querySelectorAll(".to-favorites-start").forEach(r=>{r.addEventListener("click",B)})}i()}async function A(o){const a=o.currentTarget.getAttribute("data-id");d(e.loaderModal);try{const i=document.getElementById(`card-${a}`);i&&i.remove();const t=s.filter(r=>r._id!==a);localStorage.setItem("favorites",JSON.stringify(t)),s.splice(s.findIndex(r=>r._id===a),1),s.length===0&&p(e.favoritesMessage)}catch{f("Error updating favorites list")}finally{n(e.loaderModal)}}async function B(o){const a=o.currentTarget.getAttribute("data-id");d(e.loaderModal);try{await g(a)}catch{f("Error creating modal menu")}finally{n(e.loaderModal)}}
//# sourceMappingURL=favorites-a2ee1563.js.map
