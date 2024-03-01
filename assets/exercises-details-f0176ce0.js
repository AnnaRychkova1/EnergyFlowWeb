import{a as x}from"./vendor-8cce9181.js";import{show as o,hideLoader as n,hide as f,showLoader as g}from"./visibility-9f0213da.js";import{refs as e}from"./refs-20f87826.js";import v from"./isiToast-34d29aba.js";import{c as y,i as u}from"./modal-menu-7cd938d1.js";const b="https://energyflow.b.goit.study/api",w="exercises",k=window.innerWidth,i={filter:"",keyword:"",page:1,limit:9};async function L(s,r){e.exercisesGalleryEl,k<1440?i.limit=8:i.limit=9;let t;if(s==="Body parts"?t="bodypart":s==="Muscles"?t="muscles":s==="Equipment"&&(t="equipment"),!t||!r){o(e.subexercisesTextNoFound),n(e.loaderModal);return}o(e.subexercisesSearchForm),o(e.subexercisesFilteredCards),o(e.exercisesSubtitle),f(e.subexercisesTextNoFound),e.exercisesSubtitle.textContent=`${r}`,e.subexercisesFilteredCards.innerHTML="";try{const{results:a,totalPages:l}=await m({filter:t,name:r,keyword:i.keyword,limit:i.limit,page:i.page});if(l<1){o(e.subexercisesTextNoFound),n(e.loaderModal);return}p(a)}catch(a){console.error("Error fetching images:",a)}finally{n(e.loaderModal)}e.subexercisesSearchForm.addEventListener("submit",d);async function d(a){a.preventDefault(),e.exercisesGalleryEl;const l=a.currentTarget;i.keyword=l.elements.query.value.trim(),console.log(i.keyword),i.keyword||(n(e.loaderModal),console.log("input keyword")),e.subexercisesFilteredCards.innerHTML="",o(e.subexercisesSearchForm),f(e.subexercisesTextNoFound),g(e.loaderModal);try{const{results:c,totalPages:h}=await m({filter:t,name:r,keyword:i.keyword,limit:i.limit,page:i.page});if(h<1){v.noResults(),o(e.subexercisesTextNoFound),n(e.loaderModal);return}p(c)}catch(c){console.error("Error fetching request:",c)}finally{n(e.loaderModal),e.subexercisesSearchForm.reset(),i.keyword="",e.subexercisesSearchForm.removeEventListener("submit",d)}}}e.subexercisesFilteredCards.addEventListener("click",E);function E(s){if(!s.target.dataset.id)return;const r=s.target.dataset.id;y(r)}async function m({filter:s,name:r,keyword:t,limit:d,page:a}){return(await x.get(`${b}/${w}`,{params:{[s]:r,keyword:t,limit:d,page:a}})).data}function p(s){const r=s.map(t=>F(t)).join("");e.subexercisesFilteredCards.innerHTML=r}function F({_id:s,rating:r,name:t,burnedCalories:d,time:a,bodyPart:l,target:c}){return`<li class="filtered-card-item">
        <div class="card-box-workout">

          <div class="card-box-info">
            <div class="filtered-workout">Workout</div>
            <div class="card-box-rating">
              <p class="filtered-rating">${Math.round(r)}</p>
              <svg class="filtered-star" width="16" height="16">
                <use href="${u}#icon-Star-1"></use>
              </svg>
            </div>
          </div>
          
          <button class="to-favorites-start" type="click" data-id=${s}>
            <span data-id=${s}>Start</span>
            <svg data-id=${s} class="filtered-start" width="16" height="16">
              <use href="${u}#icon-arrow-right"></use>
            </svg>
          </button> 

        </div>

        <div class="card-box-title">
          <div class="filtered-athlete-box">
            <svg class="filtered-athlete" width="16" height="16">
              <use href="${u}#icon-Man"></use>
            </svg>
          </div>
          <h3 class="filtered-title">${t}</h3>
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
//# sourceMappingURL=exercises-details-f0176ce0.js.map
