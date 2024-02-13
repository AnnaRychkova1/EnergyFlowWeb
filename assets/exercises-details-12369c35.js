import{a as h}from"./vendor-8cce9181.js";import{show as o,showLoader as g,hideLoader as c,hide as y}from"./visibility-9f0213da.js";import{refs as r}from"./refs-326154d5.js";import l from"./isiToast-8015074b.js";const v="https://energyflow.b.goit.study/api",x="exercises";r.searchForm.addEventListener("submit",b);r.resultContainer.addEventListener("click",k);const E="bodypart",n="waist",i={filter:n,keyword:"",page:1,limit:9,totalItems:0};let M;async function d({keyword:e}){return(await h.get(`${v}/${x}`,{params:{[E]:n,keyword:e}})).data}w();async function w(){o(r.searchForm),g(r.loaderModal);try{const{results:e,totalPages:t}=await d(i);if(console.log(e),console.log(t),!e||t===0){l.noResults(),o(r.textResult),c(r.loaderModal);return}//! має появитися частинка заголовка, але не я, а Василина
let s="";for(const a of e)s+=f(a);if(r.resultContainer.innerHTML=s,t>1){const a=i.limit*t;i.page+=1,console.log(a)}else l.endOfSearchIsiToast()}catch(e){console.error("Error fetching images:",e),l.apiIsiToastError()}finally{c(r.loaderModal)}}async function b(e){if(e.preventDefault(),r.resultContainer.innerHTML="",!i.keyword){l.noResults(),o(r.textResult),c(r.loaderModal);return}try{console.log(i);const{results:t}=await d(i);let s="";for(const a of t)s+=f(a);r.resultContainer.innerHTML=s}catch(t){console.error("Error fetching images:",t),l.apiIsiToastError()}finally{r.searchForm.reset(),y(paginationContainer)}}function f({_id:e,rating:t,name:s,burnedCalories:a,time:m,bodyPart:u,target:p}){return`<li class="filtered-card-item">
        <div class="card-box-workout">
          <div class="card-box-info">
            <div class="filtered-workout">Workout</div>
            <div class="card-box-rating">
              <p class="filtered-rating">${Math.round(t)}</p>
              <img class="filteered-star" href="#" alt="star" height="35"></img>
            </div>
          </div>
          <button type="submit" data-id=${e} class="to-favorites-start">Start</button><a/>
        </div>
        <div class="card-box-title">
          <img class="filteered-athlete" href="#" alt="athlete" height="35"></img>
          <h3 class="filteered-title">${s}</h3>
        </div>
        <ul class="filtered-description">
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Burned calories: <spam class="filtered-descr-value">${a} / ${m} min</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Body part: <spam class="filtered-descr-value">${u}</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Target: <spam class="filtered-descr-value">${p}</spam></p>
          </li>
        </ul>  
  </li>
  `}//! Pagination
function k(e){console.log(e),console.log(e.target.closest("ul").dataset.id)}export{M as exerciseId,w as renderExerciseByFilterName};
//# sourceMappingURL=exercises-details-12369c35.js.map
