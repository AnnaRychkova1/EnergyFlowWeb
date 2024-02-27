import{a as b}from"./vendor-8cce9181.js";import{show as n,hideLoader as d,showLoader as g}from"./visibility-9f0213da.js";import{refs as e}from"./refs-20f87826.js";import y from"./isiToast-34d29aba.js";import{c as w,i as f}from"./modal-menu-7cd938d1.js";const v="https://energyflow.b.goit.study/api",M="exercises",x=window.innerWidth;console.log(x);const s={filter:"",keyword:"",page:1,limit:9};async function L(t,r){x<1440?s.limit=8:s.limit=9;let i;if(n(e.subexercisesSearchForm),t==="Body parts"?i="bodypart":t==="Muscles"?i="muscles":t==="Equipment"&&(i="equipment"),e.exercisesGalleryEl,!i||!r){n(e.subexercisesTextNoFound),d(e.loaderModal);return}e.exercisesSubtitle.textContent=`${r}`,e.subexercisesSearchForm.reset(),e.subexercisesFilteredCards.innerHTML="",n(e.subexercisesFilteredCards),g(e.loaderModal);try{const{results:a,totalPages:o}=await m({filter:i,name:r,keyword:s.keyword,limit:s.limit,page:s.page});if(o<1){n(e.subexercisesTextNoFound),d(e.loaderModal);return}h(a),s.page+=1,e.subExercisesPaginationContainer||p(s.page,o)}catch(a){console.error("Error fetching images:",a)}finally{d(e.loaderModal)}e.subexercisesSearchForm.addEventListener("submit",l);async function l(a){a.preventDefault(),e.exercisesGalleryEl,s.keyword.trim()===""&&d(e.loaderModal),e.exercisesSubtitle.textContent=`${r}`,e.subexercisesFilteredCards.innerHTML="",g(e.loaderModal);const o=new FormData(a.target);s.keyword=o.get("query"),console.log(s.keyword);try{const{results:c,totalPages:u}=await m({filter:i,name:r,keyword:s.keyword,limit:s.limit,page:s.page});if(u<1){y.noResults(),n(e.subexercisesTextNoFound),d(e.loaderModal);return}u>=2&&p(s.page,u),h(c),s.page+=1,e.subExercisesPaginationContainer||p(s.page,u)}catch(c){console.error("Error fetching request:",c)}finally{d(e.loaderModal)}}}e.subexercisesFilteredCards.addEventListener("click",k);function k(t){if(console.log(t),!t.target.dataset.id)return;const r=t.target.dataset.id;console.log("start is working"),w(r)}async function m({filter:t,name:r,keyword:i,limit:l,page:a}){return(await b.get(`${v}/${M}`,{params:{[t]:r,keyword:i,limit:l,page:a}})).data}function h(t){const r=t.map(i=>C(i)).join("");e.subexercisesFilteredCards.innerHTML=r}function C({_id:t,rating:r,name:i,burnedCalories:l,time:a,bodyPart:o,target:c}){return`<li class="filtered-card-item">
        <div class="card-box-workout">
          <div class="card-box-info">
            <div class="filtered-workout">Workout</div>
            <div class="card-box-rating">
              <p class="filtered-rating">${Math.round(r)}</p>
              <svg class="filtered-star" width="16" height="16">
                <use href="${f}#icon-Star-1"></use>
              </svg>
            </div>
          </div>
          <button class="to-favorites-start" type="click" data-id=${t}>
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
          <h3 class="filtered-title">${i}</h3>
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
  </li>`}function p(t,r){let i="";const l=Math.min(r,3),a=Math.max(1,t-1);g(e.loaderModal);for(let o=a;o<a+l;o++)i+=`<button class="button-pagination" type="button">${o}</button>`;return d(e.loaderModal),i}export{L as renderExerciseByFilterName};
//# sourceMappingURL=exercises-details-dcba3276.js.map
