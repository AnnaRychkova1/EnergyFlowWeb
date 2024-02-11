import{a as d}from"./vendor-0f51b997.js";import{refs as a}from"./refs-78569e0c.js";const p="bodypart",i="waist",s={filter:i,keyword:"",page:1,limit:9};a.exercisesHeader.textContent=`/${i}`;a.textResult.classList.add("is-hidden");b();async function b(t){try{const{results:e,totalPages:r}=await f(s);console.log(e),console.log(r),g(e,a.resultContainer)}catch(e){console.error("Error fetching request:",e)}finally{}}a.searchForm.addEventListener("submit",w);a.resultContainer.innerHTML="";async function w(t){t.preventDefault(),a.resultContainer.innerHTML="",s.page=1;const e=t.currentTarget;if(s.keyword=e.elements.query.value.trim(),console.log(s.keyword),!s.keyword){alert("Empty value");return}try{console.log(s);const{results:r,totalPages:o}=await f(s);console.log(((l,c)=>l.filter(n=>n.name.includes(c)))(r,s.keyword)),console.log(o),g(r,a.resultContainer)}catch(r){console.error("Error fetching images:",r),alert("Wrong request")}finally{a.searchForm.reset()}}function g(t,e){const r=t.map(({_id:o,rating:m,name:l,burnedCalories:c,time:n,bodyPart:h,target:v})=>`<li class="filtered-card-item">
        <div class="card-box-workout">
          <div class="card-box-info">
            <div class="filtered-workout">Workout</div>
            <div class="card-box-rating">
              <p class="filtered-rating">${Math.round(m)}</p>
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
            <p class="filtered-descr-title">Body part: <spam class="filtered-descr-value">${h}</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Target: <spam class="filtered-descr-value">${v}</spam></p>
          </li>
        </ul>  
  </li>
  `).join("");e.insertAdjacentHTML("beforeend",r)}const _=Object.freeze(Object.defineProperty({__proto__:null,filterExercise:p,nameExercise:i},Symbol.toStringTag,{value:"Module"})),u="https://energyflow.b.goit.study/api",x="quote",y="exercises";async function $(){try{return(await d.get(`${u}/${x}`)).data}catch(t){throw console.log(t),t}}async function f({keyword:t,page:e=1,limit:r}){return(await d.get(`${u}/${y}`,{params:{[p]:i,keyword:t,limit:r,page:e}})).data}async function E(t){try{const{data:e}=await d.get(`${u}/${y}/${t}`);return e}catch(e){console.error(e)}}const S=Object.freeze(Object.defineProperty({__proto__:null,fetchQuoteFromServer:$,searchExerciseByFilters:f,searchExerciseByID:E},Symbol.toStringTag,{value:"Module"}));export{_ as e,$ as f,S as m,E as s};
//# sourceMappingURL=mainApi-dda708e4.js.map
