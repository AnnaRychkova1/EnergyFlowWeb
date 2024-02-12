import axios from "axios";
// import { apiIsiToastError } from './services/isiToast.js';
import { searchExerciseByID } from "./services/mainApi.js";
// import { hide, show } from "./services/visibility";
import { refs } from "./templates/refs.js";



//  Quote of Day
const LS_KEY_QUOTE = "quoteResponse";
const quoteFromLS = JSON.parse(localStorage.getItem(LS_KEY_QUOTE));
console.log(quoteFromLS);


function displayQuoteOnPage(quoteData) {
  const quoteText = document.querySelector('.quote-text');
  const quoteAuthor = document.querySelector('.quote-author');
  quoteText.textContent = quoteData.quote;
  quoteAuthor.textContent = quoteData.author;
}

/// Create Favorites page

const LS_KEY_FAVORITES = "favorites";

async function createGalleryFromLS(LS_KEY_FAVORITES, createMarkupFavorites) {
  try {
    const itemsFromLS = await JSON.parse(localStorage.getItem(LS_KEY_FAVORITES));

    if (!itemsFromLS || !Array.isArray(itemsFromLS) || itemsFromLS.length === 0) {
      console.log('No items found in local storage or data is invalid.');
      apiIsiToastError();
      return;
    }
        
    refs.favoritesGallery.innerHTML = '';
        
    
    refs.favoritesGallery.appendChild(refs.galleryItem);
  

  // if (itemsFromLS.length === 0) {
  //   console.log(`There are no exercises in favorites.`);
  //   apiIsiToastError();
        
  } catch (error) {
    console.error('Error creating gallery from local storage:', error);
  } finally {
    console.log();
 refreshGallery();
  }
}


// Refresh the gallery by updating the displayed items
async function refreshGallery() {
    try {
        const storedArray = JSON.parse(localStorage.getItem('favorites'));
        if (!Array.isArray(storedArray) || storedArray.length === 0) {
          console.log('Array in local storage is empty or does not exist.');
          apiIsiToastError();
            return;
        }
       
        refs.favoritesGallery.innerHTML = '';

        storedArray.forEach(item => {
        const markup = createMarkupFavorites(item);

        refs.favoritesGallery.insertAdjacentHTML('afterbegin', markup);
        });

        console.log('Gallery refreshed successfully.');
    } catch (error) {
      console.error('Error refreshing gallery:', error);
      apiIsiToastError();
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
// refs.onRemoveBtn.addEventListener('click', removeObjectFromLocalStorage);
async function removeObjectFromLocalStorage(idToRemove) {
    try {
        let storedArray = JSON.parse(localStorage.getItem(LS_KEY_FAVORITES));

        if (!Array.isArray(storedArray) || storedArray.length === 0) {
            console.log('Array in local storage is empty or does not exist.');
            return;
        }
        storedArray = storedArray.filter(item => item._id !== idToRemove);
        localStorage.setItem(LS_KEY_FAVORITES, JSON.stringify(storedArray));
        console.log(`Object with ID ${idToRemove} removed from local storage.`);
        await refreshGallery();
    } catch (error) {
        console.error('Error removing object from local storage:', error);
    }
}


// Add to Favorites after click on button 'Add to Favotites' at Modal

  
async function addItemToFavorites(event) {
    event.preventDefault();

    const element = event.target.closest(".ex-add-btn");
    const elementId = element.dataset.id;
      try {
        const exercise = await searchExerciseByID(elementId);
        let favorites = JSON.parse(localStorage.getItem(LS_KEY_FAVORITES)) || [];
        const isDuplicate = favorites.some(favorite => favorite._id === exercise._id);

        if (!isDuplicate) {
           favorites.push(exercise);
           localStorage.setItem(LS_KEY_FAVORITES, JSON.stringify(favorites));
           await refreshGallery();
           console.log("Exercise added to favorites:", exercise);
        } else {
           console.log("Exercise is already in favorites.");
        }
    } catch (error) {
      console.error("Error adding exercise to favorites:", error);
      apiIsiToastError();
    }
}

//  refs.addToFavoritesBtn.addEventListener('click', addItemToFavorites);



// refs.onStartBtn.addEventListener('click', handleStartButtonClick);
// After click  "Start" arrow
function handleStartButtonClick(event) {
    event.preventDefault();
    // Open the modal
    openModal();
}

function openModal() {
    const modal = document.querySelector('.modal');
    modal.classList.add('open');
}


function createMarkupFavorites(data) {
  return data
    .map(
      i =>
        `
        <li class="favorites-gallery-item" data-id="${i._id}" id="card-${i._id}">
           <p class="favorites-item-head">
              <span class="favorites-item-head-wrapper">
                <span class="workout">WORKOUT</span>
                  <button class="favorites-remove-btn">
                    <svg class="favorites-remove-icon" width="12" height="13">
                      <use href="${icons}#icon-trash"></use>
                    </svg>
                  </button>
                  <a class="ex-item-start" href="" data-id="${i._id}">
                    <span>Start</span>
                     <svg class="favorites-arrow-icon" width="14" height="14">
                      <use href="${icons}#icon-arrow-start"></use>
                    </svg>
                  </a>
             </p>
              <span class="favorites-item-title">
                <span class="favorites-man-icon"><svg class="ex-icon-run" width="14" height="14">
                  <use href="${icons}#icon-running_man"></use>
                </svg>
              </span>
              
            <h3 class="favorites-item-title">${
              i.name.charAt(0).toUpperCase() + i.name.slice(1)
            }</h3>
            </span>
            </span>
            <p class="favorites-item-info">
             <span class="ex-info-group"><span class="favorites-item-desc">Burned calories:</span> <span
                class="favorites-item-value">${i.burnedCalories} / ${
          i.time
        } min</span>
        </span>
        <span class="favorites-info-group"><span class="favorites-item-desc">Body part:</span> <span
                class="favorites-item-value">${
                  i.bodyPart.charAt(0).toUpperCase() + i.bodyPart.slice(1)
                }</span>
        </span>
        <span class="favorites-info-group"><span class="favorites-item-desc">Target:</span> <span
                class="favorites-item-value">${
                  i.target.charAt(0).toUpperCase() + i.target.slice(1)
                }</span>
        </span>
    </p>
</li>
        `
    )
    .join('');
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
//                     <img class="favorites-remove-icon" src="../img/icons/symbole-defs.svg#icon-line" alt="icon-basket"/>
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
