import{a as M}from"./vendor-8cce9181.js";import{refs as e}from"./refs-20f87826.js";import{renderExerciseByFilterName as L}from"./exercises-details-f0176ce0.js";import{showLoader as g,hide as a,hideLoader as c,show as h}from"./visibility-9f0213da.js";import"./isiToast-34d29aba.js";import"./modal-menu-7cd938d1.js";const b="https://energyflow.b.goit.study/api";let n="Muscles",d=1,o=0,T=window.innerWidth,p,y;const u={filter:n,page:d,limit:o};e.exercisesBtnEl.addEventListener("click",H);e.exercisesGalleryEl.addEventListener("click",P);e.paginationEl.addEventListener("click",w);T<768?o=8:o=12;async function f(){g(e.loaderModal);try{return(await M.get(`${b}/filters`,{params:{filter:n,page:d,limit:o}})).data}catch(t){console.log(t)}}async function B(){try{const{results:t,page:r,totalPages:s}=await f(u);t&&t.length>0?(m(t),e.paginationEl.innerHTML="",e.paginationEl.innerHTML=E(r,s)):console.error("No results found for this filter")}catch(t){console.log("Error fetching images:",t)}}B();async function H(t){t.preventDefault();const r=t.target.dataset.filter;if(n=r,d=1,g(e.loaderModal),t.target!==t.currentTarget){a(e.subexercisesFilteredCards),a(e.subexercisesSearchForm),a(e.exercisesTitleSpan),a(e.subexercisesTextNoFound),e.exercisesGalleryEl.innerHTML="",e.exercisesSubtitle.innerHTML="",e.subexercisesFilteredCards.innerHTML="";try{const{results:s,page:i,totalPages:l}=await f(u);m(s),c(e.loaderModal),r!=="Body parts"&&e.musclesBtnEl.classList.add("btn-item-active"),r!=="Equipment"&&e.musclesBtnEl.classList.add("btn-item-active"),r!=="Muscles"&&e.musclesBtnEl.classList.remove("btn-item-active"),l>1?e.paginationEl.innerHTML=E(i,l):e.paginationEl.innerHTML="",x()}catch(s){console.log(s)}finally{n=""}}}function m(t){const r=t.map(({name:s,filter:i,imgUrl:l})=>`<li class="exercises-gallery-item" data-filter>
        <img class="exercises-gallery-img" src="${l}" alt="${i}">
        <div class="exercises-gallery-text">
          <h3 class="exercises-gallery-title">${s}</h3>
          <p class="exercises-gallery-filter">${i}</p>
        </div>
        </li>`).join("");e.exercisesGalleryEl.insertAdjacentHTML("beforeend",r),c(e.loaderModal)}function E(t,r){let s="";g(e.loaderModal);for(let i=1;i<=r;i++)s+=`<button class="button-pagination" type="button">${i}</button>`,c(e.loaderModal);return s}async function w(t){d=t.target.textContent,e.exercisesGalleryEl.innerHTML="";try{const{results:r,page:s,totalPages:i}=await f(u);m(r),x()}catch(r){console.log(r)}}function P(t){const r=t.target.closest(".exercises-gallery-item");if(r){const s=r.querySelector(".exercises-gallery-title").textContent,i=r.querySelector(".exercises-gallery-filter").textContent;y=s,p=i}h(e.exercisesTitleSpan),e.exercisesGalleryEl.innerHTML="",e.paginationEl.innerHTML="",c(e.loaderModal),L(p,y),x()}function x(){e.exercisesContainerEl.scrollIntoView({behavior:"smooth",block:"start"})}export{x as scrollToExerciseGallery};
//# sourceMappingURL=exercises-2c675108.js.map
