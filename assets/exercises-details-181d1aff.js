import{a as b}from"./vendor-8cce9181.js";import{show as l,hideLoader as c,hide as m,showLoader as y}from"./visibility-9f0213da.js";import{refs as e}from"./refs-00d5446d.js";import{scrollTo as h}from"./scrollTo-6516673a.js";import{r as w,i as f}from"./modal-menu-14c575fc.js";const v="https://energyflow.b.goit.study/api",k="exercises",F=window.innerWidth,t={filter:"",keyword:"",page:1,limit:9};let o="",d="";F<1440?t.limit=8:t.limit=9;async function B(r,i){if(d=i,r==="Body parts"?o="bodypart":r==="Muscles"?o="muscles":r==="Equipment"&&(o="equipment"),!o||!d){l(e.subexercisesTextNoFound),c(e.loaderModal);return}m(e.subexercisesTextNoFound),l(e.subexercisesSearchForm),l(e.subexercisesFilteredCards),l(e.exercisesSubtitle),e.exercisesSubtitle.textContent=`${d}`,e.subexercisesFilteredCards.innerHTML="";try{const{results:s,totalPages:a}=await x({filter:o,name:d,keyword:t.keyword,limit:t.limit,page:t.page});if(a<1){l(e.subexercisesTextNoFound),c(e.loaderModal);return}g(s),h(e.subexercisesFilteredCards)}catch(s){console.error("Error fetching images:",s)}finally{c(e.loaderModal)}}e.subexercisesSearchForm.addEventListener("submit",C);async function C(r){r.preventDefault();const i=r.currentTarget;t.keyword=i.query.value.trim(),console.log(t.keyword),console.log(o),console.log(d),t.keyword||(c(e.loaderModal),console.log("input keyword")),l(e.subexercisesSearchForm),m(e.subexercisesTextNoFound),y(e.loaderModal),e.subexercisesFilteredCards.innerHTML="";try{const{results:s,totalPages:a}=await x({filter:o,name:d,keyword:t.keyword,limit:t.limit,page:t.page});if(a<1){l(e.subexercisesTextNoFound),e.subexercisesFilteredCards.innerHTML="",c(e.loaderModal);return}g(s),h(e.subexercisesFilteredCards)}catch(s){console.error("Error fetching request:",s)}finally{c(e.loaderModal),e.subexercisesSearchForm.reset(),t.keyword=""}}e.subexercisesFilteredCards.addEventListener("click",M);function M(r){if(!r.target.dataset.id)return;const i=r.target.dataset.id;w(i)}async function x({filter:r,name:i,keyword:s,limit:a,page:n}){return(await b.get(`${v}/${k}`,{params:{[r]:i,keyword:s,limit:a,page:n}})).data}function g(r){const i=r.map(s=>$(s)).join("");e.subexercisesFilteredCards.innerHTML=i}function $({_id:r,rating:i,name:s,burnedCalories:a,time:n,bodyPart:u,target:p}){return`<li class="filtered-card-item">
        <div class="card-box-workout">

          <div class="card-box-info">
            <div class="filtered-workout">Workout</div>
            <div class="card-box-rating">
              <p class="filtered-rating">${i.toFixed(1)}</p>
              <svg class="filtered-star" width="16" height="16">
                <use href="${f}#icon-Star-1"></use>
              </svg>
            </div>
          </div>

          <button class="to-favorites-start" type="click" data-id=${r}>
            <span data-id=${r}>Start</span>
            <svg data-id=${r} class="filtered-start" width="16" height="16">
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
          <h3 class="filtered-title">${s}</h3>
        </div>

        <ul class="filtered-description">
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Burned calories: <span class="filtered-descr-value">${a} / ${n} min</span></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Body part: <span class="filtered-descr-value">${u.charAt(0).toUpperCase()+u.slice(1)}</span></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Target: <span class="filtered-descr-value">${p.charAt(0).toUpperCase()+p.slice(1)}</span></p>
          </li>
        </ul>
  </li>`}export{B as renderExerciseByFilterName};
//# sourceMappingURL=exercises-details-181d1aff.js.map
