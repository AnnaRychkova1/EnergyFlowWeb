import axios from 'axios';
import { hide, show } from './services/visibility';
import icons from '../img/icons/symbol-defs.svg';
import { refs } from './templates/refs';

// const modal = document.querySelector('.modal-container');

let expectedId;
async function renderModalMenu(expectedExercisesId) {
  show(refs.backdrop);
  expectedId = expectedExercisesId;

  try {
    const responseIdObject = await getCardInfo(expectedId);
    // console.log(responseIdObject);
    modalWindowMarkup(responseIdObject);

    console.log(expectedId);

    const addToFavoriteBtn = document.querySelector('.ex-add-favorite');
    addToFavoriteBtn.addEventListener('click', addToFavoriteOnClick);
    function addToFavoriteOnClick(event) {
      const exerciseId = event.target.dataset.id || expectedId;
      const exerciseName = document.querySelector('.exercise-name').textContent;
      const exerciseBodyPart = document.querySelector(
        '.exercise-information .ex-block:nth-child(1).exercise-label'
      ).textContent;
      const exerciseEquipment = document.querySelector(
        '.exercise-information .ex-block:nth-child(2).exercise-label'
      ).textContent;
      const exerciseTime = document.querySelector(
        '.exercise-information .ex-block:nth-child(3).exercise-label'
      ).textContent;
      const exerciseTarget = document.querySelector(
        '.exercise-information .ex-block:nth-child(4).exercise-label'
      ).textContent;
      const exerciseBurnedCalories = document.querySelector(
        '.exercise-information .ex-block:nth-child(5).exercise-label'
      ).textContent;
      const exerciseGifUrl = document.querySelector('.exercise-gif img').src;
      let favorites =
        JSON.parse(localStorage.getItem('exerciseFavorites')) || [];
      const isFavorite = favorites.some(
        favorite => favorite._id === exerciseId
      );
      if (isFavorite) {
        event.target.textContent = 'Add to favorites';
      } else {
        event.target.textContent = 'Remove from favorites';
      }
      if (isFavorite) {
        favorites = favorites.filter(favorite => favorite._id !== exerciseId);
        localStorage.setItem('exerciseFavorites', JSON.stringify(favorites));
      } else {
        const newExercise = {
          _id: exerciseId,
          name: exerciseName,
          bodyPart: exerciseBodyPart,
          equipment: exerciseEquipment,
          time: exerciseTime,
          target: exerciseTarget,
          burnedCalories: exerciseBurnedCalories,
          gifUrl: exerciseGifUrl,
        };
        favorites.push(newExercise);
        localStorage.setItem('exerciseFavorites', JSON.stringify(favorites));
      }
    }

    const closeButton = document.querySelector('.modal-close-btn');
    closeButton.addEventListener('click', closeModal);
    document.addEventListener('keydown', escapeClickHandler);
    // refs.backdrop.addEventListener('click', backdropClickHandler);
  } catch (error) {
    console.error('Error fetching images:', error);
  }
}

async function getCardInfo(exerciseId) {
  console.log(exerciseId);
  try {
    const BASE_URL = 'https://energyflow.b.goit.study/api';
    const ENDPOINT = 'exercises';
    const { data } = await axios.get(`${BASE_URL}/${ENDPOINT}/${exerciseId}`);
    return data;
  } catch (err) {
    console.error(err);
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
          Add to favorites
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
  hide(refs.backdrop);
  document.removeEventListener('click', closeModal);
  document.removeEventListener('keydown', escapeClickHandler);
  if (document.contains(refs.backdrop)) {
    refs.backdrop.removeEventListener('click', backdropClickHandler);
  }
}
function backdropClickHandler(event) {
  if (event.target === refs.backdrop) {
    closeModal();
  }
  closeModal();
}

export function onEscape(event) {
  event.preventDefault();
  if (event.key === 'Escape') {
    closeModal();
  }
}

export { renderModalMenu };
