import{a as b}from"./vendor-8cce9181.js";import{hideLoader as c,hide as f,show as n,showLoader as g}from"./visibility-9f0213da.js";import{refs as e}from"./refs-000017b9.js";import d from"./isiToast-34d29aba.js";import{createModalMenu as y}from"./modal-menu-4ed12095.js";const E="https://energyflow.b.goit.study/api",C="exercises",o={filter:"",keyword:"",page:1,limit:9};window.innerWidth<=768?o.limit=8:o.limit=9;async function w(s,t){c(e.loaderModal);let i;if(s==="Body parts"?i="bodypart":s==="Muscles"?i="muscles":s==="Equipment"&&(i="equipment"),e.exercisesGalleryEl&&(f(e.subexercisesDetailsContainer),e.subexercisesSearchForm.reset()),e.subexercisesFilteredCards.innerHTML="",e.exercisesSubtitle.textContent=`${t}`,n(e.subexercisesDetailsContainer),n(e.subexercisesSearchForm),g(e.loaderModal),!i||!t){d.noResults(),n(e.subexercisesTextNoFound),c(e.loaderModal);return}try{const{results:r,totalPages:a}=await p({filter:i,name:t,keyword:o.keyword,limit:o.limit,page:o.page});if(console.log(a),console.log(r),console.log(o.page),a<1){d.noResults(),n(e.subexercisesTextNoFound),c(e.loaderModal);return}x(r),e.subExercisesPaginationContainer||h(a)}catch(r){console.error("Error fetching images:",r),d.apiIsiToastError()}finally{c(e.loaderModal),e.subexercisesSearchForm.reset()}//!  Works with search button
e.subexercisesSearchForm.addEventListener("submit",l);async function l(r){r.preventDefault(),e.exercisesGalleryEl&&(f(e.subexercisesDetailsContainer),f(e.subexercisesSearchForm)),e.exercisesSubtitle.textContent=`${t}`,n(e.subexercisesDetailsContainer),n(e.subexercisesSearchForm),g(e.loaderModal),e.subexercisesFilteredCards.innerHTML="";const a=new FormData(r.target);if(o.keyword=a.get("query"),console.log(o.keyword),o.keyword.trim()===""){d.noQuery(),c(e.loaderModal);return}try{const{results:u,totalPages:m}=await p({filter:i,name:t,keyword:o.keyword,limit:o.limit,page:o.page});if(m<1){d.noResults(),n(e.subexercisesTextNoFound),c(e.loaderModal);return}m>=2&&h(m),x(u),o.page+=1}catch(u){console.error("Error fetching images:",u),d.apiIsiToastError()}finally{f(e.loaderModal)}}}e.subexercisesFilteredCards.addEventListener("click",M);function M(s){if(!s.target.dataset.id)return;const t=s.target.dataset.id;f(e.subexercisesDetailsContainer),y(t)}async function p({filter:s,name:t,keyword:i,limit:l,page:r}){return(await b.get(`${E}/${C}`,{params:{[s]:t,keyword:i,limit:l,page:r}})).data}function x(s){const t=s.map(i=>v(i)).join("");e.subexercisesFilteredCards.innerHTML=t}function v({_id:s,rating:t,name:i,burnedCalories:l,time:r,bodyPart:a,target:u}){return`<li class="filtered-card-item">
        <div class="card-box-workout">
          <div class="card-box-info">
            <div class="filtered-workout">Workout</div>
            <div class="card-box-rating">
              <p class="filtered-rating">${Math.round(t)}</p>
              <img class="filteered-star" href="#" alt="star" height="35"></img>
            </div>
          </div>
          <button class="to-favorites-start" type="submit" data-id=${s}>Start</button>
        </div>
        <div class="card-box-title">
          <img class="filtered-athlete" href="#" alt="athlete" height="35"></img>
          <h3 class="filteered-title">${i}</h3>
        </div>
        <ul class="filtered-description">
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Burned calories: <spam class="filtered-descr-value">${l} / ${r} min</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Body part: <spam class="filtered-descr-value">${a}</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Target: <spam class="filtered-descr-value">${u}</spam></p>
          </li>
        </ul>
  </li>`}function h(s,t){e.subExercisesPaginationContainer.innerHTML="";let i=Math.max(1,t-1),l=Math.min(s,i+2);console.log(t);for(let r=i;r<=l;r++){const a=document.createElement("button");a.textContent=r,a.classList.add("subexercises-pagination-button"),r===t&&a.classList.add("active"),a.addEventListener("click",()=>k(r)),e.subExercisesPaginationContainer.appendChild(a)}console.log(e.subExercisesPaginationContainer)}function k(s){o.page=s,console.log(s),w()}export{w as renderExerciseByFilterName};
//# sourceMappingURL=exercises-details-7934dfbb.js.map
