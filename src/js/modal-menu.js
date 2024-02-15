import axios from 'axios';
import { hide, show, showLoader, hideLoader } from './services/visibility';
import icons from '../img/icons/symbol-defs.svg';

const BASE_URL = 'https://energyflow.b.goit.study/api';

const gallery = document.querySelector('.results'); // плюс название содержимого карточки //
const backdrop = document.querySelector('.backdrop');
const modalCard = document.querySelector('.modal');
const favorites = document.querySelector('.ex-add-favorite');

const heartIcon = `
// <svg class="icon-heart" width="18" height="18">
//     <use href="${icons}#icon-heart"></use>
// </svg>`;

let expectedId;
// ! Something like this
async function createModalMenu(expectedExercisesId) {
  expectedId = expectedExercisesId;
  try {
    const responseIdObject = await getCardInfo(expectedId);
    console.log(responseIdObject);
    modalWindowMarkup(responseIdObject);
    const addToFavoriteBtn = document.querySelector('.ex-add-favorite');
    addToFavoriteBtn.addEventListener('click', addToFavoriteOnClick);
    const closeBtn = document.querySelector('.modal-close-btn');
    closeBtn.addEventListener('click', onCloseModal);
    backdrop.classList.remove('is-hidden');
    console.log(expectedId);

    function addToFavoriteOnClick(event) {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      console.log(favorites);
      const isFavorite = favorites.some(item => item._id === expectedId);

      if (isFavorite) {
        const updatedFavorites = favorites.filter(
          item => item._id !== expectedId
        );
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        element.classList.remove('is-favorite');
        element.innerHTML = changingButtonName('add');
      } else {
        // const exercisesCardInfo = await getCardInfo(expectedId);
        localStorage.setItem(
          'favorites',
          JSON.stringify([...favorites, responseIdObject])
        );

        // there must be event.target
        element.classList.add('is-favorite');
        element.innerHTML = changingButtonName('remove');
      }
    }
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

// ! тут після <p class="ex-current-rating">${rating}</p> <ul class="exercise-stars-list"></ul> я видалила поки що // ${renderStars(popularity)}
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
  const markup =
    `<div class="modal-container">
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
               <div class="rating-container">
                <p class="ex-current-rating">${rating}</p>
                <ul class="exercise-stars-list">
                     
                </ul>
                </div>
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

                    <div class="ex-add-btn-container">
                        <button data-id="${_id}" class="ex-add-favorite">
                            Add to favorites
                            <svg
                                class="heart-svg"
                                width="18"
                                height="18">
                                <use href="${icons}#icon-heart"></use>
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
  
  modalCard.innerHTML = markup;
  
}


//   const addToFavoriteBtn = document.querySelector('.ex-add-favorite');
//   addToFavoriteBtn.addEventListener('click', addToFavoriteOnClick);

//   const closeBtn = document.querySelector('.modal-close-btn');
//   closeBtn.addEventListener('click', onCloseModal);
//   backdrop.addEventListener('click', handleBackdropClick);
//   document.addEventListener('keydown', handleEscapeKey);
 
// function onCloseModal() {
//   modalCard.classList.add('is-hidden');
//   backdrop.classList.add('is-hidden');
//   modalCard.innerHTML = '';

//   document.removeEventListener('keydown', handleEscapeKey);
//   backdrop.removeEventListener('click', handleBackdropClick);
// }
// function handleBackdropClick(event) {
//   if (event.target.closest('.modal')) {
//     return;
//   }
//   modalCard.classList.add('is-hidden');
//   backdrop.classList.add('is-hidden');
//   modalCard.innerHTML = '';

//   document.removeEventListener('keydown', handleEscapeKey);
//   backdrop.removeEventListener('click', handleBackdropClick);
// }
// function handleEscapeKey(event) {
//   event.preventDefault();
//   if (event.key === 'Escape') {
//     modalCard.classList.add('is-hidden');
//     backdrop.classList.add('is-hidden');
//     modalCard.innerHTML = '';

//     document.removeEventListener('keydown', handleEscapeKey);
//     backdrop.removeEventListener('click', handleBackdropClick);
//   }
// }
// const activeColor = '#eea10c';
// const noActiveColor = '#e8e8e8';
// const stars = document.querySelectorAll('.exercise-stars-list li');


const stars = document.querySelectorAll('.ex-rate-icon');
const activeColor = '#eea10c';
const noActiveColor = '#e8e8e8';

// stars.forEach((star, index) => {
//   const rating = Number(star.getAttribute('data-rating'));
//   const starHTML = renderStars(rating);
//   const filledStarsCount = (starHTML.match(/&#9733;/g) || []).length;
//   if (index < filledStarsCount) {
//     star.style.fill = activeColor;
//   } else {
//     star.style.fill = noActiveColor;
//   }
// });

// function renderStars(rating) {
//   const filledStar = '<span class="star">&#9733;</span>';
//   const emptyStar = '<span class="star">&#9734;</span>';
//   const filledStars = filledStar.repeat(Math.floor(rating));
//   const halfStar = rating % 1 !== 0 ? '<span class="star">&#9733;</span>' : '';
//   const emptyStarsCount = Math.max(0, 5 - Math.ceil(rating)); // Ensure non-negative value
//   const emptyStars = emptyStar.repeat(emptyStarsCount);
//   return filledStars + halfStar + emptyStars;
// }

export { createModalMenu };



//   function changingButtonName(value = 'add') {
//     if (value === 'add') {
//       return `Add to favorites
//         <svg class="icon-heart" width="18" height="18">
//           <use href="${heartIcon}#icon-heart"></use>
//         </svg>`;
//     } else {
//       return `Remove from
//         <svg class="icon-heart" width="18" height="18">
//           <use href="${heartIcon}#icon-heart"></use>
//         </svg>`;
//     }
//   }

