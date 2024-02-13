import axios from 'axios';
import { hide, show } from "./services/visibility";
import { refs } from './templates/refs.js';
// import { onClickCardContent } from './modal-menu.js';


//  Quote of the Day if quote is not part of Favorites page
const LS_KEY_QUOTE = 'quoteResponse';
const quoteFromLS = JSON.parse(localStorage.getItem(LS_KEY_QUOTE));
console.log(quoteFromLS);

function displayQuoteOnPage(quoteData) {
  const quoteText = document.querySelector('.quote-text');
  const quoteAuthor = document.querySelector('.quote-author');
  quoteText.textContent = quoteData.quote;
  quoteAuthor.textContent = quoteData.author;
}

// Favorites gallery

const BASE_URL_FAVORITES = 'https://energyflow.b.goit.study/api/exersises/';

async function searchExerciseByID({ id}) {
  const response = await axios.get(
    `${BASE_URL_FAVORITES}`,
    {
      params: {
        _id: id,
      },
    }
  );
  return response.data;
}

/// Create the Favorites page

const LS_KEY_FAVORITES = "favorites";


async function createGalleryFromLS(event) {
  event.preventDefault();
  
  refs.favoritesGallery.innerHTML = '';
  refs.favoritesMessage.style.display = 'none';
  
  try {
    const itemsFromLS = await JSON.parse(localStorage.getItem(LS_KEY_FAVORITES));
    if (
      !itemsFromLS ||
      !Array.isArray(itemsFromLS) ||
      itemsFromLS.length === 0
    ) {
      console.log('No items found in local storage or data is invalid.');
      refs.favoritesMessage.style.display = 'block';
    }

    refs.favoritesGallery.insertAdjacentHTML("afterbegin", createMarkupFavorites(itemsFromLS));
    
    if (itemsFromLS > 9) {
      scrollBy(); 
    }
    refs.onRemoveBtn.forEach.addEventListener('click', removeObjectFromLocalStorage);      
    refs.onStartBtn.forEach.addEventListener('click', handleStartButtonClick);

    } catch (error) {
      console.error('Error creating gallery from local storage:', error);
    } finally {
      console.log();
      await refreshGallery();
    }
  }


    // Refresh the gallery by updating the displayed items
  async function refreshGallery() {
    refs.favoritesMessage.style.display = 'none';
    
      try {
        const itemsFromLS = await JSON.parse(localStorage.getItem(LS_KEY_FAVORITES));
        
        if (!Array.isArray(itemsFromLS) || itemsFromLS.length === 0) {
          console.log('Array in local storage is empty or does not exist.');
          refs.favoritesMessage.style.display = 'block';
      }
       
      refs.favoritesGallery.innerHTML = '';

      itemsFromLS.forEach(itemsFromLS => {
        refs.favoritesGallery.insertAdjacentHTML('afterbegin', createMarkupFavorites(itemsFromLS));
        
        refs.onRemoveBtn.forEach.addEventListener('click', removeObjectFromLocalStorage);      
        refs.onStartBtn.forEach.addEventListener('click', handleStartButtonClick);
      });

      console.log('Gallery refreshed successfully.');
    } catch (error) {
      console.error('Error refreshing gallery:', error);
    }
  }

    // Scroll for container favorites-gallery for desktop and tablet
    function scrollBy() {
      refs.favoritesGallery.scrollTo({
        top: refs.favoritesGallery.scrollHeight,
        behavior: 'smooth',
      });
    }
  

// Remove an exersise from an array stored in local storage

async function removeObjectFromLocalStorage(idToRemove) {
  try {
    const itemsFromLS = await JSON.parse(localStorage.getItem(LS_KEY_FAVORITES));

        if (!Array.isArray(itemsFromLS) || itemsFromLS.length === 0) {
          console.log('Array in local storage is empty or does not exist.');
          return;
        }
    
        itemsFromLS = itemsFromLS.filter(item => item._id !== idToRemove);
       
        localStorage.setItem(LS_KEY_FAVORITES, JSON.stringify(itemsFromLS));
        console.log(`Object with ID ${idToRemove} removed from local storage.`);
        
        refs.onRemoveBtn.removeEventListener('click', removeObjectFromLocalStorage);      
             
        await refreshGallery();
    
    } catch (error) {
        console.error('Error removing object from local storage:', error);
    }
}


// Add to Favorites after click on button 'Add to Favotites' at Modal

//  refs.addToFavoritesBtn.addEventListener('click', addItemToFavorites);

//   async function addItemToFavorites(event) {
//     event.preventDefault();

//     const element = event.target.closest(".ex-add-btn");
//     const elementId = element.dataset.id;
//       try {
//         const exercise = await searchExerciseByID(elementId);
//         let favorites = JSON.parse(localStorage.getItem(LS_KEY_FAVORITES)) || [];
//         const isDuplicate = favorites.some(favorite => favorite._id === exercise._id);

//         if (!isDuplicate) {
//            favorites.push(exercise);
//            localStorage.setItem(LS_KEY_FAVORITES, JSON.stringify(favorites));
//            await refreshGallery();
//            console.log("Exercise added to favorites:", exercise);
//         } else {
//            console.log("Exercise is already in favorites.");
//         }
//     } catch (error) {
//       console.error("Error adding exercise to favorites:", error);
//       apiIsiToastError();
//     }
// }



// After click  "Start" arrow
function handleStartButtonClick(event) {
  event.preventDefault();
  // Open the modal
  // onClickCardContent();
        
  refs.onStartBtn.removeEventListener('click', handleStartButtonClick);
}

// function createMarkupFavorites({ _id, bodyPart, name, target, burnedCalories, time }) {
//       let isAdded = false;
//       const favorites = localStorage.getItem(LS_KEY_FAVORITES);

//       if (favorites) {
//         const favoritesFromLS = JSON.parse(favorites);
//         isAdded = favoritesFromLS.some(item => item._id === _id);
//       }
//       return `
//         <li class="favorites-gallery-item">
//             <span class="workout">workout</span>
//             <a class="favorites-remove" href="#">
//                 <button class="favorites-remove-btn" type="button">
//                     <img class="favorites-remove-icon" src="../img/icons/symbole-defs.svg#icon-basket" alt="icon-basket"/>
//                 </button>
//             </a>
//             <a class="favorites-start" href="#">
//                 <button class="favorites-start-btn" type="button">Start
//                     <img class="favorites-start-icon" src="../img/icons/symbole-defs.svg#icon-line" alt="start-icon"/>
//                 </button>
//             </a>
//             <img class="favorites-man-icon" src="../img/icons/symbol-defs.svg#icon-Man" alt="man-icon"/>
//             <h3 class="favorites-item-title">${name}</h3>
//             <ul class="favorites-gallery-info">
//                 <li class="favorites-gallery-info-item">Burned calories: <span class="descr-span">${burnedCalories} / ${time} min</span></li>
//                 <li class="favorites-gallery-info-item">Body part: <span class="descr-span">${bodyPart}</span></li>
//                 <li class="favorites-gallery-info-item">Target: <span class="descr-span">${target}</span></li>
//             </ul>
//         </li>`;
//     }

function createMarkupFavorites(data) {
  const markup = data.map(
    ({ _id, bodyPart, name, target, burnedCalories, time }) => `
        <li class="favorites-gallery-item" data-id="${_id}" id="card-${_id}">
           <div class="favorites-item">
              <div class="favorites-item-wrapper">
                <span class="workout">WORKOUT</span>
                <button class="favorites-remove-btn">
                  <svg class="favorites-remove-icon" width="12" height="13">
                    <use href="../img/icons/symbole-defs.svg#icon-basket"></use>
                  </svg>
                </button>
                <a class="favorites-start" href="" data-id="${_id}">
                  <span>Start</span>
                  <svg class="favorites-start-icon" width="14" height="14">
                    <use href="../img/icons/symbole-defs.svg#icon-line"></use>
                  </svg>
                </a>
              </div>
              <div class="favorites-item-info">
                <div class="favorites-man-icon">
                  <svg class="icon-Man" width="14" height="14">
                    <use href="../img/icons/symbol-defs.svg#icon-Man""></use>
                  </svg>
                  <h3 class="favorites-item-title">${name.charAt(0).toUpperCase() + name.slice(1)}</h3>
                </div>
              </div>
              <div class="favorites-item-info-wrapper">
                <ul class="favorites-gallery-info">
                  <li class="favorites-gallery-info-item">Burned calories: <span class="descr-span">${burnedCalories} / ${time} min</span></li>
                  <li class="favorites-gallery-info-item">Body part: <span class="descr-span">${bodyPart.charAt(0).toUpperCase() + bodyPart.slice(1)}</span></li>
                  <li class="favorites-gallery-info-item">Target: <span class="descr-span">${target.charAt(0).toUpperCase() + target.slice(1)}</span></li>
                </ul>
              </div>
           </div>
        </li>`)
    .join('');
  }


  