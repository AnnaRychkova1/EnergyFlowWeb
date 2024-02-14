// import { exerciseId } from './exercises-details'
import axios from 'axios';
import { hide, show, showLoader, hideLoader} from './services/visibility';
import icons from '../img/icons/symbol-defs.svg'


const BASE_URL = 'https://energyflow.b.goit.study/api';

const gallery = document.querySelector('.exercises-deteils, .favorites-box-block'); // плюс название содержимого карточки //
const backdrop = document.querySelector('.backdrop');
const modalCard = document.querySelector('.modal');
const favorites = document.querySelector('.ex-add-favorite');
const id = '64f389465ae26083f39b17c0';
// const resultContainer = document.querySelector('.filtered-cards');


// renderCard();
// modalCard.innerHTML = modalWindowMarkup(results);
// let storage = 'favorites';
// let storageItem = localStorage.getItem(storage);
// if (!storageItem) {
//     storageItem = [];
// } else {
//     storageItem = JSON.parse(storageItem);
// }
// async function createCardById(exerciseId) {
//   const response = await fetch(`https://energyflow.b.goit.study/api/exercises/${exerciseId}`);
//   return response.json();
//   backdrop.classList.remove('is-hidden');
//   const exercisesInfo = await getCardInfo(exerciseId);
//   const modalExercisesCard = modalWindowMarkup(exercisesInfo)
//   modalCard.innerHTML = modalExercisesCard;
//   hideLoader();
// } try {
//   const modalWindow = await getCardInfo(exerciseId); //робити перевірки чи є відповідь по
//   modalWindowMarkup(modalWindow);
// } catch (err) {
//         console.error(err);
// } finally {
  
// }

async function getCardInfo({ id }, BASE_URL) {
  try {
    const response = await axios.get(`${BASE_URL}/exercises`, {
      params: {
        _id: id,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Произошла ошибка при запросе данных:", error.message);
    throw error;
  }
}


async function createCardById(id, BASE_URL) {
    try {
        backdrop.classList.remove('is-hidden');
        const exercisesInfo = await getCardInfo({ id }, BASE_URL);
        const modalExercisesCard = modalWindowMarkup(exercisesInfo);
        modalCard.innerHTML = modalExercisesCard;
        return modalExercisesCard;
    } catch (error) {
        console.log(error);
    }
}
createCardById(id);


                   // click function //
          

// gallery.addEventListener('click', handleClickOnCardStart);
// async function handleClickOnCardStart(event) {
//     if (event.target === event.currentTarget) {
//         return;
//     }
//   const element = event.target.closest('.to-favorites-start');
//   if (element === null) {
//         return;
//     }
//     // getLoader();
//     const exerciseId = element.dataset.id;
//     const exercisesInfo = await getCardInfo(exerciseId);

//   backdrop.classList.remove('is-hidden');
//   const modalExercisesCard = modalWindowMarkup(exercisesInfo)
//   modalCard.innerHTML = modalExercisesCard;
//   // hideLoader();
// }


                     //  close modal window  //

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
             // ---------------------//

// async function handleClickOnCardStart(evt) {
//     showLoader(refs.loaderModal);
//     const exerciseId = evt.target.dataset.id;
//     try {
//         const cardInfo = await getCardInfo(exerciseId);
//         openModalWindow(cardInfo);
//     } catch (error) {
//         console.error(error);
//     }
// }


                       //---------------------//
            

// const exerciseId = '64f389465ae26083f39b17c0';


// async function getCardInfo(exerciseId) {
//     try {
//         const BASE_URL = 'https://energyflow.b.goit.study/api';
//         const ENDPOINT = 'exercises';
//         const { data } = await axios.get(`${BASE_URL}/${ENDPOINT}/${exerciseId}`);
//         return data;
//     } catch (err) {
//         console.error(err);
//     }
// }


// async function renderCard() {
//     try {
//       const { results } = await getCardInfo(exerciseId);
//       modalWindowMarkup(results);
//       console.log(results)
//     } catch (error) {
//         console.error(error.message);
//     } finally {

//     }
// }


                 //         changing button name function   //

// function changingButtonName(value = 'add') {
//     if (value === 'add') {
//       return `Add to favorites
//           <svg class="icon-heart" width="18" height="18">
//             <use href="${icon}#icon-heart"></use>
//           </svg>`;
//     } else {
//       return `Remove from
//           <svg class="icon-heart" width="18" height="18">
//             <use href="${icon}#icon-heart"></use>
//           </svg>`;
//     }
// }
  

           //          markup function          //
function modalWindowMarkup(results) {
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
               <div class="rating-container">
                <p class="ex-current-rating">${rating}</p>
                <ul class="exercise-stars-list">
                    ${renderStars(popularity)}
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

         //  stars rating function  //

// const activeColor = '#eea10c';
// const noActiveColor = '#e8e8e8';
// const stars = document.querySelectorAll('.ex-rate-icon');

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
//     const filledStar = '<span class="star">&#9733;</span>';
//     const emptyStar = '<span class="star">&#9734;</span>';
    
//     // If rating is zero, return empty stars
//     if (rating === 0) {
//         return emptyStar.repeat(5);
//     }
    
//     const filledStars = filledStar.repeat(Math.floor(rating));
//     const halfStar = rating % 1 !== 0 ? '<span class="star">&#9733;</span>' : '';
//     const emptyStars = emptyStar.repeat(5 - Math.ceil(rating));
//     return filledStars + halfStar + emptyStars;
// }



export { getCardInfo };
export { createCardById };
  