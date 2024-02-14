import{a as h}from"./vendor-8cce9181.js";import{hide as w,show as n,showLoader as k,hideLoader as f}from"./visibility-9f0213da.js";import{refs as e}from"./refs-c1696e77.js";import c from"./isiToast-34d29aba.js";import{createModalMenu as v}from"./modal-menu-76dc09db.js";const E="https://energyflow.b.goit.study/api",x="exercises";e.resultContainer.addEventListener("click",C);const t={filter:name,keyword:"",page:1,limit:9};async function R(s,a){let i;if(s==="Body parts"&&(i="bodypart"),s==="Muscles"&&(i="muscles"),s==="Equipment"&&(i="equipment"),e.exercisesGalleryEl&&w(e.containerFilteredCards),e.exercisesSubtitle.textContent=`${a}`,n(e.containerFilteredCards),n(e.searchForm),k(e.loaderModal),e.resultContainer.innerHTML="",!i||!a){c.noResults(),n(e.textResult),f(e.loaderModal);return}try{const{results:r,totalPages:l}=await g({filter:i,name:a,keyword:t.keyword,limit:t.limit,page:t.page});if(console.log(r),console.log(l),!r||l===0){c.noResults(),n(e.textResult),f(e.loaderModal);return}let o="";for(const u of r)o+=p(u);e.resultContainer.innerHTML=o,t.page+=1,l>1}catch(r){console.error("Error fetching images:",r),c.apiIsiToastError()}finally{f(e.loaderModal)}e.searchForm.addEventListener("submit",d);async function d(r){r.preventDefault(),e.resultContainer.innerHTML="",t.page=1;const l=r.currentTarget;t.keyword=l.elements.query.value.trim(),console.log(t.keyword);try{const{results:o,totalPages:u}=await g({filter:i,name:a,keyword:t.keyword,limit:t.limit,page:t.page});if(!t.keyword){c.noQuery(),n(e.textResult),f(e.loaderModal);return}let m="";for(const y of o)m+=p(y);e.resultContainer.innerHTML=m}catch(o){console.error("Error fetching images:",o),c.apiIsiToastError()}finally{e.searchForm.reset()}}}function p({_id:s,rating:a,name:i,burnedCalories:d,time:r,bodyPart:l,target:o}){return`<li class="filtered-card-item">
        <div class="card-box-workout">
          <div class="card-box-info">
            <div class="filtered-workout">Workout</div>
            <div class="card-box-rating">
              <p class="filtered-rating">${Math.round(a)}</p>
              <img class="filteered-star" href="#" alt="star" height="35"></img>
            </div>
          </div>
          <button type="submit" data-id=${s} class="to-favorites-start">Start</button><a/>
        </div>
        <div class="card-box-title">
          <img class="filteered-athlete" href="#" alt="athlete" height="35"></img>
          <h3 class="filteered-title">${i}</h3>
        </div>
        <ul class="filtered-description">
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Burned calories: <spam class="filtered-descr-value">${d} / ${r} min</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Body part: <spam class="filtered-descr-value">${l}</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Target: <spam class="filtered-descr-value">${o}</spam></p>
          </li>
        </ul>
  </li>
  `}function C(s){if(!s.target.dataset.id)return;const a=s.target.dataset.id;v(a)}async function g({filter:s,name:a,keyword:i,limit:d,page:r}){return(await h.get(`${E}/${x}`,{params:{[s]:a,keyword:i,limit:d,page:r}})).data}export{R as renderExerciseByFilterName};
//# sourceMappingURL=exercises-details-6e849ffb.js.map
