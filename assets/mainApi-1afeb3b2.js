import{P as M,a as y}from"./vendor-fd9fb329.js";import{show as m,showLoader as h,hideLoader as l}from"./visibility-9f0213da.js";import{refs as t}from"./refs-c760b9d6.js";import o from"./isiToast-3ae4ff69.js";const b="bodypart",n="waist",r={filter:n,keyword:"",page:1,limit:9};t.exercisesHeader.textContent=`/${n}`;t.textResult.classList.add("is-hidden");async function v(){if(m(t.searchForm),h(t.loaderModal),r.page=1,!r.filter){o.noResults(),m(t.textResult),l(t.loaderModal);return}try{const{results:e,totalPages:a}=await c(r);console.log(e),console.log(a);//! there's the same if !queryParams.filter
a>1?(w(a),P()):o.endOfSearch(),p(e,t.resultContainer)}catch(e){console.error("Error fetching images:",e),o.apiIsiToastError(),console.error("Error fetching request:",e)}finally{l(t.loaderModal);//! removeListener from another person
}}async function P(){h(t.loaderModal),r.page+=1;try{const{results:e,totalPages:a}=await c(r);p(e,t.resultContainer),console.log(a),a>1?w(a):o.endOfSearch()}catch(e){console.error("Error fetching request:",e),o.apiIsiToastError()}finally{//! refs.resultContainer.innerHTML = '';  need or not
l(t.loaderModal),r.page===r.totalPages&&o.endOfSearch()}}t.searchForm.addEventListener("submit",T);t.resultContainer.innerHTML="";async function T(e){e.preventDefault(),t.resultContainer.innerHTML="",r.page=1;const a=e.currentTarget;if(r.keyword=a.elements.query.value.trim(),console.log(r.keyword),!r.keyword){alert("Empty value");return}try{console.log(r);const{results:s,totalPages:i}=await c(r);console.log(((d,u)=>d.filter(g=>g.name.includes(u)))(s,r.keyword)),console.log(i),p(s,t.resultContainer)}catch(s){console.error("Error fetching images:",s),alert("Wrong request")}finally{t.searchForm.reset(),l(t.loaderModal)}}function p(e,a){const s=e.map(({_id:i,rating:f,name:d,burnedCalories:u,time:g,bodyPart:x,target:E})=>`<li class="filtered-card-item">
        <div class="card-box-workout">
          <div class="card-box-info">
            <div class="filtered-workout">Workout</div>
            <div class="card-box-rating">
              <p class="filtered-rating">${Math.round(f)}</p>
              <img class="filteered-star" href="#" alt="star" height="35"></img>
            </div>
          </div>
          <button type="submit" data-id=${i} class="to-favorites-start">Start</button><a/>
        </div>
        <div class="card-box-title">
          <img class="filteered-athlete" href="#" alt="athlete" height="35"></img>
          <h3 class="filteered-title">${d}</h3>
        </div>
        <ul class="filtered-description">
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Burned calories: <spam class="filtered-descr-value">${u} / ${g} min</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Body part: <spam class="filtered-descr-value">${x}</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Target: <spam class="filtered-descr-value">${E}</spam></p>
          </li>
        </ul>  
  </li>
  `).join("");a.insertAdjacentHTML("beforeend",s)}function w(e){new M(t.pagi,{totalItems:e,itemsPerPage:9,visiblePages:3,page:r.page,centerAlign:!0,template:{page:'<a class="tui-pagination-btn">{{page}}</a>',currentPage:'<strong class="tui-pagination-btn tui-pagination-active">{{page}}</strong>',moveButton:'<a class="tui-pagination-btn tui-pagination-control"></a>',disabledMoveButton:'<a class="tui-pagination-btn tui-pagination-control disabled"></a>',moreButton:'<a class="tui-pagination-btn tui-pagination-ellipsis" aria-label="More"></a>'}})}v();const j=Object.freeze(Object.defineProperty({__proto__:null,filterExercise:b,nameExercise:n,renderExerciseByFilter:v},Symbol.toStringTag,{value:"Module"})),k="https://energyflow.b.goit.study/api",S="quote";async function _(){try{return(await y.get(`${k}/${S}`)).data}catch(e){throw console.log(e),e}}async function c({keyword:e,page:a=1,limit:s}){return(await y.get("https://energyflow.b.goit.study/api/exercises",{params:{[b]:n,keyword:e,limit:s,page:a}})).data}const q=Object.freeze(Object.defineProperty({__proto__:null,fetchQuoteFromServer:_,searchExerciseByFilters:c},Symbol.toStringTag,{value:"Module"}));export{j as e,_ as f,q as m};
//# sourceMappingURL=mainApi-1afeb3b2.js.map
