import axios from "axios";

import { hide, show } from "./services/visibility";
import { refs } from "./templates/refs.js";



// //  Quote of Day if it is not part of favorites

// const LS_KEY_QUOTE = "quoteResponse";
// const quoteFromLS = JSON.parse(localStorage.getItem(LS_KEY_QUOTE));

// function displayQuoteOnPage(quoteData) {
//   const quoteText = document.querySelector('.quote-text');
//   const quoteAuthor = document.querySelector('.quote-author');
//   quoteText.textContent = quoteData.quote;
//   quoteAuthor.textContent = quoteData.author;
// }


     
// Create Favorites page
async function createFavoritesGallery() {
  
  try {
      const itemsFromLS = await JSON.parse(localStorage.getItem('exerciseFavorites'));  
console.log(itemsFromLS);
      // if (!itemsFromLS) {
      //   console.log('')
      // }else if  (itemsFromLS.length === 0) {
      //     console.log('Array in local storage is empty or does not exist.');
       
           
        const { results, totalPages } = await searchExerciseByFilters({
            filter: filter,
            name: name,
            keyword: getParams.keyword,
            limit: getParams.limit,
            page: getParams.page
        });

        console.log(totalPages);
        console.log(results);
        console.log(getParams.page);

        refs.favoritesGallery.innerHTML = '';
      itemsFromLS.forEach(item => {
      const markup = createMarkupFavorites(item);
         });

       
    } catch (error) {
      console.error('Error refreshing gallery:', error);
      
    }
}

    
refreshGallery()
// Refresh the gallery by updating the displayed items
// async function refreshGallery() {
//     try {
      
//         if (!Array.isArray(itemsFromLS) || itemsFromLS.length === 0) {
//           console.log('Array in local storage is empty or does not exist.');
          
//             return;
//         }
       
//         refs.favoritesGallery.innerHTML = '';

//         itemsFromLS.forEach(item => {
//         const markup = createMarkupFavorites(item);
//           return markup;
        
//         });

//         console.log('Gallery refreshed successfully.');
//     } catch (error) {
//       console.error('Error refreshing gallery:', error);
      
//     }
// }

// Remove an exersise from an array stored in local storage

// refs.onRemoveBtn.addEventListener('click', removeObjectFromLocalStorage);

// async function removeObjectFromLocalStorage(idToRemove) {
//     try {
//         let itemsFromLS = JSON.parse(localStorage.getItem('exerciseFavorites'));

//         if (!Array.isArray(itemsFromLS) || itemsFromLS.length === 0) {
//             console.log('Array in local storage is empty or does not exist.');
//             return;
//         }
//         itemsFromLS = itemsFromLS.filter(item => item._id !== idToRemove);
//         localStorage.setItem('exersiseFavorites', JSON.stringify(itemsFromLS));
//         console.log(`Object with ID ${idToRemove} removed from local storage.`);
//         await refreshGallery();
//     } catch (error) {
//         console.error('Error removing object from local storage:', error);
//     }
// }



// refs.onStartBtn.addEventListener('click', handleStartButtonClick)

function handleStartButtonClick(evt) {
    if (!evt.target.dataset.id) {
        return
    }
    // showLoader(refs.loaderModal);
    const exerciseId = evt.target.dataset.id;
  hide(refs.favoritesGallery);
    createModalMenu(exerciseId);
}

// Creating a plug when the LS is empty

const markupMessageBlock =
  `<div class="favorites-message-block">
      <div class="plug-icon">
        <img class="favorites-box-img" src="./img/icons/dumbbell.png" alt="dumbbell" />
      </div >
      <div class="favorites-box-paragraf">
          It appears that you have not added any exercises to your  favorites yet.To get started, you can add exercises that you like to your favorites for easier access in the future.
      </div>
    </div>`;


function showMessageBlock() {
  refs.messageBlock.innerHTML = markupMessageBlock;
}

       
function createMarkupFavorites({ _id, bodyPart, name, target, burnedCalories, time }) {
 return markup `
        <li class="favorites-gallery-item" data-id="${_id}" id="card-${_id}">
           <div class="favorites-item">
              <div class="favorites-item-wrapper">
                <span class="workout">Workout</span>
                <button type="button" data-id=${_id} data-favorites-remove class="favorites-remove-btn"></button>
                  <svg class="favorites-remove-icon" width="12" height="13">
                    <use href="./img/icons/symbol-defs.svg#icon-basket"></use>
                  </svg>
                </button>
                <button class="favorites-start" type="submit" data-id="${_id} data-modal-open>
                  <span>Start</span>
                  <svg class="favorites-start-icon" width="14" height="14">
                    <use href="./img/icons/symbol-defs.svg#icon-arrow-top-right"></use>
                  </svg>
                </button>
              </div>
              <div class="favorites-item-info">
                <div class="favorites-man-icon">
                  <svg class="icon-Man" width="14" height="14">
                    <use href="./img/icons/symbol-defs.svg#icon-Man""></use>
                  </svg>
                  <h3 class="favorites-item-title">${name.charAt(0).toUpperCase() + name.slice(1)}</h3>
                </div>
              </div>
              <div class="favorites-item-info-wrapper">
                <ul class="favorites-gallery-info">
                  <li class="favorites-gallery-info-item">Burned calories: <span class="favorites-item-value">${burnedCalories} / ${time} min</span></li>
                  <li class="favorites-gallery-info-item">Body part: <span class="favorites-item-value">${bodyPart.charAt(0).toUpperCase() + bodyPart.slice(1)}</span></li>
                  <li class="favorites-gallery-info-item">Target: <span class="favorites-item-value">${target.charAt(0).toUpperCase() + target.slice(1)}</span></li>
                </ul>
              </div>
           </div>
        </li>`};
  // refs.messageBlock.innerHTML = '';
  // refs.messageBlock.prepend(markup);
  refs.favoritesGallery.insertAdjacentHTML('afterbegin', markup);
}

//  Scroll for favorites-gallery

// function showScroll() {
// const scrollElement = document.getElementById('.favorites-gallery');
// element.scrollIntoView({
//   behavior: 'smooth', 
//   block: 'start',     
//   inline: 'start'     
// });
//   if (storedArray.length > 8)
//     refs.favoritesGallery.scrollTo({
//       top: refs.favoritesGallery.scrollHeight,
//       behavior: 'smooth',
//     }
// )}
// function hideScroll() {
//   favoritesGallery.classList.remove('scroll-on');
//   favoritesGallery.classList.remove('favorites-scroll');
//   document.querySelector('.favorites-gallery').classList.remove('favorites-scroll');
// }