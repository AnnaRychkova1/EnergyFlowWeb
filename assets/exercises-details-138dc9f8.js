import{a as h}from"./vendor-8cce9181.js";import{show as n,showLoader as y,hideLoader as c,hide as d}from"./visibility-9f0213da.js";import{refs as t}from"./refs-326154d5.js";import o from"./isiToast-8015074b.js";const v="https://energyflow.b.goit.study/api",b="exercises";t.searchForm.addEventListener("submit",E);t.resultContainer.addEventListener("click",C);const w="bodypart",u="waist",i={filter:u,keyword:"",page:1,limit:9,totalItems:0};let L;async function g({keyword:e}){return(await h.get(`${v}/${b}`,{params:{[w]:u,keyword:e}})).data}x();async function x(){n(t.searchForm),y(t.loaderModal);try{const{results:e,totalPages:a}=await g(i);if(console.log(e),console.log(a),!e||a===0){o.noResults(),n(t.textResult),c(t.loaderModal);return}//! має появитися частинка заголовка, але не я, а Василина
let r="";for(const s of e)r+=p(s);if(t.resultContainer.innerHTML=r,a>1){const s=i.limit*a;i.page+=1,console.log(s)}else o.endOfSearchIsiToast()}catch(e){console.error("Error fetching images:",e),o.apiIsiToastError()}finally{c(t.loaderModal),d(paginationContainer)}}async function E(e){e.preventDefault(),t.resultContainer.innerHTML="";const a=e.currentTarget;if(i.keyword=a.elements.query.value.trim(),console.log(i.keyword),!i.keyword){o.noResults(),n(t.textResult),c(t.loaderModal);return}try{console.log(i);const{results:r}=await g(i);console.log(r);let s="";for(const l of r)s+=p(l);t.resultContainer.innerHTML=s}catch(r){console.error("Error fetching images:",r),o.apiIsiToastError()}finally{t.searchForm.reset(),d(paginationContainer)}}function p({_id:e,rating:a,name:r,burnedCalories:s,time:l,bodyPart:m,target:f}){return`<li class="filtered-card-item">
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
            <p class="filtered-descr-title">Burned calories: <spam class="filtered-descr-value">${s} / ${l} min</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Body part: <spam class="filtered-descr-value">${m}</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Target: <spam class="filtered-descr-value">${f}</spam></p>
          </li>
        </ul>  
  </li>
  `}//! Pagination
totalPages>1?new Pagination(paginationContainer,{totalItems:total,itemsPerPage:1,visiblePages:3,page:1,centerAlign:!0,template:{page:'<a class="tui-pagination-btn">{{page}}</a>',currentPage:'<strong class="tui-pagination-btn tui-pagination-active">{{page}}</strong>',moveButton:'<a class="tui-pagination-btn tui-pagination-control"></a>',disabledMoveButton:'<a class="tui-pagination-btn tui-pagination-control disabled"></a>',moreButton:'<a class="tui-pagination-btn tui-pagination-ellipsis" aria-label="More"></a>'}}):paginationContainer.innerHTML="";function C(e){console.log(e),console.log(e.target.closest("ul").dataset.id)}export{L as exerciseId,x as renderExerciseByFilterName};
//# sourceMappingURL=exercises-details-138dc9f8.js.map
