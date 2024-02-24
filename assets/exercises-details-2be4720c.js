import{a as b}from"./vendor-8cce9181.js";import{show as n,hideLoader as d,showLoader as m}from"./visibility-9f0213da.js";import{refs as e}from"./refs-20f87826.js";import y from"./isiToast-34d29aba.js";import{c as v,i as f}from"./modal-menu-8f9355dd.js";const w="https://energyflow.b.goit.study/api",M="exercises",x=window.innerWidth;console.log(x);const t={filter:"",keyword:"",page:1,limit:9};x<1440?t.limit=8:t.limit=9;async function L(i,s){let r;if(n(e.subexercisesSearchForm),i==="Body parts"?r="bodypart":i==="Muscles"?r="muscles":i==="Equipment"&&(r="equipment"),e.exercisesGalleryEl,!r||!s){n(e.subexercisesTextNoFound),d(e.loaderModal);return}e.exercisesSubtitle.textContent=`${s}`,e.subexercisesSearchForm.reset(),e.subexercisesFilteredCards.innerHTML="",n(e.subexercisesFilteredCards),m(e.loaderModal);try{const{results:a,totalPages:o}=await g({filter:r,name:s,keyword:t.keyword,limit:t.limit,page:t.page});if(o<1){n(e.subexercisesTextNoFound),d(e.loaderModal);return}h(a),t.page+=1,e.subExercisesPaginationContainer||p(t.page,o)}catch(a){console.error("Error fetching images:",a)}finally{d(e.loaderModal)}e.subexercisesSearchForm.addEventListener("submit",l);async function l(a){a.preventDefault(),e.exercisesGalleryEl,t.keyword.trim()===""&&d(e.loaderModal),e.exercisesSubtitle.textContent=`${s}`,e.subexercisesFilteredCards.innerHTML="",m(e.loaderModal);const o=new FormData(a.target);t.keyword=o.get("query"),console.log(t.keyword);try{const{results:c,totalPages:u}=await g({filter:r,name:s,keyword:t.keyword,limit:t.limit,page:t.page});if(u<1){y.noResults(),n(e.subexercisesTextNoFound),d(e.loaderModal);return}u>=2&&p(t.page,u),h(c),t.page+=1,e.subExercisesPaginationContainer||p(t.page,u)}catch(c){console.error("Error fetching request:",c)}finally{d(e.loaderModal)}}}e.subexercisesFilteredCards.addEventListener("click",C);function C(i){if(!i.target.dataset.id)return;const s=i.target.dataset.id;v(s)}async function g({filter:i,name:s,keyword:r,limit:l,page:a}){return(await b.get(`${w}/${M}`,{params:{[i]:s,keyword:r,limit:l,page:a}})).data}function h(i){const s=i.map(r=>E(r)).join("");e.subexercisesFilteredCards.innerHTML=s}function E({_id:i,rating:s,name:r,burnedCalories:l,time:a,bodyPart:o,target:c}){return`<li class="filtered-card-item">
        <div class="card-box-workout">
          <div class="card-box-info">
            <div class="filtered-workout">Workout</div>
            <div class="card-box-rating">
              <p class="filtered-rating">${Math.round(s)}</p>
              <svg class="filtered-star" width="16" height="16">
                <use href="${f}#icon-Star-1"></use>
              </svg>
            </div>
          </div>
          <button class="to-favorites-start" type="submit" data-id=${i}>
            <span>Start</span>
            <svg class="filtered-start" width="16" height="16">
              <use href="${f}#icon-arrow-right"></use>
            </svg>
          </button> 
        </div>

        <div class="card-box-title">
          <div class="filtered-athlete-box">
            <svg class="filtered-athlete" width="16" height="16">
              <use href="${f}#icon-Man"></use>
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
  </li>`}function p(i,s){let r="";const l=Math.min(s,3),a=Math.max(1,i-1);m(e.loaderModal);for(let o=a;o<a+l;o++)r+=`<button class="button-pagination" type="button">${o}</button>`;return d(e.loaderModal),r}export{L as renderExerciseByFilterName};
//# sourceMappingURL=exercises-details-2be4720c.js.map
