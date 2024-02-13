import{exerciseId as y}from"./exercises-details-d825b7ef.js";import{a as L}from"./vendor-65c0bc71.js";import"./visibility-9f0213da.js";import"./refs-326154d5.js";import"./isiToast-262f9325.js";document.querySelector(".results");const n=document.querySelector(".backdrop"),r=document.querySelector(".modal");document.querySelector(".ex-add-favorite");const m=`
// <svg class="icon-heart" width="18" height="18">
//     <use href="${symbol-defs}#icon-heart"></use>
// </svg>`;I();let k="favorites",o=localStorage.getItem(k);o?o=JSON.parse(o):o=[];const S=document.querySelector(".ex-add-favorite");S.addEventListener("click",$);const w=document.querySelector(".modal-close-btn");w.addEventListener("click",E);n.addEventListener("click",l);document.addEventListener("keydown",d);async function $(e){const s=e.target.closest(".ex-add-favorite");if(!s)return;const a=s.dataset.id,t=JSON.parse(localStorage.getItem("favorites"))||[];if(t.some(i=>i._id===a)){const i=t.filter(v=>v._id!==a);localStorage.setItem("favorites",JSON.stringify(i)),s.classList.remove("is-favorite"),s.innerHTML=g("add")}else{const i=await p(a);localStorage.setItem("favorites",JSON.stringify([...t,i])),s.classList.add("is-favorite"),s.innerHTML=g("remove")}}function E(){r.classList.add("is-hidden"),n.classList.add("is-hidden"),r.innerHTML="",document.removeEventListener("keydown",d),n.removeEventListener("click",l)}function l(e){e.target.closest(".modal")||(r.classList.add("is-hidden"),n.classList.add("is-hidden"),r.innerHTML="",document.removeEventListener("keydown",d),n.removeEventListener("click",l))}function d(e){e.preventDefault(),e.key==="Escape"&&(r.classList.add("is-hidden"),n.classList.add("is-hidden"),r.innerHTML="",document.removeEventListener("keydown",d),n.removeEventListener("click",l))}async function p(e){try{const s="https://energyflow.b.goit.study/api",a="exercises",{data:t}=await L.get(`${s}/${a}/${e}`);return t}catch(s){console.error(s)}}function g(e="add"){return e==="add"?`Add to favorites
        <svg class="icon-heart" width="18" height="18">
          <use href="${m}#icon-heart"></use>
        </svg>`:`Remove from
        <svg class="icon-heart" width="18" height="18">
          <use href="${m}#icon-heart"></use>
        </svg>`}async function I(){try{const e=await p(y);T(e)}catch(e){console.error(e.message)}}function T(e){const s=e.map(({_id:a,bodyPart:t,equipment:c,gifUrl:i,name:v,target:h,description:f,rating:u,burnedCalories:x,time:M,popularity:b})=>`<div class="modal">
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
          src="${i}"
          class="gif-ex"
          width="295"
          height="258"
          alt="show exercise"
        />
      </div>
      <div class="ex-content-container">
        <h2 class="exercise-name">${v}</h2>
        <p class="ex-current-rating">${u}</p>
        <ul class="exercise-stars-list">
          ${q(u)}
        </ul>

        <div class="exercise-information">
          <div class="ex-block">
            <span class="exercise-value">Targer</span>
            <span class="exercise-label ex-target">${h}</span>
          </div>
          <div class="ex-block">
            <span class="exercise-value">Body part</span>
            <span class="exercise-label ex-body-part">${t}</span>
          </div>
          <div class="ex-block">
            <span class="exercise-value">Equipment</span>
            <span class="exercise-label ex-equipment">${c}</span>
          </div>
          <div class="ex-block">
            <span class="exercise-value">Popular</span>
            <span class="exercise-label ex-popular">${b}</span>
          </div>
          <div class="ex-block">
            <span class="exercise-value">Burned calories</span>
            <span class="exercise-label ex-burned-calories">${x}/3 min</span>
          </div>

          <p class="exercise-description">
            ${f}
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
    </div>`).join("");r.innerHTML=s}function q(e){const s='<svg class="ex-rate-icon" width="18" height="18" aria-label="rating icon"><use href="../img/icons/all_icons/Star 1.svg"></use></svg>',a='<svg class="ex-rate-icon" width="18" height="18" aria-label="rating icon"><use href="../img/icons/all_icons/Star 2.svg"></use></svg>',t=s.repeat(e),c=a.repeat(5-e);return t+c}export{p as getCardInfo,I as renderCard};
//# sourceMappingURL=modal-menu-3e7bf26f.js.map
