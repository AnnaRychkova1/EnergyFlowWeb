import{a as L}from"./vendor-8cce9181.js";import{refs as e}from"./refs-00d5446d.js";import{renderExerciseByFilterName as h}from"./exercises-details-1323cf96.js";import{showLoader as m,hideLoader as a,hide as c,show as v}from"./visibility-9f0213da.js";import{scrollTo as b}from"./scrollTo-6516673a.js";import"./modal-menu-14c575fc.js";const B="https://energyflow.b.goit.study/api";let g="Muscles",n=1,d=0,T=window.innerWidth,y,E;const M={filter:g,page:n,limit:d};T<1440?d=8:d=12;e.exercisesBtnEl.addEventListener("click",P);e.exercisesGalleryEl.addEventListener("click",w);e.paginationEl.addEventListener("click",q);H();async function P(t){t.preventDefault(),M.page=1,n=1;const s=t.target.dataset.filter;if(g=s,m(e.loaderModal),t.target===t.currentTarget){a(e.loaderModal);return}c(e.subexercisesFilteredCards),c(e.subexercisesSearchForm),c(e.exercisesTitleSpan),c(e.subexercisesTextNoFound),e.exercisesGalleryEl.innerHTML="",e.exercisesSubtitle.innerHTML="",e.subexercisesFilteredCards.innerHTML="",e.paginationEl.innerHTML="";try{s==="Body parts"&&(e.bodyPartsBtnEl.classList.add("btn-item-active"),e.musclesBtnEl.classList.remove("btn-item-active"),e.equipmentBtnEl.classList.remove("btn-item-active")),s==="Equipment"&&(e.equipmentBtnEl.classList.add("btn-item-active"),e.musclesBtnEl.classList.remove("btn-item-active"),e.bodyPartsBtnEl.classList.remove("btn-item-active")),s==="Muscles"&&(e.musclesBtnEl.classList.add("btn-item-active"),e.equipmentBtnEl.classList.remove("btn-item-active"),e.bodyPartsBtnEl.classList.remove("btn-item-active"));const{results:r,totalPages:i}=await f();i>1&&(e.paginationEl.innerHTML=u(n,i)),r&&r.length>0?(p(r),e.paginationEl.innerHTML=u(n,i),a(e.loaderModal)):console.error("No results found for this filter"),b(e.exercisesContainerEl)}catch(r){console.log(r),a(e.loaderModal)}}async function H(){try{m(e.loaderModal);const{results:t,totalPages:s}=await f();t&&t.length>0?(p(t),a(e.loaderModal),s>1&&(e.paginationEl.innerHTML=u(n,s))):console.error("No results found for this filter")}catch(t){console.log("Error fetching images:",t),a(e.loaderModal)}}function w(t){const s=t.target.closest(".exercises-gallery-item");if(s){const r=s.querySelector(".exercises-gallery-title").textContent,i=s.querySelector(".exercises-gallery-filter").textContent;E=r,y=i}v(e.exercisesTitleSpan),e.exercisesGalleryEl.innerHTML="",e.paginationEl.innerHTML="",a(e.loaderModal),h(y,E)}async function f(){m(e.loaderModal);try{const t=await L.get(`${B}/filters`,{params:{filter:g,page:n,limit:d}});return a(e.loaderModal),t.data}catch(t){console.log(t),a(e.loaderModal)}}function p(t){const s=t.map(({name:r,filter:i,imgUrl:l})=>`<li class="exercises-gallery-item" data-filter>
        <img class="exercises-gallery-img" src="${l}" alt="${i}">
        <div class="exercises-gallery-text">
          <h3 class="exercises-gallery-title">${r}</h3>
          <p class="exercises-gallery-filter">${i}</p>
        </div>
        </li>`).join("");e.exercisesGalleryEl.insertAdjacentHTML("beforeend",s),a(e.loaderModal)}function u(t,s){let r="",l=Math.max(1,t-1),x=Math.min(s,l+3-1);l>1&&(r+='<button class="button-pagination prev" type="button">+</button>');for(let o=l;o<=x;o++)r+=`<button class="button-pagination ${o===t?"active":""}" type="button">${o}</button>`;return x<s&&(r+='<button class="button-pagination next" type="button">+</button>'),r}async function q(t){const s=t.target;if(s.classList.contains("prev")||s.classList.contains("next")){const r=e.paginationEl.querySelector(".button-pagination.active"),i=parseInt(r.textContent,10);n=s.classList.contains("prev")?i-1:i+1}else n=parseInt(t.target.textContent,10);e.exercisesGalleryEl.innerHTML="";try{m(e.loaderModal);const{results:r,totalPages:i}=await f();M.page=n,p(r),a(e.loaderModal),e.paginationEl.innerHTML=u(n,i),b(e.exercisesContainerEl)}catch(r){console.log(r),a(e.loaderModal)}}
//# sourceMappingURL=exercises-797d66a5.js.map
