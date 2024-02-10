import axios from "axios";
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { hide, show } from "./services/visibility";

const favoritesGallery = document.querySelector(".favorites-gallery");
const favoritesMessage = document.querySelector(".favorites-box-block");


const onRemoveBtn = document.querySelector(".favorites-remove-btn");
const onStartBtn = document.querySelector(".favorites-start-btn");

const addToFavoriteBtn = document.querySelector('.ex-add-btn');
addToFavoriteBtn.addEventListener('click', addToFavoritesByClick);

async function addToFavoritesOnClick(event) {
  const element = event.target.closest('.ex-add-btn');
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
    } else {
      const exercisesCardInfo = await getExercisesCardInfo(elementId);
      localStorage.setItem(
        'favorites',
        JSON.stringify([...favoriteList, exercisesCardInfo])
      );
      element.innerHTML = addInnerHTML('remove');
    }
  } else {
    const exercisesCardInfo = await getExercisesCardInfo(elementId);
    localStorage.setItem('favorites', JSON.stringify([exercisesCardInfo]));
    element.innerHTML = addInnerHTML('remove');
  }
}
function createMarkupExercisesCard({
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
}) {
  let isAdded = false;
  const favorites = localStorage.getItem('favorites');

  if (favorites) {
    const favoriteList = JSON.parse(favorites);
    isAdded = favoriteList.some(item => item._id === _id);
  }

  return `<div class="modal-description-container">
      <button class="close-modal-btn">
        <svg class="close-modal-icon" width="24" height="24">
          <use href="${icons}#icon-cross"></use>
        </svg>
      </button>
      <img
        class="modal-gif"
        src="${gifUrl}"
        alt="${name}"
        width="295"
        height="258"
      />
      <div class="text-container">
        <h4 class="modal-title">${name}</h4>
        <div class="rating-container">
          <p class="modal-exercises-rating">${rating}</p>
          <svg class="star" width="18" height="18">
            <use href="${icons}#icon-star"></use>
          </svg>
        </div>
        <ul class="description-list">
          <li class="description-item">
            <p>Target</p>
            <span>${spanToCapitalize(target)}</span>
          </li>
          <li class="description-item">
            <p>Body Part</p>
            <span>${spanToCapitalize(bodyPart)}</span>
          </li>
          <li class="description-item">
            <p>Equipment</p>
            <span>${spanToCapitalize(equipment)}</span>
          </li>
          <li class="description-item">
            <p>Popular</p>
            <span>${popularity}</span>
          </li>
          <li class="description-item">
            <p>Burned Calories</p>
            <span>${burnedCalories}/${time} min</span>
          </li>
        </ul>
        <p class="modal-description-text">${description}</p>
        <div class="modal-buttons-container">
          <button data-id="${_id}" class="add-favorite-btn">
            ${isAdded ? 'Remove from' : 'Add to favorites'}
            <svg class="icon-heart" width="18" height="18">
              <use href="${icons}#icon-heart"></use>
            </svg>
          </button>
          <button data-id="${_id}" class="give-rating-btn">
            Give a rating
          </button>
        </div>
      </div>
    </div>`;
}
// const queryParams = {
//   _id,
//   name,
//   page: 1,
//   perPage: 9,
// };
// onModalBtn.addEventListener("click", addItemToFavorites);
// // onRemoveBtn.addEventListener("click", removeItemFromFavorites);
// // onStartBtn.addEventListener("click", showModal);


// //Add to Favorites after click on button 'Add to Favotites' at Modal
// async function addItemToFavorites(event) {
//   event.preventDefault();
  
//   const LS_KEY_FAVORITES = "Array of Favorites";
//   const arrayFavorites = event.currentTarget.elements._id.value();
// getFavorites();
//    localStorage.setItem(LS_KEY_FAVORITES, JSON.stringify(arrayFavorites));
   
  
// // Show Favorites after choosing 'Favorites' at Header
// async function showFavoritesGallery(event) {
//   // event.preventDefault();
//   hide(favoritesMessage);

  
//   const arrayFavorites = event.currentTarget.elements._id.value();
    
//   if (!arrayFavorites) {
//     showMessage();
//     return;
//   }
  
//   try {
//     const itemsFromLS = await JSON.parse(localStorage.getItem(LS_KEY_FAVORITES));
//     createMarkupFavorites(itemsFromLS);
                    
//     if (itemsFromLS >= 9) {
//       scrollBy();
//     } else {
//       return;
//     }
//   } catch (error) {
//     createMessage("Sorry, there is a problem with connection with the server");
    
//   } finally {
//     console.log();
//   }
// }
// }
 

   
// //  Show modal with favorite item after click on 'Start'
// function showModal(event) {


// }


// // Remove from Favorites after click on basket-button at Favorites
// async function removeItemFromFavorites(event) {
//   event.preventDefault();
//   show(favoritesMessage);
//   try {
//     return localStorage.removeItem(LS_KEY_FAVORITES);
    

//   } catch (error) {
//     createMessage("Sorry, there is a problem with connection with the server");
    
//   } finally {
//     console.log();
//     favoritesGallery.reset();
//   }
  
// }

// //   favoritesGallery.insertAdjacentHTML('afterbegin', createMarkupFavorites(markupFavorites));
// // }
//   function createMarkupFavorites(favorites, favoritesGallery) {
//   return favorites
//     .map(
//       ({
//         bodyPart,
//         name,
//         target,
//         burnedCalories,
//         time,
//       }) =>
//         `
//           <ul class="favorites-gallery">
//             <li class="favorites-gallery-item">
//                 <span class="workout">workout</span>
//                 <a class="favorites-remove" href="#">
//                   <button class="favorites-remove-btn" type="button">
//                     <img class="favorites-remove-icon" src="../img/icons/all icons/basket.svg" alt="remove-icon"/>
//                   </button>
//                 </a>
//                 <a class="favorites-start" href="#">
//                   <button class="favorites-start-btn" type="button">Start
//                     <img class="favorites-start-icon" src="../img/icons/all icons/line.svg" alt="start-icon"/>
//                   </button>
//                 </a>
//                 <img class="favorites-man-icon" src="../img/icons/all icons/Man.svg" alt="man-icon"/>
//                 <h3 class="favorites-item-title">${name}</h3>
//                 <ul class="favorites-gallery-info">
//                   <li class="favorites-gallery-info-item">Burned calories: <span class="descr-span">${burnedCalories} / ${time} min</span></li>
//                   <li class="favorites-gallery-info-item">Body part: <span class="descr-span">${bodyPart}</span></li>
//                   <li class="favorites-gallery-info-item">Target: <span class="descr-span">${target}</span></li>
//                 </ul>
//             </li>
//           </ul>`
//     )
//       .join('');
//     favoritesGallery.insertAdjacentHTML('afterbegin', createMarkupFavorites(favorites));
// }
// 
async function searchExerciseByID(id) {
  
  try {
    const BASE_URL = 'https://energyflow.b.goit.study/api';
    const ENDPOINT_FAVORITES = 'id';
    const { data } = await axios
      .get(`${BASE_URL}/${ENDPOINT_FAVORITES}/${id}`);
    return data;
    
  } catch (err) {
    console.error(err);
  }
}

 
//  function createMessage(message) {
//      iziToast.show({
//        class: 'error-svg',
//        position: 'topRight',
//       icon: 'error-svg',
//       message: message,
//       maxWidth: '432',
//       messageColor: '#fff',
//       messageSize: '16px',
//       backgroundColor: '#4e75ff',
//       close: false,
//       closeOnClick: true,
//       fontfamily: 'Montserrat', 
//       fontsize: '16px',
//     });
// }

//  function scrollBy() {
//    window.scrollBy({
//      top:
//        2 *
//        document.querySelector('.favorites-gallery-item').getBoundingClientRect().height,
//      behavior: 'smooth',
//    });
// }
 


