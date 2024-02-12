import{P as T,a as y}from"./vendor-65c0bc71.js";import{show as p,showLoader as B,hideLoader as f}from"./visibility-9f0213da.js";import{refs as r}from"./refs-53a62ef5.js";import i from"./isiToast-262f9325.js";r.searchForm.addEventListener("submit",M);const k=document.getElementById("pagination-container");k.addEventListener("click",L);const l="bodypart",c="waist";let m;const s={filter:c,keyword:"",page:1,limit:9,totalItems:0};r.exercisesHeader.textContent=`/${c}`;function I(e){m=e.currentTarget.dataset.id,console.log(m)}h();async function h(){if(r.resultContainer.innerHTML="",p(r.searchForm),B(r.loaderModal),s.page=1,!s.filter){i.noResults(),p(r.textResult),f(r.loaderModal);return}try{const{results:e,totalPages:t}=await b(s);if(console.log(e),console.log(t),!e||t===0){i.noResults(),p(r.textResult),f(r.loaderModal);return}if(t>1){const a=s.limit*t;console.log(a),$(a)}else i.endOfSearch();w(e,r.resultContainer)}catch(e){console.error("Error fetching images:",e),i.apiIsiToastError()}finally{f(r.loaderModal)}}async function M(e){e.preventDefault(),r.resultContainer.innerHTML="",s.page=1;const t=e.currentTarget;if(s.keyword=t.elements.query.value.trim(),console.log(s.keyword),!s.keyword){i.noQuery();return}try{console.log(s);const{results:a,totalPages:v}=await b(s);console.log(a);let o;l==="bodypart"&&(o="bodyPart"),l==="muscles"||(o="equipment"),l==="bodypart"&&(o="bodyPart");const d=a.map(n=>n[o]);console.log(d),console.log(((n,u)=>n.filter(g=>g.name.includes(u)))(a,s.keyword)),w(a,r.resultContainer)}catch(a){console.error("Error fetching images:",a),i.apiIsiToastError()}finally{r.searchForm.reset()}}function w(e,t){const a=e.map(({_id:o,rating:d,name:x,burnedCalories:n,time:u,bodyPart:g,target:P})=>`<li class="filtered-card-item">
        <div class="card-box-workout">
          <div class="card-box-info">
            <div class="filtered-workout">Workout</div>
            <div class="card-box-rating">
              <p class="filtered-rating">${Math.round(d)}</p>
              <img class="filteered-star" href="#" alt="star" height="35"></img>
            </div>
          </div>
          <button type="submit" data-id=${o} class="to-favorites-start">Start</button><a/>
        </div>
        <div class="card-box-title">
          <img class="filteered-athlete" href="#" alt="athlete" height="35"></img>
          <h3 class="filteered-title">${x}</h3>
        </div>
        <ul class="filtered-description">
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Burned calories: <spam class="filtered-descr-value">${n} / ${u} min</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Body part: <spam class="filtered-descr-value">${g}</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Target: <spam class="filtered-descr-value">${P}</spam></p>
          </li>
        </ul>  
  </li>
  `).join("");t.insertAdjacentHTML("beforeend",a),document.querySelector(".to-favorites-start").addEventListener("click",I)}//! Pagination
function $(e,t){const a=document.getElementById("pagination-container");e>1?new T(a,{totalItems:t,itemsPerPage:1,visiblePages:3,page:1,centerAlign:!0,template:{page:'<a class="tui-pagination-btn">{{page}}</a>',currentPage:'<strong class="tui-pagination-btn tui-pagination-active">{{page}}</strong>',moveButton:'<a class="tui-pagination-btn tui-pagination-control"></a>',disabledMoveButton:'<a class="tui-pagination-btn tui-pagination-control disabled"></a>',moreButton:'<a class="tui-pagination-btn tui-pagination-ellipsis" aria-label="More"></a>'}}):a.innerHTML=""}async function L(e){if(e.target.classList.contains("tui-pagination-btn")){const t=parseInt(e.target.textContent);console.log(t),s.page=t,await h()}}const R=Object.freeze(Object.defineProperty({__proto__:null,get exerciseId(){return m},exercisesParamFilter:l,exercisesParamName:c,renderExerciseByFilter:h},Symbol.toStringTag,{value:"Module"})),E="https://energyflow.b.goit.study/api",S="quote",_="exercises";async function C(){try{return(await y.get(`${E}/${S}`)).data}catch(e){throw console.log(e),e}}async function b({keyword:e,page:t=1,limit:a}){return(await y.get("https://energyflow.b.goit.study/api/exercises",{params:{[l]:c,keyword:e,limit:a,page:t}})).data}async function F(e){try{const{data:t}=await y.get(`${E}/${_}/${e}`);return t}catch(t){console.error(t)}}const q=Object.freeze(Object.defineProperty({__proto__:null,fetchQuoteFromServer:C,searchExerciseByFilters:b,searchExerciseByID:F},Symbol.toStringTag,{value:"Module"}));export{R as e,C as f,q as m,F as s};
//# sourceMappingURL=mainApi-88c0b17e.js.map
