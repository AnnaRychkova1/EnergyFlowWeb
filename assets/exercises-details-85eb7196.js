import{a as g}from"./vendor-8cce9181.js";const s={loaderModal:document.querySelector(".overlay"),exercisesHeader:document.querySelector(".exersises-header"),resultContainer:document.querySelector(".filtered-cards"),searchForm:document.querySelector(".form"),searchBtn:document.querySelector(".search-btn"),textResult:document.querySelector(".exercise-text-no-found")},p="https://energyflow.b.goit.study/api",h="exercises",v="bodypart",n="waist",t={filter:n,keyword:"",page:1,limit:9};s.exercisesHeader.textContent=`/${n}`;s.textResult.classList.add("is-hidden");x();async function x(a){try{const{results:e,totalPages:r}=await m(t);console.log(e),console.log(r),u(e,s.resultContainer)}catch(e){console.error("Error fetching images:",e),alert("Wrong request")}finally{}}s.searchForm.addEventListener("submit",w);s.resultContainer.innerHTML="";async function w(a){a.preventDefault(),s.resultContainer.innerHTML="",t.page=1;const e=a.currentTarget;if(t.keyword=e.elements.query.value.trim(),console.log(t.keyword),!t.keyword){alert("Empty value");return}try{console.log(t);const{results:r,totalPages:l}=await m(t);console.log(((o,i)=>o.filter(c=>c.name.includes(i)))(r,t.keyword)),console.log(l),u(r,s.resultContainer)}catch(r){console.error("Error fetching images:",r),alert("Wrong request")}finally{s.searchForm.reset()}}function u(a,e){const r=a.map(({_id:l,rating:d,name:o,burnedCalories:i,time:c,bodyPart:f,target:y})=>`<li class="filtered-card-item">
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
          <h3 class="filteered-title">${o}</h3>
        </div>
        <ul class="filtered-description">
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Burned calories: <spam class="filtered-descr-value">${i} / ${c} min</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Body part: <spam class="filtered-descr-value">${f}</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Target: <spam class="filtered-descr-value">${y}</spam></p>
          </li>
        </ul>  
  </li>
  `).join("");e.insertAdjacentHTML("beforeend",r)}async function m({page:a=1,limit:e}){return(await g.get(`${p}/${h}?${v}=${n}`,{params:{keyword:t.keyword,limit:e,page:a}})).data}
//# sourceMappingURL=exercises-details-85eb7196.js.map
