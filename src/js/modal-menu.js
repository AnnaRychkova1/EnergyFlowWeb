import { exerciseId } from './exercises-details'
import axios from 'axios';
import { hideLoader, getLoader } from './services/visibility';


const gallery = document.querySelector('.results'); // плюс название содержимого карточки //
const backdrop = document.querySelector('.backdrop');
const modalCard = document.querySelector('.modal');
const favorites = document.querySelector('.ex-add-favorite');
const heartIcon = `
<svg class="icon-heart" width="18" height="18">
    <use href="${symbol-defs}#icon-heart"></use>
</svg>`;


let storage = 'favorites';
let storageIcurrentTargettem = localStorage.getItem(storage);
if (!storageItem) {
    storageItem = [];
} else {
    storageItem = JSON.parse(storageItem);
}

gallery.addEventListener('click', onClickCardContent);
async function onClickCardContent(event) {
    if (event.target === event.currentTarget) {
        return;
    }
    const element = event.target.closest('.favorites-start'); // название li элемента содержимого карточки //
    if (element === null) {
        return;
    }
    getLoader();
    const elementId = element.dataset.id;
    const exercisesInfo = await getCardInfo(elementId);

    backdrop.classList.remove('is-hidden');
  modalCard.innerHTML = '';
  hideLoader();
}
  const addToFavoriteBtn = document.querySelector('.ex-add-favorite');
  addToFavoriteBtn.addEventListener('click', addToFavoriteOnClick);

  const closeBtn = document.querySelector('.modal-close-btn');
  closeBtn.addEventListener('click', onCloseModal);
  backdrop.addEventListener('click', handleBackdropClick);
  document.addEventListener('keydown', handleEscapeKey);
 
async function addToFavoriteOnClick(event) {
  const element = event.target.closest('.ex-add-favorite');
  if (!element) return;

  const elementId = element.dataset.id;
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  const isFavorite = favorites.some(item => item._id === elementId);

  if (isFavorite) {
    const updatedFavorites = favorites.filter(item => item._id !== elementId);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    element.classList.remove('is-favorite');
    element.innerHTML = changingButtonName('add');
  } else {
    const exercisesCardInfo = await getCardInfo(elementId);
    localStorage.setItem('favorites', JSON.stringify([...favorites, exercisesCardInfo]));
    element.classList.add('is-favorite');
    element.innerHTML = changingButtonName('remove');
  }
}
function onCloseModal() {
  modalCard.classList.add('is-hidden');
  backdrop.classList.add('is-hidden');
  modalCard.innerHTML = '';

  document.removeEventListener('keydown', handleEscapeKey);
  backdrop.removeEventListener('click', handleBackdropClick);
}
function handleBackdropClick(event) {
  if (event.target.closest('.modal')) {
    return;
  }
  modalCard.classList.add('is-hidden');
  backdrop.classList.add('is-hidden');
  modalCard.innerHTML = '';

  document.removeEventListener('keydown', handleEscapeKey);
  backdrop.removeEventListener('click', handleBackdropClick);
}
function handleEscapeKey(event) {
  event.preventDefault();
  if (event.key === 'Escape') {
    modalCard.classList.add('is-hidden');
    backdrop.classList.add('is-hidden');
    modalCard.innerHTML = '';

    document.removeEventListener('keydown', handleEscapeKey);
    backdrop.removeEventListener('click', handleBackdropClick);
  }
}

const exerciseId = '64f389465ae26083f39b17c0';
async function getCardInfo(exerciseId) {
    try {
        const BASE_URL = 'https://energyflow.b.goit.study/api/exercises/';
        const ENDPOINT = 'exercises';
        const { data } = await axios.get(`${BASE_URL}/${ENDPOINT}/${exerciseId}`);
        return data;
    } catch (err) {
        console.error(err);
    }
}

function changingButtonName(value = 'add') {
  if (value === 'add') {
    return `Add to favorites
        <svg class="icon-heart" width="18" height="18">
          <use href="${icons}#icon-heart"></use>
        </svg>`;
  } else {
    return `Remove from
        <svg class="icon-heart" width="18" height="18">
          <use href="${heartIcon}#icon-heart"></use>
        </svg>`;
  }
}

async function renderCard() {
    try {
        const results = await getCardInfo(exerciseId);
        modalWindowMarkup(results);
    } catch (error) {
        console.error(error.message);
    }
}

function modalWindowMarkup(results) {
    const markup = results
        .map(({
            _id,
            bodyPart,
            equipment,
            gifUrl,
            name,
            target,
            description,
            rating,
            burnedCalories,
            time,
            popularity,
        }) =>
            `<div class="modal">
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
          src="${gifUrl}"
          class="gif-ex"
          width="295"
          height="258"
          alt="show exercise"
        />
      </div>
      <div class="ex-content-container">
        <h2 class="exercise-name">${name}</h2>
        <p class="ex-current-rating">${rating}</p>
        <ul class="exercise-stars-list">
          ${renderStars(rating)}
        </ul>

        <div class="exercise-information">
          <div class="ex-block">
            <span class="exercise-value">Targer</span>
            <span class="exercise-label ex-target">${target}</span>
          </div>
          <div class="ex-block">
            <span class="exercise-value">Body part</span>
            <span class="exercise-label ex-body-part">${bodyPart}</span>
          </div>
          <div class="ex-block">
            <span class="exercise-value">Equipment</span>
            <span class="exercise-label ex-equipment">${equipment}</span>
          </div>
          <div class="ex-block">
            <span class="exercise-value">Popular</span>
            <span class="exercise-label ex-popular">${popularity}</span>
          </div>
          <div class="ex-block">
            <span class="exercise-value">Burned calories</span>
            <span class="exercise-label ex-burned-calories">${burnedCalories}/3 min</span>
          </div>

          <p class="exercise-description">
            ${description}
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
    </div>`
        )
        .join('');
    modalCard.innerHTML = markup;
}

function renderStars(rating) {
    const filledStar = '<svg class="ex-rate-icon" width="18" height="18" aria-label="rating icon"><use href="../img/icons/all_icons/Star 1.svg"></use></svg>';
    const emptyStar = '<svg class="ex-rate-icon" width="18" height="18" aria-label="rating icon"><use href="../img/icons/all_icons/Star 2.svg"></use></svg>';
    const filledStars = filledStar.repeat(rating);
    const emptyStars = emptyStar.repeat(5 - rating);
    return filledStars + emptyStars;
}










    
    
    
    
    
// }
// const startBtn = document.querySelector('.start-btn');
// const modalEl = document.querySelector('.modal-backdrop');

// startBtn.addEventListener('click', handleSearch);

// function handleSearch(event) {
//   event.preventDefault();
//   fetchExercises().then(modalWindowMarkup).catch();
// }

// function fetchExercises() {
//   return fetch(
//     'https://energyflow.b.goit.study/api/exercises/64f389465ae26083f39b17a2'
//   ).then(resp => {
//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }
//     return resp.json();
//   });
// }

// function modalWindowMarkup(filters = {}) {
//   const {
//     _id,
//     bodyPart,
//     equipment,
//     time,
//     target,
//     burnedCalories,
//     gifUrl,
//     name,
//     popularity,
//     rating,
//     description,
//   } = filters;

//   const markup = `<div class="exercises-modal-window">
//           <div class="exercise-container">
//             <button class="exercise-close-btn" type="button">
//               <svg
//                 class="exercise-close-icon"
//                 width="10"
//                 height="10"
//                 aria-label="Close icon"
//               >
//                 <use href="../svg/icons.svg#icon-close-btn"></use>
//               </svg>
//             </button>
//             <div class="exercise-image-wrapper">
//               <img
//                 src="${gifUrl}"
//                 alt=""
//                 class="exercise-image-modal"
//               />
//             </div>
//             <div class="exercise-info-wrapper">
//               <div class="exercise-name-container">
//                 <p class="exercise-name">${name}</p>
//                 <p class="exercise-rating">${rating}</p>
//               </div>
//               <div class="exercise-params-container">
//                 <ul class="exercise-params-list">
//                   <li class="exercise-params-card">
//                     <p class="exercise-param-name">Target</p>
//                     <p class="exercise-param-value exercise-param-target">${target}</p>
//                   </li>
//                   <li class="exercise-params-card">
//                     <p class="exercise-param-name">Body part</p>
//                     <p class="exercise-param-value exercise-param-bodypart">${bodyPart}</p>
//                   </li>
//                   <li class="exercise-params-card">
//                     <p class="exercise-param-name">Equipment</p>
//                     <p class="exercise-param-value exercise-param-equipment">${equipment}</p>
//                   </li>
//                   <li class="exercise-params-card">
//                     <p class="exercise-param-name">Popular</p>
//                     <p class="exercise-param-value exercise-param-popularuty">${popularity}</p>
//                   </li>
//                   <li class="exercise-params-card">
//                   <p class="exercise-param-name">Burned calories</p>
//                   <p class="exercise-param-value exercise-param-popularuty">${burnedCalories}/${time} m</p></li>
//                 </ul>
                
//               </div>
//               <p class="exercise-descr">${description}</p>
//               <div class="exercise-buttons">
//                 <button
//                   class="exercise-favorite-btn"
//                   type="submit"
//                   data="${_id}"
//                 >
//                   Add to favorites
//                   <svg
//                   class="exercise-fav-icon"
//                   aria-label="Heart icon"
//                   >
//                   <use href="../svg/icons.svg#icon-heart"></use>
//                   </svg>
//                 </button>
//                 <button class="exercise-raiting-btn" type="submit" data="${_id}">
//                   Give a rating
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>`;

//   modalEl.innerHTML = markup;
// }