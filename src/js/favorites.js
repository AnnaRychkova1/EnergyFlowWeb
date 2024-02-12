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

async function createGalleryFromLS(LS_KEY_FAVORITES, createMarkupFavorites) {
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


async function removeObjectFromLocalStorage(idToRemove) {
    try {
        let storedArray = JSON.parse(localStorage.getItem(LS_KEY_FAVORITES));

        if (!Array.isArray(storedArray) || storedArray.length === 0) {
            console.log('Array in local storage is empty or does not exist.');
            return;
        }
        storedArray = storedArray.filter(item => item._id !== idToRemove);
        localStorage.setItem(LS_KEY_FAVORITES, JSON.stringify(storedArray));
        console.log(`Object with ID ${idToRemove} removed from local storage.`);
        await refreshGallery();
    } catch (error) {
        console.error('Error removing object from local storage:', error);
    }
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
