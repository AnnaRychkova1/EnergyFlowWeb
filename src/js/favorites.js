import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { searchExerciseByID } from './services/mainApi.js';
import { hide, show } from './services/visibility';
import { refs } from './templates/refs.js';
// import { apiIsiToastError, noResults } from "./services/isiToast.js";

//  Quote of Day

const quoteFromLS = JSON.parse(localStorage.getItem('quoteResponse'));
console.log(quoteFromLS);

function displayQuoteOnPage(quoteData) {
  const quoteText = document.querySelector('.quote-text');
  const quoteAuthor = document.querySelector('.quote-author');
  quoteText.textContent = quoteData.quote;
  quoteAuthor.textContent = quoteData.author;
}

// Show Favorites Page

showFavoritesGallery();

// Listeners

refs.addToFavoritesBtn.addEventListener('click', addToFavorites);
// refs.onRemoveBtn.addEventListener("click", removeFromFavorites);
// refs.onStartBtn.addEventListener("click", showModal);                //TODO depends on function at modal-menu.js

// Add favorite exersise to LS

async function addToFavorites(event) {
  event.preventDefault();

  const element = event.target.closest('.ex-add-btn');
  const elementId = element.dataset.id;
  const favorites = localStorage.getItem('favorites');

  if (favorites) {
    const favoritesFromLS = JSON.parse(favorites);
    const predicate = favoritesFromLS.some(({ _id }) => _id === elementId);

    if (predicate) {
      localStorage.setItem(
        'favorites',
        JSON.stringify(favoritesFromLS.filter(({ _id }) => _id !== elementId))
      );
      element.innerHTML = addInnerHTML();
    } else {
      const favoritesToLS = await searchExerciseByID(elementId);
      localStorage.setItem(
        'favorites',
        JSON.stringify([...favoritesFromLS, favoritesToLS])
      );
      element.innerHTML = addInnerHTML('remove');
    }
  }
}

// Remove favorite exersise ftom LS

async function removeFromFavorites(event) {
  event.preventDefault();
  show(refs.favoritesMessage);

  const element = event.target.closest('.ex-add-btn');
  const elementId = element.dataset.id;
  const favorites = localStorage.getItem('favorites');

  try {
    const storedArray = JSON.parse(favorites);

    if (Array.isArray(storedArray) && storedArray.length > 0) {
      localStorage.removeItem('favorites');
      const newArray = storedArray.filter(({ _id }) => _id !== elementId);
      localStorage.setItem('favorites', JSON.stringify(newArray));
    } else {
      // noResults();
      console.log('Array in localStorage is empty or does not exist');
    }
  } catch (error) {
    console.error(error);
    //  apiIsiToastError();
  } finally {
    console.log();
    refs.favoritesGallery.reset();
  }
}

// Show Favorites after choosing 'Favorites' at Header
async function showFavoritesGallery(event) {
  refs.favoritesGallery.innerHTML = '';
  hide(refs.favoritesMessage);

  const favorites = localStorage.getItem('favorites');

  if (!favorites) {
    show(refs.favoritesMessage);
    return;
  }

  try {
    const favoritesFromLS = await JSON.parse(localStorage.getItem('favorites'));
    refs.favoritesGallery.insertAdjacentHTML(
      'afterbegin',
      createMarkupFavorites()
    );

    if (favoritesFromLS >= 9) {
      scrollBy();
    } else {
      return;
    }
  } catch (error) {
    console.error(error);
    // apiIsiToastError();
  } finally {
    console.log();
    refs.favoritesGallery.reset();
  }
}

function createMarkupFavorites({
  _id,
  bodyPart,
  name,
  target,
  burnedCalories,
  time,
}) {
  let isAdded = false;
  const favorites = localStorage.getItem('favorites');

  if (favorites) {
    const favoritesFromLS = JSON.parse(favorites);
    isAdded = favoritesFromLS.some(item => item._id === _id);
  }

  return `
           <ul class="favorites-gallery">
             <li class="favorites-gallery-item">
                 <span class="workout">workout</span>
                 <a class="favorites-remove" href="#">
                   <button class="favorites-remove-btn" type="button">
                     <img class="favorites-remove-icon" src="./img/icons/all icons/basket.svg" alt="remove-icon"/>
                   </button>
                 </a>
                 <a class="favorites-start" href="#">
                   <button class="favorites-start-btn" type="button">Start
                     <img class="favorites-start-icon" src="./img/icons/all icons/line.svg" alt="start-icon"/>
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
           </ul>`;
}

function scrollBy() {
  window.scrollBy({
    top:
      2 *
      document.querySelector('.favorites-gallery-item').getBoundingClientRect()
        .height,
    behavior: 'smooth',
  });
}

//Add to Favorites after click on button 'Add to Favotites' at Modal
// function addItemToFavorites(event) {
//   event.preventDefault();

//   const LS_KEY_FAVORITES = "Array of Favorites";
//   const arrayFavorites = event.currentTarget.elements.name.value();

//   searchExerciseByID();
//   localStorage.setItem(LS_KEY_FAVORITES, JSON.stringify(arrayFavorites));
// }
