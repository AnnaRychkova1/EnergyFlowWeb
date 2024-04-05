import{a as y}from"./vendor-8cce9181.js";import{hideLoader as a,show as o,hide as m,showLoader as h}from"./visibility-9f0213da.js";import{refs as e}from"./refs-00d5446d.js";import{scrollTo as x}from"./scrollTo-6516673a.js";import{r as w,i as f}from"./modal-menu-14c575fc.js";const v="https://energyflow.b.goit.study/api",k="exercises",F=window.innerWidth,t={filter:"",keyword:"",page:1,limit:9};let d="",c="";F<1440?t.limit=8:t.limit=9;async function B(r,i){if(a(e.loaderModal),c=i,r==="Body parts"?d="bodypart":r==="Muscles"?d="muscles":r==="Equipment"&&(d="equipment"),!d||!c){o(e.subexercisesTextNoFound);return}m(e.subexercisesTextNoFound),o(e.subexercisesSearchForm),o(e.subexercisesFilteredCards),o(e.exercisesSubtitle),e.exercisesSubtitle.textContent=`${c}`,e.subexercisesFilteredCards.innerHTML="";try{h(e.loaderModal);const{results:s,totalPages:l}=await g({filter:d,name:c,keyword:t.keyword,limit:t.limit,page:t.page});if(l<1){o(e.subexercisesTextNoFound),a(e.loaderModal);return}b(s),a(e.loaderModal),x(e.subexercisesFilteredCards)}catch(s){console.error("Error fetching images:",s),a(e.loaderModal)}finally{a(e.loaderModal)}}e.subexercisesSearchForm.addEventListener("submit",M);async function M(r){r.preventDefault();const i=r.currentTarget;t.keyword=i.query.value.trim(),console.log(t.keyword),console.log(d),console.log(c),t.keyword||console.log("input keyword"),o(e.subexercisesSearchForm),m(e.subexercisesTextNoFound),e.subexercisesFilteredCards.innerHTML="";try{h(e.loaderModal);const{results:s,totalPages:l}=await g({filter:d,name:c,keyword:t.keyword,limit:t.limit,page:t.page});if(l<1){o(e.subexercisesTextNoFound),e.subexercisesFilteredCards.innerHTML="",a(e.loaderModal);return}b(s),a(e.loaderModal),x(e.subexercisesFilteredCards)}catch(s){console.error("Error fetching request:",s),a(e.loaderModal)}finally{e.subexercisesSearchForm.reset(),t.keyword=""}}e.subexercisesFilteredCards.addEventListener("click",C);function C(r){if(!r.target.dataset.id)return;const i=r.target.dataset.id;w(i)}async function g({filter:r,name:i,keyword:s,limit:l,page:n}){return(await y.get(`${v}/${k}`,{params:{[r]:i,keyword:s,limit:l,page:n}})).data}function b(r){const i=r.map(s=>$(s)).join("");e.subexercisesFilteredCards.innerHTML=i}function $({_id:r,rating:i,name:s,burnedCalories:l,time:n,bodyPart:u,target:p}){return`<li class="filtered-card-item">
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
            <p class="filtered-descr-title">Burned calories: <span class="filtered-descr-value">${l} / ${n} min</span></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Body part: <span class="filtered-descr-value">${u.charAt(0).toUpperCase()+u.slice(1)}</span></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Target: <span class="filtered-descr-value">${p.charAt(0).toUpperCase()+p.slice(1)}</span></p>
          </li>
        </ul>
  </li>`}export{B as renderExerciseByFilterName};
//# sourceMappingURL=exercises-details-1323cf96.js.map
