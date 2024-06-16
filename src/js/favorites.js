import icons from '/assets/symbol-defs.svg';
import { renderModalMenu } from '/js/modal-menu.js';
import { refs } from '/js/templates/refs.js';
import createScrollFavorites from '/js/services/scrollFavorites.js';
import { hide, show, hideLoader, showLoader } from '/js/services/visibility';
import { errorResult } from '/js/services/iziToast.js';

// Create favorites list

const favorites = localStorage.getItem('favorites');
const favoriteList = JSON.parse(favorites);

createFavoritesGallery();

async function createFavoritesGallery() {
  showLoader(refs.loaderModal);
  try {
    if (!Array.isArray(favoriteList) || favoriteList.length === 0) {
      show(refs.favoritesMessage);
      return;
    }

    if (refs.favoritesMessage) {
      hide(refs.favoritesMessage);
    }

    refs.favoritesGallery.innerHTML = '';

    createMarkupFavorites(favoriteList);

    createScrollFavorites();
  } catch (error) {
    errorResult('Error creating favorites gallery');
  } finally {
    hideLoader(refs.loaderModal);
  }
}

function createMarkupFavorites(favoriteList) {
  const markup = favoriteList
    .map(({ _id, bodyPart, name, target, burnedCalories, time }) => {
      return `
       <li class="favorites-gallery-item" data-id="${_id}" id="card-${_id}">

        <div class="favorites-card-top">
          <div class="favorites-workout-block">
            <div class="workout">Workout</div>
            <button type="button" data-id=${_id} class="favorites-remove-btn">
              <svg class="favorites-remove-icon" width="16" height="16">
                <use href="${icons}#icon-basket"></use>
              </svg>
            </button>
          </div>
          <button class="to-favorites-start" type="click" data-id=${_id}>
            <span data-id=${_id}>Start</span>
            <svg data-id=${_id} class="filtered-start" width="16" height="16">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
        </div>

        <div class="card-box-title">
          <div class="filtered-athlete-box">
            <svg class="filtered-athlete" width="16" height="16">
              <use href="${icons}#icon-Man"></use>
            </svg>
          </div>
          <h3 class="filtered-title">${
            name.charAt(0).toUpperCase() + name.slice(1)
          }</h3>
        </div>

         <ul class="filtered-description">
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Burned calories: <span class="filtered-descr-value">${burnedCalories} / ${time} min</span></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Body part: <span class="filtered-descr-value">${
              bodyPart.charAt(0).toUpperCase() + bodyPart.slice(1)
            }</span></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Target: <span class="filtered-descr-value">${
              target.charAt(0).toUpperCase() + target.slice(1)
            }</span></p>
          </li>
        </ul>

       </li>`;
    })
    .join('');
  if (refs.favoritesGallery) {
    refs.favoritesGallery.insertAdjacentHTML('beforeend', markup);
  }

  function addRemoveButtonListeners() {
    const removeButtons = document.querySelectorAll('.favorites-remove-btn');

    removeButtons.forEach(button => {
      button.addEventListener('click', handleRemoveFavorite);
    });
  }
  addRemoveButtonListeners();

  function addStartButtonListenners() {
    const startButtons = document.querySelectorAll('.to-favorites-start');

    startButtons.forEach(button => {
      button.addEventListener('click', handleStartButtons);
    });
  }

  addStartButtonListenners();
}

async function handleRemoveFavorite(event) {
  const button = event.currentTarget;
  const id = button.getAttribute('data-id');

  showLoader(refs.loaderModal);
  try {
    // Delete card
    const removedCard = document.getElementById(`card-${id}`);
    if (removedCard) {
      removedCard.remove();
    }

    // Update favoriteList in LocalStorage
    const updatedFavorites = favoriteList.filter(item => item._id !== id);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));

    // Update favoritesList in the page
    favoriteList.splice(
      favoriteList.findIndex(item => item._id === id),
      1
    );

    if (favoriteList.length === 0) {
      show(refs.favoritesMessage);
    }
  } catch (error) {
    errorResult('Error updating favorites list');
  } finally {
    hideLoader(refs.loaderModal);
  }
}

async function handleStartButtons(event) {
  const button = event.currentTarget;
  const id = button.getAttribute('data-id');
  showLoader(refs.loaderModal);
  try {
    await renderModalMenu(id);
  } catch (error) {
    errorResult('Error creating modal menu');
  } finally {
    hideLoader(refs.loaderModal);
  }
}
