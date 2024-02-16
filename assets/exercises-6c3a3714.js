import{a as L}from"./vendor-8cce9181.js";import{refs as e}from"./refs-e3209bdb.js";import{renderExerciseByFilterName as b}from"./exercises-details-5906947a.js";import{hide as c,showLoader as d,hideLoader as a,show as p}from"./visibility-9f0213da.js";import"./isiToast-34d29aba.js";const T="https://energyflow.b.goit.study/api";let g="Muscles",o=1,l=0,y=window.innerWidth,E,M;const u={filter:g,page:o,limit:l};e.exercisesBtnEl.addEventListener("click",w);e.exercisesGalleryEl.addEventListener("click",P);e.paginationEl.addEventListener("click",H);y<=375?l=8:(y<=768,l=12);async function f(){d(e.loaderModal);try{return(await L.get(`${T}/filters`,{params:{filter:g,page:o,limit:l}})).data}catch(t){console.log(t)}}async function B(){try{const{results:t,page:r,totalPages:s}=await f(u);t&&t.length>0?(m(t),e.paginationEl.innerHTML=h(r,s),a(e.loaderModal)):console.error("No results found for this filter")}catch(t){console.log("Error fetching images:",t)}}B();async function w(t){t.preventDefault(),c(e.subexercisesDetailsContainer),c(e.subexercisesSearchForm),c(e.exercisesTitleSpan),e.exercisesSubtitle.innerHTML="",e.subexercisesDetailsContainer.innerHTML="";const r=t.target.dataset.filter;if(e.exercisesGalleryEl.innerHTML="",g=r,o=1,d(e.loaderModal),t.target!==t.currentTarget)try{const{results:s,page:i,totalPages:n}=await f(u);m(s),a(e.loaderModal),r!=="Body parts"&&e.musclesBtnEl.classList.add("btn-item-active"),r!=="Equipment"&&e.musclesBtnEl.classList.add("btn-item-active"),r!=="Muscles"&&e.musclesBtnEl.classList.remove("btn-item-active"),n>1?e.paginationEl.innerHTML=h(i,n):e.paginationEl.innerHTML="",x()}catch(s){console.log(s)}}function m(t){const r=t.map(({name:s,filter:i,imgUrl:n})=>`<li class="exercises-gallery-item" data-filter>
        <img class="exercises-gallery-img" src="${n}" alt="${i}">
        <div class="exercises-gallery-text">
          <h3 class="exercises-gallery-title">${s}</h3>
          <p class="exercises-gallery-filter">${i}</p>
        </div>
        </li>`).join("");e.exercisesGalleryEl.insertAdjacentHTML("beforeend",r),a(e.loaderModal)}function h(t,r){let s="";d(e.loaderModal);for(let i=1;i<=r;i++)s+=`<button class="button-pagination" type="button">${i}</button>`,a(e.loaderModal);return s}async function H(t){o=t.target.textContent,e.exercisesGalleryEl.innerHTML="";try{const{results:r,page:s,totalPages:i}=await f(u);m(r),x()}catch(r){console.log(r)}}function P(t){const r=t.target.closest(".exercises-gallery-item");if(r){const s=r.querySelector(".exercises-gallery-title").textContent,i=r.querySelector(".exercises-gallery-filter").textContent;M=s,E=i}e.exercisesGalleryEl.innerHTML="",e.paginationEl.innerHTML="",p(e.subexercisesDetailsContainer),p(e.exercisesTitleSpan),a(e.loaderModal),b(E,M),x()}function x(){e.exercisesContainerEl.scrollIntoView({behavior:"smooth",block:"start"})}export{x as scrollToExerciseGallery};
//# sourceMappingURL=exercises-6c3a3714.js.map
