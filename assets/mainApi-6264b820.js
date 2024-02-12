import{a as h,P as Q}from"./vendor-65c0bc71.js";import{show as E,showLoader as z,hideLoader as T}from"./visibility-9f0213da.js";import{refs as r}from"./refs-8a8ab5b0.js";import f from"./isiToast-262f9325.js";document.querySelector(".results");const c=document.querySelector(".backdrop"),d=document.querySelector(".modal");document.querySelector(".ex-add-favorite");const N=`
// <svg class="icon-heart" width="18" height="18">
//     <use href="${symbol-defs}#icon-heart"></use>
// </svg>`;B();let J="favorites",b=localStorage.getItem(J);b?b=JSON.parse(b):b=[];const W=document.querySelector(".ex-add-favorite");W.addEventListener("click",U);const G=document.querySelector(".modal-close-btn");G.addEventListener("click",K);c.addEventListener("click",w);document.addEventListener("keydown",k);async function U(e){const t=e.target.closest(".ex-add-favorite");if(!t)return;const s=t.dataset.id,a=JSON.parse(localStorage.getItem("favorites"))||[];if(a.some(o=>o._id===s)){const o=a.filter(u=>u._id!==s);localStorage.setItem("favorites",JSON.stringify(o)),t.classList.remove("is-favorite"),t.innerHTML=H("add")}else{const o=await M(s);localStorage.setItem("favorites",JSON.stringify([...a,o])),t.classList.add("is-favorite"),t.innerHTML=H("remove")}}function K(){d.classList.add("is-hidden"),c.classList.add("is-hidden"),d.innerHTML="",document.removeEventListener("keydown",k),c.removeEventListener("click",w)}function w(e){e.target.closest(".modal")||(d.classList.add("is-hidden"),c.classList.add("is-hidden"),d.innerHTML="",document.removeEventListener("keydown",k),c.removeEventListener("click",w))}function k(e){e.preventDefault(),e.key==="Escape"&&(d.classList.add("is-hidden"),c.classList.add("is-hidden"),d.innerHTML="",document.removeEventListener("keydown",k),c.removeEventListener("click",w))}async function M(e){try{const t="https://energyflow.b.goit.study/api",s="exercises",{data:a}=await h.get(`${t}/${s}/${e}`);return a}catch(t){console.error(t)}}function H(e="add"){return e==="add"?`Add to favorites
        <svg class="icon-heart" width="18" height="18">
          <use href="${N}#icon-heart"></use>
        </svg>`:`Remove from
        <svg class="icon-heart" width="18" height="18">
          <use href="${N}#icon-heart"></use>
        </svg>`}async function B(){try{const e=await M(v);V(e)}catch(e){console.error(e.message)}}function V(e){const t=e.map(({_id:s,bodyPart:a,equipment:i,gifUrl:o,name:u,target:l,description:m,rating:g,burnedCalories:P,time:ge,popularity:A})=>`<div class="modal">
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
          ${X(g)}
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
            <span class="exercise-label ex-popular">${A}</span>
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
    </div>`).join("");d.innerHTML=t}function X(e){const t='<svg class="ex-rate-icon" width="18" height="18" aria-label="rating icon"><use href="../img/icons/all_icons/Star 1.svg"></use></svg>',s='<svg class="ex-rate-icon" width="18" height="18" aria-label="rating icon"><use href="../img/icons/all_icons/Star 2.svg"></use></svg>',a=t.repeat(e),i=s.repeat(5-e);return a+i}const he=Object.freeze(Object.defineProperty({__proto__:null,getCardInfo:M,renderCard:B},Symbol.toStringTag,{value:"Module"}));r.searchForm.addEventListener("submit",ee);const Y=document.getElementById("pagination-container");Y.addEventListener("click",se);const L="bodypart",_="waist";let v;const n={filter:_,keyword:"",page:1,limit:9,totalItems:0};r.exercisesHeader.textContent=`/${_}`;function Z(e){v=e.currentTarget.dataset.id,console.log(v),E(r.backdrop),B()}I();async function I(){if(r.resultContainer.innerHTML="",E(r.searchForm),z(r.loaderModal),n.page=1,!n.filter){f.noResults(),E(r.textResult),T(r.loaderModal);return}try{const{results:e,totalPages:t}=await F(n);if(console.log(e),console.log(t),!e||t===0){f.noResults(),E(r.textResult),T(r.loaderModal);return}if(t>1){const s=n.limit*t;console.log(s),te(s)}else f.endOfSearch();j(e,r.resultContainer)}catch(e){console.error("Error fetching images:",e),f.apiIsiToastError()}finally{T(r.loaderModal)}}async function ee(e){e.preventDefault(),r.resultContainer.innerHTML="",n.page=1;const t=e.currentTarget;if(n.keyword=t.elements.query.value.trim(),console.log(n.keyword),!n.keyword){f.noQuery();return}try{console.log(n);const{results:s,totalPages:a}=await F(n);console.log(s);let i;L==="bodypart"&&(i="bodyPart"),L==="muscles"||(i="equipment"),L==="bodypart"&&(i="bodyPart");const o=s.map(l=>l[i]);console.log(o),console.log(((l,m)=>l.filter(g=>g.name.includes(m)))(s,n.keyword)),j(s,r.resultContainer)}catch(s){console.error("Error fetching images:",s),f.apiIsiToastError()}finally{r.searchForm.reset()}}function j(e,t){const s=e.map(({_id:i,rating:o,name:u,burnedCalories:l,time:m,bodyPart:g,target:P})=>`<li class="filtered-card-item">
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
  `).join("");t.insertAdjacentHTML("beforeend",s),document.querySelector(".to-favorites-start").addEventListener("click",Z)}//! Pagination
function te(e,t){const s=document.getElementById("pagination-container");e>1?new Q(s,{totalItems:t,itemsPerPage:1,visiblePages:3,page:1,centerAlign:!0,template:{page:'<a class="tui-pagination-btn">{{page}}</a>',currentPage:'<strong class="tui-pagination-btn tui-pagination-active">{{page}}</strong>',moveButton:'<a class="tui-pagination-btn tui-pagination-control"></a>',disabledMoveButton:'<a class="tui-pagination-btn tui-pagination-control disabled"></a>',moreButton:'<a class="tui-pagination-btn tui-pagination-ellipsis" aria-label="More"></a>'}}):s.innerHTML=""}async function se(e){if(e.target.classList.contains("tui-pagination-btn")){const t=parseInt(e.target.textContent);console.log(t),n.page=t,await I()}}const ye=Object.freeze(Object.defineProperty({__proto__:null,get exerciseId(){return v},exercisesParamFilter:L,exercisesParamName:_,renderExerciseByFilter:I},Symbol.toStringTag,{value:"Module"}));let y="Muscles",x=1,p=0,q=window.innerWidth,ae,re;const O={filter:y,page:x,limit:p};r.exercisesBtnEl.addEventListener("click",ne);r.paginationEl.addEventListener("click",oe);q<=375?p=8:(q<=768,p=12);async function ie(){try{const{results:e,page:t,totalPages:s}=await S(O);e&&e.length>0?(C(e),r.paginationEl.innerHTML=D(t,s)):console.error("No results found for this filter")}catch(e){console.log("Error fetching images:",e)}}ie();async function ne(e){e.preventDefault();const t=e.target.dataset.filter;if(r.exercisesGalleryEl.innerHTML="",console.log(t),y=t,x=1,e.target!==e.currentTarget)try{const{results:s,page:a,totalPages:i}=await S(O);C(s),i>1?r.paginationEl.innerHTML=D(a,i):r.paginationEl.innerHTML=""}catch(s){console.log(s)}}function C(e){const t=e.map(({name:s,filter:a,imgUrl:i})=>`<li class="exercises-gallery-item" data-filter>
        <img class="exercises-gallery-img" src="${i}" alt="${a}">
        <div class="exercises-gallery-text">
          <h3 class="exercises-gallery-title">${s}</h3>
          <p class="exercises-gallery-filter">${a}</p>
        </div>
        </li>`).join("");r.exercisesGalleryEl.insertAdjacentHTML("beforeend",t)}function D(e,t){let s="";for(let a=1;a<=t;a++)s+=`<button class="button-pagination" type="button">${a}</button>`;return s}async function oe(e){x=e.target.textContent,r.exercisesGalleryEl.innerHTML="";try{const{results:t,page:s,totalPages:a}=await S(O),i=t[0].filter;if(s===a)return;C(t)}catch(t){console.log(t)}}const xe=Object.freeze(Object.defineProperty({__proto__:null,get currentLimit(){return p},get currentPage(){return x},exercisesParamFilter:ae,exercisesParamName:re,get filterDefault(){return y}},Symbol.toStringTag,{value:"Module"})),$="https://energyflow.b.goit.study/api",le="quote",R="exercises",ce="filters";async function de(){try{return(await h.get(`${$}/${le}`)).data}catch(e){throw console.log(e),e}}async function F({keyword:e,page:t=1,limit:s}){return(await h.get(`${$}/${R}`,{params:{[y]:nameExercise,keyword:e,limit:s,page:t}})).data}async function S(){try{return(await h.get(`${$}/${ce}`,{params:{filter:y,page:x,limit:p}})).data}catch(e){console.log(e)}}async function ue(e){try{const{data:t}=await h.get(`${$}/${R}/${v}`);return t}catch(t){console.error(t)}}const be=Object.freeze(Object.defineProperty({__proto__:null,fetchQuoteFromServer:de,getExercisesByFilter:S,searchExerciseByFilters:F,searchExerciseByID:ue},Symbol.toStringTag,{value:"Module"}));export{xe as a,be as b,ye as e,de as f,he as m};
//# sourceMappingURL=mainApi-6264b820.js.map
