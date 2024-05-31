import{a as w}from"./vendor-8cce9181.js";import{showLoader as m,hideLoader as n,show as u,hide as T}from"./visibility-9f0213da.js";import{refs as e}from"./refs-8128e65f.js";import{scrollTo as y}from"./scrollTo-6516673a.js";import{r as C,i as x}from"./modal-menu-15ef83c9.js";function v(t,r){let s="",c=Math.max(1,t-1),i=Math.min(r,c+3-1);c>1&&(s+='<button class="button-pagination prev" type="button"><<</button>');for(let o=c;o<=i;o++)s+=`<button class="button-pagination ${o===t?"active":""}" type="button">${o}</button>`;return i<r&&(s+='<button class="button-pagination next" type="button">>></button>'),s}function $(t,r,s,a,c){let i=1;return async function(L){const g=L.target;if(g.parentElement.classList.contains(c)){if(g.classList.contains("prev")||g.classList.contains("next")){const d=e.paginationEl.querySelector(".button-pagination.active"),b=parseInt(d.textContent,10);i=g.classList.contains("prev")?b-1:b+1}else i=parseInt(L.target.textContent,10);s.page=i,a.innerHTML="";try{m(e.loaderModal);const{results:d,totalPages:b}=await r(i,s);d&&d.length>0?(t(d),e.paginationEl.innerHTML=v(i,b),y(e.exercisesContainerEl)):console.error("No results found for this filter")}catch(d){console.log(d)}finally{n(e.loaderModal)}}}}const S="https://energyflow.b.goit.study/api",k="exercises",F=window.innerWidth;let p=1,f="",h,l={keyword:"",page:p,limit:h};F<1440?h=8:h=9;e.subexercisesSearchForm.addEventListener("submit",B);e.paginationEl.addEventListener("click",$(E,M,l,e.subexercisesFilteredCards,"second-pagination"));async function H(t,r){if(n(e.loaderModal),!t||!r){u(e.subexercisesTextNoFound);return}l={keyword:"",page:p,limit:h},t==="Body parts"?f="bodypart":t==="Muscles"?f="muscles":t==="Equipment"&&(f="equipment"),l[f]=r,T(e.subexercisesTextNoFound),u(e.subexercisesSearchForm),u(e.subexercisesFilteredCards),u(e.exercisesSubtitle),e.exercisesSubtitle.textContent=`${name}`,e.subexercisesFilteredCards.innerHTML="",e.paginationEl.innerHTML="",e.exercisesGalleryEl.innerHTML="",e.paginationEl.classList.add("second-pagination"),e.paginationEl.classList.remove("first-pagination");try{m(e.loaderModal);const{results:s,totalPages:a}=await M(p);if(a>1&&(e.paginationEl.innerHTML=v(p,a)),s&&s.length>0)E(s),n(e.loaderModal);else{u(e.subexercisesTextNoFound),n(e.loaderModal);return}y(e.exercisesContainerEl)}catch(s){console.error("Error fetching images:",s),n(e.loaderModal)}finally{n(e.loaderModal)}}async function B(t){t.preventDefault();const r=t.currentTarget;l.keyword=r.query.value.trim(),console.log(l.keyword),console.log(f),console.log(l[f]),l.keyword||console.log("input keyword"),u(e.subexercisesSearchForm),T(e.subexercisesTextNoFound),e.subexercisesFilteredCards.innerHTML="",e.paginationEl.innerHTML="",e.exercisesGalleryEl.innerHTML="";try{m(e.loaderModal);const{results:s,totalPages:a}=await M(p);if(a>1&&(e.paginationEl.innerHTML=v(p,a)),s&&s.length>0)E(s),n(e.loaderModal);else{u(e.subexercisesTextNoFound),n(e.loaderModal);return}y(e.exercisesContainerEl)}catch(s){console.error("Error fetching request:",s),n(e.loaderModal)}finally{e.subexercisesSearchForm.reset()}}e.subexercisesFilteredCards.addEventListener("click",P);function P(t){if(!t.target.dataset.id)return;const r=t.target.dataset.id;C(r)}async function M(t){return(await w.get(`${S}/${k}`,{params:{...l,page:t}})).data}function E(t){e.exercisesGalleryEl.innerHTML="";const r=t.map(s=>N(s)).join("");e.subexercisesFilteredCards.innerHTML=r}function N({_id:t,rating:r,name:s,burnedCalories:a,time:c,bodyPart:i,target:o}){return`<li class="filtered-card-item">
        <div class="card-box-workout">

          <div class="card-box-info">
            <div class="filtered-workout">Workout</div>
            <div class="card-box-rating">
              <p class="filtered-rating">${r.toFixed(1)}</p>
              <svg class="filtered-star" width="16" height="16">
                <use href="${x}#icon-Star-1"></use>
              </svg>
            </div>
          </div>

          <button class="to-favorites-start" type="click" data-id=${t}>
            <span data-id=${t}>Start</span>
            <svg data-id=${t} class="filtered-start" width="16" height="16">
              <use href="${x}#icon-arrow-right"></use>
            </svg>
          </button>

        </div>

        <div class="card-box-title">
          <div class="filtered-athlete-box">
            <svg class="filtered-athlete" width="16" height="16">
              <use href="${x}#icon-Man"></use>
            </svg>
          </div>
          <h3 class="filtered-title">${s}</h3>
        </div>

        <ul class="filtered-description">
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Burned calories: <span class="filtered-descr-value">${a} / ${c} min</span></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Body part: <span class="filtered-descr-value">${i.charAt(0).toUpperCase()+i.slice(1)}</span></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Target: <span class="filtered-descr-value">${o.charAt(0).toUpperCase()+o.slice(1)}</span></p>
          </li>
        </ul>
  </li>`}const j=Object.freeze(Object.defineProperty({__proto__:null,renderExerciseByFilterName:H},Symbol.toStringTag,{value:"Module"}));export{j as e,$ as o,v as p,H as r};
//# sourceMappingURL=exercises-details-72ccbab5.js.map
