import{a as b}from"./vendor-8cce9181.js";import{hide as u,show as n,showLoader as p,hideLoader as f}from"./visibility-9f0213da.js";import{refs as e}from"./refs-be07ecb5.js";import c from"./isiToast-34d29aba.js";import{createModalMenu as y}from"./modal-menu-52d10f61.js";const w="https://energyflow.b.goit.study/api",C="exercises",t={filter:"",keyword:"",page:1,limit:9};window.innerWidth<=768?t.limit=8:t.limit=9;async function E(r,i){let a;if(r==="Body parts"?a="bodypart":r==="Muscles"?a="muscles":r==="Equipment"&&(a="equipment"),e.exercisesGalleryEl&&(u(e.subexercisesDetailsContainer),e.subexercisesSearchForm.reset(),u(e.subexercisesSearchForm)),e.exercisesSubtitle.textContent=`${i}`,n(e.subexercisesDetailsContainer),n(e.subexercisesSearchForm),p(e.loaderModal),e.subexercisesFilteredCards.innerHTML="",!a||!i){c.noResults(),n(e.subexercisesTextNoFound),f(e.loaderModal);return}try{p(e.loaderModal);const{results:s,totalPages:l}=await g({filter:a,name:i,keyword:t.keyword,limit:t.limit,page:t.page});if(console.log(l),console.log(s),console.log(t.page),l<1){c.noResults(),n(e.subexercisesTextNoFound),f(e.loaderModal);return}l>2&&h(l),x(s),t.page+=1}catch(s){console.error("Error fetching images:",s),c.apiIsiToastError()}finally{f(e.loaderModal)}//!  Works with search button
e.subexercisesSearchForm.addEventListener("submit",o);async function o(s){s.preventDefault(),e.exercisesGalleryEl&&(u(e.subexercisesDetailsContainer),u(e.subexercisesSearchForm)),e.exercisesSubtitle.textContent=`${i}`,n(e.subexercisesDetailsContainer),n(e.subexercisesSearchForm),p(e.loaderModal),e.subexercisesFilteredCards.innerHTML="";const l=new FormData(s.target);if(t.keyword=l.get("query"),console.log(t.keyword),t.keyword.trim()===""){c.noQuery(),f(e.loaderModal);return}try{const{results:d,totalPages:m}=await g({filter:a,name:i,keyword:t.keyword,limit:t.limit,page:t.page});if(m<1){c.noResults(),n(e.subexercisesTextNoFound),f(e.loaderModal);return}m>2&&h(m),x(d),t.page+=1}catch(d){console.error("Error fetching images:",d),c.apiIsiToastError()}finally{u(e.loaderModal)}}}e.subexercisesFilteredCards.addEventListener("click",M);function M(r){if(!r.target.dataset.id)return;const i=r.target.dataset.id;y(i)}async function g({filter:r,name:i,keyword:a,limit:o,page:s}){return(await b.get(`${w}/${C}`,{params:{[r]:i,keyword:a,limit:o,page:s}})).data}function x(r){const i=r.map(a=>v(a)).join("");e.subexercisesFilteredCards.innerHTML=i}function v({_id:r,rating:i,name:a,burnedCalories:o,time:s,bodyPart:l,target:d}){return`<li class="filtered-card-item">
        <div class="card-box-workout">
          <div class="card-box-info">
            <div class="filtered-workout">Workout</div>
            <div class="card-box-rating">
              <p class="filtered-rating">${Math.round(i)}</p>
              <img class="filteered-star" href="#" alt="star" height="35"></img>
            </div>
          </div>
          <button type="submit" data-id=${r} class="to-favorites-start">Start</button><a/>
        </div>
        <div class="card-box-title">
          <img class="filteered-athlete" href="#" alt="athlete" height="35"></img>
          <h3 class="filteered-title">${a}</h3>
        </div>
        <ul class="filtered-description">
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Burned calories: <spam class="filtered-descr-value">${o} / ${s} min</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Body part: <spam class="filtered-descr-value">${l}</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Target: <spam class="filtered-descr-value">${d}</spam></p>
          </li>
        </ul>
  </li>`}function h(r){e.subExercisesPaginationContainer.innerHTML="";let i=Math.max(1,t.page-1),a=Math.min(r,i+2);for(let o=i;o<=a;o++){const s=document.createElement("button");s.textContent=o,s.classList.add("subexercises-pagination-button"),o===t.page&&s.classList.add("active"),s.addEventListener("click",()=>k(o)),e.subExercisesPaginationContainer.appendChild(s)}}function k(r){t.page=r,console.log(r),E()}export{E as renderExerciseByFilterName};
//# sourceMappingURL=exercises-details-c654f2f1.js.map
