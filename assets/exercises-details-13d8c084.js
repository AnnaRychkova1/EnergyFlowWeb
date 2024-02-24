import{a as h}from"./vendor-8cce9181.js";import{show as n,hideLoader as d,showLoader as p}from"./visibility-9f0213da.js";import{refs as e}from"./refs-20f87826.js";import b from"./isiToast-34d29aba.js";import{createModalMenu as x}from"./modal-menu-f3d98292.js";const y="https://energyflow.b.goit.study/api",v="exercises",s={filter:"",keyword:"",page:1,limit:9};e.subexercisesFilteredCards.screenWidth<768?s.limit=8:s.limit=9;async function T(i,t){let r;if(n(e.subexercisesSearchForm),i==="Body parts"?r="bodypart":i==="Muscles"?r="muscles":i==="Equipment"&&(r="equipment"),e.exercisesGalleryEl,!r||!t){n(e.subexercisesTextNoFound),d(e.loaderModal);return}e.exercisesSubtitle.textContent=`${t}`,e.subexercisesSearchForm.reset(),e.subexercisesFilteredCards.innerHTML="",n(e.subexercisesFilteredCards),p(e.loaderModal);try{const{results:a,totalPages:o}=await m({filter:r,name:t,keyword:s.keyword,limit:s.limit,page:s.page});if(o<1){n(e.subexercisesTextNoFound),d(e.loaderModal);return}g(a),s.page+=1,e.subExercisesPaginationContainer||f(s.page,o)}catch(a){console.error("Error fetching images:",a)}finally{d(e.loaderModal)}e.subexercisesSearchForm.addEventListener("submit",l);async function l(a){a.preventDefault(),e.exercisesGalleryEl,s.keyword.trim()===""&&d(e.loaderModal),e.exercisesSubtitle.textContent=`${t}`,e.subexercisesFilteredCards.innerHTML="",p(e.loaderModal);const o=new FormData(a.target);s.keyword=o.get("query"),console.log(s.keyword);try{const{results:c,totalPages:u}=await m({filter:r,name:t,keyword:s.keyword,limit:s.limit,page:s.page});if(u<1){b.noResults(),n(e.subexercisesTextNoFound),d(e.loaderModal);return}u>=2&&f(s.page,u),g(c),s.page+=1,e.subExercisesPaginationContainer||f(s.page,u)}catch(c){console.error("Error fetching request:",c)}finally{d(e.loaderModal)}}}e.subexercisesFilteredCards.addEventListener("click",w);function w(i){if(!i.target.dataset.id)return;const t=i.target.dataset.id;x(t)}async function m({filter:i,name:t,keyword:r,limit:l,page:a}){return(await h.get(`${y}/${v}`,{params:{[i]:t,keyword:r,limit:l,page:a}})).data}function g(i){const t=i.map(r=>M(r)).join("");e.subexercisesFilteredCards.innerHTML=t}function M({_id:i,rating:t,name:r,burnedCalories:l,time:a,bodyPart:o,target:c}){return`<li class="filtered-card-item">
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
            <p class="filtered-descr-title">Burned calories: <spam class="filtered-descr-value">${l} / ${a} min</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Body part: <spam class="filtered-descr-value value-capitalized">${o.charAt(0).toUpperCase()+o.slice(1)}</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Target: <spam class="filtered-descr-value value-capitalized">${c.charAt(0).toUpperCase()+c.slice(1)}</spam></p>
          </li>
        </ul>
  </li>`}function f(i,t){let r="";const l=Math.min(t,3),a=Math.max(1,i-1);p(e.loaderModal);for(let o=a;o<a+l;o++)r+=`<button class="button-pagination" type="button">${o}</button>`;return d(e.loaderModal),r}const C=window.innerWidth;console.log(C);export{T as renderExerciseByFilterName};
//# sourceMappingURL=exercises-details-13d8c084.js.map
