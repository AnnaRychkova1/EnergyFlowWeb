import{a as p}from"./vendor-8cce9181.js";import{show as l,hideLoader as d,hide as g,showLoader as h}from"./visibility-9f0213da.js";import{refs as e}from"./refs-56e9387c.js";import o from"./isiToast-8015074b.js";const x="https://energyflow.b.goit.study/api",y="exercises";e.searchForm.addEventListener("submit",v);e.resultContainer.addEventListener("click",w);const a={filter:exercisesParamName,keyword:"",page:1,limit:9};async function F(){if(l(e.containerFilteredCards),l(e.searchForm),!exercisesParamFilter||!exercisesParamName){o.noResults(),l(e.textResult),d(e.loaderModal);return}try{const{results:r,totalPages:t}=await m(a);if(console.log(r),console.log(t),!r||t===0){o.noResults(),l(e.textResult),d(e.loaderModal);return}let s="";for(const i of r)s+=f(i);e.resultContainer.innerHTML=s,a.page+=1,t>1}catch(r){console.error("Error fetching images:",r),o.apiIsiToastError()}finally{d(e.loaderModal)}}async function v(r){r.preventDefault(),e.resultContainer.innerHTML="",a.page=1;const t=r.currentTarget;a.keyword=t.elements.exercise.value.trim(),console.log(a.keyword);try{const{results:s,totalPages:i}=await m(a);if(!a.keyword){o.noResults(),l(e.textResult),d(e.loaderModal);return}let c="";for(const n of s)c+=f(n);e.resultContainer.innerHTML=c}catch(s){console.error("Error fetching images:",s),o.apiIsiToastError()}finally{e.searchForm.reset(),g(paginationContainer)}}function f({_id:r,rating:t,name:s,burnedCalories:i,time:c,bodyPart:n,target:u}){return`<li class="filtered-card-item">
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
            <p class="filtered-descr-title">Burned calories: <spam class="filtered-descr-value">${i} / ${c} min</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Body part: <spam class="filtered-descr-value">${n}</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Target: <spam class="filtered-descr-value">${u}</spam></p>
          </li>
        </ul>
  </li>
  `}function w(r){h(e.loaderModal);const t=r.target.dataset.id;getCardInfo(t)}async function m({keyword:r,limit:t,page:s}){return(await p.get(`${x}/${y}`,{params:{[exercisesParamFilter]:exercisesParamName,keyword:r,limit:t,page:s}})).data}export{F as renderExerciseByFilterName};
//# sourceMappingURL=exercises-details-441068e8.js.map
