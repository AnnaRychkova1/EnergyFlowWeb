import{a as x}from"./vendor-8cce9181.js";import{show as o,hideLoader as c,hide as f,showLoader as b}from"./visibility-9f0213da.js";import{refs as e}from"./refs-20f87826.js";import{scrollTo as p}from"./scrollTo-6516673a.js";import{c as y,i as u}from"./modal-menu-7cd938d1.js";const w="https://energyflow.b.goit.study/api",v="exercises",k=window.innerWidth,i={filter:"",keyword:"",page:1,limit:9};async function L(s,r){k<1440?i.limit=8:i.limit=9;let t;if(s==="Body parts"?t="bodypart":s==="Muscles"?t="muscles":s==="Equipment"&&(t="equipment"),!t||!r){o(e.subexercisesTextNoFound),c(e.loaderModal);return}f(e.subexercisesTextNoFound),o(e.subexercisesSearchForm),o(e.subexercisesFilteredCards),o(e.exercisesSubtitle),e.exercisesSubtitle.textContent=`${r}`,e.subexercisesFilteredCards.innerHTML="";try{const{results:a,totalPages:l}=await h({filter:t,name:r,keyword:i.keyword,limit:i.limit,page:i.page});if(l<1){o(e.subexercisesTextNoFound),c(e.loaderModal);return}m(a),p(e.subexercisesFilteredCards)}catch(a){console.error("Error fetching images:",a)}finally{c(e.loaderModal)}e.subexercisesSearchForm.addEventListener("submit",n);async function n(a){a.preventDefault();const l=a.currentTarget;i.keyword=l.query.value.trim(),console.log(i.keyword),console.log(t),console.log(r),i.keyword||(c(e.loaderModal),console.log("input keyword")),o(e.subexercisesSearchForm),f(e.subexercisesTextNoFound),b(e.loaderModal),e.subexercisesFilteredCards.innerHTML="";try{const{results:d,totalPages:g}=await h({filter:t,name:r,keyword:i.keyword,limit:i.limit,page:i.page});if(g<1){o(e.subexercisesTextNoFound),e.subexercisesFilteredCards.innerHTML="",c(e.loaderModal);return}m(d),p(e.subexercisesFilteredCards)}catch(d){console.error("Error fetching request:",d)}finally{c(e.loaderModal),e.subexercisesSearchForm.reset(),i.keyword=""}}}e.subexercisesFilteredCards.addEventListener("click",F);function F(s){if(!s.target.dataset.id)return;const r=s.target.dataset.id;y(r)}async function h({filter:s,name:r,keyword:t,limit:n,page:a}){return(await x.get(`${w}/${v}`,{params:{[s]:r,keyword:t,limit:n,page:a}})).data}function m(s){const r=s.map(t=>C(t)).join("");e.subexercisesFilteredCards.innerHTML=r}function C({_id:s,rating:r,name:t,burnedCalories:n,time:a,bodyPart:l,target:d}){return`<li class="filtered-card-item">
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
            <p class="filtered-descr-title">Burned calories: <span class="filtered-descr-value">${n} / ${a} min</span></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Body part: <span class="filtered-descr-value">${l.charAt(0).toUpperCase()+l.slice(1)}</span></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Target: <span class="filtered-descr-value">${d.charAt(0).toUpperCase()+d.slice(1)}</span></p>
          </li>
        </ul>
  </li>`}export{L as renderExerciseByFilterName};
//# sourceMappingURL=exercises-details-2ed485bc.js.map
