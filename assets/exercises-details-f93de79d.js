import{a as w}from"./vendor-8cce9181.js";import{showLoader as x,hideLoader as n,show as d,hide as T}from"./visibility-9f0213da.js";import{refs as e}from"./refs-83aa709d.js";import{scrollTo as y}from"./scrollTo-6516673a.js";import{r as F,i as m}from"./modal-menu-45995f81.js";function M(t,r){let s="",l=Math.max(1,t-1),i=Math.min(r,l+3-1);l>1&&(s+='<button class="button-pagination prev" type="button"><<</button>');for(let o=l;o<=i;o++)s+=`<button class="button-pagination ${o===t?"active":""}" type="button">${o}</button>`;return i<r&&(s+='<button class="button-pagination next" type="button">>></button>'),s}function S(t,r,s,a,l){let i=1;return async function(L){const p=L.target;if(p.parentElement.classList.contains(l)){if(p.classList.contains("prev")||p.classList.contains("next")){const c=e.paginationEl.querySelector(".button-pagination.active"),g=parseInt(c.textContent,10);i=p.classList.contains("prev")?g-1:g+1}else i=parseInt(L.target.textContent,10);s.page=i,a.innerHTML="";try{x(e.loaderModal);const{results:c,totalPages:g}=await r(i,s);c&&c.length>0?(t(c),e.paginationEl.innerHTML=M(i,g),y(e.exercisesContainerEl)):console.error("No results found for this filter")}catch(c){console.log(c)}finally{n(e.loaderModal)}}}}const $="https://energyflow.b.goit.study/api",k="exercises",H=window.innerWidth;let u=1,b="",h,f={keyword:"",page:u,limit:h};H<1440?h=8:h=9;e.subexercisesSearchForm&&e.subexercisesSearchForm.addEventListener("submit",C);e.paginationEl&&e.paginationEl.addEventListener("click",S(E,v,f,e.subexercisesFilteredCards,"second-pagination"));async function B(t,r){if(n(e.loaderModal),!t||!r){d(e.subexercisesTextNoFound);return}f={keyword:"",page:u,limit:h},t==="Body parts"?b="bodypart":t==="Muscles"?b="muscles":t==="Equipment"&&(b="equipment"),f[b]=r,T(e.subexercisesTextNoFound),d(e.subexercisesSearchForm),d(e.subexercisesFilteredCards),d(e.exercisesSubtitle),e.exercisesSubtitle.textContent=`${r}`,e.subexercisesFilteredCards.innerHTML="",e.paginationEl.innerHTML="",e.exercisesGalleryEl.innerHTML="",e.paginationEl.classList.add("second-pagination"),e.paginationEl.classList.remove("first-pagination");try{x(e.loaderModal);const{results:s,totalPages:a}=await v(u);if(a>1&&(e.paginationEl.innerHTML=M(u,a)),s&&s.length>0)E(s),n(e.loaderModal);else{d(e.subexercisesTextNoFound),n(e.loaderModal);return}y(e.exercisesContainerEl)}catch(s){console.error("Error fetching images:",s),n(e.loaderModal)}finally{n(e.loaderModal)}}async function C(t){t.preventDefault();const r=t.currentTarget;f.keyword=r.query.value.trim(),f.keyword||console.log("input keyword"),d(e.subexercisesSearchForm),T(e.subexercisesTextNoFound),e.subexercisesFilteredCards.innerHTML="",e.paginationEl.innerHTML="",e.exercisesGalleryEl.innerHTML="";try{x(e.loaderModal);const{results:s,totalPages:a}=await v(u);if(a>1&&(e.paginationEl.innerHTML=M(u,a)),s&&s.length>0)E(s),n(e.loaderModal);else{d(e.subexercisesTextNoFound),n(e.loaderModal);return}y(e.exercisesContainerEl)}catch(s){console.error("Error fetching request:",s),n(e.loaderModal)}finally{e.subexercisesSearchForm.reset()}}e.subexercisesFilteredCards&&e.subexercisesFilteredCards.addEventListener("click",P);function P(t){if(!t.target.dataset.id)return;const r=t.target.dataset.id;x(e.loaderModal),F(r)}async function v(t){return(await w.get(`${$}/${k}`,{params:{...f,page:t}})).data}function E(t){e.exercisesGalleryEl.innerHTML="";const r=t.map(s=>N(s)).join("");e.subexercisesFilteredCards.innerHTML=r}function N({_id:t,rating:r,name:s,burnedCalories:a,time:l,bodyPart:i,target:o}){return`<li class="filtered-card-item">
        <div class="card-box-workout">

          <div class="card-box-info">
            <div class="filtered-workout">Workout</div>
            <div class="card-box-rating">
              <p class="filtered-rating">${r.toFixed(1)}</p>
              <svg class="filtered-star" width="16" height="16">
                <use href="${m}#icon-Star-1"></use>
              </svg>
            </div>
          </div>

          <button class="to-favorites-start" type="click" data-id=${t}>
            <span data-id=${t}>Start</span>
            <svg data-id=${t} class="filtered-start" width="16" height="16">
              <use href="${m}#icon-arrow-right"></use>
            </svg>
          </button>

        </div>

        <div class="card-box-title">
          <div class="filtered-athlete-box">
            <svg class="filtered-athlete" width="16" height="16">
              <use href="${m}#icon-Man"></use>
            </svg>
          </div>
          <h3 class="filtered-title">${s}</h3>
        </div>

        <ul class="filtered-description">
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Burned calories: <span class="filtered-descr-value">${a} / ${l} min</span></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Body part: <span class="filtered-descr-value">${i.charAt(0).toUpperCase()+i.slice(1)}</span></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Target: <span class="filtered-descr-value">${o.charAt(0).toUpperCase()+o.slice(1)}</span></p>
          </li>
        </ul>
  </li>`}const j=Object.freeze(Object.defineProperty({__proto__:null,handleSearch:C,renderExerciseByFilterName:B},Symbol.toStringTag,{value:"Module"}));export{j as e,S as o,M as p,B as r};
//# sourceMappingURL=exercises-details-f93de79d.js.map
