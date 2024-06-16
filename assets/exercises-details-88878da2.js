import{a as w}from"./vendor-fd853f38.js";import{r as L,i as c}from"./modal-menu-85beae49.js";import{refs as e}from"./refs-89afcfb6.js";import{show as a,hide as x,showLoader as m,hideLoader as b}from"./visibility-9f0213da.js";import{onPaginationClick as T,pagesPagination as v}from"./pagination-bc12a092.js";import{scrollTo as y}from"./scrollTo-6516673a.js";import{errorResult as u}from"./iziToast-77b847f7.js";const C="https://energyflow.b.goit.study/api",F="exercises",M=window.innerWidth;let n=1,o="",d,l={keyword:"",page:n,limit:d};M<1440?d=8:d=9;e.subexercisesSearchForm&&e.subexercisesSearchForm.addEventListener("submit",S);e.paginationEl&&e.paginationEl.addEventListener("click",T(p,f,l,e.subexercisesFilteredCards,"second-pagination"));async function D(s,i){if(!s||!i){a(e.subexercisesTextNoFound);return}l={keyword:"",page:n,limit:d},s==="Body parts"?o="bodypart":s==="Muscles"?o="muscles":s==="Equipment"&&(o="equipment"),l[o]=i,x(e.subexercisesTextNoFound),a(e.subexercisesSearchForm),a(e.subexercisesFilteredCards),a(e.exercisesSubtitle),e.exercisesSubtitle.textContent=`${i}`,e.subexercisesFilteredCards.innerHTML="",e.paginationEl.innerHTML="",e.exercisesGalleryEl.innerHTML="",e.paginationEl.classList.add("second-pagination"),e.paginationEl.classList.remove("first-pagination"),m(e.loaderModal);try{const{results:r,totalPages:t}=await f(n);if(t>1&&(e.paginationEl.innerHTML=v(n,t)),r&&r.length>0)p(r);else{a(e.subexercisesTextNoFound);return}y(e.exercisesContainerEl)}catch{u("Server Exercises By Filter did not responded")}finally{b(e.loaderModal)}}async function S(s){s.preventDefault();const i=s.currentTarget;l.keyword=i.query.value.trim(),l.keyword||u("Input keyword"),a(e.subexercisesSearchForm),x(e.subexercisesTextNoFound),e.subexercisesFilteredCards.innerHTML="",e.paginationEl.innerHTML="",e.exercisesGalleryEl.innerHTML="",m(e.loaderModal);try{const{results:r,totalPages:t}=await f(n);if(t>1&&(e.paginationEl.innerHTML=v(n,t)),r&&r.length>0)p(r);else{a(e.subexercisesTextNoFound);return}y(e.exercisesContainerEl)}catch{u("Server Exercises By Query did not responded")}finally{b(e.loaderModal),e.subexercisesSearchForm.reset()}}e.subexercisesFilteredCards&&e.subexercisesFilteredCards.addEventListener("click",$);function $(s){if(!s.target.dataset.id)return;const i=s.target.dataset.id;L(i)}async function f(s){return(await w.get(`${C}/${F}`,{params:{...l,page:s}})).data}function p(s){e.exercisesGalleryEl.innerHTML="";const i=s.map(r=>k(r)).join("");e.subexercisesFilteredCards.innerHTML=i}function k({_id:s,rating:i,name:r,burnedCalories:t,time:E,bodyPart:g,target:h}){return`<li class="filtered-card-item">
        <div class="card-box-workout">

          <div class="card-box-info">
            <div class="filtered-workout">Workout</div>
            <div class="card-box-rating">
              <p class="filtered-rating">${i.toFixed(1)}</p>
              <svg class="filtered-star" width="16" height="16">
                <use href="${c}#icon-Star-1"></use>
              </svg>
            </div>
          </div>

          <button class="to-favorites-start" type="click" data-id=${s}>
            <span data-id=${s}>Start</span>
            <svg data-id=${s} class="filtered-start" width="16" height="16">
              <use href="${c}#icon-arrow-right"></use>
            </svg>
          </button>

        </div>

        <div class="card-box-title">
          <div class="filtered-athlete-box">
            <svg class="filtered-athlete" width="16" height="16">
              <use href="${c}#icon-Man"></use>
            </svg>
          </div>
          <h3 class="filtered-title">${r}</h3>
        </div>

        <ul class="filtered-description">
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Burned calories: <span class="filtered-descr-value">${t} / ${E} min</span></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Body part: <span class="filtered-descr-value">${g.charAt(0).toUpperCase()+g.slice(1)}</span></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Target: <span class="filtered-descr-value">${h.charAt(0).toUpperCase()+h.slice(1)}</span></p>
          </li>
        </ul>
  </li>`}export{S as handleSearch,D as renderExerciseByFilterName};
//# sourceMappingURL=exercises-details-88878da2.js.map
