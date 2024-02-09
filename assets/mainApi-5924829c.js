import{a as u}from"./vendor-8cce9181.js";const a={loaderModal:document.querySelector(".overlay"),exercisesHeader:document.querySelector(".exersises-header"),resultContainer:document.querySelector(".filtered-cards"),searchForm:document.querySelector(".form"),searchBtn:document.querySelector(".search-btn"),textResult:document.querySelector(".exercise-text-no-found")},f="bodypart",l="waist",s={filter:l,keyword:"",page:1,limit:9};a.exercisesHeader.textContent=`/${l}`;a.textResult.classList.add("is-hidden");h();async function h(e){try{const{results:r,totalPages:t}=await y(s);console.log(r),console.log(t),m(r,a.resultContainer)}catch(r){console.error("Error fetching images:",r),alert("Wrong request")}finally{}}a.searchForm.addEventListener("submit",v);a.resultContainer.innerHTML="";async function v(e){e.preventDefault(),a.resultContainer.innerHTML="",s.page=1;const r=e.currentTarget;if(s.keyword=r.elements.query.value.trim(),console.log(s.keyword),!s.keyword){alert("Empty value");return}try{console.log(s);const{results:t,totalPages:o}=await y(s);console.log(((i,c)=>i.filter(n=>n.name.includes(c)))(t,s.keyword)),console.log(o),m(t,a.resultContainer)}catch(t){console.error("Error fetching images:",t),alert("Wrong request")}finally{a.searchForm.reset()}}function m(e,r){const t=e.map(({_id:o,rating:d,name:i,burnedCalories:c,time:n,bodyPart:g,target:p})=>`<li class="filtered-card-item">
        <div class="card-box-workout">
          <div class="card-box-info">
            <div class="filtered-workout">Workout</div>
            <div class="card-box-rating">
              <p class="filtered-rating">${Math.round(d)}</p>
              <img class="filteered-star" href="#" alt="star" height="35"></img>
            </div>
          </div>
          <button data-id=${o} class="to-favorites-start">Start</button><a/>
        </div>
        <div class="card-box-title">
          <img class="filteered-athlete" href="#" alt="athlete" height="35"></img>
          <h3 class="filteered-title">${i}</h3>
        </div>
        <ul class="filtered-description">
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Burned calories: <spam class="filtered-descr-value">${c} / ${n} min</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Body part: <spam class="filtered-descr-value">${g}</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Target: <spam class="filtered-descr-value">${p}</spam></p>
          </li>
        </ul>  
  </li>
  `).join("");r.insertAdjacentHTML("beforeend",t)}const E=Object.freeze(Object.defineProperty({__proto__:null,filterExercise:f,nameExercise:l},Symbol.toStringTag,{value:"Module"})),x="https://energyflow.b.goit.study/api",w="exercises";async function S(){try{return(await u.get("${BASE_URL}/${END_POINT_QUOTE}")).data}catch(e){throw console.log(e),e}}async function y({keyword:e,page:r=1,limit:t}){return(await u.get(`${x}/${w}?${f}=${l}`,{params:{keyword:e,limit:t,page:r}})).data}export{E as e,S as f};
//# sourceMappingURL=mainApi-5924829c.js.map
