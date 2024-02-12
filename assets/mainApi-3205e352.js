import{a as b,P as C}from"./vendor-65c0bc71.js";import{show as h,showLoader as O,hideLoader as S}from"./visibility-9f0213da.js";import{refs as a}from"./refs-980ba5a5.js";import p from"./isiToast-262f9325.js";document.querySelector(".results");const l=document.querySelector(".backdrop"),d=document.querySelector(".modal");document.querySelector(".ex-add-favorite");$();let F="favorites",v=localStorage.getItem(F);v?v=JSON.parse(v):v=[];const q=document.querySelector(".ex-add-favorite");q.addEventListener("click",H);const N=document.querySelector(".modal-close-btn");N.addEventListener("click",j);l.addEventListener("click",x);document.addEventListener("keydown",w);async function H(e){const t=e.target.closest(".ex-add-favorite");if(!t)return;const s=t.dataset.id,r=JSON.parse(localStorage.getItem("favorites"))||[];if(r.some(n=>n._id===s)){const n=r.filter(u=>u._id!==s);localStorage.setItem("favorites",JSON.stringify(n)),t.classList.remove("is-favorite"),t.innerHTML=M("add")}else{const n=await E(s);localStorage.setItem("favorites",JSON.stringify([...r,n])),t.classList.add("is-favorite"),t.innerHTML=M("remove")}}function j(){d.classList.add("is-hidden"),l.classList.add("is-hidden"),d.innerHTML="",document.removeEventListener("keydown",w),l.removeEventListener("click",x)}function x(e){e.target.closest(".modal")||(d.classList.add("is-hidden"),l.classList.add("is-hidden"),d.innerHTML="",document.removeEventListener("keydown",w),l.removeEventListener("click",x))}function w(e){e.preventDefault(),e.key==="Escape"&&(d.classList.add("is-hidden"),l.classList.add("is-hidden"),d.innerHTML="",document.removeEventListener("keydown",w),l.removeEventListener("click",x))}async function E(e){try{const t="https://energyflow.b.goit.study/api",s="exercises",{data:r}=await b.get(`${t}/${s}/${e}`);return r}catch(t){console.error(t)}}function M(e="add"){return e==="add"?`Add to favorites
        <svg class="icon-heart" width="18" height="18">
          <use href="${icons}#icon-heart"></use>
        </svg>`:`Remove from
        <svg class="icon-heart" width="18" height="18">
          <use href="${heartIcon}#icon-heart"></use>
        </svg>`}async function $(){try{const e=await E(y);R(e)}catch(e){console.error(e.message)}}function R(e){const t=e.map(({_id:s,bodyPart:r,equipment:o,gifUrl:n,name:u,target:c,description:m,rating:g,burnedCalories:L,time:X,popularity:_})=>`<div class="modal">
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
          src="${n}"
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
          ${A(g)}
        </ul>

        <div class="exercise-information">
          <div class="ex-block">
            <span class="exercise-value">Targer</span>
            <span class="exercise-label ex-target">${c}</span>
          </div>
          <div class="ex-block">
            <span class="exercise-value">Body part</span>
            <span class="exercise-label ex-body-part">${r}</span>
          </div>
          <div class="ex-block">
            <span class="exercise-value">Equipment</span>
            <span class="exercise-label ex-equipment">${o}</span>
          </div>
          <div class="ex-block">
            <span class="exercise-value">Popular</span>
            <span class="exercise-label ex-popular">${_}</span>
          </div>
          <div class="ex-block">
            <span class="exercise-value">Burned calories</span>
            <span class="exercise-label ex-burned-calories">${L}/3 min</span>
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
    </div>`).join("");d.innerHTML=t}function A(e){const t='<svg class="ex-rate-icon" width="18" height="18" aria-label="rating icon"><use href="../img/icons/all_icons/Star 1.svg"></use></svg>',s='<svg class="ex-rate-icon" width="18" height="18" aria-label="rating icon"><use href="../img/icons/all_icons/Star 2.svg"></use></svg>',r=t.repeat(e),o=s.repeat(5-e);return r+o}const se=Object.freeze(Object.defineProperty({__proto__:null,getCardInfo:E,renderCard:$},Symbol.toStringTag,{value:"Module"}));a.searchForm.addEventListener("submit",J);const D=document.getElementById("pagination-container");D.addEventListener("click",U);const f="bodypart",k="waist";let y;const i={filter:k,keyword:"",page:1,limit:9,totalItems:0};a.exercisesHeader.textContent=`/${k}`;function Q(e){y=e.currentTarget.dataset.id,console.log(y),h(a.backdrop),$()}T();async function T(){if(a.resultContainer.innerHTML="",h(a.searchForm),O(a.loaderModal),i.page=1,!i.filter){p.noResults(),h(a.textResult),S(a.loaderModal);return}try{const{results:e,totalPages:t}=await I(i);if(console.log(e),console.log(t),!e||t===0){p.noResults(),h(a.textResult),S(a.loaderModal);return}if(t>1){const s=i.limit*t;console.log(s),z(s)}else p.endOfSearch();P(e,a.resultContainer)}catch(e){console.error("Error fetching images:",e),p.apiIsiToastError()}finally{S(a.loaderModal)}}async function J(e){e.preventDefault(),a.resultContainer.innerHTML="",i.page=1;const t=e.currentTarget;if(i.keyword=t.elements.query.value.trim(),console.log(i.keyword),!i.keyword){p.noQuery();return}try{console.log(i);const{results:s,totalPages:r}=await I(i);console.log(s);let o;f==="bodypart"&&(o="bodyPart"),f==="muscles"||(o="equipment"),f==="bodypart"&&(o="bodyPart");const n=s.map(c=>c[o]);console.log(n),console.log(((c,m)=>c.filter(g=>g.name.includes(m)))(s,i.keyword)),P(s,a.resultContainer)}catch(s){console.error("Error fetching images:",s),p.apiIsiToastError()}finally{a.searchForm.reset()}}function P(e,t){const s=e.map(({_id:o,rating:n,name:u,burnedCalories:c,time:m,bodyPart:g,target:L})=>`<li class="filtered-card-item">
        <div class="card-box-workout">
          <div class="card-box-info">
            <div class="filtered-workout">Workout</div>
            <div class="card-box-rating">
              <p class="filtered-rating">${Math.round(n)}</p>
              <img class="filteered-star" href="#" alt="star" height="35"></img>
            </div>
          </div>
          <button type="submit" data-id=${o} class="to-favorites-start">Start</button><a/>
        </div>
        <div class="card-box-title">
          <img class="filteered-athlete" href="#" alt="athlete" height="35"></img>
          <h3 class="filteered-title">${u}</h3>
        </div>
        <ul class="filtered-description">
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Burned calories: <spam class="filtered-descr-value">${c} / ${m} min</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Body part: <spam class="filtered-descr-value">${g}</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Target: <spam class="filtered-descr-value">${L}</spam></p>
          </li>
        </ul>  
  </li>
  `).join("");t.insertAdjacentHTML("beforeend",s),document.querySelector(".to-favorites-start").addEventListener("click",Q)}//! Pagination
function z(e,t){const s=document.getElementById("pagination-container");e>1?new C(s,{totalItems:t,itemsPerPage:1,visiblePages:3,page:1,centerAlign:!0,template:{page:'<a class="tui-pagination-btn">{{page}}</a>',currentPage:'<strong class="tui-pagination-btn tui-pagination-active">{{page}}</strong>',moveButton:'<a class="tui-pagination-btn tui-pagination-control"></a>',disabledMoveButton:'<a class="tui-pagination-btn tui-pagination-control disabled"></a>',moreButton:'<a class="tui-pagination-btn tui-pagination-ellipsis" aria-label="More"></a>'}}):s.innerHTML=""}async function U(e){if(e.target.classList.contains("tui-pagination-btn")){const t=parseInt(e.target.textContent);console.log(t),i.page=t,await T()}}const ae=Object.freeze(Object.defineProperty({__proto__:null,get exerciseId(){return y},exercisesParamFilter:f,exercisesParamName:k,renderExerciseByFilter:T},Symbol.toStringTag,{value:"Module"})),B="https://energyflow.b.goit.study/api",W="quote",K="exercises";async function V(){try{return(await b.get(`${B}/${W}`)).data}catch(e){throw console.log(e),e}}async function I({keyword:e,page:t=1,limit:s}){return(await b.get("https://energyflow.b.goit.study/api/exercises",{params:{[f]:k,keyword:e,limit:s,page:t}})).data}async function G(e){try{const{data:t}=await b.get(`${B}/${K}/${e}`);return t}catch(t){console.error(t)}}const re=Object.freeze(Object.defineProperty({__proto__:null,fetchQuoteFromServer:V,searchExerciseByFilters:I,searchExerciseByID:G},Symbol.toStringTag,{value:"Module"}));export{re as a,ae as e,V as f,se as m,G as s};
//# sourceMappingURL=mainApi-3205e352.js.map
