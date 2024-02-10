import{i as f}from"./vendor-0f51b997.js";import"./quotes-463e2408.js";import"./mainApi-01498fc5.js";import"./refs-902e1b5c.js";import"./localStorage-f11723c5.js";const r=document.querySelector(".favorites-gallery"),v=document.querySelector(".favorites-box-block"),u=document.querySelector(".favorites-remove-btn"),g=document.querySelector(".favorites-start-btn"),a={name:"",page:1,perPage:9};i.addEventListener("click",i);onFavoritesBtn.addEventListener("click",l);g.addEventListener("click",p);u.addEventListener("click",y);function i(e){e.preventDefault(),a.name=e.currentTarget.elements.name.value(),localStorage.setItem(LS_KEY_FAVORITES,JSON.stringify(a.name))}async function l(e){e.preventDefault(),a.page=1;const t="Array of Favorites";if(!e.currentTarget.elements.name.value()){o();return}function o(){v.style.display="block"}try{const s=await JSON.parse(localStorage.getItem(t));if(d(results,r),r.insertAdjacentHTML("afterbegin",createMarkup(results,s)),results>=9)h();else return}catch{c("Sorry, there is a problem with connection with the server")}finally{console.log()}}function p(e){}async function y(e){e.preventDefault();try{localStorage.removeItem(LS_KEY_FAVORITES),l()}catch{c("Sorry, there is a problem with connection with the server")}finally{console.log()}r.reset()}function d(e){return e.map(({bodyPart:t,name:n,target:o,burnedCalories:s,time:m})=>`
          <ul class="favorites-gallery">
            <li class="favorites-gallery-item">
                <span class="workout">workout</span>
                <a class="favorites-remove" href="#">
                  <button class="favorites-remove-btn" type="button"> 
                    <img class="favorites-remove-icon" src="../img/icons/all icons/basket.svg" alt="remove-icon"/>
                  </button>
                </a>
                <a class="favorites-start" href="#">
                  <button class="favorites-start-btn" type="button">Start 
                    <img class="favorites-start-icon" src="../img/icons/all icons/line.svg" alt="start-icon"/>
                  </button>
                </a>
                <img class="favorites-man-icon" src="../img/icons/all icons/Man.svg" alt="man-icon"/>
                <h3 class="favorites-item-title">${n}</h3>
                <ul class="favorites-gallery-info">
                  <li class="favorites-gallery-info-item">Burned calories: <span class="descr-span">${s} / ${m} min</span></li>
                  <li class="favorites-gallery-info-item">Body part: <span class="descr-span">${t}</span></li>
                  <li class="favorites-gallery-info-item">Target: <span class="descr-span">${o}</span></li>
                </ul> 
            </li>
          </ul>`).join("")}function c(e){f.show({class:"error-svg",position:"topRight",icon:"error-svg",message:e,maxWidth:"432",messageColor:"#fff",messageSize:"16px",backgroundColor:"#4e75ff",close:!1,closeOnClick:!0,fontfamily:"Montserrat",fontsize:"16px"})}function h(){window.scrollBy({top:2*document.querySelector(".favorites-gallery-item").getBoundingClientRect().height,behavior:"smooth"})}
//# sourceMappingURL=favorites-b88e47b0.js.map
