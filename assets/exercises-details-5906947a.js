import{a as h}from"./vendor-8cce9181.js";import{show as d,hideLoader as n,showLoader as m,hide as p}from"./visibility-9f0213da.js";import{refs as e}from"./refs-e3209bdb.js";import x from"./isiToast-34d29aba.js";const y="https://energyflow.b.goit.study/api",w="exercises",t={filter:"",keyword:"",page:1,limit:9};window.innerWidth<=768?t.limit=8:t.limit=9;async function F(s,i){let r;if(s==="Body parts"?r="bodypart":s==="Muscles"?r="muscles":s==="Equipment"&&(r="equipment"),!r||!i){d(e.subexercisesTextNoFound),n(e.loaderModal);return}e.exercisesSubtitle.textContent=`${i}`,e.subexercisesSearchForm.reset(),e.subexercisesFilteredCards.innerHTML="",d(e.subexercisesDetailsContainer),d(e.subexercisesSearchForm),m(e.loaderModal);try{const{results:a,totalPages:o}=await g({filter:r,name:i,keyword:t.keyword,limit:t.limit,page:t.page});if(o<1){d(e.subexercisesTextNoFound),n(e.loaderModal);return}b(a),t.page+=1,e.subExercisesPaginationContainer||f(t.page,o)}catch(a){console.error("Error fetching images:",a)}finally{n(e.loaderModal)}e.subexercisesSearchForm.addEventListener("submit",l);async function l(a){if(a.preventDefault(),e.exercisesGalleryEl&&(p(e.subexercisesDetailsContainer),p(e.subexercisesSearchForm)),t.keyword.trim()===""){n(e.loaderModal);return}e.exercisesSubtitle.textContent=`${i}`,e.subexercisesFilteredCards.innerHTML="",d(e.subexercisesDetailsContainer),d(e.subexercisesSearchForm),m(e.loaderModal);const o=new FormData(a.target);t.keyword=o.get("query"),console.log(t.keyword);try{const{results:c,totalPages:u}=await g({filter:r,name:i,keyword:t.keyword,limit:t.limit,page:t.page});if(u<1){x.noResults(),d(e.subexercisesTextNoFound),n(e.loaderModal);return}u>=2&&f(t.page,u),b(c),t.page+=1,e.subExercisesPaginationContainer||f(t.page,u)}catch(c){console.error("Error fetching request:",c)}finally{n(e.loaderModal)}}}e.subexercisesFilteredCards.addEventListener("click",M);function M(s){s.target.dataset.id&&s.target.dataset.id}async function g({filter:s,name:i,keyword:r,limit:l,page:a}){return(await h.get(`${y}/${w}`,{params:{[s]:i,keyword:r,limit:l,page:a}})).data}function b(s){const i=s.map(r=>v(r)).join("");e.subexercisesFilteredCards.innerHTML=i}function v({_id:s,rating:i,name:r,burnedCalories:l,time:a,bodyPart:o,target:c}){return`<li class="filtered-card-item">
        <div class="card-box-workout">
          <div class="card-box-info">
            <div class="filtered-workout">Workout</div>
            <div class="card-box-rating">
              <p class="filtered-rating">${Math.round(i)}</p>
              <img class="filteered-star" href="#" alt="star" height="35"></img>
            </div>
          </div>
          <button class="to-favorites-start" type="submit" data-id=${s}>Start</button>
        </div>
        <div class="card-box-title">
          <img class="filtered-athlete" href="#" alt="athlete" height="35"></img>
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
  </li>`}function f(s,i){let r="";const l=Math.min(i,3),a=Math.max(1,s-1);m(e.loaderModal);for(let o=a;o<a+l;o++)r+=`<button class="button-pagination" type="button">${o}</button>`;return n(e.loaderModal),r}export{F as renderExerciseByFilterName};
//# sourceMappingURL=exercises-details-5906947a.js.map
