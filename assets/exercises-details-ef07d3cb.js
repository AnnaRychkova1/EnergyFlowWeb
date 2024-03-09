import{a as g}from"./vendor-8cce9181.js";import{show as o,hideLoader as c,hide as f,showLoader as b}from"./visibility-9f0213da.js";import{refs as e}from"./refs-20f87826.js";import{scrollTo as p}from"./scrollTo-6516673a.js";import{r as y,i as u}from"./modal-menu-3e25db67.js";const w="https://energyflow.b.goit.study/api",v="exercises",k=window.innerWidth,i={filter:"",keyword:"",page:1,limit:9};async function L(r,s){k<1440?i.limit=8:i.limit=9;let t;if(r==="Body parts"?t="bodypart":r==="Muscles"?t="muscles":r==="Equipment"&&(t="equipment"),!t||!s){o(e.subexercisesTextNoFound),c(e.loaderModal);return}f(e.subexercisesTextNoFound),o(e.subexercisesSearchForm),o(e.subexercisesFilteredCards),o(e.exercisesSubtitle),e.exercisesSubtitle.textContent=`${s}`,e.subexercisesFilteredCards.innerHTML="";try{const{results:a,totalPages:l}=await h({filter:t,name:s,keyword:i.keyword,limit:i.limit,page:i.page});if(l<1){o(e.subexercisesTextNoFound),c(e.loaderModal);return}m(a),p(e.subexercisesFilteredCards)}catch(a){console.error("Error fetching images:",a)}finally{c(e.loaderModal)}e.subexercisesSearchForm.addEventListener("submit",n);async function n(a){a.preventDefault();const l=a.currentTarget;i.keyword=l.query.value.trim(),console.log(i.keyword),console.log(t),console.log(s),i.keyword||(c(e.loaderModal),console.log("input keyword")),o(e.subexercisesSearchForm),f(e.subexercisesTextNoFound),b(e.loaderModal),e.subexercisesFilteredCards.innerHTML="";try{const{results:d,totalPages:x}=await h({filter:t,name:s,keyword:i.keyword,limit:i.limit,page:i.page});if(x<1){o(e.subexercisesTextNoFound),e.subexercisesFilteredCards.innerHTML="",c(e.loaderModal);return}m(d),p(e.subexercisesFilteredCards)}catch(d){console.error("Error fetching request:",d)}finally{c(e.loaderModal),e.subexercisesSearchForm.reset(),i.keyword=""}}}e.subexercisesFilteredCards.addEventListener("click",F);function F(r){if(!r.target.dataset.id)return;const s=r.target.dataset.id;y(s)}async function h({filter:r,name:s,keyword:t,limit:n,page:a}){return(await g.get(`${w}/${v}`,{params:{[r]:s,keyword:t,limit:n,page:a}})).data}function m(r){const s=r.map(t=>C(t)).join("");e.subexercisesFilteredCards.innerHTML=s}function C({_id:r,rating:s,name:t,burnedCalories:n,time:a,bodyPart:l,target:d}){return`<li class="filtered-card-item">
        <div class="card-box-workout">

          <div class="card-box-info">
            <div class="filtered-workout">Workout</div>
            <div class="card-box-rating">
              <p class="filtered-rating">${s.toFixed(1)}</p>
              <svg class="filtered-star" width="16" height="16">
                <use href="${u}#icon-Star-1"></use>
              </svg>
            </div>
          </div>

          <button class="to-favorites-start" type="click" data-id=${r}>
            <span data-id=${r}>Start</span>
            <svg data-id=${r} class="filtered-start" width="16" height="16">
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
//# sourceMappingURL=exercises-details-ef07d3cb.js.map
