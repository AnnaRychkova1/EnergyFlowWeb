import{a as M}from"./vendor-8cce9181.js";import{refs as e}from"./refs-20f87826.js";import{renderExerciseByFilterName as L}from"./exercises-details-13d8c084.js";import{show as c,hide as h,showLoader as d,hideLoader as l}from"./visibility-9f0213da.js";import"./isiToast-34d29aba.js";import"./modal-menu-f3d98292.js";const b="https://energyflow.b.goit.study/api";let g="Muscles",o=1,n=0,T=window.innerWidth,x,y;const u={filter:g,page:o,limit:n};e.exercisesBtnEl.addEventListener("click",w);e.exercisesGalleryEl.addEventListener("click",P);e.paginationEl.addEventListener("click",H);T<768?n=8:n=12;async function f(){d(e.loaderModal);try{return(await M.get(`${b}/filters`,{params:{filter:g,page:o,limit:n}})).data}catch(t){console.log(t)}}async function B(){try{const{results:t,page:r,totalPages:s}=await f(u);t&&t.length>0?(m(t),e.paginationEl.innerHTML=E(r,s),l(e.loaderModal)):console.error("No results found for this filter")}catch(t){console.log("Error fetching images:",t)}}B();async function w(t){t.preventDefault(),c(e.subexercisesFilteredCards),h(e.exercisesTitleSpan),e.exercisesSubtitle.innerHTML="",e.subexercisesFilteredCards.innerHTML="";const r=t.target.dataset.filter;if(e.exercisesGalleryEl.innerHTML="",g=r,o=1,d(e.loaderModal),t.target!==t.currentTarget)try{const{results:s,page:i,totalPages:a}=await f(u);m(s),l(e.loaderModal),r!=="Body parts"&&e.musclesBtnEl.classList.add("btn-item-active"),r!=="Equipment"&&e.musclesBtnEl.classList.add("btn-item-active"),r!=="Muscles"&&e.musclesBtnEl.classList.remove("btn-item-active"),a>1?e.paginationEl.innerHTML=E(i,a):e.paginationEl.innerHTML="",p()}catch(s){console.log(s)}}function m(t){const r=t.map(({name:s,filter:i,imgUrl:a})=>`<li class="exercises-gallery-item" data-filter>
        <img class="exercises-gallery-img" src="${a}" alt="${i}">
        <div class="exercises-gallery-text">
          <h3 class="exercises-gallery-title">${s}</h3>
          <p class="exercises-gallery-filter">${i}</p>
        </div>
        </li>`).join("");e.exercisesGalleryEl.insertAdjacentHTML("beforeend",r),l(e.loaderModal)}function E(t,r){let s="";d(e.loaderModal);for(let i=1;i<=r;i++)s+=`<button class="button-pagination" type="button">${i}</button>`,l(e.loaderModal);return s}async function H(t){o=t.target.textContent,e.exercisesGalleryEl.innerHTML="";try{const{results:r,page:s,totalPages:i}=await f(u);m(r),p()}catch(r){console.log(r)}}function P(t){const r=t.target.closest(".exercises-gallery-item");if(r){const s=r.querySelector(".exercises-gallery-title").textContent,i=r.querySelector(".exercises-gallery-filter").textContent;y=s,x=i}e.exercisesGalleryEl.innerHTML="",e.paginationEl.innerHTML="",c(e.subexercisesFilteredCards),c(e.exercisesTitleSpan),l(e.loaderModal),L(x,y),p()}function p(){e.exercisesContainerEl.scrollIntoView({behavior:"smooth",block:"start"})}export{p as scrollToExerciseGallery};
//# sourceMappingURL=exercises-af70a6ee.js.map
