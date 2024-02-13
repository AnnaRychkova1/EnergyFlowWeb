import{a as h}from"./vendor-8cce9181.js";import{show as l,showLoader as v,hideLoader as n,hide as c}from"./visibility-9f0213da.js";import{refs as t}from"./refs-326154d5.js";import o from"./isiToast-8015074b.js";const b="https://energyflow.b.goit.study/api",y="exercises";t.searchForm.addEventListener("submit",w);t.resultContainer.addEventListener("click",C);const x="bodypart",d="waist",i={filter:d,keyword:"",page:1,limit:9,totalItems:0};let L;async function u({keyword:e}){return(await h.get(`${b}/${y}`,{params:{[x]:d,keyword:e}})).data}E();async function E(){l(t.searchForm),v(t.loaderModal);try{const{results:e,totalPages:a}=await u(i);if(console.log(e),console.log(a),!e||a===0){o.noResults(),l(t.textResult),n(t.loaderModal);return}//! має появитися частинка заголовка, але не я, а Василина
let r="";for(const s of e)r+=p(s);if(t.resultContainer.innerHTML=r,a>1){const s=i.limit*a;i.page+=1,console.log(s)}else o.endOfSearchIsiToast()}catch(e){console.error("Error fetching images:",e),o.apiIsiToastError()}finally{n(t.loaderModal),c(paginationContainer)}}async function w(e){if(e.preventDefault(),t.resultContainer.innerHTML="",!i.keyword){o.noResults(),l(t.textResult),n(t.loaderModal);return}try{console.log(i);const{results:a}=await u(i);let r="";for(const s of a)r+=p(s);t.resultContainer.innerHTML=r}catch(a){console.error("Error fetching images:",a),o.apiIsiToastError()}finally{t.searchForm.reset(),c(paginationContainer)}}function p({_id:e,rating:a,name:r,burnedCalories:s,time:g,bodyPart:f,target:m}){return`<li class="filtered-card-item">
        <div class="card-box-workout">
          <div class="card-box-info">
            <div class="filtered-workout">Workout</div>
            <div class="card-box-rating">
              <p class="filtered-rating">${Math.round(a)}</p>
              <img class="filteered-star" href="#" alt="star" height="35"></img>
            </div>
          </div>
          <button type="submit" data-id=${e} class="to-favorites-start">Start</button><a/>
        </div>
        <div class="card-box-title">
          <img class="filteered-athlete" href="#" alt="athlete" height="35"></img>
          <h3 class="filteered-title">${r}</h3>
        </div>
        <ul class="filtered-description">
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Burned calories: <spam class="filtered-descr-value">${s} / ${g} min</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Body part: <spam class="filtered-descr-value">${f}</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Target: <spam class="filtered-descr-value">${m}</spam></p>
          </li>
        </ul>  
  </li>
  `}//! Pagination
totalPages>1?new Pagination(paginationContainer,{totalItems:total,itemsPerPage:1,visiblePages:3,page:1,centerAlign:!0,template:{page:'<a class="tui-pagination-btn">{{page}}</a>',currentPage:'<strong class="tui-pagination-btn tui-pagination-active">{{page}}</strong>',moveButton:'<a class="tui-pagination-btn tui-pagination-control"></a>',disabledMoveButton:'<a class="tui-pagination-btn tui-pagination-control disabled"></a>',moreButton:'<a class="tui-pagination-btn tui-pagination-ellipsis" aria-label="More"></a>'}}):paginationContainer.innerHTML="";function C(e){console.log(e),console.log(e.target.closest("ul").dataset.id)}export{L as exerciseId,E as renderExerciseByFilterName};
//# sourceMappingURL=exercises-details-a0fca2a5.js.map
