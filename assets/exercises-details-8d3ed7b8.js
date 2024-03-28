import{a as g}from"./vendor-8cce9181.js";import{show as l,hideLoader as n,hide as f,showLoader as b}from"./visibility-9f0213da.js";import{refs as e}from"./refs-20f87826.js";import{scrollTo as p}from"./scrollTo-6516673a.js";import{r as y,i as u}from"./modal-menu-306d5a7e.js";const v="https://energyflow.b.goit.study/api",w="exercises",F=window.innerWidth,i={filter:"",keyword:"",page:1,limit:9,query:""};async function L(r,s){F<1440?i.limit=8:i.limit=9;let t;if(r==="Body parts"?t="bodypart":r==="Muscles"?t="muscles":r==="Equipment"&&(t="equipment"),!t||!s){l(e.subexercisesTextNoFound),n(e.loaderModal);return}f(e.subexercisesTextNoFound),l(e.subexercisesSearchForm),l(e.subexercisesFilteredCards),l(e.exercisesSubtitle),e.exercisesSubtitle.textContent=`${s}`,e.subexercisesFilteredCards.innerHTML="";try{const{results:a,totalPages:o}=await h({filter:t,name:s,keyword:i.keyword,limit:i.limit,page:i.page});if(o<1){l(e.subexercisesTextNoFound),n(e.loaderModal);return}m(a),p(e.subexercisesFilteredCards)}catch(a){console.error("Error fetching images:",a)}finally{n(e.loaderModal)}e.subexercisesSearchForm.addEventListener("submit",d);async function d(a){a.preventDefault();const o=a.currentTarget;i.keyword=o.query.value.trim(),console.log(i.keyword),console.log(t),console.log(s),i.keyword||(n(e.loaderModal),console.log("input keyword")),l(e.subexercisesSearchForm),f(e.subexercisesTextNoFound),b(e.loaderModal),e.subexercisesFilteredCards.innerHTML="";try{const{results:c,totalPages:x}=await h({filter:t,name:s,keyword:i.keyword,limit:i.limit,page:i.page});if(x<1){l(e.subexercisesTextNoFound),e.subexercisesFilteredCards.innerHTML="",n(e.loaderModal);return}m(c),p(e.subexercisesFilteredCards)}catch(c){console.error("Error fetching request:",c)}finally{n(e.loaderModal),e.subexercisesSearchForm.reset(),i.keyword="",t="",s="",e.subexercisesSearchForm.removeEventListener("submit",d)}}}e.subexercisesFilteredCards.addEventListener("click",k);function k(r){if(!r.target.dataset.id)return;const s=r.target.dataset.id;y(s)}async function h({filter:r,name:s,keyword:t,limit:d,page:a}){return(await g.get(`${v}/${w}`,{params:{[r]:s,keyword:t,limit:d,page:a}})).data}function m(r){const s=r.map(t=>C(t)).join("");e.subexercisesFilteredCards.innerHTML=s}function C({_id:r,rating:s,name:t,burnedCalories:d,time:a,bodyPart:o,target:c}){return`<li class="filtered-card-item">
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
            <p class="filtered-descr-title">Burned calories: <span class="filtered-descr-value">${d} / ${a} min</span></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Body part: <span class="filtered-descr-value">${o.charAt(0).toUpperCase()+o.slice(1)}</span></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Target: <span class="filtered-descr-value">${c.charAt(0).toUpperCase()+c.slice(1)}</span></p>
          </li>
        </ul>
  </li>`}export{L as renderExerciseByFilterName};
//# sourceMappingURL=exercises-details-8d3ed7b8.js.map
