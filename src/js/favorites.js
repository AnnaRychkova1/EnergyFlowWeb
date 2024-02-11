import axios from "axios";
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { searchExerciseByID } from "./services/mainApi.js";
import { hide, show } from "./services/visibility";
import { refs } from "./templates/refs.js";


const quoteFromLS = JSON.parse(localStorage.getItem("quoteResponse"));
console.log(quoteFromLS);

function displayQuoteOnPage(quoteData) {
  const quoteText = document.querySelector('.quote-text');
  const quoteAuthor = document.querySelector('.quote-author');
  quoteText.textContent = quoteData.quote;
  quoteAuthor.textContent = quoteData.author;
}

// const refs = {
//   favoritesGallery: document.querySelector(".favorites-gallery"),
//   favoritesMessage: document.querySelector(".favorites-box-block"),
//   onRemoveBtn: document.querySelector(".favorites-remove-btn"),
//   onStartBtn: document.querySelector(".favorites-start-btn"),
//   addToFavoriteBtn: document.querySelector('.ex-add-btn'),
// }

// modalCard.innerHTML = '';
//   const modalExercisesMarkup = createMarkupFavorites(exercisesInfo);
//   modalCard.innerHTML = modalExercisesMarkup;

// refs.addToFavoriteBtn.addEventListener('click', addToFavoritesOnClick);

// async function addToFavoritesOnClick(event) {
//   event.preventDefault();
  
//    const element = event.target.closest('.ex-add-btn');
//    const elementId = element.dataset.id;
//    const favorites = localStorage.getItem('favorites');
//    if (favorites) {
//      const favoriteList = JSON.parse(favorites);
//      const condition = favoriteList.some(({ _id }) => _id === elementId);
//      if (condition) {
//        localStorage.setItem(
//          'favorites',
//          JSON.stringify(favoriteList.filter(({ _id }) => _id !== elementId))
//        );
//        element.innerHTML = addInnerHTML();
//      } else {
//        const exercisesCardInfo = await getExercisesCardInfo(elementId);
//        localStorage.setItem(
//          'favorites',
//          JSON.stringify([...favoriteList, exercisesCardInfo])
//        );
//        element.innerHTML = addInnerHTML('remove');
//      }
//    } else {
//      const exercisesCardInfo = await getExercisesCardInfo(elementId);
//      localStorage.setItem('favorites', JSON.stringify([exercisesCardInfo]));
//      element.innerHTML = addInnerHTML('remove');
//    }
//  }

// refs.favoritesGallery.insertAdjacentHTML('afterbegin', createMarkupFavorites());
 
function createMarkupFavorites({
  _id,
  bodyPart,
  name,
  target,
  burnedCalories,
  time,
}) {
  let isAdded = false;
  const favorites = localStorage.getItem('favorites');

  if (favorites) {
    const favoriteList = JSON.parse(favorites);
    isAdded = favoriteList.some(item => item._id === _id);
  }

  return `
           <ul class="favorites-gallery">
             <li class="favorites-gallery-item">
                 <span class="workout">workout</span>
                 <a class="favorites-remove" href="#">
                   <button class="favorites-remove-btn" type="button">
                     <img class="favorites-remove-icon" src="./img/icons/all icons/basket.svg" alt="remove-icon"/>
                   </button>
                 </a>
                 <a class="favorites-start" href="#">
                   <button class="favorites-start-btn" type="button">Start
                     <img class="favorites-start-icon" src="./img/icons/all icons/line.svg" alt="start-icon"/>
                   </button>
                 </a>
                 <img class="favorites-man-icon" src="../img/icons/all icons/Man.svg" alt="man-icon"/>
                 <h3 class="favorites-item-title">${name}</h3>
                 <ul class="favorites-gallery-info">
                   <li class="favorites-gallery-info-item">Burned calories: <span class="descr-span">${burnedCalories} / ${time} min</span></li>
                   <li class="favorites-gallery-info-item">Body part: <span class="descr-span">${bodyPart}</span></li>
                   <li class="favorites-gallery-info-item">Target: <span class="descr-span">${target}</span></li>
                 </ul>
             </li>
           </ul>`;
}
// const queryParams = {
//   _id,
//   name,
//   page: 1,
//   perPage: 9,
// };
console.dir(refs.addToFavoriteBtn)
refs.addToFavoriteBtn.addEventListener("click", addItemToFavorites);
// onRemoveBtn.addEventListener("click", removeItemFromFavorites);
// onStartBtn.addEventListener("click", showModal);


//Add to Favorites after click on button 'Add to Favotites' at Modal
function addItemToFavorites(event) {
  event.preventDefault();
  
  const LS_KEY_FAVORITES = "Array of Favorites";
  const arrayFavorites = event.currentTarget.elements._id.value();
  
  searchExerciseByID();
  localStorage.setItem(LS_KEY_FAVORITES, JSON.stringify(arrayFavorites));
}
  
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

// //   function createMarkupFavorites({
//   _id,
//   bodyPart,
//   equipment,
//   gifUrl,
//   name,
//   target,
//   description,
//     burnedCalories,
//   time,
//   popularity,
// })  {
//   return favorites
//     .map(
//       ({
//       }) =>
//         `
//           <li class="favorites-gallery-item">
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
//             </li>`
//     )
//       .join('');
//     refs.favoritesGallery.insertAdjacentHTML('afterbegin', createMarkupFavorites(res.favorites);
// }
// 
 


//  function scrollBy() {
//    window.scrollBy({
//      top:
//        2 *
//        document.querySelector('.favorites-gallery-item').getBoundingClientRect().height,
//      behavior: 'smooth',
//    });
// }
 


