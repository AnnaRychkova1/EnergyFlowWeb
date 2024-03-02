import{a as L}from"./vendor-8cce9181.js";import{refs as e}from"./refs-20f87826.js";import{renderExerciseByFilterName as h}from"./exercises-details-cac744b0.js";import{showLoader as g,hide as l,show as y,hideLoader as c}from"./visibility-9f0213da.js";import{scrollTo as E}from"./scrollTo-6516673a.js";import"./modal-menu-7cd938d1.js";const T="https://energyflow.b.goit.study/api";let n="Muscles",d=1,o=0,b=window.innerWidth,m,p;const u={filter:n,page:d,limit:o};e.exercisesBtnEl.addEventListener("click",H);e.exercisesGalleryEl.addEventListener("click",w);e.paginationEl.addEventListener("click",P);b<768?o=8:o=12;async function f(){g(e.loaderModal);try{return(await L.get(`${T}/filters`,{params:{filter:n,page:d,limit:o}})).data}catch(t){console.log(t)}}async function B(){try{const{results:t,page:r,totalPages:s}=await f(u);t&&t.length>0?(x(t),e.paginationEl.innerHTML="",e.paginationEl.innerHTML=M(r,s)):console.error("No results found for this filter")}catch(t){console.log("Error fetching images:",t)}}B();async function H(t){t.preventDefault();const r=t.target.dataset.filter;if(n=r,d=1,g(e.loaderModal),t.target!==t.currentTarget){l(e.subexercisesFilteredCards),l(e.subexercisesSearchForm),l(e.exercisesTitleSpan),l(e.subexercisesTextNoFound),y(e.exercisesGalleryEl),e.exercisesGalleryEl.innerHTML="",e.exercisesSubtitle.innerHTML="",e.subexercisesFilteredCards.innerHTML="";try{const{results:s,page:i,totalPages:a}=await f(u);x(s),c(e.loaderModal),r!=="Body parts"&&e.musclesBtnEl.classList.add("btn-item-active"),r!=="Equipment"&&e.musclesBtnEl.classList.add("btn-item-active"),r!=="Muscles"&&e.musclesBtnEl.classList.remove("btn-item-active"),a>1?e.paginationEl.innerHTML=M(i,a):e.paginationEl.innerHTML="",E(e.exercisesContainerEl)}catch(s){console.log(s)}finally{n=""}}}function x(t){const r=t.map(({name:s,filter:i,imgUrl:a})=>`<li class="exercises-gallery-item" data-filter>
        <img class="exercises-gallery-img" src="${a}" alt="${i}">
        <div class="exercises-gallery-text">
          <h3 class="exercises-gallery-title">${s}</h3>
          <p class="exercises-gallery-filter">${i}</p>
        </div>
        </li>`).join("");e.exercisesGalleryEl.insertAdjacentHTML("beforeend",r),c(e.loaderModal)}function M(t,r){let s="";g(e.loaderModal);for(let i=1;i<=r;i++)s+=`<button class="button-pagination" type="button">${i}</button>`,c(e.loaderModal);return s}async function P(t){d=t.target.textContent,e.exercisesGalleryEl.innerHTML="";try{const{results:r,page:s,totalPages:i}=await f(u);x(r),E(e.exercisesContainerEl)}catch(r){console.log(r)}}function w(t){const r=t.target.closest(".exercises-gallery-item");if(r){const s=r.querySelector(".exercises-gallery-title").textContent,i=r.querySelector(".exercises-gallery-filter").textContent;p=s,m=i}y(e.exercisesTitleSpan),l(e.exercisesGalleryEl),e.exercisesGalleryEl.innerHTML="",e.paginationEl.innerHTML="",c(e.loaderModal),h(m,p)}
//# sourceMappingURL=exercises-cb71cf58.js.map
