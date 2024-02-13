import{a as f}from"./vendor-8cce9181.js";import{show as l,showLoader as h,hideLoader as n,hide as c}from"./visibility-9f0213da.js";import{refs as e}from"./refs-326154d5.js";import i from"./isiToast-8015074b.js";const v="https://energyflow.b.goit.study/api",x="exercises";e.searchForm.addEventListener("submit",y);e.resultContainer.addEventListener("click",E);const o={filter:exercisesParamName,keyword:"",page:1,limit:9,totalItems:0};let k;async function d({keyword:t}){return(await f.get(`${v}/${x}`,{params:{[exercisesParamFilter]:exercisesParamName,keyword:t}})).data}b();async function b(){if(l(e.searchForm),h(e.loaderModal),!exercisesParamFilter||!exercisesParamName){i.noResults(),l(e.textResult),n(e.loaderModal);return}try{const{results:t,totalPages:a}=await d(o);if(console.log(t),console.log(a),!t||a===0){i.noResults(),l(e.textResult),n(e.loaderModal);return}//! має появитися частинка заголовка, але не я, а Василина
let r="";for(const s of t)r+=u(s);if(e.resultContainer.innerHTML=r,a>1){const s=o.limit*a;o.page+=1,console.log(s)}else i.endOfSearchIsiToast()}catch(t){console.error("Error fetching images:",t),i.apiIsiToastError()}finally{n(e.loaderModal),c(paginationContainer)}}async function y(t){if(t.preventDefault(),e.resultContainer.innerHTML="",!o.keyword){i.noResults(),l(e.textResult),n(e.loaderModal);return}try{console.log(o);const{results:a}=await d(o);let r="";for(const s of a)r+=u(s);e.resultContainer.innerHTML=r}catch(a){console.error("Error fetching images:",a),i.apiIsiToastError()}finally{e.searchForm.reset(),c(paginationContainer)}}function u({_id:t,rating:a,name:r,burnedCalories:s,time:p,bodyPart:g,target:m}){return`<li class="filtered-card-item">
        <div class="card-box-workout">
          <div class="card-box-info">
            <div class="filtered-workout">Workout</div>
            <div class="card-box-rating">
              <p class="filtered-rating">${Math.round(a)}</p>
              <img class="filteered-star" href="#" alt="star" height="35"></img>
            </div>
          </div>
          <button type="submit" data-id=${t} class="to-favorites-start">Start</button><a/>
        </div>
        <div class="card-box-title">
          <img class="filteered-athlete" href="#" alt="athlete" height="35"></img>
          <h3 class="filteered-title">${r}</h3>
        </div>
        <ul class="filtered-description">
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Burned calories: <spam class="filtered-descr-value">${s} / ${p} min</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Body part: <spam class="filtered-descr-value">${g}</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Target: <spam class="filtered-descr-value">${m}</spam></p>
          </li>
        </ul>  
  </li>
  `}//! Pagination
totalPages>1?new Pagination(paginationContainer,{totalItems:total,itemsPerPage:1,visiblePages:3,page:1,centerAlign:!0,template:{page:'<a class="tui-pagination-btn">{{page}}</a>',currentPage:'<strong class="tui-pagination-btn tui-pagination-active">{{page}}</strong>',moveButton:'<a class="tui-pagination-btn tui-pagination-control"></a>',disabledMoveButton:'<a class="tui-pagination-btn tui-pagination-control disabled"></a>',moreButton:'<a class="tui-pagination-btn tui-pagination-ellipsis" aria-label="More"></a>'}}):paginationContainer.innerHTML="";function E(t){console.log(t),console.log(t.target.closest("ul").dataset.id)}export{k as exerciseId,b as renderExerciseByFilterName};
//# sourceMappingURL=exercises-details-79ee07ad.js.map
