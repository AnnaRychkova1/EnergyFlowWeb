import{a as v,P as R}from"./vendor-65c0bc71.js";import{refs as r}from"./refs-057c7077.js";import{show as b,showLoader as A,hideLoader as $}from"./visibility-9f0213da.js";import f from"./isiToast-262f9325.js";document.querySelector(".results");const c=document.querySelector(".backdrop"),d=document.querySelector(".modal");document.querySelector(".ex-add-favorite");M();let Q="favorites",x=localStorage.getItem(Q);x?x=JSON.parse(x):x=[];const z=document.querySelector(".ex-add-favorite");z.addEventListener("click",W);const J=document.querySelector(".modal-close-btn");J.addEventListener("click",G);c.addEventListener("click",w);document.addEventListener("keydown",k);async function W(e){const t=e.target.closest(".ex-add-favorite");if(!t)return;const s=t.dataset.id,a=JSON.parse(localStorage.getItem("favorites"))||[];if(a.some(o=>o._id===s)){const o=a.filter(u=>u._id!==s);localStorage.setItem("favorites",JSON.stringify(o)),t.classList.remove("is-favorite"),t.innerHTML=N("add")}else{const o=await T(s);localStorage.setItem("favorites",JSON.stringify([...a,o])),t.classList.add("is-favorite"),t.innerHTML=N("remove")}}function G(){d.classList.add("is-hidden"),c.classList.add("is-hidden"),d.innerHTML="",document.removeEventListener("keydown",k),c.removeEventListener("click",w)}function w(e){e.target.closest(".modal")||(d.classList.add("is-hidden"),c.classList.add("is-hidden"),d.innerHTML="",document.removeEventListener("keydown",k),c.removeEventListener("click",w))}function k(e){e.preventDefault(),e.key==="Escape"&&(d.classList.add("is-hidden"),c.classList.add("is-hidden"),d.innerHTML="",document.removeEventListener("keydown",k),c.removeEventListener("click",w))}async function T(e){try{const t="https://energyflow.b.goit.study/api",s="exercises",{data:a}=await v.get(`${t}/${s}/${e}`);return a}catch(t){console.error(t)}}function N(e="add"){return e==="add"?`Add to favorites
        <svg class="icon-heart" width="18" height="18">
          <use href="${icons}#icon-heart"></use>
        </svg>`:`Remove from
        <svg class="icon-heart" width="18" height="18">
          <use href="${heartIcon}#icon-heart"></use>
        </svg>`}async function M(){try{const e=await T(L);U(e)}catch(e){console.error(e.message)}}function U(e){const t=e.map(({_id:s,bodyPart:a,equipment:i,gifUrl:o,name:u,target:l,description:m,rating:g,burnedCalories:P,time:ue,popularity:D})=>`<div class="modal">
      <button class="modal-close-btn">
        <svg
          class="modal-close-icon"
          width="24"
          height="24"
          aria-label="close icon"
        >
          <use
            class="ex-close-btn-icon-use"
            href="../img/icons/all icons/x.svg"
          ></use>
        </svg>
      </button>
      <div class="exercise-gif">
        <img
          src="${o}"
          class="gif-ex"
          width="295"
          height="258"
          alt="show exercise"
        />
      </div>
      <div class="ex-content-container">
        <h2 class="exercise-name">${u}</h2>
        <p class="ex-current-rating">${g}</p>
        <ul class="exercise-stars-list">
          ${K(g)}
        </ul>

        <div class="exercise-information">
          <div class="ex-block">
            <span class="exercise-value">Targer</span>
            <span class="exercise-label ex-target">${l}</span>
          </div>
          <div class="ex-block">
            <span class="exercise-value">Body part</span>
            <span class="exercise-label ex-body-part">${a}</span>
          </div>
          <div class="ex-block">
            <span class="exercise-value">Equipment</span>
            <span class="exercise-label ex-equipment">${i}</span>
          </div>
          <div class="ex-block">
            <span class="exercise-value">Popular</span>
            <span class="exercise-label ex-popular">${D}</span>
          </div>
          <div class="ex-block">
            <span class="exercise-value">Burned calories</span>
            <span class="exercise-label ex-burned-calories">${P}/3 min</span>
          </div>

          <p class="exercise-description">
            ${m}
          </p>

          <div class="ex-add-btn">
            <button class="add-btn-icon">
              Add to favorites
              <svg
                class="heart-svg"
                width="18"
                height="18"
                aria-label="favorites icon"
              >
                <use href="../img/icons/all icons/heart.svg"></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>`).join("");d.innerHTML=t}function K(e){const t='<svg class="ex-rate-icon" width="18" height="18" aria-label="rating icon"><use href="../img/icons/all_icons/Star 1.svg"></use></svg>',s='<svg class="ex-rate-icon" width="18" height="18" aria-label="rating icon"><use href="../img/icons/all_icons/Star 2.svg"></use></svg>',a=t.repeat(e),i=s.repeat(5-e);return a+i}const ve=Object.freeze(Object.defineProperty({__proto__:null,getCardInfo:T,renderCard:M},Symbol.toStringTag,{value:"Module"}));r.searchForm.addEventListener("submit",Y);const V=document.getElementById("pagination-container");V.addEventListener("click",ee);const E="bodypart",B="waist";let L;const n={filter:B,keyword:"",page:1,limit:9,totalItems:0};r.exercisesHeader.textContent=`/${B}`;function X(e){L=e.currentTarget.dataset.id,console.log(L),b(r.backdrop),M()}_();async function _(){if(r.resultContainer.innerHTML="",b(r.searchForm),A(r.loaderModal),n.page=1,!n.filter){f.noResults(),b(r.textResult),$(r.loaderModal);return}try{const{results:e,totalPages:t}=await F(n);if(console.log(e),console.log(t),!e||t===0){f.noResults(),b(r.textResult),$(r.loaderModal);return}if(t>1){const s=n.limit*t;console.log(s),Z(s)}else f.endOfSearch();q(e,r.resultContainer)}catch(e){console.error("Error fetching images:",e),f.apiIsiToastError()}finally{$(r.loaderModal)}}async function Y(e){e.preventDefault(),r.resultContainer.innerHTML="",n.page=1;const t=e.currentTarget;if(n.keyword=t.elements.query.value.trim(),console.log(n.keyword),!n.keyword){f.noQuery();return}try{console.log(n);const{results:s,totalPages:a}=await F(n);console.log(s);let i;E==="bodypart"&&(i="bodyPart"),E==="muscles"||(i="equipment"),E==="bodypart"&&(i="bodyPart");const o=s.map(l=>l[i]);console.log(o),console.log(((l,m)=>l.filter(g=>g.name.includes(m)))(s,n.keyword)),q(s,r.resultContainer)}catch(s){console.error("Error fetching images:",s),f.apiIsiToastError()}finally{r.searchForm.reset()}}function q(e,t){const s=e.map(({_id:i,rating:o,name:u,burnedCalories:l,time:m,bodyPart:g,target:P})=>`<li class="filtered-card-item">
        <div class="card-box-workout">
          <div class="card-box-info">
            <div class="filtered-workout">Workout</div>
            <div class="card-box-rating">
              <p class="filtered-rating">${Math.round(o)}</p>
              <img class="filteered-star" href="#" alt="star" height="35"></img>
            </div>
          </div>
          <button type="submit" data-id=${i} class="to-favorites-start">Start</button><a/>
        </div>
        <div class="card-box-title">
          <img class="filteered-athlete" href="#" alt="athlete" height="35"></img>
          <h3 class="filteered-title">${u}</h3>
        </div>
        <ul class="filtered-description">
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Burned calories: <spam class="filtered-descr-value">${l} / ${m} min</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Body part: <spam class="filtered-descr-value">${g}</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Target: <spam class="filtered-descr-value">${P}</spam></p>
          </li>
        </ul>  
  </li>
  `).join("");t.insertAdjacentHTML("beforeend",s),document.querySelector(".to-favorites-start").addEventListener("click",X)}//! Pagination
function Z(e,t){const s=document.getElementById("pagination-container");e>1?new R(s,{totalItems:t,itemsPerPage:1,visiblePages:3,page:1,centerAlign:!0,template:{page:'<a class="tui-pagination-btn">{{page}}</a>',currentPage:'<strong class="tui-pagination-btn tui-pagination-active">{{page}}</strong>',moveButton:'<a class="tui-pagination-btn tui-pagination-control"></a>',disabledMoveButton:'<a class="tui-pagination-btn tui-pagination-control disabled"></a>',moreButton:'<a class="tui-pagination-btn tui-pagination-ellipsis" aria-label="More"></a>'}}):s.innerHTML=""}async function ee(e){if(e.target.classList.contains("tui-pagination-btn")){const t=parseInt(e.target.textContent);console.log(t),n.page=t,await _()}}const ye=Object.freeze(Object.defineProperty({__proto__:null,get exerciseId(){return L},exercisesParamFilter:E,exercisesParamName:B,renderExerciseByFilter:_},Symbol.toStringTag,{value:"Module"}));let y="Muscles",h=1,p=0,H=window.innerWidth,te,se;const I={filter:y,page:h,limit:p};r.exercisesBtnEl.addEventListener("click",re);r.paginationEl.addEventListener("click",ie);H<=375?p=8:(H<=768,p=12);async function ae(){try{const{results:e,page:t,totalPages:s}=await S(I);e&&e.length>0?(O(e),r.paginationEl.innerHTML=j(t,s)):console.error("No results found for this filter")}catch(e){console.log("Error fetching images:",e)}}ae();async function re(e){e.preventDefault();const t=e.target.dataset.filter;if(r.exercisesGalleryEl.innerHTML="",console.log(t),y=t,h=1,e.target!==e.currentTarget)try{const{results:s,page:a,totalPages:i}=await S(I);O(s),i>1?r.paginationEl.innerHTML=j(a,i):r.paginationEl.innerHTML=""}catch(s){console.log(s)}}function O(e){const t=e.map(({name:s,filter:a,imgUrl:i})=>`<li class="exercises-gallery-item" data-filter>
        <img class="exercises-gallery-img" src="${i}" alt="${a}">
        <div class="exercises-gallery-text">
          <h3 class="exercises-gallery-title">${s}</h3>
          <p class="exercises-gallery-filter">${a}</p>
        </div>
        </li>`).join("");r.exercisesGalleryEl.insertAdjacentHTML("beforeend",t)}function j(e,t){let s="";for(let a=1;a<=t;a++)s+=`<button class="button-pagination" type="button">${a}</button>`;return s}async function ie(e){h=e.target.textContent,r.exercisesGalleryEl.innerHTML="";try{const{results:t,page:s,totalPages:a}=await S(I),i=t[0].filter;if(s===a)return;O(t)}catch(t){console.log(t)}}const he=Object.freeze(Object.defineProperty({__proto__:null,get currentLimit(){return p},get currentPage(){return h},exercisesParamFilter:te,exercisesParamName:se,get filterDefault(){return y}},Symbol.toStringTag,{value:"Module"})),C="https://energyflow.b.goit.study/api",ne="quote",oe="exercises",le="filters";async function ce(){try{return(await v.get(`${C}/${ne}`)).data}catch(e){throw console.log(e),e}}async function F({keyword:e,page:t=1,limit:s}){return(await v.get("https://energyflow.b.goit.study/api/exercises",{params:{[y]:nameExercise,keyword:e,limit:s,page:t}})).data}async function S({results:e,page:t,totalPages:s}){try{return(await v.get(`${C}/${le}`,{params:{filter:y,page:h,limit:p}})).data}catch(a){console.log(a)}}async function de(e){try{const{data:t}=await v.get(`${C}/${oe}/${e}`);return t}catch(t){console.error(t)}}const xe=Object.freeze(Object.defineProperty({__proto__:null,fetchQuoteFromServer:ce,getExercisesByFilter:S,searchExerciseByFilters:F,searchExerciseByID:de},Symbol.toStringTag,{value:"Module"}));export{he as a,xe as b,ye as e,ce as f,ve as m,de as s};
//# sourceMappingURL=mainApi-a298197f.js.map
