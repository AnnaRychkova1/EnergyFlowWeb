import axios from 'axios';
import icons from '/assets/symbol-defs.svg';
import {
  addGiveRatingListener,
  removeGiveRatingListener,
} from '/js/give-rating.js';
import { refs } from '/js/templates/refs.js';
import { hide, show, hideLoader, showLoader } from '/js/services/visibility.js';
import { errorResult } from '/js/services/iziToast.js';

let expectedId;

const addToFavoriteBtn = document.querySelector('.ex-add-favorite');

async function renderModalMenu(expectedExercisesId) {
  show(refs.backdrop);
  hide(refs.scrollUpBtn);
  refs.backdrop.innerHTML = '';
  expectedId = expectedExercisesId;

  showLoader(refs.loaderModal);
  try {
    const responseIdObject = await getCardInfo(expectedId);

    modalWindowMarkup(responseIdObject);

    const closeButton = document.querySelector('.modal-close-btn');
    closeButton.addEventListener('click', closeModal);
    document.addEventListener('keydown', onEscape);
    refs.backdrop.addEventListener('click', backdropClickHandler);

    addGiveRatingListener();

    const addToFavoriteBtn = document.querySelector('.ex-add-favorite');
    if (document.contains(addToFavoriteBtn)) {
      addToFavoriteBtn.addEventListener('click', addToFavoriteOnClick);
    }

    function addToFavoriteOnClick(event) {
      const element = event.target.closest('.ex-add-favorite');
      const elementId = element.dataset.id;
      const favorites = localStorage.getItem('favorites');

      if (favorites) {
        const favoriteList = JSON.parse(favorites);
        const condition = favoriteList.some(({ _id }) => _id === elementId);
        if (condition) {
          localStorage.setItem(
            'favorites',
            JSON.stringify(favoriteList.filter(({ _id }) => _id !== elementId))
          );
          element.innerHTML = addInnerHTML();
          const favCard = document.getElementById('card-' + elementId);
          if (favCard) {
            favCard.remove();
          }
        } else {
          localStorage.setItem(
            'favorites',
            JSON.stringify([...favoriteList, responseIdObject])
          );
          element.innerHTML = addInnerHTML('remove');
        }
      } else {
        localStorage.setItem('favorites', JSON.stringify([responseIdObject]));
        element.innerHTML = addInnerHTML('remove');
      }
    }
  } catch (error) {
    errorResult('Error creating Modal Menu. Try Later');
  } finally {
    hideLoader(refs.loaderModal);
  }
}

async function getCardInfo(exerciseId) {
  showLoader(refs.loaderModal);
  try {
    const BASE_URL = 'https://energyflow.b.goit.study/api';
    const ENDPOINT = 'exercises';
    const { data } = await axios.get(`${BASE_URL}/${ENDPOINT}/${exerciseId}`);
    return data;
  } catch (err) {
    errorResult('Server Exercises By Id did not responded');
  } finally {
    hideLoader(refs.loaderModal);
  }
}

function modalWindowMarkup({
  _id,
  bodyPart,
  equipment,
  time,
  target,
  burnedCalories,
  gifUrl,
  name,
  popularity,
  rating,
  description,
}) {
  let isFavorite = false;
  const favorites = localStorage.getItem('favorites');

  if (favorites) {
    const favoriteList = JSON.parse(favorites);
    isFavorite = favoriteList.some(item => item._id === _id);
  }
  const markup = `
  <div class="modal-container">

    <button class="modal-close-btn">
      <svg
          class="modal-close-icon"
          width="24"
          height="24">
          <use href="${icons}#icon-x"></use>
      </svg>
    </button>

    <img
      class="gif-ex"
      src="${gifUrl}"
      alt="${name}"
    />
  
    <div class="ex-box-info">

      <h3 class="ex-title">${name}</h3>

      <div class="ex-rating-container">
        <p class="ex-current-rating">${rating.toFixed(1)}</p>
        <ul class="ex-stars-list">
          <li>
             <svg
              class="ex-rate-icon"
              width="18"
              height="18">
              <use href="${icons}#icon-Star-1"></use>
            </svg>
          </li>
          <li>
            <svg
              class="ex-rate-icon"
              width="18"
              height="18">
              <use href="${icons}#icon-Star-1"></use>
            </svg>
          </li>
          <li>
             <svg
              class="ex-rate-icon"
              width="18"
              height="18">
              <use href="${icons}#icon-Star-1"></use>
            </svg>
          </li>
          <li>
             <svg
              class="ex-rate-icon"
              width="18"
              height="18">
              <use href="${icons}#icon-Star-1"></use>
            </svg>
          </li>
          <li>
             <svg
              class="ex-rate-icon"
              width="18"
              height="18">
              <use href="${icons}#icon-Star-1"></use>
            </svg>
          </li>
        </ul>
      </div>

      <div class="ex-information">
        <div class="ex-block">
          <span class="ex-value">Target</span>
          <span class="ex-label">${
            target.charAt(0).toUpperCase() + target.slice(1)
          }</span>
        </div>
        <div class="ex-block">
          <span class="ex-value">Body part</span>
          <span class="ex-label">${
            bodyPart.charAt(0).toUpperCase() + bodyPart.slice(1)
          }</span>
        </div>
        <div class="ex-block">
          <span class="ex-value">Equipment</span>
          <span class="ex-label">${
            equipment.charAt(0).toUpperCase() + equipment.slice(1)
          }</span>
        </div>
        <div class="ex-block">
          <span class="ex-value">Popular</span>
          <span class="ex-label">${popularity}</span>
        </div>
        <div class="ex-block">
          <span class="ex-value">Burned calories</span>
          <span class="ex-label">${burnedCalories}/${time} min</span>
        </div>
      </div>

      <div class="ex-modal-container-text"">
        <p class="ex-description">${description}</p>
      </div>

      <div class="ex-add-btn-container">
        <button type="button" data-id="${_id}" class="ex-add-favorite">
             ${isFavorite ? 'Remove from' : 'Add to favorites'}
          <svg
            class="heart-svg"
            width="18"
            height="16">
            <use href="${icons}#icon-heart"></use>
          </svg>
        </button>
        <button type="button" data-id="${_id}" class="ex-rating-button">
          Give a rating
        </button>
      </div>  
    </div>
  </div>
    `;
  refs.backdrop.innerHTML = markup;
  drawStars(Math.round(rating));

  function drawStars(number) {
    const star = refs.backdrop.querySelectorAll('.ex-rate-icon');
    const arrOfStars = [...star];
    for (let i = 0; i < number; i += 1) {
      arrOfStars[i].classList.add('selected-stars');
    }
  }
}

function closeModal() {
  show(refs.scrollUpBtn);
  hide(refs.backdrop);
  refs.backdrop.innerHTML = '';
  removeGiveRatingListener();
  document.removeEventListener('click', closeModal);
  document.removeEventListener('keydown', onEscape);
  if (document.contains(addToFavoriteBtn)) {
    addToFavoriteBtn.removeEventListener('click', addToFavoriteOnClick);
  }
  if (document.contains(refs.backdrop)) {
    refs.backdrop.removeEventListener('click', backdropClickHandler);
  }
}

function backdropClickHandler(event) {
  if (event.target === refs.backdrop) {
    closeModal();
  }
}

function onEscape(event) {
  event.preventDefault();
  if (event.key === 'Escape') {
    closeModal();
  }
}

function addInnerHTML(value = 'add') {
  if (value === 'add') {
    return `Add to favorites
        <svg class="heart-svg" width="18" height="18">
          <use href="${icons}#icon-heart"></use>
        </svg>`;
  } else {
    return `Remove from
        <svg class="heart-svg" width="18" height="18">
          <use href="${icons}#icon-heart"></use>
        </svg>`;
  }
}

export { renderModalMenu, onEscape };
