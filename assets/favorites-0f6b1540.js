import{refs as r}from"./refs-000017b9.js";const o="favorites",s=JSON.parse(localStorage.getItem(o)),y='<div class="favorites-message-block"></div> <div class="plug-icon"><img class="favorites-box-img" src="./img/icons/dumbbell.png" alt="dumbbell"/></div><div class="favorites-box-paragraf"></div>It appears that you have not added any exercises to your  favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</div></div>';function f(){r.messageBlock.innerHTML=y}const v=document.querySelector(".favorites-btn");v.addEventListener("click",handleClickOnCardStart);console.log(v);console.log(handleClickOnCardStart());s?!s||!Array.isArray(s)||s.length===0?(f(),console.log("No items found in local storage or data is invalid.")):s.length>0&&(p(s),r.onRemoveBtn.forEach(a=>{a.addEventListener("click",removeFromLS)})):f();function g(a){markupArray.innerHTML=a.map(({_id:e,bodyPart:t,name:n,target:c,burnedCalories:d,time:m})=>`
        <li class="favorites-gallery-item" data-id="${e}" id="card-${e}">
           <div class="favorites-item">
              <div class="favorites-item-wrapper">
                <span class="workout">WORKOUT</span>
                <button type="button" data-id=${e} data-favorites-remove class="favorites-remove-btn"></button>
                  <svg class="favorites-remove-icon" width="12" height="13">
                    <use href="../img/icons/symbole-defs.svg#icon-basket"></use>
                  </svg>
                </button>
                <a href="/src/partials/modal-menu.html" class="favorites-start" data-id="${e} data-modal-open"></a> 
                  <span>Start</span>
                  <svg class="favorites-start-icon" width="14" height="14">
                    <use href="../img/icons/symbole-defs.svg#icon-line"></use>
                  </svg>
                </a>
              </div>
              <div class="favorites-item-info">
                <div class="favorites-man-icon">
                  <svg class="icon-Man" width="14" height="14">
                    <use href="../img/icons/symbol-defs.svg#icon-Man""></use>
                  </svg>
                  <h3 class="favorites-item-title">${n.charAt(0).toUpperCase()+n.slice(1)}</h3>
                </div>
              </div>
              <div class="favorites-item-info-wrapper">
                <ul class="favorites-gallery-info">
                  <li class="favorites-gallery-info-item">Burned calories: <span class="favorites-item-value">${d} / ${m} min</span></li>
                  <li class="favorites-gallery-info-item">Body part: <span class="favorites-item-value">${t.charAt(0).toUpperCase()+t.slice(1)}</span></li>
                  <li class="favorites-gallery-info-item">Target: <span class="favorites-item-value">${c.charAt(0).toUpperCase()+c.slice(1)}</span></li>
                </ul>
              </div>
           </div>
        </li>`).join(""),r.messageBlock.innerHTML="",r.messageBlock.prepend(markupArray)}async function l(a){try{const e=await JSON.parse(localStorage.getItem(o));if(!Array.isArray(e)||e.length===0){console.log("Array in local storage is empty or does not exist.");return}e=e.filter(t=>t._id!==a),localStorage.setItem(o,JSON.stringify(e)),console.log(`Object with ID ${a} removed from local storage.`),r.onRemoveBtn.removeEventListener("click",l),await i(),storedArray=storedArray.filter(t=>t._id!==a),localStorage.setItem(o,JSON.stringify(storedArray)),console.log(`Object with ID ${a} removed from local storage.`),await i()}catch(e){console.error("Error removing object from local storage:",e)}}async function p(a){a.preventDefault(),r.favoritesGallery.innerHTML="",r.favoritesMessage.style.display="none";try{const e=await JSON.parse(localStorage.getItem(o));r.favoritesGallery.insertAdjacentHTML("afterbegin",g(e)),e>9&&scrollBy(),r.onRemoveBtn.forEach.addEventListener("click",l),r.onStartBtn.forEach.addEventListener("click",handleStartButtonClick)}catch(e){console.error("Error creating gallery from local storage:",e)}finally{console.log(),await i()}}async function i(){r.favoritesMessage.style.display="none";try{const a=await JSON.parse(localStorage.getItem(o));(!Array.isArray(a)||a.length===0)&&(console.log("Array in local storage is empty or does not exist."),r.favoritesMessage.style.display="block"),r.favoritesGallery.innerHTML="",a.forEach(e=>{r.favoritesGallery.insertAdjacentHTML("afterbegin",g(e)),r.onRemoveBtn.forEach.addEventListener("click",l),r.onStartBtn.forEach.addEventListener("click",handleStartButtonClick)})}catch(a){console.error("Error creating gallery from local storage:",a)}finally{console.log(),await i()}}
//# sourceMappingURL=favorites-0f6b1540.js.map
