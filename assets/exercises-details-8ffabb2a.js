import{a as u}from"./vendor-8cce9181.js";import{show as i,hideLoader as c,hide as p,showLoader as g}from"./visibility-9f0213da.js";import{refs as e}from"./refs-56e9387c.js";import l from"./isiToast-8015074b.js";const h="https://energyflow.b.goit.study/api",x="exercises";e.searchForm.addEventListener("submit",y);e.resultContainer.addEventListener("click",v);async function k(){if(i(e.containerFilteredCards),i(e.searchForm),!exercisesParamFilter||!exercisesParamName){l.noResults(),i(e.textResult),c(e.loaderModal);return}try{const{results:r,totalPages:t}=await m(getParams);if(console.log(r),console.log(t),!r||t===0){l.noResults(),i(e.textResult),c(e.loaderModal);return}let s="";for(const a of r)s+=n(a);e.resultContainer.innerHTML=s,getParams.page+=1,t>1}catch(r){console.error("Error fetching images:",r),l.apiIsiToastError()}finally{c(e.loaderModal)}}async function y(r){r.preventDefault(),e.resultContainer.innerHTML="",getParams.page=1;const t=r.currentTarget;getParams.keyword=t.elements.exercise.value.trim(),console.log(getParams.keyword);try{const{results:s,totalPages:a}=await m(getParams);if(!getParams.keyword){l.noResults(),i(e.textResult),c(e.loaderModal);return}let o="";for(const d of s)o+=n(d);e.resultContainer.innerHTML=o}catch(s){console.error("Error fetching images:",s),l.apiIsiToastError()}finally{e.searchForm.reset(),p(paginationContainer)}}function n({_id:r,rating:t,name:s,burnedCalories:a,time:o,bodyPart:d,target:f}){return`<li class="filtered-card-item">
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
            <p class="filtered-descr-title">Burned calories: <spam class="filtered-descr-value">${a} / ${o} min</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Body part: <spam class="filtered-descr-value">${d}</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Target: <spam class="filtered-descr-value">${f}</spam></p>
          </li>
        </ul>
  </li>
  `}function v(r){g(e.loaderModal);const t=r.target.dataset.id;getCardInfo(t)}async function m({keyword:r,limit:t,page:s}){return(await u.get(`${h}/${x}`,{params:{[exercisesParamFilter]:exercisesParamName,keyword:r,limit:t,page:s}})).data}export{k as renderExerciseByFilterName};
//# sourceMappingURL=exercises-details-8ffabb2a.js.map
