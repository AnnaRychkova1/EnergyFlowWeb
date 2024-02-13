import{a as h}from"./vendor-8cce9181.js";import{show as n,hideLoader as c,hide as y,showLoader as v}from"./visibility-9f0213da.js";import{refs as e}from"./refs-56e9387c.js";import d from"./isiToast-8015074b.js";const x="https://energyflow.b.goit.study/api",w="exercises";e.resultContainer.addEventListener("click",E);async function b(s,a){const t={[s]:a,keyword:"",page:1,limit:9};if(n(e.containerFilteredCards),n(e.searchForm),e.resultContainer.innerHTML="",!s||!a){d.noResults(),n(e.textResult),c(e.loaderModal);return}try{const{results:r,totalPages:i}=await p(t);if(console.log(r),console.log(i),!r||i===0){d.noResults(),n(e.textResult),c(e.loaderModal);return}let l="";for(const u of r)l+=m(u);e.resultContainer.innerHTML=l,t.page+=1,i>1}catch(r){console.error("Error fetching images:",r),d.apiIsiToastError()}finally{c(e.loaderModal)}e.searchForm.addEventListener("submit",o);async function o(r){r.preventDefault(),e.resultContainer.innerHTML="",t.page=1;const i=r.currentTarget;t.keyword=i.elements.exercise.value.trim(),console.log(t.keyword);try{const{results:l,totalPages:u}=await p(t);if(!t.keyword){d.noResults(),n(e.textResult),c(e.loaderModal);return}let f="";for(const g of l)f+=m(g);e.resultContainer.innerHTML=f}catch(l){console.error("Error fetching images:",l),d.apiIsiToastError()}finally{e.searchForm.reset(),y(paginationContainer)}}}function m({_id:s,rating:a,name:t,burnedCalories:o,time:r,bodyPart:i,target:l}){return`<li class="filtered-card-item">
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
  `}function E(s){v(e.loaderModal);const a=s.target.dataset.id;getCardInfo(a)}async function p({filter:s,name:a,keyword:t,limit:o,page:r}){return(await h.get(`${x}/${w}`,{params:{[s]:a,keyword:t,limit:o,page:r}})).data}export{b as renderExerciseByFilterName};
//# sourceMappingURL=exercises-details-4646dbf7.js.map
