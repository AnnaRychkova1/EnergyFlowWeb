import{a as b}from"./vendor-8cce9181.js";import{hide as u,show as n,showLoader as p,hideLoader as f}from"./visibility-9f0213da.js";import{refs as e}from"./refs-be07ecb5.js";import c from"./isiToast-34d29aba.js";import{createModalMenu as y}from"./modal-menu-afaba17c.js";const w="https://energyflow.b.goit.study/api",C="exercises",t={filter:"",keyword:"",page:1,limit:9};window.innerWidth<=768?t.limit=8:t.limit=9;async function E(s,i){let a;if(s==="Body parts"?a="bodypart":s==="Muscles"?a="muscles":s==="Equipment"&&(a="equipment"),e.exercisesGalleryEl&&(u(e.subexercisesDetailsContainer),e.subexercisesSearchForm.reset(),u(e.subexercisesSearchForm)),e.exercisesSubtitle.textContent=`${i}`,n(e.subexercisesDetailsContainer),n(e.subexercisesSearchForm),p(e.loaderModal),e.subexercisesFilteredCards.innerHTML="",!a||!i){c.noResults(),n(e.subexercisesTextNoFound),f(e.loaderModal);return}try{p(e.loaderModal);const{results:r,totalPages:l}=await g({filter:a,name:i,keyword:t.keyword,limit:t.limit,page:t.page});if(console.log(l),console.log(r),console.log(t.page),l<1){c.noResults(),n(e.subexercisesTextNoFound),f(e.loaderModal);return}l>2&&h(l),x(r),t.page+=1}catch(r){console.error("Error fetching images:",r),c.apiIsiToastError()}finally{f(e.loaderModal)}//!  Works with search button
e.subexercisesSearchForm.addEventListener("submit",o);async function o(r){r.preventDefault(),e.exercisesGalleryEl&&(u(e.subexercisesDetailsContainer),u(e.subexercisesSearchForm)),e.exercisesSubtitle.textContent=`${i}`,n(e.subexercisesDetailsContainer),n(e.subexercisesSearchForm),p(e.loaderModal),e.subexercisesFilteredCards.innerHTML="";const l=new FormData(r.target);if(t.keyword=l.get("query"),console.log(t.keyword),t.keyword.trim()===""){c.noQuery(),f(e.loaderModal);return}try{const{results:d,totalPages:m}=await g({filter:a,name:i,keyword:t.keyword,limit:t.limit,page:t.page});if(m<1){c.noResults(),n(e.subexercisesTextNoFound),f(e.loaderModal);return}m>2&&h(m),x(d),t.page+=1}catch(d){console.error("Error fetching images:",d),c.apiIsiToastError()}finally{u(e.loaderModal)}}}e.subexercisesFilteredCards.addEventListener("click",M);function M(s){if(!s.target.dataset.id)return;const i=s.target.dataset.id;y(i)}async function g({filter:s,name:i,keyword:a,limit:o,page:r}){return(await b.get(`${w}/${C}`,{params:{[s]:i,keyword:a,limit:o,page:r}})).data}function x(s){const i=s.map(a=>v(a)).join("");e.subexercisesFilteredCards.innerHTML=i}function v({_id:s,rating:i,name:a,burnedCalories:o,time:r,bodyPart:l,target:d}){return`<li class="filtered-card-item">
        <div class="card-box-workout">
          <div class="card-box-info">
            <div class="filtered-workout">Workout</div>
            <div class="card-box-rating">
              <p class="filtered-rating">${Math.round(i)}</p>
              <img class="filteered-star" href="#" alt="star" height="35"></img>
            </div>
          </div>
          <a><button class="to-favorites-start" type="submit" data-id=${s} class="to-favorites-start">Start</button><a/>
        </div>
        <div class="card-box-title">
          <img class="filtered-athlete" href="#" alt="athlete" height="35"></img>
          <h3 class="filteered-title">${a}</h3>
        </div>
        <ul class="filtered-description">
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Burned calories: <spam class="filtered-descr-value">${o} / ${r} min</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Body part: <spam class="filtered-descr-value">${l}</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Target: <spam class="filtered-descr-value">${d}</spam></p>
          </li>
        </ul>
  </li>`}function h(s){e.subExercisesPaginationContainer.innerHTML="";let i=Math.max(1,t.page-1),a=Math.min(s,i+2);for(let o=i;o<=a;o++){const r=document.createElement("button");r.textContent=o,r.classList.add("subexercises-pagination-button"),o===t.page&&r.classList.add("active"),r.addEventListener("click",()=>k(o)),e.subExercisesPaginationContainer.appendChild(r)}}function k(s){t.page=s,console.log(s),E()}export{E as renderExerciseByFilterName};
//# sourceMappingURL=exercises-details-17ef43a9.js.map
