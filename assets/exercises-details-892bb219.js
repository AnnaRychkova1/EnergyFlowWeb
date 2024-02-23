import{a as h}from"./vendor-8cce9181.js";import{show as u,hideLoader as d,showLoader as p}from"./visibility-9f0213da.js";import{refs as e}from"./refs-20f87826.js";import b from"./isiToast-34d29aba.js";import{createModalMenu as x}from"./modal-menu-f3d98292.js";const y="https://energyflow.b.goit.study/api",v="exercises",s={filter:"",keyword:"",page:1,limit:9};e.subexercisesFilteredCards.scrollWidth<768?s.limit=8:s.limit=9;async function $(i,t){let r;if(u(e.subexercisesSearchForm),i==="Body parts"?r="bodypart":i==="Muscles"?r="muscles":i==="Equipment"&&(r="equipment"),e.exercisesGalleryEl,!r||!t){u(e.subexercisesTextNoFound),d(e.loaderModal);return}e.exercisesSubtitle.textContent=`${t}`,e.subexercisesSearchForm.reset(),e.subexercisesFilteredCards.innerHTML="",p(e.loaderModal);try{const{results:a,totalPages:l}=await m({filter:r,name:t,keyword:s.keyword,limit:s.limit,page:s.page});if(l<1){u(e.subexercisesTextNoFound),d(e.loaderModal);return}g(a),s.page+=1,e.subExercisesPaginationContainer||f(s.page,l)}catch(a){console.error("Error fetching images:",a)}finally{d(e.loaderModal)}e.subexercisesSearchForm.addEventListener("submit",o);async function o(a){a.preventDefault(),e.exercisesGalleryEl,s.keyword.trim()===""&&d(e.loaderModal),e.exercisesSubtitle.textContent=`${t}`,e.subexercisesFilteredCards.innerHTML="",p(e.loaderModal);const l=new FormData(a.target);s.keyword=l.get("query"),console.log(s.keyword);try{const{results:c,totalPages:n}=await m({filter:r,name:t,keyword:s.keyword,limit:s.limit,page:s.page});if(n<1){b.noResults(),u(e.subexercisesTextNoFound),d(e.loaderModal);return}n>=2&&f(s.page,n),g(c),s.page+=1,e.subExercisesPaginationContainer||f(s.page,n)}catch(c){console.error("Error fetching request:",c)}finally{d(e.loaderModal)}}}e.subexercisesFilteredCards.addEventListener("click",w);function w(i){if(!i.target.dataset.id)return;const t=i.target.dataset.id;x(t)}async function m({filter:i,name:t,keyword:r,limit:o,page:a}){return(await h.get(`${y}/${v}`,{params:{[i]:t,keyword:r,limit:o,page:a}})).data}function g(i){const t=i.map(r=>M(r)).join("");e.subexercisesFilteredCards.innerHTML=t}function M({_id:i,rating:t,name:r,burnedCalories:o,time:a,bodyPart:l,target:c}){return`<li class="filtered-card-item">
        <div class="card-box-workout">
          <div class="card-box-info">
            <div class="filtered-workout">Workout</div>
            <div class="card-box-rating">
              <p class="filtered-rating">${Math.round(t)}</p>
              <svg class="filtered-star" width="16" height="16">
                <use href="/img/icons/symbol-defs.svg#icon-Star-1"></use>
              </svg>
            </div>
          </div>
          <button class="to-favorites-start" type="submit" data-id=${i}>
            <span>Start</span>
            <svg class="filtered-start" width="16" height="16">
              <use href="/img/icons/symbol-defs.svg#icon-arrow-right"></use>
            </svg>
          </button> 
        </div>

        <div class="card-box-title">
          <div class="filtered-athlete-box">
            <svg class="filtered-athlete" width="16" height="16">
              <use href="/img/icons/symbol-defs.svg#icon-Man"></use>
            </svg>
          </div>
          <h3 class="filtered-title">${r}</h3>
        </div>

        <ul class="filtered-description">
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Burned calories: <spam class="filtered-descr-value">${o} / ${a} min</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Body part: <spam class="filtered-descr-value value-capitalized">${l.charAt(0).toUpperCase()+l.slice(1)}</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Target: <spam class="filtered-descr-value value-capitalized">${c.charAt(0).toUpperCase()+c.slice(1)}</spam></p>
          </li>
        </ul>
  </li>`}function f(i,t){let r="";const o=Math.min(t,3),a=Math.max(1,i-1);p(e.loaderModal);for(let l=a;l<a+o;l++)r+=`<button class="button-pagination" type="button">${l}</button>`;return d(e.loaderModal),r}export{$ as renderExerciseByFilterName};
//# sourceMappingURL=exercises-details-892bb219.js.map
