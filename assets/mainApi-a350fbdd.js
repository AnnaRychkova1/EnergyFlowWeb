import{a as d}from"./vendor-0f51b997.js";import{refs as a}from"./refs-78569e0c.js";const g="bodypart",i="waist",s={filter:i,keyword:"",page:1,limit:9};a.exercisesHeader.textContent=`/${i}`;a.textResult.classList.add("is-hidden");u();async function u(t){try{const{results:e,totalPages:r}=await m(s);console.log(e),console.log(r),y(e,a.resultContainer)}catch(e){console.error("Error fetching request:",e)}finally{}}a.searchForm.addEventListener("submit",w);a.resultContainer.innerHTML="";async function w(t){t.preventDefault(),a.resultContainer.innerHTML="",s.page=1;const e=t.currentTarget;if(s.keyword=e.elements.query.value.trim(),console.log(s.keyword),!s.keyword){alert("Empty value");return}try{console.log(s);const{results:r,totalPages:o}=await m(s);console.log(((l,c)=>l.filter(n=>n.name.includes(c)))(r,s.keyword)),console.log(o),y(r,a.resultContainer)}catch(r){console.error("Error fetching images:",r),alert("Wrong request")}finally{a.searchForm.reset()}}function y(t,e){const r=t.map(({_id:o,rating:p,name:l,burnedCalories:c,time:n,bodyPart:v,target:b})=>`<li class="filtered-card-item">
        <div class="card-box-workout">
          <div class="card-box-info">
            <div class="filtered-workout">Workout</div>
            <div class="card-box-rating">
              <p class="filtered-rating">${Math.round(p)}</p>
              <img class="filteered-star" href="#" alt="star" height="35"></img>
            </div>
          </div>
          <button type="submit" data-id=${o} class="to-favorites-start">Start</button><a/>
        </div>
        <div class="card-box-title">
          <img class="filteered-athlete" href="#" alt="athlete" height="35"></img>
          <h3 class="filteered-title">${l}</h3>
        </div>
        <ul class="filtered-description">
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Burned calories: <spam class="filtered-descr-value">${c} / ${n} min</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Body part: <spam class="filtered-descr-value">${v}</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Target: <spam class="filtered-descr-value">${b}</spam></p>
          </li>
        </ul>  
  </li>
  `).join("");e.insertAdjacentHTML("beforeend",r)}u();const _=Object.freeze(Object.defineProperty({__proto__:null,filterExercise:g,nameExercise:i,renderExerciseByFilter:u},Symbol.toStringTag,{value:"Module"})),f="https://energyflow.b.goit.study/api",x="quote",h="exercises";async function $(){try{return(await d.get(`${f}/${x}`)).data}catch(t){throw console.log(t),t}}async function m({keyword:t,page:e=1,limit:r}){return(await d.get(`${f}/${h}`,{params:{[g]:i,keyword:t,limit:r,page:e}})).data}async function E(t){try{const{data:e}=await d.get(`${f}/${h}/${t}`);return e}catch(e){console.error(e)}}const S=Object.freeze(Object.defineProperty({__proto__:null,fetchQuoteFromServer:$,searchExerciseByFilters:m,searchExerciseByID:E},Symbol.toStringTag,{value:"Module"}));export{_ as e,$ as f,S as m,E as s};
//# sourceMappingURL=mainApi-a350fbdd.js.map
