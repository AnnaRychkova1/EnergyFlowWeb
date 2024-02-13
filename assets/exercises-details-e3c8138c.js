import{a as h}from"./vendor-8cce9181.js";import{show as n,hideLoader as c,hide as y,showLoader as v}from"./visibility-9f0213da.js";import{refs as e}from"./refs-56e9387c.js";import d from"./isiToast-8015074b.js";import{getCardInfo as x}from"./modal-menu-c1c40a38.js";const w="https://energyflow.b.goit.study/api",E="exercises";e.resultContainer.addEventListener("click",C);async function $(s,a){const t={[s]:a,keyword:"",page:1,limit:9};if(n(e.containerFilteredCards),n(e.searchForm),e.resultContainer.innerHTML="",!s||!a){d.noResults(),n(e.textResult),c(e.loaderModal);return}try{const{results:r,totalPages:i}=await p(t);if(console.log(r),console.log(i),!r||i===0){d.noResults(),n(e.textResult),c(e.loaderModal);return}let o="";for(const f of r)o+=m(f);e.resultContainer.innerHTML=o,t.page+=1,i>1}catch(r){console.error("Error fetching images:",r),d.apiIsiToastError()}finally{c(e.loaderModal)}e.searchForm.addEventListener("submit",l);async function l(r){r.preventDefault(),e.resultContainer.innerHTML="",t.page=1;const i=r.currentTarget;t.keyword=i.elements.exercise.value.trim(),console.log(t.keyword);try{const{results:o,totalPages:f}=await p(t);if(!t.keyword){d.noResults(),n(e.textResult),c(e.loaderModal);return}let u="";for(const g of o)u+=m(g);e.resultContainer.innerHTML=u}catch(o){console.error("Error fetching images:",o),d.apiIsiToastError()}finally{e.searchForm.reset(),y(paginationContainer)}}}function m({_id:s,rating:a,name:t,burnedCalories:l,time:r,bodyPart:i,target:o}){return`<li class="filtered-card-item">
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
            <p class="filtered-descr-title">Burned calories: <spam class="filtered-descr-value">${l} / ${r} min</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Body part: <spam class="filtered-descr-value">${i}</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Target: <spam class="filtered-descr-value">${o}</spam></p>
          </li>
        </ul>
  </li>
  `}function C(s){v(e.loaderModal);const a=s.target.dataset.id;x(a)}async function p({filter:s,name:a,keyword:t,limit:l,page:r}){return(await h.get(`${w}/${E}`,{params:{[s]:a,keyword:t,limit:l,page:r}})).data}export{$ as renderExerciseByFilterName};
//# sourceMappingURL=exercises-details-e3c8138c.js.map
