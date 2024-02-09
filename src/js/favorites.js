import axios from "axios";
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getQuoteOffTheDay } from "./quotes";

getQuoteOffTheDay();

async function getFavorites(resFavorites) { 
    const BASE_URL_FAVORITES = 'https://energyflow.b.goit.study/api';
    const ENDPOINT_FAVORITES = 'exercises';
    const resFavorites = await axios.get(`${BASE_URL_FAVORITES}/${ENDPOINT_FAVORITES}`, {
        params: {
        name: [],
            page: 1,
            perPage: 9,
      },
    });
    return resFavorites.data;
}

const favoritesGallery = document.querySelector(".favorites-gallery");
const favoritesMessage = document.querySelector(".favorites-box-block");

// const addToFavorites = document.querySelector(".modal-btn");
const onRemoveBtn = document.querySelector(".favorites-remove-btn");
const onStartBtn = document.querySelector(".favorites-start-btn");
// const onFavoritesBtn = document.querySelector(".favorites-btn");

const queryParams = {
  name: '',
  page: 1,
  perPage: 9,  
};
addToFavorites.addEventListener("click", addToFavorites);
onFavoritesBtn.addEventListener("click", showFavorites);
onStartBtn.addEventListener("click", showModal);
onRemoveBtn.addEventListener("click", removeItemFromFavorites);

//Add to Favorites after click on button 'Add to Favotites' at Modal
function addToFavorites(event) {
  event.preventDefault();
  
  getFavorites(); 

  queryParams.name = event.currentTarget.elements.name.value();
  localStorage.setItem(LS_KEY_FAVORITES, JSON.stringify(queryParams.name));
 }

// Show Favorites after choosing 'Favorites' at Header
async function showFavorites(event) {
  event.preventDefault();
  queryParams.page = 1;

  const LS_KEY_FAVORITES = "Array of Favorites";
  const names = event.currentTarget.elements.name.value();
    
  if (!names) {
    showMessage();
    return;
  }

  function showMessage() {
    favoritesMessage.style.display = 'block';
  }

  try {
    const itemsFromLS = await JSON.parse(localStorage.getItem(LS_KEY_FAVORITES));
    createMarkupFavorites(results, favoritesGallery);
    favoritesGallery.insertAdjacentHTML('afterbegin', createMarkup(results, itemsFromLS));
                
    if (results >= 9) {
      scrollBy();
    } else {
      return;           
    }
  } catch (error) {
    createMessage("Sorry, there is a problem with connection with the server");
    
  } finally {
    console.log();
  }
}

//  Show modal with favorite item after click on 'Start' 
function showModal(event) {
//Have a look at  modal-section
}


//Remove from Favorites after click on basket-button at Favorites
async function removeItemFromFavorites(event) {
  event.preventDefault();
  
  try {
    localStorage.removeItem(LS_KEY_FAVORITES);
    showFavorites();

  } catch (error) {
    createMessage("Sorry, there is a problem with connection with the server");
    
  } finally {
    console.log();
  }
  favoritesGallery.reset();
}

function createMarkupFavorites(results) {
  return results
    .map(
      ({
        bodyPart,
        name,
        target,
        burnedCalories,
        time,
      }) =>
        `
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
                <h3 class="favorites-item-title">${name}</h3>
                <ul class="favorites-gallery-info">
                  <li class="favorites-gallery-info-item">Burned calories: <span class="descr-span">${burnedCalories} / ${time} min</span></li>
                  <li class="favorites-gallery-info-item">Body part: <span class="descr-span">${bodyPart}</span></li>
                  <li class="favorites-gallery-info-item">Target: <span class="descr-span">${target}</span></li>
                </ul> 
            </li>
          </ul>`
    )
    .join('');
}
  
function createMessage(message) {
    iziToast.show({
      class: 'error-svg',
      position: 'topRight',
      icon: 'error-svg',
      message: message,
      maxWidth: '432',
      messageColor: '#fff',
      messageSize: '16px',
      backgroundColor: '#4e75ff',
      close: false,
      closeOnClick: true,
      fontfamily: 'Montserrat', 
      fontsize: '16px',
    });
}

 function scrollBy() {
   window.scrollBy({
     top:
       2 *
       document.querySelector('.favorites-gallery-item').getBoundingClientRect().height,
     behavior: 'smooth',
   });
 }
  


