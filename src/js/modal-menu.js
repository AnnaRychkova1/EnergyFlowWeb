
// import axios from 'axios';
// import { hide, show, showLoader, hideLoader } from './services/visibility';
// import icons from '../img/icons/symbol-defs.svg';

// const gallery = document.querySelector('.results'); // плюс название содержимого карточки //
// const backdrop = document.querySelector('.backdrop');
// const modalCard = document.querySelector('.modal');

// const heartIcon = `
// // <svg class="icon-heart" width="18" height="18">
// //     <use href="${icons}#icon-heart"></use>
// // </svg>`;

// let expectedId;
// async function createModalMenu(expectedExercisesId) {
//   show(backdrop);
//   expectedId = expectedExercisesId;

//   try {
//     const responseIdObject = await getCardInfo(expectedId);
//     console.log(responseIdObject);
//     modalWindowMarkup(responseIdObject);

//     console.log(expectedId);
//     const addToFavoriteBtn = document.querySelector('.ex-add-favorite');
//     addToFavoriteBtn.addEventListener('click', addToFavoriteOnClick);
//     function addToFavoriteOnClick(event) {
//       const exerciseId = event.target.dataset.id || expectedId;
//       const exerciseName = document.querySelector('.exercise-name').textContent;
//       const exerciseBodyPart = document.querySelector(
//         '.exercise-information .ex-block:nth-child(1) .exercise-label'
//       ).textContent;
//       const exerciseEquipment = document.querySelector(
//         '.exercise-information .ex-block:nth-child(2) .exercise-label'
//       ).textContent;
//       const exerciseTime = document.querySelector(
//         '.exercise-information .ex-block:nth-child(3) .exercise-label'
//       ).textContent;
//       const exerciseTarget = document.querySelector(
//         '.exercise-information .ex-block:nth-child(4) .exercise-label'
//       ).textContent;
//       const exerciseBurnedCalories = document.querySelector(
//         '.exercise-information .ex-block:nth-child(5) .exercise-label'
//       ).textContent;
//       const exerciseGifUrl = document.querySelector('.exercise-gif img').src;
//       let favorites =
//         JSON.parse(localStorage.getItem('exerciseFavorites')) || [];
//       const isFavorite = favorites.some(
//         favorite => favorite._id === exerciseId
//       );
//       if (isFavorite) {
//         event.target.textContent = 'Add to favorites';
//       } else {
//         event.target.textContent = 'Remove from favorites';
//       }
//       if (isFavorite) {
//         favorites = favorites.filter(favorite => favorite._id !== exerciseId);
//         localStorage.setItem('exerciseFavorites', JSON.stringify(favorites));
//       } else {
//         const newExercise = {
//           _id: exerciseId,
//           name: exerciseName,
//           bodyPart: exerciseBodyPart,
//           equipment: exerciseEquipment,
//           time: exerciseTime,
//           target: exerciseTarget,
//           burnedCalories: exerciseBurnedCalories,
//           gifUrl: exerciseGifUrl,
//         };
//         favorites.push(newExercise);
//         localStorage.setItem('exerciseFavorites', JSON.stringify(favorites));
//       }
//     }

//     const closeButton = document.querySelector('.modal-close-btn');
//     closeButton.addEventListener('click', closeModal);
//     document.addEventListener('keydown', escapeClickHandler);
//     backdrop.addEventListener('click', backdropClickHandler);
//   } catch (error) {
//     console.error('Error fetching images:', error);
//   }
// }

// async function getCardInfo(exerciseId) {
//   console.log(exerciseId);
//   try {
//     const BASE_URL = 'https://energyflow.b.goit.study/api';
//     const ENDPOINT = 'exercises';
//     const { data } = await axios.get(`${BASE_URL}/${ENDPOINT}/${exerciseId}`);
//     return data;
//   } catch (err) {
//     console.error(err);
//   }
// }

// function modalWindowMarkup({
//   _id,
//   bodyPart,
//   equipment,
//   time,
//   target,
//   burnedCalories,
//   gifUrl,
//   name,
//   popularity,
//   rating,
//   description,
// }) {
//   const markup = `<div class="modal-container">
//             <button class="modal-close-btn">
//                 <svg
//                     class="modal-close-icon"
//                     width="24"
//                     height="24">
//                     <use href="${icons}#icon-x"></use>
//                 </svg>
//             </button>
//             <div class="exercise-gif">
//               <picture>
//                 <source
//                   media="(max-width:767.98px)"
//                   type="gif"
//                   width="295"
//                   height="258"
//                   />
//                 <source
//                   media="(min-width:768px)"
//                   type="gif"
//                   width="270"
//                   height="259"
//                   />
//                   <img
//                     class="gif-ex"
//                     src="${gifUrl}"
//                     width="295"
//                     height="258"
//                     alt="${name}"
//                   />
//               </picture>
//             </div>
//             <div class="ex-content-container">
//                 <h3 class="exercise-name">${name}</h3>
//                <div class="rating-container">
//                 <p class="ex-current-rating">${rating}</p>
//                 <ul class="exercise-stars-list">
                     
//                 </ul>
//                 </div>
//                 <div class="exercise-information">
//                     <div class="ex-block">
//                         <span class="exercise-value">Target</span>
//                         <span class="exercise-label">${target}</span>
//                     </div>
//                     <div class="ex-block">
//                         <span class="exercise-value">Body part</span>
//                         <span class="exercise-label">${bodyPart}</span>
//                     </div>
//                     <div class="ex-block">
//                         <span class="exercise-value">Equipment</span>
//                         <span class="exercise-label">${equipment}</span>
//                     </div>
//                     <div class="ex-block">
//                         <span class="exercise-value">Popular</span>
//                         <span class="exercise-label">${popularity}</span>
//                     </div>
//                     <div class="ex-block">
//                         <span class="exercise-value">Burned calories</span>
//                         <span class="exercise-label">${burnedCalories}/3 min</span>
//                     </div>

//                     <p class="exercise-description">
//                         ${description}
//                     </p>

//                     <div class="ex-add-btn-container">
//                         <button type="button" data-id="${_id}" class="ex-add-favorite">
//                             Add to favorites
//                             <svg
//                                 class="heart-svg"
//                                 width="18"
//                                 height="18">
//                                 <use href="${icons}#icon-heart"></use>
//                             </svg>
//                         </button>
//                          <button data-id="${_id}" class="ex-rating-button">
//                            Give a rating
//                          </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     `;

//   modalCard.innerHTML = markup;
// }

// function closeModal() {
//   hide(backdrop);
//   document.removeEventListener('click', closeModal);
//   document.removeEventListener('keydown', escapeClickHandler);
//   if (document.contains(backdrop)) {
//     backdrop.removeEventListener('click', backdropClickHandler);
//   }
// }
// function backdropClickHandler(event) {
//   if (event.target === backdrop) {
//     closeModal();
//   }
// }
// function escapeClickHandler(event) {
//   if (event.key === 'Escape') {
//     closeModal();
//   }
// }

// const stars = document.querySelectorAll('.ex-rate-icon');
// const activeColor = '#eea10c';
// const noActiveColor = '#e8e8e8';

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

// export { createModalMenu };
  
  
  
 



  
  
//   // import axios from 'axios';
// import { hide, show, showLoader, hideLoader } from './services/visibility';
// import icons from '../img/icons/symbol-defs.svg';
// const gallery = document.querySelector('.results'); 

// const backdrop = document.querySelector('.backdrop');
// const modalCard = document.querySelector('.modal');
// const heartIcon = `
// // <svg class="icon-heart" width="18" height="18">
// //     <use href="${icons}#icon-heart"></use>
// // </svg>`;
// let expectedId;
// // ! Something like this
// async function createModalMenu(expectedExercisesId) {
//  show(backdrop);
//  expectedId = expectedExercisesId;
//  try {
//    const responseIdObject = await getCardInfo(expectedId);
//    console.log(responseIdObject);
//    modalWindowMarkup(responseIdObject);
//    console.log(expectedId);
//    const addToFavoriteBtn = document.querySelector('.ex-add-favorite');
//    addToFavoriteBtn.addEventListener('click', addToFavoriteOnClick);
//    function addToFavoriteOnClick(event) {
//      const exerciseId = event.target.dataset.id || expectedId;
//      const exerciseName = document.querySelector('.exercise-name').textContent;
//      const exerciseBodyPart =
// document.querySelector('.exercise-information .ex-block:nth-child(1)
// .exercise-label').textContent;
//      const exerciseEquipment =
// document.querySelector('.exercise-information .ex-block:nth-child(2)
// .exercise-label').textContent;
//      const exerciseTime =
// document.querySelector('.exercise-information .ex-block:nth-child(3)
// .exercise-label').textContent;
//      const exerciseTarget =
// document.querySelector('.exercise-information .ex-block:nth-child(4)
// .exercise-label').textContent;
//      const exerciseBurnedCalories =
// document.querySelector('.exercise-information .ex-block:nth-child(5)
// .exercise-label').textContent;
//      const exerciseGifUrl = document.querySelector('.exercise-gif img').src;
//      let favorites =
// JSON.parse(localStorage.getItem('exerciseFavorites')) || [];
//      const isFavorite = favorites.some((favorite) => favorite._id ===
// exerciseId);
//      if (isFavorite) {
//        event.target.textContent = 'Add to favorites';
//      } else {
//        event.target.textContent = 'Remove from favorites';
//      }
//      if (isFavorite) {
//        favorites = favorites.filter((favorite) => favorite._id !== exerciseId);
//        localStorage.setItem('exerciseFavorites', JSON.stringify(favorites));
//      } else {
//        const newExercise = {
//          _id: exerciseId,
//          name: exerciseName,
//          bodyPart: exerciseBodyPart,
//          equipment: exerciseEquipment,
//          time: exerciseTime,
//          target: exerciseTarget,
//          burnedCalories: exerciseBurnedCalories,
//          gifUrl: exerciseGifUrl,
//        };
//        favorites.push(newExercise);
//        localStorage.setItem('exerciseFavorites', JSON.stringify(favorites));
//      }
//    }
//     } catch (error) {
//    console.error('Error fetching images:', error);
//  }
// }

// async function getCardInfo(exerciseId) {
//  console.log(exerciseId);
//  try {
//    const BASE_URL = 'https://energyflow.b.goit.study/api';
//    const ENDPOINT = 'exercises';
//    const { data } = await axios.get(`${BASE_URL}/${ENDPOINT}/${exerciseId}`);
//    return data;
//  } catch (err) {
//    console.error(err);
//  }
// }

// {/* <p class="ex-current-rating">${rating}</p> <ul
// class="exercise-stars-list"></ul> я видалила поки що */}
// ${renderStars(popularity)}
// function modalWindowMarkup({
//  _id,
//  bodyPart,
//  equipment,
//  time,
//  target,
//  burnedCalories,
//  gifUrl,
//  name,
//  popularity,
//  rating,
//  description,
// }) {
//  const markup =
//    `<div class="modal-container">
//            <button class="modal-close-btn">
//                <svg
//                    class="modal-close-icon"
//                    width="24"
//                    height="24">
//                    <use href="${icons}#icon-x"></use>
//                </svg>
//            </button>
//            <div class="exercise-gif">
//              <picture>
//                <source
//                  media="(max-width:767.98px)"
//                  type="gif"
//                  width="295"
//                  height="258"
//                  />
//                <source
//                  media="(min-width:768px)"
//                  type="gif"
//                  width="270"
//                  height="259"
//                  />
//                  <img
//                    class="gif-ex"
//                    src="${gifUrl}"
//                    width="295"
//                    height="258"
//                    alt="${name}"
//                  />
//              </picture>
//            </div>
//            <div class="ex-content-container">
//                <h3 class="exercise-name">${name}</h3>
//               <div class="rating-container">
//                <p class="ex-current-rating">${rating}</p>
//                <ul class="exercise-stars-list">
//                </ul>
//                </div>
//                <div class="exercise-information">
//                    <div class="ex-block">
//                        <span class="exercise-value">Target</span>
//                        <span class="exercise-label">${target}</span>
//                    </div>
//                    <div class="ex-block">
//                        <span class="exercise-value">Body part</span>
//                        <span class="exercise-label">${bodyPart}</span>
//                    </div>
//                    <div class="ex-block">
//                        <span class="exercise-value">Equipment</span>
//                        <span class="exercise-label">${equipment}</span>
//                    </div>
//                    <div class="ex-block">
//                        <span class="exercise-value">Popular</span>
//                        <span class="exercise-label">${popularity}</span>
//                    </div>
//                    <div class="ex-block">
//                        <span class="exercise-value">Burned calories</span>
//                        <span
// class="exercise-label">${burnedCalories}/3 min</span>
//                    </div>
//                    <p class="exercise-description">
//                        ${description}
//                    </p>
//                    <div class="ex-add-btn-container">
//                        <button type="button" data-id="${_id}"
// class="ex-add-favorite">
//                            Add to favorites
//                            <svg
//                                class="heart-svg"
//                                width="18"
//                                height="18">
//                                <use href="${icons}#icon-heart"></use>
//                            </svg>
//                        </button>
//                         <button data-id="${_id}" class="ex-rating-button">
//                           Give a rating
//                         </button>
//                    </div>
//                </div>
//            </div>
//        </div>
//    `;
//  modalCard.innerHTML = markup;
// }
// function onClick() {
//  closeModal();
// }
// function backdropOnClick(event) {
//  if (event.target.closest('.modal')) {
//    return;
//  }
//  closeModal();
// }
// export function onEscape(event) {
//  event.preventDefault();
//  if (event.key === 'Escape') {
//    closeModal();
//  }
// }
// function closeModal() {
//  modalCard.classList.add('visually-hidden');
//  backdrop.classList.add('visually-hidden');
//  modalCard.innerHTML = '';
//  document.removeEventListener('keydown', onEscape);
//  backdrop.removeEventListener('click', backdropOnClick);
// }
// const stars = document.querySelectorAll('.ex-rate-icon');
// const activeColor = '#eea10c';
// const noActiveColor = '#e8e8e8';
// export { createModalMenu };










