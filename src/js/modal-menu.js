// import { exerciseId } from './exercises-details'
import axios from 'axios';
import { hide, show, showLoader, hideLoader} from './services/visibility';
import icons from '../img/icons/symbol-defs.svg'


const BASE_URL = 'https://energyflow.b.goit.study/api';

const gallery = document.querySelector('.results'); // плюс название содержимого карточки //
const backdrop = document.querySelector('.backdrop');
const modalCard = document.querySelector('.modal');
const favorites = document.querySelector('.ex-add-favorite');
const exerciseId = '64f389465ae26083f39b17c0';

const heartIcon = `
// <svg class="icon-heart" width="18" height="18">
//     <use href="${icons}#icon-heart"></use>
// </svg>`;


// renderCard();
// modalCard.innerHTML = modalWindowMarkup(results);
// let storage = 'favorites';
// let storageItem = localStorage.getItem(storage);
// if (!storageItem) {
//     storageItem = [];
// } else {
//     storageItem = JSON.parse(storageItem);
// }

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

//   backdrop.classList.remove('is-hidden');
//   const modalExercisesCard = modalWindowMarkup(exercisesInfo)
//   modalCard.innerHTML = modalExercisesCard;
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
        const BASE_URL = 'https://energyflow.b.goit.study/api';
        const ENDPOINT = 'exercises';
        const { data } = await axios.get(`${BASE_URL}/${ENDPOINT}/${exerciseId}`);
        return data;
    } catch (err) {
        console.error(err);
    }
}


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

// getCardInfo(id);


const activeColor = '#eea10c';
const noActiveColor = '#e8e8e8';
const stars = document.querySelectorAll('.ex-rate-icon');

stars.forEach((star, index) => {
  const rating = Number(star.getAttribute('data-rating'));
  const starHTML = renderStars(rating);
  const filledStarsCount = (starHTML.match(/&#9733;/g) || []).length;
  if (index < filledStarsCount) {
    star.style.fill = activeColor;
  } else {
    star.style.fill = noActiveColor;
  }
});

function renderStars(rating) {
    const filledStar = '<span class="star">&#9733;</span>';
    const emptyStar = '<span class="star">&#9734;</span>';
    const filledStars = filledStar.repeat(Math.floor(rating));
    const halfStar = rating % 1 !== 0 ? '<span class="star">&#9733;</span>' : '';
    const emptyStars = emptyStar.repeat(5 - Math.ceil(rating));
    return filledStars + halfStar + emptyStars;
}


export { getCardInfo };

// // const heartIcon = `
// // // <svg class="icon-heart" width="18" height="18">
// // //     <use href="${icons}#icon-heart"></use>
// // // </svg>`;


// // renderCard();
// // let storage = 'favorites';
// // let storageItem = localStorage.getItem(storage);
// // if (!storageItem) {
// //     storageItem = [];
// // } else {
// //     storageItem = JSON.parse(storageItem);
// // }

// // // gallery.addEventListener('click', onClickCardContent);
// // // async function onClickCardContent(event) {
// // //     if (event.target === event.currentTarget) {
// // //         return;
// // //     }
// // //   const element = event.target.closest('.to-favorites-start');
// // //   if (element === null) {
// // //         return;
// // //     }
// // //     getLoader();
// // //     const elementId = element.dataset.id;
// // //     const exercisesInfo = await getCardInfo(elementId);

// // //     backdrop.classList.remove('is-hidden');
// // //   modalCard.innerHTML = '';
// // //   hideLoader();
// // // }

// //   const addToFavoriteBtn = document.querySelector('.ex-add-favorite');
// //   addToFavoriteBtn.addEventListener('click', addToFavoriteOnClick);

// // // // gallery.addEventListener('click', onClickCardContent);
// // // // async function onClickCardContent(event) {
// // // //     if (event.target === event.currentTarget) {
// // // //         return;
// // // //     }
// // // //     const element = event.target.closest('.favorites-start'); // название li элемента содержимого карточки //
// // // //     if (element === null) {
// // // //         return;
// // // //     }
// // // //     getLoader();
// // // //     const elementId = element.dataset.id;
// // // //     const exercisesInfo = await getCardInfo(elementId);

// // // //     backdrop.classList.remove('is-hidden');
// // // //   modalCard.innerHTML = '';
// // // //   hideLoader();
// // // // }
// // //   const addToFavoriteBtn = document.querySelector('.ex-add-favorite');
// // //   addToFavoriteBtn.addEventListener('click', addToFavoriteOnClick);

// // //   const closeBtn = document.querySelector('.modal-close-btn');
// // //   closeBtn.addEventListener('click', onCloseModal);
// // //   backdrop.addEventListener('click', handleBackdropClick);
// // //   document.addEventListener('keydown', handleEscapeKey);
 
// // // async function addToFavoriteOnClick(event) {
// // //   const element = event.target.closest('.ex-add-favorite');
// // //   if (!element) return;

// // //   const elementId = element.dataset.id;
// // //   const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// // //   const isFavorite = favorites.some(item => item._id === elementId);

// //   if (isFavorite) {
// //     const updatedFavorites = favorites.filter(item => item._id !== elementId);
// //     localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
// //     element.classList.remove('is-favorite');
// //     element.innerHTML = changingButtonName('add');
// //   } else {
// //     const exercisesCardInfo = await getCardInfo(elementId);
// //     // localStorage.setItem('favorites', JSON.stringify([...favorites, exercisesCardInfo]));
// //     // element.classList.add('is-favorite');
// //     element.innerHTML = changingButtonName('remove');
// //   }

// // function onCloseModal() {
// //   modalCard.classList.add('is-hidden');
// //   backdrop.classList.add('is-hidden');
// //   modalCard.innerHTML = '';

// //   document.removeEventListener('keydown', handleEscapeKey);
// //   backdrop.removeEventListener('click', handleBackdropClick);
// // }
// // function handleBackdropClick(event) {
// //   // if (event.target.closest('.modal')) {
// //   //   return;
// //   // }
// //   modalCard.classList.add('is-hidden');
// //   backdrop.classList.add('is-hidden');
// //   modalCard.innerHTML = '';

// //   document.removeEventListener('keydown', handleEscapeKey);
// //   backdrop.removeEventListener('click', handleBackdropClick);
// // }
// // function handleEscapeKey(event) {
// //   event.preventDefault();
// //   if (event.key === 'Escape') {
// //     modalCard.classList.add('is-hidden');
// //     backdrop.classList.add('is-hidden');
// //     modalCard.innerHTML = '';

// //     document.removeEventListener('keydown', handleEscapeKey);
// //     backdrop.removeEventListener('click', handleBackdropClick);
// //   }
// // }

// // // const exerciseId = '64f389465ae26083f39b17c0';
// // async function getCardInfo(exerciseId) {
// //     try {
// //         const { data } = await axios.get(`${BASE_URL}/${ENDPOINT_EXERCISES}/${exerciseId}`);
// //         return data;
// //     } catch (err) {
// //         console.error(err);
// //     }
// // }


// // // function changingButtonName(value = 'add') {
// // //   if (value === 'add') {
// // //     return `Add to favorites
// // //         <svg class="icon-heart" width="18" height="18">
// // //           <use href="${heartIcon}#icon-heart"></use>
// // //         </svg>`;
// // //   } else {
// // //     return `Remove from
// // //         <svg class="icon-heart" width="18" height="18">
// // //           <use href="${heartIcon}#icon-heart"></use>
// // //         </svg>`;


// // async function renderCard() {
// //     try {
// //       const { results } = await getCardInfo(exerciseId);
// //       modalWindowMarkup(results);
// //       console.log(results)
// //     } catch (error) {
// //         console.error(error.message);
// //     } finally {

// //     }
// // }

// // // modalCard.innerHTML = modalWindowMarkup(results);
// // function modalWindowMarkup(results = {}) {
// //    const {
// //     _id,
// //     bodyPart,
// //     equipment,
// //     time,
// //     target,
// //     burnedCalories,
// //     gifUrl,
// //     name,
// //     popularity,
// //     rating,
// //     description,
// //   } = results;
// //      const markup =
// //          `<div class="modal">
// //             <button class="modal-close-btn">
// //                 <svg
// //                     class="modal-close-icon"
// //                     width="24"
// //                     height="24">
// //                     <use href="${icons}#icon-x"></use>
// //                 </svg>
// //             </button>
// //             <div class="exercise-gif">
// //               <picture>
// //                 <source
// //                   media="(max-width:767.98px)"
// //                   type="gif"
// //                   width="295"
// //                   height="258"
// //                   />
// //                 <source
// //                   media="(min-width:768px)"
// //                   type="gif"
// //                   width="270"
// //                   height="259"
// //                   />
// //                   <img
// //                     class="gif-ex"
// //                     src="${gifUrl}"
// //                     width="295"
// //                     height="258"
// //                     alt="${name}"
// //                   />
// //               </picture>
// //             </div>
// //             <div class="ex-content-container">
// //                 <h3 class="exercise-name">${name}</h3>
// //                 <p class="ex-current-rating">${rating}</p>
// //                 <ul class="exercise-stars-list">
// //                     ${renderStars(popularity)}
// //                 </ul>

// //                 <div class="exercise-information">
// //                     <div class="ex-block">
// //                         <span class="exercise-value">Target</span>
// //                         <span class="exercise-label">${target}</span>
// //                     </div>
// //                     <div class="ex-block">
// //                         <span class="exercise-value">Body part</span>
// //                         <span class="exercise-label">${bodyPart}</span>
// //                     </div>
// //                     <div class="ex-block">
// //                         <span class="exercise-value">Equipment</span>
// //                         <span class="exercise-label">${equipment}</span>
// //                     </div>
// //                     <div class="ex-block">
// //                         <span class="exercise-value">Popular</span>
// //                         <span class="exercise-label">${popularity}</span>
// //                     </div>
// //                     <div class="ex-block">
// //                         <span class="exercise-value">Burned calories</span>
// //                         <span class="exercise-label">${burnedCalories}/3 min</span>
// //                     </div>

// //                     <p class="exercise-description">
// //                         ${description}
// //                     </p>

// //                     <div class="ex-add-btn">
// //                         <button data-id="${_id}" class="add-btn-icon">
// //                             Add to favorites
// //                             <svg
// //                                 class="heart-svg"
// //                                 width="18"
// //                                 height="18">
// //                                 <use href="use href="${icons}#icon-heart"></use>
// //                             </svg>
// //                         </button>
// //                          <button data-id="${_id}" class="ex-rating-button">
// //                            Give a rating
// //                          </button>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     `;
// //    return modalCard.innerHTML = markup;
// // }

// // function renderStars(rating) {
// //     const filledStar = '<span class="star">&#9733;</span>';
// //     const emptyStar = '<span class="star">&#9734;</span>';
// //     const filledStars = filledStar.repeat(Math.floor(rating));
// //     const halfStar = rating % 1 !== 0 ? '<span class="star">&#9733;</span>' : '';
// //     const emptyStars = emptyStar.repeat(5 - Math.ceil(rating));
// //     return filledStars + halfStar + emptyStars;
// // }


// // export { getCardInfo, renderCard }









    
    
    
    
    
// // // }
// // // function onCloseModal() {
// // //   modalCard.classList.add('is-hidden');
// // //   backdrop.classList.add('is-hidden');
// // //   modalCard.innerHTML = '';

// // //   document.removeEventListener('keydown', handleEscapeKey);
// // //   backdrop.removeEventListener('click', handleBackdropClick);
// // // }
// // // function handleBackdropClick(event) {
// // //   if (event.target.closest('.modal')) {
// // //     return;
// // //   }
// // //   modalCard.classList.add('is-hidden');
// // //   backdrop.classList.add('is-hidden');
// // //   modalCard.innerHTML = '';

// // //   document.removeEventListener('keydown', handleEscapeKey);
// // //   backdrop.removeEventListener('click', handleBackdropClick);
// // // }
// // // function handleEscapeKey(event) {
// // //   event.preventDefault();
// // //   if (event.key === 'Escape') {
// // //     modalCard.classList.add('is-hidden');
// // //     backdrop.classList.add('is-hidden');
// // //     modalCard.innerHTML = '';

// // //     document.removeEventListener('keydown', handleEscapeKey);
// // //     backdrop.removeEventListener('click', handleBackdropClick);
// // //   }
// // // }

// // // // const exerciseId = '64f389465ae26083f39b17c0';
// // // async function getCardInfo(exerciseId) {
// // //     try {
// // //         const BASE_URL = 'https://energyflow.b.goit.study/api';
// // //         const ENDPOINT = 'exercises';
// // //         const { data } = await axios.get(`${BASE_URL}/${ENDPOINT}/${exerciseId}`);
// // //         return data;
// // //     } catch (err) {
// // //         console.error(err);
// // //     }
// // // }



// // // function changingButtonName(value = 'add') {
// // //   if (value === 'add') {
// // //     return `Add to favorites
// // //         <svg class="icon-heart" width="18" height="18">
// // //           <use href="${heartIcon}#icon-heart"></use>
// // //         </svg>`;
// // //   } else {
// // //     return `Remove from
// // //         <svg class="icon-heart" width="18" height="18">
// // //           <use href="${heartIcon}#icon-heart"></use>
// // //         </svg>`;
// // //   }
// // // }

// // // async function renderCard() {
// // //     try {
// // //         const results = await getCardInfo(exerciseId);
// // //         modalWindowMarkup(results);
// // //     } catch (error) {
// // //         console.error(error.message);
// // //     }
// // // }

// // // function modalWindowMarkup(results) {
// // //     const markup = results
// // //         .map(({
// // //             _id,
// // //             bodyPart,
// // //             equipment,
// // //             gifUrl,
// // //             name,
// // //             target,
// // //             description,
// // //             rating,
// // //             burnedCalories,
// // //             time,
// // //             popularity,
// // //         }) =>
// // //             `<div class="modal">
// // //       <button class="modal-close-btn">
// // //         <svg
// // //           class="modal-close-icon"
// // //           width="24"
// // //           height="24"
// // //           aria-label="close icon"
// // //         >
// // //           <use
// // //             class="ex-close-btn-icon-use"
// // //             href="../img/icons/all icons/x.svg"
// // //           ></use>
// // //         </svg>
// // //       </button>
// // //       <div class="exercise-gif">
// // //         <img
// // //           src="${gifUrl}"
// // //           class="gif-ex"
// // //           width="295"
// // //           height="258"
// // //           alt="show exercise"
// // //         />
// // //       </div>
// // //       <div class="ex-content-container">
// // //         <h2 class="exercise-name">${name}</h2>
// // //         <p class="ex-current-rating">${rating}</p>
// // //         <ul class="exercise-stars-list">
// // //           ${renderStars(rating)}
// // //         </ul>

// // //         <div class="exercise-information">
// // //           <div class="ex-block">
// // //             <span class="exercise-value">Targer</span>
// // //             <span class="exercise-label ex-target">${target}</span>
// // //           </div>
// // //           <div class="ex-block">
// // //             <span class="exercise-value">Body part</span>
// // //             <span class="exercise-label ex-body-part">${bodyPart}</span>
// // //           </div>
// // //           <div class="ex-block">
// // //             <span class="exercise-value">Equipment</span>
// // //             <span class="exercise-label ex-equipment">${equipment}</span>
// // //           </div>
// // //           <div class="ex-block">
// // //             <span class="exercise-value">Popular</span>
// // //             <span class="exercise-label ex-popular">${popularity}</span>
// // //           </div>
// // //           <div class="ex-block">
// // //             <span class="exercise-value">Burned calories</span>
// // //             <span class="exercise-label ex-burned-calories">${burnedCalories}/3 min</span>
// // //           </div>

// // //           <p class="exercise-description">
// // //             ${description}
// // //           </p>

// // //           <div class="ex-add-btn">
// // //             <button class="add-btn-icon">
// // //               Add to favorites
// // //               <svg
// // //                 class="heart-svg"
// // //                 width="18"
// // //                 height="18"
// // //                 aria-label="favorites icon"
// // //               >
// // //                 <use href="../img/icons/all icons/heart.svg"></use>
// // //               </svg>
// // //             </button>
// // //           </div>
// // //         </div>
// // // </div>
// // //     </div>`
// // //         )
// // //         .join('');
// // //     modalCard.innerHTML = markup;
// // // }

// // //   modalEl.innerHTML = markup;
// // // }


// // async function searchExerciseByID(id) {
// //   try {
// //     const { data } = await axios.get(`${BASE_URL}/${ENDPOINT_FILTER}/${exerciseId}`);
// //     return data;
// //   } catch (err) {
// //     console.error(err);
// //   }
// // }

