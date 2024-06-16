import{a as L}from"./vendor-fd853f38.js";import{renderExerciseByFilterName as v}from"./exercises-details-88878da2.js";import{refs as e}from"./refs-89afcfb6.js";import{onPaginationClick as b,pagesPagination as g}from"./pagination-bc12a092.js";import{showLoader as E,hideLoader as u,show as x,hide as l}from"./visibility-9f0213da.js";import{scrollTo as h}from"./scrollTo-6516673a.js";import{errorResult as n}from"./iziToast-77b847f7.js";import"./modal-menu-85beae49.js";const B="https://energyflow.b.goit.study/api";let o="Muscles",a=1,c=0,M=window.innerWidth,f,p;const T={filter:o,page:a,limit:c};M<1440?c=8:c=12;e.exercisesBtnEl&&e.exercisesBtnEl.addEventListener("click",H);e.exercisesGalleryEl&&e.exercisesGalleryEl.addEventListener("click",S);e.paginationEl&&e.paginationEl.addEventListener("click",b(m,d,T,e.exercisesGalleryEl,"first-pagination"));P();async function P(){e.paginationEl&&(e.paginationEl.classList.add("first-pagination"),e.paginationEl.classList.remove("second-pagination")),E(e.loaderModal);try{const{results:t,totalPages:i}=await d(a);i>1&&e.paginationEl&&(e.paginationEl.innerHTML=g(a,i)),t&&t.length>0?m(t):n("No results found for this filter")}catch{n("Server Exercises did not responded")}finally{u(e.loaderModal)}}async function H(t){t.preventDefault();const i=t.target.dataset.filter;if(o=i,t.target!==t.currentTarget){x(e.exercisesGalleryEl),l(e.subexercisesFilteredCards),l(e.subexercisesSearchForm),l(e.exercisesTitleSpan),l(e.subexercisesTextNoFound),e.exercisesGalleryEl.innerHTML="",e.exercisesSubtitle.innerHTML="",e.paginationEl.innerHTML="",e.subexercisesFilteredCards.innerHTML="",e.paginationEl.classList.add("first-pagination"),e.paginationEl.classList.remove("second-pagination"),E(e.loaderModal);try{i==="Body parts"&&(e.bodyPartsBtnEl.classList.add("btn-item-active"),e.musclesBtnEl.classList.remove("btn-item-active"),e.equipmentBtnEl.classList.remove("btn-item-active")),i==="Equipment"&&(e.equipmentBtnEl.classList.add("btn-item-active"),e.musclesBtnEl.classList.remove("btn-item-active"),e.bodyPartsBtnEl.classList.remove("btn-item-active")),i==="Muscles"&&(e.musclesBtnEl.classList.add("btn-item-active"),e.equipmentBtnEl.classList.remove("btn-item-active"),e.bodyPartsBtnEl.classList.remove("btn-item-active"));const{results:s,totalPages:r}=await d(a);r>1&&(e.paginationEl.innerHTML=g(a,r)),s&&s.length>0?m(s):n("No results found for this filter"),h(e.exercisesContainerEl)}catch{n("Server Exercises did not responded")}finally{u(e.loaderModal)}}}async function d(t){return(await L.get(`${B}/filters`,{params:{filter:o,page:t,limit:c}})).data}function m(t){const i=t.map(({name:s,filter:r,imgUrl:y})=>`<li class="exercises-gallery-item" data-filter>
        <img class="exercises-gallery-img" src="${y}" alt="${r}">
        <div class="exercises-gallery-text">
          <h3 class="exercises-gallery-title">${s}</h3>
          <p class="exercises-gallery-filter">${r}</p>
        </div>
        </li>`).join("");e.exercisesGalleryEl&&e.exercisesGalleryEl.insertAdjacentHTML("beforeend",i)}function S(t){const i=t.target.closest(".exercises-gallery-item");if(i){const s=i.querySelector(".exercises-gallery-title").textContent,r=i.querySelector(".exercises-gallery-filter").textContent;p=s,f=r}x(e.exercisesTitleSpan),e.exercisesGalleryEl.innerHTML="",e.paginationEl.innerHTML="",v(f,p)}
//# sourceMappingURL=exercises-fac39075.js.map