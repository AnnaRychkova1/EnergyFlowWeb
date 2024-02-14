import{a as h}from"./vendor-8cce9181.js";import{show as d,showLoader as w,hideLoader as f}from"./visibility-9f0213da.js";import{refs as e}from"./refs-461b2e39.js";import c from"./isiToast-34d29aba.js";import{getCardInfo as v}from"./modal-menu-de6aadb4.js";const k="https://energyflow.b.goit.study/api",E="exercises";e.resultContainer.addEventListener("click",x);const s={filter:name,keyword:"",page:1,limit:9};async function L(i,t){let a;if(i==="Body parts"&&(a="bodypart"),i==="Muscles"&&(a="muscles"),i==="Equipment"&&(a="equipment"),e.exercisesSubtitle.textContent=`${t}`,d(e.containerFilteredCards),d(e.searchForm),w(e.loaderModal),e.resultContainer.innerHTML="",!a||!t){c.noResults(),d(e.textResult),f(e.loaderModal);return}try{const{results:r,totalPages:l}=await g({filter:a,name:t,keyword:s.keyword,limit:s.limit,page:s.page});if(console.log(r),console.log(l),!r||l===0){c.noResults(),d(e.textResult),f(e.loaderModal);return}let o="";for(const u of r)o+=p(u);e.resultContainer.innerHTML=o,s.page+=1,l>1}catch(r){console.error("Error fetching images:",r),c.apiIsiToastError()}finally{f(e.loaderModal)}e.searchForm.addEventListener("submit",n);async function n(r){r.preventDefault(),e.resultContainer.innerHTML="",s.page=1;const l=r.currentTarget;s.keyword=l.elements.query.value.trim(),console.log(s.keyword);try{const{results:o,totalPages:u}=await g({filter:a,name:t,keyword:s.keyword,limit:s.limit,page:s.page});if(!s.keyword){c.noQuery(),d(e.textResult),f(e.loaderModal);return}let m="";for(const y of o)m+=p(y);e.resultContainer.innerHTML=m}catch(o){console.error("Error fetching images:",o),c.apiIsiToastError()}finally{e.searchForm.reset()}}}function p({_id:i,rating:t,name:a,burnedCalories:n,time:r,bodyPart:l,target:o}){return`<li class="filtered-card-item">
        <div class="card-box-workout">
          <div class="card-box-info">
            <div class="filtered-workout">Workout</div>
            <div class="card-box-rating">
              <p class="filtered-rating">${Math.round(t)}</p>
              <img class="filteered-star" href="#" alt="star" height="35"></img>
            </div>
          </div>
          <button type="submit" data-id=${i} class="to-favorites-start">Start</button><a/>
        </div>
        <div class="card-box-title">
          <img class="filteered-athlete" href="#" alt="athlete" height="35"></img>
          <h3 class="filteered-title">${a}</h3>
        </div>
        <ul class="filtered-description">
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Burned calories: <spam class="filtered-descr-value">${n} / ${r} min</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Body part: <spam class="filtered-descr-value">${l}</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Target: <spam class="filtered-descr-value">${o}</spam></p>
          </li>
        </ul>
  </li>
  `}function x(i){const t=i.target.dataset.id;console.log(t),v(t)}async function g({filter:i,name:t,keyword:a,limit:n,page:r}){return(await h.get(`${k}/${E}`,{params:{[i]:t,keyword:a,limit:n,page:r}})).data}export{L as renderExerciseByFilterName};
//# sourceMappingURL=exercises-details-0f9f2f5e.js.map
