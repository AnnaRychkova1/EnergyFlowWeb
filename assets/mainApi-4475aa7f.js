import{a as f}from"./vendor-0f51b997.js";import{refs as a}from"./refs-902e1b5c.js";const m="bodypart",i="waist",s={filter:i,keyword:"",page:1,limit:9};a.exercisesHeader.textContent=`/${i}`;a.textResult.classList.add("is-hidden");v();async function v(e){try{const{results:t,totalPages:r}=await d(s);console.log(t),console.log(r),p(t,a.resultContainer)}catch(t){console.error("Error fetching request:",t)}finally{}}a.searchForm.addEventListener("submit",b);a.resultContainer.innerHTML="";async function b(e){e.preventDefault(),a.resultContainer.innerHTML="",s.page=1;const t=e.currentTarget;if(s.keyword=t.elements.query.value.trim(),console.log(s.keyword),!s.keyword){alert("Empty value");return}try{console.log(s);const{results:r,totalPages:o}=await d(s);console.log(((l,c)=>l.filter(n=>n.name.includes(c)))(r,s.keyword)),console.log(o),p(r,a.resultContainer)}catch(r){console.error("Error fetching images:",r),alert("Wrong request")}finally{a.searchForm.reset()}}function p(e,t){const r=e.map(({_id:o,rating:u,name:l,burnedCalories:c,time:n,bodyPart:y,target:h})=>`<li class="filtered-card-item">
        <div class="card-box-workout">
          <div class="card-box-info">
            <div class="filtered-workout">Workout</div>
            <div class="card-box-rating">
              <p class="filtered-rating">${Math.round(u)}</p>
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
            <p class="filtered-descr-title">Body part: <spam class="filtered-descr-value">${y}</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Target: <spam class="filtered-descr-value">${h}</spam></p>
          </li>
        </ul>  
  </li>
  `).join("");t.insertAdjacentHTML("beforeend",r)}const T=Object.freeze(Object.defineProperty({__proto__:null,filterExercise:m,nameExercise:i},Symbol.toStringTag,{value:"Module"})),g="https://energyflow.b.goit.study/api",w="quote",x="exercises";async function $(){try{return(await f.get(`${g}/${w}`)).data}catch(e){throw console.log(e),e}}async function d({keyword:e,page:t=1,limit:r}){return(await f.get(`${g}/${x}?${m}=${i}`,{params:{keyword:e,limit:r,page:t}})).data}const _=Object.freeze(Object.defineProperty({__proto__:null,fetchQuoteFromServer:$,searchExerciseByFilters:d},Symbol.toStringTag,{value:"Module"}));export{T as e,$ as f,_ as m};
//# sourceMappingURL=mainApi-4475aa7f.js.map
