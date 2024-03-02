import{a as b}from"./vendor-8cce9181.js";import{hide as o,show as d,hideLoader as u,showLoader as g}from"./visibility-9f0213da.js";import{refs as e}from"./refs-20f87826.js";import{scrollTo as p}from"./scrollTo-6516673a.js";import{c as y,i as f}from"./modal-menu-7cd938d1.js";const v="https://energyflow.b.goit.study/api",w="exercises",F=window.innerWidth,t={filter:"",keyword:"",page:1,limit:9};async function L(s,r){e.exercisesGalleryEl&&(o(e.subexercisesFilteredCards),o(e.subexercisesSearchForm)),F<1440?t.limit=8:t.limit=9;let i;if(s==="Body parts"?i="bodypart":s==="Muscles"?i="muscles":s==="Equipment"&&(i="equipment"),!i||!r){d(e.subexercisesTextNoFound),u(e.loaderModal);return}o(e.exercisesGalleryEl),o(e.subexercisesTextNoFound),d(e.subexercisesSearchForm),d(e.subexercisesFilteredCards),d(e.exercisesSubtitle),e.exercisesSubtitle.textContent=`${r}`,e.subexercisesFilteredCards.innerHTML="";try{const{results:a,totalPages:l}=await m({filter:i,name:r,keyword:t.keyword,limit:t.limit,page:t.page});if(l<1){d(e.subexercisesTextNoFound),u(e.loaderModal);return}h(a),p(e.subexercisesFilteredCards)}catch(a){console.error("Error fetching images:",a)}finally{u(e.loaderModal)}e.subexercisesSearchForm.addEventListener("submit",c);async function c(a){a.preventDefault(),e.exercisesGalleryEl&&(o(e.subexercisesFilteredCards),o(e.subexercisesSearchForm));const l=a.currentTarget;t.keyword=l.query.value.trim(),console.log(t.keyword),t.keyword||(u(e.loaderModal),console.log("input keyword")),d(e.subexercisesSearchForm),o(e.subexercisesTextNoFound),g(e.loaderModal),e.subexercisesFilteredCards.innerHTML="";try{const{results:n,totalPages:x}=await m({filter:i,name:r,keyword:t.keyword,limit:t.limit,page:t.page});if(x<1){d(e.subexercisesTextNoFound),u(e.loaderModal);return}h(n),p(e.subexercisesFilteredCards)}catch(n){console.error("Error fetching request:",n)}finally{u(e.loaderModal),e.subexercisesSearchForm.reset(),t.keyword="",e.subexercisesSearchForm.removeEventListener("submit",c)}}}e.subexercisesFilteredCards.addEventListener("click",k);function k(s){if(!s.target.dataset.id)return;const r=s.target.dataset.id;y(r)}async function m({filter:s,name:r,keyword:i,limit:c,page:a}){return(await b.get(`${v}/${w}`,{params:{[s]:r,keyword:i,limit:c,page:a}})).data}function h(s){const r=s.map(i=>C(i)).join("");e.subexercisesFilteredCards.innerHTML=r}function C({_id:s,rating:r,name:i,burnedCalories:c,time:a,bodyPart:l,target:n}){return`<li class="filtered-card-item">
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

          <button class="to-favorites-start" type="click" data-id=${s}>
            <span data-id=${s}>Start</span>
            <svg data-id=${s} class="filtered-start" width="16" height="16">
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
            <p class="filtered-descr-title">Burned calories: <span class="filtered-descr-value">${c} / ${a} min</span></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Body part: <span class="filtered-descr-value">${l.charAt(0).toUpperCase()+l.slice(1)}</span></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Target: <span class="filtered-descr-value">${n.charAt(0).toUpperCase()+n.slice(1)}</span></p>
          </li>
        </ul>
  </li>`}export{L as renderExerciseByFilterName};
//# sourceMappingURL=exercises-details-2a2b42fe.js.map
