import{a as b}from"./vendor-8cce9181.js";import{show as d,hideLoader as n,showLoader as m,hide as g}from"./visibility-9f0213da.js";import{refs as e}from"./refs-e3209bdb.js";import x from"./isiToast-34d29aba.js";import"./modal-menu-f7f39ade.js";const y="https://energyflow.b.goit.study/api",w="exercises",s={filter:"",keyword:"",page:1,limit:9};window.innerWidth<=768?s.limit=8:s.limit=9;async function $(t,i){let r;if(t==="Body parts"?r="bodypart":t==="Muscles"?r="muscles":t==="Equipment"&&(r="equipment"),!r||!i){d(e.subexercisesTextNoFound),n(e.loaderModal);return}e.exercisesSubtitle.textContent=`${i}`,e.subexercisesSearchForm.reset(),e.subexercisesFilteredCards.innerHTML="",d(e.subexercisesDetailsContainer),d(e.subexercisesSearchForm),m(e.loaderModal);try{const{results:a,totalPages:o}=await p({filter:r,name:i,keyword:s.keyword,limit:s.limit,page:s.page});if(o<1){d(e.subexercisesTextNoFound),n(e.loaderModal);return}h(a),s.page+=1,e.subExercisesPaginationContainer||f(s.page,o)}catch(a){console.error("Error fetching images:",a)}finally{n(e.loaderModal)}e.subexercisesSearchForm.addEventListener("submit",l);async function l(a){if(a.preventDefault(),e.exercisesGalleryEl&&(g(e.subexercisesDetailsContainer),g(e.subexercisesSearchForm)),s.keyword.trim()===""){n(e.loaderModal);return}e.exercisesSubtitle.textContent=`${i}`,e.subexercisesFilteredCards.innerHTML="",d(e.subexercisesDetailsContainer),d(e.subexercisesSearchForm),m(e.loaderModal);const o=new FormData(a.target);s.keyword=o.get("query"),console.log(s.keyword);try{const{results:c,totalPages:u}=await p({filter:r,name:i,keyword:s.keyword,limit:s.limit,page:s.page});if(u<1){x.noResults(),d(e.subexercisesTextNoFound),n(e.loaderModal);return}u>=2&&f(s.page,u),h(c),s.page+=1,e.subExercisesPaginationContainer||f(s.page,u)}catch(c){console.error("Error fetching request:",c)}finally{n(e.loaderModal)}}}e.subexercisesFilteredCards.addEventListener("click",v);function v(t){t.target.dataset.id&&t.target.dataset.id}async function p({filter:t,name:i,keyword:r,limit:l,page:a}){return(await b.get(`${y}/${w}`,{params:{[t]:i,keyword:r,limit:l,page:a}})).data}function h(t){const i=t.map(r=>M(r)).join("");e.subexercisesFilteredCards.innerHTML=i}function M({_id:t,rating:i,name:r,burnedCalories:l,time:a,bodyPart:o,target:c}){return`<li class="filtered-card-item">
        <div class="card-box-workout">
          <div class="card-box-info">
            <div class="filtered-workout">Workout</div>
            <div class="card-box-rating">
              <p class="filtered-rating">${Math.round(i)}</p>
              <img class="filteered-star" href="#" alt="star" height="35"></img>
            </div>
          </div>
          <button class="to-favorites-start" type="submit" data-id=${t}>Start</button>
          <svg class="start-svg" width="18" height="18">
                    <use href="./img/icons/symbol-defs.svg#icon-arrow-top-right"></use>
                </svg>
        </div>
        <div class="card-box-title">
          <svg class="filtered-athlete" width="14" height="14">
          <use href="./img/icons/symbol-defs.svg#icon-Man"></use>
          </svg>
          <h3 class="filteered-title">${r}</h3>
        </div>
        <ul class="filtered-description">
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Burned calories: <spam class="filtered-descr-value">${l} / ${a} min</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Body part: <spam class="filtered-descr-value">${o}</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Target: <spam class="filtered-descr-value">${c}</spam></p>
          </li>
        </ul>
  </li>`}function f(t,i){let r="";const l=Math.min(i,3),a=Math.max(1,t-1);m(e.loaderModal);for(let o=a;o<a+l;o++)r+=`<button class="button-pagination" type="button">${o}</button>`;return n(e.loaderModal),r}export{$ as renderExerciseByFilterName};
//# sourceMappingURL=exercises-details-e26393d5.js.map
