import{a as b}from"./vendor-8cce9181.js";import{show as d,hideLoader as n,showLoader as m,hide as x}from"./visibility-9f0213da.js";import{refs as e}from"./refs-3c722e7a.js";import h from"./isiToast-34d29aba.js";import{createModalMenu as y}from"./modal-menu-68eb276c.js";const w="https://energyflow.b.goit.study/api",M="exercises",r={filter:"",keyword:"",page:1,limit:9};window.innerWidth<=768?r.limit=8:r.limit=9;async function T(i,t){let s;if(i==="Body parts"?s="bodypart":i==="Muscles"?s="muscles":i==="Equipment"&&(s="equipment"),!s||!t){d(e.subexercisesTextNoFound),n(e.loaderModal);return}e.exercisesSubtitle.textContent=`${t}`,e.subexercisesSearchForm.reset(),e.subexercisesFilteredCards.innerHTML="",d(e.subexercisesDetailsContainer),d(e.subexercisesSearchForm),m(e.loaderModal);try{const{results:a,totalPages:o}=await p({filter:s,name:t,keyword:r.keyword,limit:r.limit,page:r.page});if(o<1){d(e.subexercisesTextNoFound),n(e.loaderModal);return}g(a),r.page+=1,e.subExercisesPaginationContainer||f(r.page,o)}catch(a){console.error("Error fetching images:",a)}finally{n(e.loaderModal)}e.subexercisesSearchForm.addEventListener("submit",l);async function l(a){a.preventDefault(),r.keyword.trim()===""&&n(e.loaderModal),e.exercisesSubtitle.textContent=`${t}`,e.subexercisesFilteredCards.innerHTML="",d(e.subexercisesDetailsContainer),d(e.subexercisesSearchForm),m(e.loaderModal);const o=new FormData(a.target);r.keyword=o.get("query"),console.log(r.keyword);try{const{results:c,totalPages:u}=await p({filter:s,name:t,keyword:r.keyword,limit:r.limit,page:r.page});if(u<1){h.noResults(),d(e.subexercisesTextNoFound),n(e.loaderModal);return}u>=2&&f(r.page,u),g(c),r.page+=1,e.subExercisesPaginationContainer||f(r.page,u)}catch(c){console.error("Error fetching request:",c)}finally{n(e.loaderModal),x(e.subexercisesSearchBtn)}}}e.subexercisesFilteredCards.addEventListener("click",v);function v(i){if(!i.target.dataset.id)return;const t=i.target.dataset.id;y(t)}async function p({filter:i,name:t,keyword:s,limit:l,page:a}){return(await b.get(`${w}/${M}`,{params:{[i]:t,keyword:s,limit:l,page:a}})).data}function g(i){const t=i.map(s=>k(s)).join("");e.subexercisesFilteredCards.innerHTML=t}function k({_id:i,rating:t,name:s,burnedCalories:l,time:a,bodyPart:o,target:c}){return`<li class="filtered-card-item">
        <div class="card-box-workout">
          <div class="card-box-info">
            <div class="filtered-workout">Workout</div>
            <div class="card-box-rating">
              <p class="filtered-rating">${Math.round(t)}</p>
              <img class="filteered-star" href="#" alt="star" height="35"></img>
            </div>
          </div>
          <button class="to-favorites-start" type="submit" data-id=${i}>Start</button>
          
        </div>
        <div class="card-box-title">
         
          <h3 class="filteered-title">${s}</h3>
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
  </li>`}function f(i,t){let s="";const l=Math.min(t,3),a=Math.max(1,i-1);m(e.loaderModal);for(let o=a;o<a+l;o++)s+=`<button class="button-pagination" type="button">${o}</button>`;return n(e.loaderModal),s}export{T as renderExerciseByFilterName};
//# sourceMappingURL=exercises-details-58c12149.js.map
