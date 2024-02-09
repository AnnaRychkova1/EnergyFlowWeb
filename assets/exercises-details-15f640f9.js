import{a as y}from"./vendor-843ea6a4.js";const p="exercises",h="bodypart",n="waist",t={filter:n,keyword:"",page:1,limit:9},s={exercisesHeader:document.querySelector(".exersises-header"),resultContainer:document.querySelector(".filtered-cards"),searchForm:document.querySelector(".form"),searchBtn:document.querySelector(".search-btn"),textResult:document.querySelector(".exercise-text-no-found")};s.exercisesHeader.textContent=`/${n}`;s.textResult.classList.add("is-hidden");v();async function v(a){try{const{results:e,totalPages:r}=await f(t);console.log(e),console.log(r),u(e,s.resultContainer)}catch(e){console.error("Error fetching images:",e),alert("Wrong request")}finally{}}s.searchForm.addEventListener("submit",x);s.resultContainer.innerHTML="";async function x(a){a.preventDefault(),s.resultContainer.innerHTML="",t.page=1;const e=a.currentTarget;if(t.keyword=e.elements.query.value.trim(),console.log(t.keyword),!t.keyword){alert("Empty value");return}try{console.log(t);const{results:r,totalPages:l}=await f(t);console.log(((i,o)=>i.filter(c=>c.name.includes(o)))(r,t.keyword)),console.log(l),u(r,s.resultContainer)}catch(r){console.error("Error fetching images:",r),alert("Wrong request")}finally{s.searchForm.reset()}}function u(a,e){const r=a.map(({_id:l,rating:d,name:i,burnedCalories:o,time:c,bodyPart:m,target:g})=>`<li class="filtered-card-item">
        <div class="card-box-workout">
          <div class="card-box-info">
            <div class="filtered-workout">Workout</div>
            <div class="card-box-rating">
              <p class="filtered-rating">${Math.round(d)}</p>
              <img class="filteered-star" href="#" alt="star" height="35"></img>
            </div>
          </div>
          <button data-id=${l} class="to-favorites-start">Start</button><a/>
        </div>
        <div class="card-box-title">
          <img class="filteered-athlete" href="#" alt="athlete" height="35"></img>
          <h3 class="filteered-title">${i}</h3>
        </div>
        <ul class="filtered-description">
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Burned calories: <spam class="filtered-descr-value">${o} / ${c} min</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Body part: <spam class="filtered-descr-value">${m}</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Target: <spam class="filtered-descr-value">${g}</spam></p>
          </li>
        </ul>  
  </li>
  `).join("");e.insertAdjacentHTML("beforeend",r)}async function f({page:a=1,limit:e}){return(await y.get(`https://energyflow.b.goit.study/api/${p}?${h}=${n}`,{params:{keyword:t.keyword,limit:e,page:a}})).data}
//# sourceMappingURL=exercises-details-15f640f9.js.map
