import{a as h}from"./vendor-8cce9181.js";import{hide as w,show as d,showLoader as v,hideLoader as f}from"./visibility-9f0213da.js";import{refs as e}from"./refs-c1696e77.js";import c from"./isiToast-34d29aba.js";import{createModalMenu as k}from"./modal-menu-11929ab0.js";const E="https://energyflow.b.goit.study/api",x="exercises";e.resultContainer.addEventListener("click",C);const s={filter:name,keyword:"",page:1,limit:9};async function R(a,t){let i;if(a==="Body parts"&&(i="bodypart"),a==="Muscles"&&(i="muscles"),a==="Equipment"&&(i="equipment"),e.exercisesGalleryEl&&w(e.containerFilteredCards),e.exercisesSubtitle.textContent=`${t}`,d(e.containerFilteredCards),d(e.searchForm),v(e.loaderModal),e.resultContainer.innerHTML="",!i||!t){c.noResults(),d(e.textResult),f(e.loaderModal);return}try{const{results:r,totalPages:l}=await g({filter:i,name:t,keyword:s.keyword,limit:s.limit,page:s.page});if(console.log(r),console.log(l),!r||l===0){c.noResults(),d(e.textResult),f(e.loaderModal);return}let o="";for(const u of r)o+=p(u);e.resultContainer.innerHTML=o,s.page+=1,l>1}catch(r){console.error("Error fetching images:",r),c.apiIsiToastError()}finally{f(e.loaderModal)}e.searchForm.addEventListener("submit",n);async function n(r){r.preventDefault(),e.resultContainer.innerHTML="",s.page=1;const l=r.currentTarget;s.keyword=l.elements.query.value.trim(),console.log(s.keyword);try{const{results:o,totalPages:u}=await g({filter:i,name:t,keyword:s.keyword,limit:s.limit,page:s.page});if(!s.keyword){c.noQuery(),d(e.textResult),f(e.loaderModal);return}let m="";for(const y of o)m+=p(y);e.resultContainer.innerHTML=m}catch(o){console.error("Error fetching images:",o),c.apiIsiToastError()}finally{e.searchForm.reset()}}}function p({_id:a,rating:t,name:i,burnedCalories:n,time:r,bodyPart:l,target:o}){return`<li class="filtered-card-item">
        <div class="card-box-workout">
          <div class="card-box-info">
            <div class="filtered-workout">Workout</div>
            <div class="card-box-rating">
              <p class="filtered-rating">${Math.round(t)}</p>
              <img class="filteered-star" href="#" alt="star" height="35"></img>
            </div>
          </div>
          <button type="submit" data-id=${a} class="to-favorites-start">Start</button><a/>
        </div>
        <div class="card-box-title">
          <img class="filteered-athlete" href="#" alt="athlete" height="35"></img>
          <h3 class="filteered-title">${i}</h3>
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
  `}function C(a){const t=a.target.dataset.id;console.log(t),k(t)}async function g({filter:a,name:t,keyword:i,limit:n,page:r}){return(await h.get(`${E}/${x}`,{params:{[a]:t,keyword:i,limit:n,page:r}})).data}export{R as renderExerciseByFilterName};
//# sourceMappingURL=exercises-details-a33a6b60.js.map
