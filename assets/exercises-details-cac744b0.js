import{a as b}from"./vendor-8cce9181.js";import{hide as n,show as o,hideLoader as u,showLoader as g}from"./visibility-9f0213da.js";import{refs as e}from"./refs-20f87826.js";import{scrollTo as m}from"./scrollTo-6516673a.js";import{c as v,i as f}from"./modal-menu-7cd938d1.js";const y="https://energyflow.b.goit.study/api",w="exercises",F=window.innerWidth,t={filter:"",keyword:"",page:1,limit:9};async function L(s,r){e.exercisesGalleryEl&&(n(e.subexercisesFilteredCards),n(e.subexercisesSearchForm)),F<1440?t.limit=8:t.limit=9;let i;if(s==="Body parts"?i="bodypart":s==="Muscles"?i="muscles":s==="Equipment"&&(i="equipment"),!i||!r){o(e.subexercisesTextNoFound),u(e.loaderModal);return}o(e.subexercisesSearchForm),o(e.subexercisesFilteredCards),o(e.exercisesSubtitle),n(e.subexercisesTextNoFound),e.exercisesSubtitle.textContent=`${r}`,e.subexercisesFilteredCards.innerHTML="";try{const{results:a,totalPages:l}=await p({filter:i,name:r,keyword:t.keyword,limit:t.limit,page:t.page});if(l<1){o(e.subexercisesTextNoFound),u(e.loaderModal);return}h(a),m(e.subexercisesFilteredCards)}catch(a){console.error("Error fetching images:",a)}finally{u(e.loaderModal)}e.subexercisesSearchForm.addEventListener("submit",d);async function d(a){a.preventDefault(),e.exercisesGalleryEl&&(n(e.subexercisesFilteredCards),n(e.subexercisesSearchForm));const l=a.currentTarget;t.keyword=l.query.value.trim(),console.log(t.keyword),t.keyword||(u(e.loaderModal),console.log("input keyword")),e.subexercisesFilteredCards.innerHTML="",o(e.subexercisesSearchForm),n(e.subexercisesTextNoFound),g(e.loaderModal);try{const{results:c,totalPages:x}=await p({filter:i,name:r,keyword:t.keyword,limit:t.limit,page:t.page});if(x<1){o(e.subexercisesTextNoFound),u(e.loaderModal);return}h(c),m(e.subexercisesFilteredCards)}catch(c){console.error("Error fetching request:",c)}finally{u(e.loaderModal),e.subexercisesSearchForm.reset(),t.keyword="",e.subexercisesSearchForm.removeEventListener("submit",d)}}}e.subexercisesFilteredCards.addEventListener("click",k);function k(s){if(!s.target.dataset.id)return;const r=s.target.dataset.id;v(r)}async function p({filter:s,name:r,keyword:i,limit:d,page:a}){return(await b.get(`${y}/${w}`,{params:{[s]:r,keyword:i,limit:d,page:a}})).data}function h(s){const r=s.map(i=>C(i)).join("");e.subexercisesFilteredCards.innerHTML=r}function C({_id:s,rating:r,name:i,burnedCalories:d,time:a,bodyPart:l,target:c}){return`<li class="filtered-card-item">
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
            <p class="filtered-descr-title">Burned calories: <spam class="filtered-descr-value">${d} / ${a} min</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Body part: <spam class="filtered-descr-value value-capitalized">${l.charAt(0).toUpperCase()+l.slice(1)}</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Target: <spam class="filtered-descr-value value-capitalized">${c.charAt(0).toUpperCase()+c.slice(1)}</spam></p>
          </li>
        </ul>
  </li>`}export{L as renderExerciseByFilterName};
//# sourceMappingURL=exercises-details-cac744b0.js.map
