import{a as M}from"./vendor-8cce9181.js";import{refs as e}from"./refs-00d5446d.js";import{renderExerciseByFilterName as L}from"./exercises-details-181d1aff.js";import{showLoader as u,hide as a,hideLoader as c,show as h}from"./visibility-9f0213da.js";import{scrollTo as y}from"./scrollTo-6516673a.js";import"./modal-menu-14c575fc.js";const T="https://energyflow.b.goit.study/api";let n="Muscles",d=1,o=0,b=window.innerWidth,x,p;const g={filter:n,page:d,limit:o};e.exercisesBtnEl.addEventListener("click",H);e.exercisesGalleryEl.addEventListener("click",w);e.paginationEl.addEventListener("click",P);b<1440?o=8:o=12;async function f(){u(e.loaderModal);try{return(await M.get(`${T}/filters`,{params:{filter:n,page:d,limit:o}})).data}catch(t){console.log(t)}}async function B(){try{const{results:t,page:r,totalPages:s}=await f(g);t&&t.length>0?(m(t),e.paginationEl.innerHTML="",e.paginationEl.innerHTML=E(r,s)):console.error("No results found for this filter")}catch(t){console.log("Error fetching images:",t)}}B();async function H(t){t.preventDefault();const r=t.target.dataset.filter;if(n=r,d=1,u(e.loaderModal),t.target!==t.currentTarget){a(e.subexercisesFilteredCards),a(e.subexercisesSearchForm),a(e.exercisesTitleSpan),a(e.subexercisesTextNoFound),e.exercisesGalleryEl.innerHTML="",e.exercisesSubtitle.innerHTML="",e.subexercisesFilteredCards.innerHTML="";try{const{results:s,page:i,totalPages:l}=await f(g);m(s),c(e.loaderModal),r!=="Body parts"&&e.musclesBtnEl.classList.add("btn-item-active"),r!=="Equipment"&&e.musclesBtnEl.classList.add("btn-item-active"),r!=="Muscles"&&e.musclesBtnEl.classList.remove("btn-item-active"),l>1?e.paginationEl.innerHTML=E(i,l):e.paginationEl.innerHTML="",y(e.exercisesContainerEl)}catch(s){console.log(s)}finally{n=""}}}function m(t){const r=t.map(({name:s,filter:i,imgUrl:l})=>`<li class="exercises-gallery-item" data-filter>
        <img class="exercises-gallery-img" src="${l}" alt="${i}">
        <div class="exercises-gallery-text">
          <h3 class="exercises-gallery-title">${s}</h3>
          <p class="exercises-gallery-filter">${i}</p>
        </div>
        </li>`).join("");e.exercisesGalleryEl.insertAdjacentHTML("beforeend",r),c(e.loaderModal)}function E(t,r){let s="";u(e.loaderModal);for(let i=1;i<=r;i++)s+=`<button class="button-pagination" type="button">${i}</button>`,c(e.loaderModal);return s}async function P(t){d=t.target.textContent,e.exercisesGalleryEl.innerHTML="";try{const{results:r,page:s,totalPages:i}=await f(g);m(r),y(e.exercisesContainerEl)}catch(r){console.log(r)}}function w(t){const r=t.target.closest(".exercises-gallery-item");if(r){const s=r.querySelector(".exercises-gallery-title").textContent,i=r.querySelector(".exercises-gallery-filter").textContent;p=s,x=i}h(e.exercisesTitleSpan),e.exercisesGalleryEl.innerHTML="",e.paginationEl.innerHTML="",c(e.loaderModal),g.filter="",L(x,p)}
//# sourceMappingURL=exercises-fe8bf186.js.map
