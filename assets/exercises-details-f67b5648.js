import{P as y,a as v}from"./vendor-65c0bc71.js";import{show as c,showLoader as b,hideLoader as d,hide as u}from"./visibility-9f0213da.js";import{refs as t}from"./refs-326154d5.js";import o from"./isiToast-262f9325.js";const w="https://energyflow.b.goit.study/api",x="exercises";t.searchForm.addEventListener("submit",P);t.resultContainer.addEventListener("click",T);const E="bodypart",g="waist",i={filter:g,keyword:"",page:1,limit:9,totalItems:0};let $;async function p({keyword:e}){return(await v.get(`${w}/${x}`,{params:{[E]:g,keyword:e}})).data}k();async function k(){c(t.searchForm),b(t.loaderModal);try{const{results:e,totalPages:a}=await p(i);if(console.log(e),console.log(a),!e||a===0){o.noResults(),c(t.textResult),d(t.loaderModal);return}//! має появитися частинка заголовка, але не я, а Василина
let r="";for(const s of e)r+=m(s);if(t.resultContainer.innerHTML=r,a>1){const s=i.limit*a;i.page+=1,console.log(s),M(s)}else o.endOfSearchIsiToast()}catch(e){console.error("Error fetching images:",e),o.apiIsiToastError()}finally{d(t.loaderModal),u(l)}}async function P(e){e.preventDefault(),t.resultContainer.innerHTML="";const a=e.currentTarget;if(i.keyword=a.elements.query.value.trim(),console.log(i.keyword),!i.keyword){o.noResults(),c(t.textResult),d(t.loaderModal);return}try{console.log(i);const{results:r}=await p(i);console.log(r);let s="";for(const n of r)s+=m(n);t.resultContainer.innerHTML=s}catch(r){console.error("Error fetching images:",r),o.apiIsiToastError()}finally{t.searchForm.reset(),u(l)}}function m({_id:e,rating:a,name:r,burnedCalories:s,time:n,bodyPart:f,target:h}){return`<li class="filtered-card-item">
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
            <p class="filtered-descr-title">Burned calories: <spam class="filtered-descr-value">${s} / ${n} min</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Body part: <spam class="filtered-descr-value">${f}</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Target: <spam class="filtered-descr-value">${h}</spam></p>
          </li>
        </ul>  
  </li>
  `}//! Pagination
const l=document.getElementById("pagination-container");function M(e,a){e>1?new y(l,{totalItems:a,itemsPerPage:1,visiblePages:3,page:1,centerAlign:!0,template:{page:'<a class="tui-pagination-btn">{{page}}</a>',currentPage:'<strong class="tui-pagination-btn tui-pagination-active">{{page}}</strong>',moveButton:'<a class="tui-pagination-btn tui-pagination-control"></a>',disabledMoveButton:'<a class="tui-pagination-btn tui-pagination-control disabled"></a>',moreButton:'<a class="tui-pagination-btn tui-pagination-ellipsis" aria-label="More"></a>'}}):l.innerHTML=""}function T(e){console.log(e),console.log(e.target.closest("ul").dataset.id)}export{$ as exerciseId,k as renderExerciseByFilterName};
//# sourceMappingURL=exercises-details-f67b5648.js.map
