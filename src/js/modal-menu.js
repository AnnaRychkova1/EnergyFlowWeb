// import { exerciseId } from './exercises-details'
import axios from 'axios';
import { hide, show, showLoader, hideLoader} from './services/visibility';
import icons from '../img/icons/symbol-defs.svg'
const BASE_URL = 'https://energyflow.b.goit.study/api';
const ENDPOINT_EXERCISES = 'exercises';


// , getLoader
const gallery = document.querySelector('.results'); // плюс название содержимого карточки //
const backdrop = document.querySelector('.backdrop');
const modalCard = document.querySelector('.modal');
const favorites = document.querySelector('.ex-add-favorite');
const exerciseId = '64f389465ae26083f39b17c0';

const heartIcon = `
// <svg class="icon-heart" width="18" height="18">
//     <use href="${icons}#icon-heart"></use>
// </svg>`;


renderCard();
let storage = 'favorites';
let storageItem = localStorage.getItem(storage);
if (!storageItem) {
    storageItem = [];
} else {
    storageItem = JSON.parse(storageItem);
}

// gallery.addEventListener('click', onClickCardContent);
// async function onClickCardContent(event) {
//     if (event.target === event.currentTarget) {
//         return;
//     }
//   const element = event.target.closest('.to-favorites-start');
//   if (element === null) {
//         return;
//     }
//     getLoader();
//     const elementId = element.dataset.id;
//     const exercisesInfo = await getCardInfo(elementId);

//     backdrop.classList.remove('is-hidden');
//   modalCard.innerHTML = '';
//   hideLoader();
// }

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

// const exerciseId = '64f389465ae26083f39b17c0';
async function getCardInfo(exerciseId) {
    try {
        const { data } = await axios.get(`${BASE_URL}/${ENDPOINT_EXERCISES}/${exerciseId}`);
        return data;
    } catch (err) {
        console.error(err);
    }
}


// function changingButtonName(value = 'add') {
//   if (value === 'add') {
//     return `Add to favorites
//         <svg class="icon-heart" width="18" height="18">
//           <use href="${heartIcon}#icon-heart"></use>
//         </svg>`;
//   } else {
//     return `Remove from
//         <svg class="icon-heart" width="18" height="18">
//           <use href="${heartIcon}#icon-heart"></use>
//         </svg>`;


async function renderCard() {
    try {
      const { results } = await getCardInfo(exerciseId);
      modalWindowMarkup(results);
      console.log(results)
    } catch (error) {
        console.error(error.message);
    } finally {

    }
}

// modalCard.innerHTML = modalWindowMarkup(results);
function modalWindowMarkup(results = {}) {
   const {
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
  } = results;
     const markup =
         `<div class="modal">
            <button class="modal-close-btn">
                <svg
                    class="modal-close-icon"
                    width="24"
                    height="24">
                    <use href="${icons}#icon-x"></use>
                </svg>
            </button>
            <div class="exercise-gif">
              <picture>
                <source
                  media="(max-width:767.98px)"
                  type="gif"
                  width="295"
                  height="258"
                  />
                <source
                  media="(min-width:768px)"
                  type="gif"
                  width="270"
                  height="259"
                  />
                  <img
                    class="gif-ex"
                    src="${gifUrl}"
                    width="295"
                    height="258"
                    alt="${name}"
                  />
              </picture>   
            </div>
            <div class="ex-content-container">
                <h3 class="exercise-name">${name}</h3>
                <p class="ex-current-rating">${rating}</p>
                <ul class="exercise-stars-list">
                    ${renderStars(popularity)}
                </ul>

                <div class="exercise-information">
                    <div class="ex-block">
                        <span class="exercise-value">Target</span>
                        <span class="exercise-label">${target}</span>
                    </div>
                    <div class="ex-block">
                        <span class="exercise-value">Body part</span>
                        <span class="exercise-label">${bodyPart}</span>
                    </div>
                    <div class="ex-block">
                        <span class="exercise-value">Equipment</span>
                        <span class="exercise-label">${equipment}</span>
                    </div>
                    <div class="ex-block">
                        <span class="exercise-value">Popular</span>
                        <span class="exercise-label">${popularity}</span>
                    </div>
                    <div class="ex-block">
                        <span class="exercise-value">Burned calories</span>
                        <span class="exercise-label">${burnedCalories}/3 min</span>
                    </div>

                    <p class="exercise-description">
                        ${description}
                    </p>

                    <div class="ex-add-btn">
                        <button data-id="${_id}" class="add-btn-icon">
                            Add to favorites
                            <svg
                                class="heart-svg"
                                width="18"
                                height="18">
                                <use href="use href="${icons}#icon-heart"></use>
                            </svg>
                        </button>
                         <button data-id="${_id}" class="ex-rating-button">
                           Give a rating
                         </button>
                    </div>
                </div>
            </div>
        </div>
    `;
   return modalCard.innerHTML = markup;
}

function renderStars(rating) {
    const filledStar = '<span class="star">&#9733;</span>';
    const emptyStar = '<span class="star">&#9734;</span>';
    const filledStars = filledStar.repeat(Math.floor(rating));
    const halfStar = rating % 1 !== 0 ? '<span class="star">&#9733;</span>' : '';
    const emptyStars = emptyStar.repeat(5 - Math.ceil(rating));
    return filledStars + halfStar + emptyStars;
}


export { getCardInfo, renderCard }









    
    
    
    
    
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


async function searchExerciseByID(id) {
  try {
    const { data } = await axios.get(`${BASE_URL}/${ENDPOINT_FILTER}/${exerciseId}`);
    return data;
  } catch (err) {
    console.error(err);
  }
}