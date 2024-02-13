import{a as u}from"./vendor-8cce9181.js";import{show as a,hideLoader as c,hide as p,showLoader as g}from"./visibility-9f0213da.js";import{refs as e}from"./refs-56e9387c.js";import i from"./isiToast-8015074b.js";import{getCardInfo as h}from"./modal-menu-85f9e22a.js";const x="https://energyflow.b.goit.study/api",y="exercises";e.searchForm.addEventListener("submit",P);e.resultContainer.addEventListener("click",E);v(exercisesParamFilter,exercisesParamName);async function v(){if(a(e.containerFilteredCards),a(e.searchForm),!exercisesParamFilter||!exercisesParamName){i.noResults(),a(e.textResult),c(e.loaderModal);return}try{const{results:r,totalPages:t}=await m(getParams);if(console.log(r),console.log(t),!r||t===0){i.noResults(),a(e.textResult),c(e.loaderModal);return}let s="";for(const l of r)s+=n(l);e.resultContainer.innerHTML=s,getParams.page+=1,t>1}catch(r){console.error("Error fetching images:",r),i.apiIsiToastError()}finally{c(e.loaderModal)}}async function P(r){r.preventDefault(),e.resultContainer.innerHTML="",getParams.page=1;const t=r.currentTarget;getParams.keyword=t.elements.exercise.value.trim(),console.log(getParams.keyword);try{const{results:s,totalPages:l}=await m(getParams);if(!getParams.keyword){i.noResults(),a(e.textResult),c(e.loaderModal);return}let o="";for(const d of s)o+=n(d);e.resultContainer.innerHTML=o}catch(s){console.error("Error fetching images:",s),i.apiIsiToastError()}finally{e.searchForm.reset(),p(paginationContainer)}}function n({_id:r,rating:t,name:s,burnedCalories:l,time:o,bodyPart:d,target:f}){return`<li class="filtered-card-item">
        <div class="card-box-workout">
          <div class="card-box-info">
            <div class="filtered-workout">Workout</div>
            <div class="card-box-rating">
              <p class="filtered-rating">${Math.round(t)}</p>
              <img class="filteered-star" href="#" alt="star" height="35"></img>
            </div>
          </div>
          <button type="submit" data-id=${r} class="to-favorites-start">Start</button><a/>
        </div>
        <div class="card-box-title">
          <img class="filteered-athlete" href="#" alt="athlete" height="35"></img>
          <h3 class="filteered-title">${s}</h3>
        </div>
        <ul class="filtered-description">
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Burned calories: <spam class="filtered-descr-value">${l} / ${o} min</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Body part: <spam class="filtered-descr-value">${d}</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Target: <spam class="filtered-descr-value">${f}</spam></p>
          </li>
        </ul>
  </li>
  `}function E(r){g(e.loaderModal);const t=r.target.dataset.id;h(t)}async function m({keyword:r,limit:t}){return(await u.get(`${x}/${y}`,{params:{[exercisesParamFilter]:exercisesParamName,keyword:r,limit:t}})).data}export{v as renderExerciseByFilterName};
//# sourceMappingURL=exercises-details-008253d1.js.map
