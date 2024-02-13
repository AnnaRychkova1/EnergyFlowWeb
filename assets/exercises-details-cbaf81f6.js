import{a as p}from"./vendor-8cce9181.js";import{show as s,showLoader as n,hideLoader as c,hide as g}from"./visibility-9f0213da.js";import{refs as e}from"./refs-56e9387c.js";import i from"./isiToast-8015074b.js";const h="https://energyflow.b.goit.study/api",x="exercises";e.searchForm.addEventListener("submit",v);e.resultContainer.addEventListener("click",P);y(exercisesParamFilter,exercisesParamName);async function y(){if(s(e.containerFilteredCards),s(e.searchForm),n(e.loaderModal),!exercisesParamFilter||!exercisesParamName){i.noResults(),s(e.textResult),c(e.loaderModal);return}try{const{results:r,totalPages:t}=await f(getParams);if(console.log(r),console.log(t),!r||t===0){i.noResults(),s(e.textResult),c(e.loaderModal);return}let a="";for(const l of r)a+=m(l);e.resultContainer.innerHTML=a,getParams.page+=1,t>1}catch(r){console.error("Error fetching images:",r),i.apiIsiToastError()}finally{c(e.loaderModal)}}async function v(r){r.preventDefault(),e.resultContainer.innerHTML="",getParams.page=1;const t=r.currentTarget;getParams.keyword=t.elements.exercise.value.trim(),console.log(getParams.keyword);try{const{results:a,totalPages:l}=await f(getParams);if(!getParams.keyword){i.noResults(),s(e.textResult),c(e.loaderModal);return}let o="";for(const d of a)o+=m(d);e.resultContainer.innerHTML=o}catch(a){console.error("Error fetching images:",a),i.apiIsiToastError()}finally{e.searchForm.reset(),g(paginationContainer)}}function m({_id:r,rating:t,name:a,burnedCalories:l,time:o,bodyPart:d,target:u}){return`<li class="filtered-card-item">
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
          <h3 class="filteered-title">${a}</h3>
        </div>
        <ul class="filtered-description">
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Burned calories: <spam class="filtered-descr-value">${l} / ${o} min</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Body part: <spam class="filtered-descr-value">${d}</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Target: <spam class="filtered-descr-value">${u}</spam></p>
          </li>
        </ul>  
  </li>
  `}function P(r){n(e.loaderModal);const t=r.target.dataset.id;getCardInfo(t)}async function f({keyword:r,limit:t}){return(await p.get(`${h}/${x}`,{params:{[exercisesParamFilter]:exercisesParamName,keyword:r,limit:t}})).data}export{y as renderExerciseByFilterName};
//# sourceMappingURL=exercises-details-cbaf81f6.js.map
