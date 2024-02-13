import{a as h}from"./vendor-8cce9181.js";import{show as n,hideLoader as d,hide as y}from"./visibility-9f0213da.js";import{refs as e}from"./refs-56e9387c.js";import c from"./isiToast-8015074b.js";import{getCardInfo as v}from"./modal-menu-ca2b0349.js";const x="https://energyflow.b.goit.study/api",E="exercises";e.resultContainer.addEventListener("click",w);async function $(s,a){const t={[s]:a,keyword:"",page:1,limit:9};if(n(e.containerFilteredCards),n(e.searchForm),e.resultContainer.innerHTML="",!s||!a){c.noResults(),n(e.textResult),d(e.loaderModal);return}try{const{results:r,totalPages:i}=await p(t);if(console.log(r),console.log(i),!r||i===0){c.noResults(),n(e.textResult),d(e.loaderModal);return}let l="";for(const f of r)l+=m(f);e.resultContainer.innerHTML=l,t.page+=1,i>1}catch(r){console.error("Error fetching images:",r),c.apiIsiToastError()}finally{d(e.loaderModal)}e.searchForm.addEventListener("submit",o);async function o(r){r.preventDefault(),e.resultContainer.innerHTML="",t.page=1;const i=r.currentTarget;t.keyword=i.elements.exercise.value.trim(),console.log(t.keyword);try{const{results:l,totalPages:f}=await p(t);if(!t.keyword){c.noResults(),n(e.textResult),d(e.loaderModal);return}let u="";for(const g of l)u+=m(g);e.resultContainer.innerHTML=u}catch(l){console.error("Error fetching images:",l),c.apiIsiToastError()}finally{e.searchForm.reset(),y(paginationContainer)}}}function m({_id:s,rating:a,name:t,burnedCalories:o,time:r,bodyPart:i,target:l}){return`<li class="filtered-card-item">
        <div class="card-box-workout">
          <div class="card-box-info">
            <div class="filtered-workout">Workout</div>
            <div class="card-box-rating">
              <p class="filtered-rating">${Math.round(a)}</p>
              <img class="filteered-star" href="#" alt="star" height="35"></img>
            </div>
          </div>
          <button type="submit" data-id=${s} class="to-favorites-start">Start</button><a/>
        </div>
        <div class="card-box-title">
          <img class="filteered-athlete" href="#" alt="athlete" height="35"></img>
          <h3 class="filteered-title">${t}</h3>
        </div>
        <ul class="filtered-description">
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Burned calories: <spam class="filtered-descr-value">${o} / ${r} min</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Body part: <spam class="filtered-descr-value">${i}</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Target: <spam class="filtered-descr-value">${l}</spam></p>
          </li>
        </ul>
  </li>
  `}function w(s){const a=s.target.dataset.id;v(a)}async function p({filter:s,name:a,keyword:t,limit:o,page:r}){return(await h.get(`${x}/${E}`,{params:{[s]:a,keyword:t,limit:o,page:r}})).data}export{$ as renderExerciseByFilterName};
//# sourceMappingURL=exercises-details-2628bbec.js.map
