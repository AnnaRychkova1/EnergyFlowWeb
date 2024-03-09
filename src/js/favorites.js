// 1. Створи пустий масив, куди ти будеш записувати дані.
// 2. Потім звернися до локал сторадж
// 3. Візьми звідти дані і розпарсь їх
// 4. Ти отримаєш  масив об"єктів, як про книги чи про покемонів було.
// 5. Перевір, чи є в тебе вже такий об"єкт.
// 6. Додай його до своєї галерей
// 7. Тепер побудуй їх як в моїй функції я будую
// 8. Створи подію нажимання на кнопку
// 9. при натисканні на кнопку
// ПРи натисканні відкривай модальне вікно як у Маши.
// 10.  При відкритому вікні всі кнопки мають текстконтент Ремув фром фаворит
// 11. Знову еадавай кнопці слухача, при кліну записуй цей об"єкт в масив сторадж, попередньо застрінгифай

// Ти пишеш свою, але дуже схожу. Мої параметри це фільтр і ім"я, а твої це фйді. Я роблю запит на сервер, а ти ні. Я будую маркап за масивом об"єктів, а ти за одним об"єктом.


const LS_KEY = 'exerciseFavorites';

//======= Temporary send array to LS =====================================

const array = [
  {
    "_id": "64f389465ae26083f39b17a5",
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://ftp.goit.study/img/power-pulse/gifs/0006.gif",
    "name": "alternate heel touchers",
    "target": "abs",
    "description": "This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.",
    "rating": 3.99,
    "burnedCalories": 116,
    "time": 3,
    "popularity": 9276
  },
  {
    "_id": "64f389465ae26083f39b17e2",
    "bodyPart": "upper arms",
    "equipment": "barbell",
    "gifUrl": "https://ftp.goit.study/img/power-pulse/gifs/0070.gif",
    "name": "barbell preacher curl",
    "target": "biceps",
    "description": "Located on the front part of the upper arm, the biceps are responsible for elbow flexion and supination of the forearm. Exercises that target biceps include bicep curls, hammer curls, and chin-ups.",
    "rating": 3,
    "burnedCalories": 188,
    "time": 3,
    "popularity": 107
  },
  {
    "_id": "64f389465ae26083f39b1b69",
    "bodyPart": "upper arms",
    "equipment": "cable",
    "gifUrl": "https://ftp.goit.study/img/power-pulse/gifs/1643.gif",
    "name": "cable seated overhead curl",
    "target": "biceps",
    "description": "Located on the front part of the upper arm, the biceps are responsible for elbow flexion and supination of the forearm. Exercises that target biceps include bicep curls, hammer curls, and chin-ups.",
    "rating": 3,
    "burnedCalories": 233,
    "time": 3,
    "popularity": 59
  }
]
 
localStorage.setItem(LS_KEY, JSON.stringify(array))

//=======================================================
// import axios from "axios";

// import { hide, show } from "./services/visibility";
import { refs } from "./templates/refs.js";
import icons from '/img/icons/symbol-defs.svg';

const itemsFromLS = JSON.parse(localStorage.getItem(LS_KEY));    
console.log(itemsFromLS)

// Creating a plug when the LS is empty
const createMarkupMessageBlock = `<div class="favorites-box">
            <h2 class="favorites-box-title">Favorites</h2>
            <div class="favorites-box-block block">
              <img
                class="favorites-box-img"
                src="./img/icons/dumbbell.png"
                alt="dumbbell"
              />
              <p class="favorites-box-paragraf">
                It appears that you haven't added any exercises to your
                favorites yet. To get started, you can add exercises that you
                like to your favorites for easier access in the future.
              </p>
            </div>
            </div> `;
function showMessageBlock() {
  refs.favoritesBox.innerHTML = createMarkupMessageBlock;
}


// Create Favorites page
// async function createFavoritesGallery() {
 

if (!itemsFromLS || itemsFromLS.length === 0) {
    showMessageBlock()
    console.log('Array in local storage is empty or does not exist.');
      
} else {
  createMarkupGallery(itemsFromLS)
    console.log('Array in local storage');
    }
 
    
    
    
    
    // refs.favoritesGallery.innerHTML = '';            
    // const { results, totalPages } = await searchExerciseByFilters({
    //     filter: filter,
    //     name: name,
    //     keyword: getParams.keyword,
    //     limit: getParams.limit,
    //     page: getParams.page
    //   });

    //   console.log(totalPages);
    //   console.log(results);
    //   console.log(getParams.page);

      
      // itemsFromLS.forEach(item => {
      //   const markup = createMarkupFavorites(item);
      // });

       
    
  // }

// createFavoritesGallery().then(data => console.log(data))
  


    
// refreshGallery()

//==============================================================================
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

// function handleStartButtonClick(evt) {
//     if (!evt.target.dataset.id) {
//         return
//     }
//     // showLoader(refs.loaderModal);
//     const exerciseId = evt.target.dataset.id;
//   hide(refs.favoritesGallery);
//     createModalMenu(exerciseId);
// }


//!===========================================================================================================
// const list = document.querySelector('.favorites-gallery');

// async function fetchGallery() {
//    return itemsFromLS = await JSON.parse(localStorage.getItem('exerciseFavorites'));
//   console.log(itemsFromLS);
  
// }
// function fetchGallery() {
//   return fetch('https://energyflow.b.goit.study/api/exercises/?id={_id}').then(response => {
//     if (!response.ok) {
//       throw new Error ('Response error with status ${response.status}')
      
//     }
//     return response.json
//   })
// }

// fetchGallery().then(data => {
//   console.log(data);
//   list.insertAdjacentHTML("beforeend", createMarkupGallery(data))
// })
// .catch((err) => console.log(err));
         

   
function createMarkupGallery(arr) {
  refs.favoritesGallery.innerHTML = arr
    .map(({ bodyPart, name, target, burnedCalories, time, _id }) => {
      return `<li class="filtered-card-item">
         <div class="card-box-workout">
           <div class="card-box-info">
             <div class="filtered-workout">Workout</div>
              <div class="card-box-basket">
                <button type="button" data-id=${_id} class="favorites-remove-btn">
                  <svg class="favorites-remove-icon" width="12" height="13">
                    <use href="./img/icons/symbol-defs.svg#icon-basket"></use>
                  </svg>
                </button>
              </div>
              </div>
                <button class="to-favorites-start" type="click" data-id=${_id}>
            <span data-id=${_id}>Start</span>
            <svg data-id=${_id} class="filtered-start" width="16" height="16">
              <use data-id=${_id} href="${icons}#icon-arrow-right"></use>
            </svg>
          </button> 
        </div>

        <div class="card-box-title">
          <div class="filtered-athlete-box">
            <svg class="filtered-athlete" width="16" height="16">
              <use href="${icons}#icon-Man"></use>
            </svg>
          </div>
          <h3 class="filtered-title">${name}</h3>
        </div>

        <ul class="filtered-description">
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Burned calories: <spam class="filtered-descr-value">${burnedCalories} / ${time} min</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Body part: <spam class="filtered-descr-value value-capitalized">${
              bodyPart.charAt(0).toUpperCase() + bodyPart.slice(1)
            }</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Target: <spam class="filtered-descr-value value-capitalized">${
              target.charAt(0).toUpperCase() + target.slice(1)
            }</spam></p>
          </li>
        </ul>
  </li>`;
       })
    .join('');
  refs.favoritesContant.innerHTML = '';
  refs.favoritesContant.prepend(refs.favoritesGallery);
}
  // refs.messageBlock.innerHTML = '';
  // refs.messageBlock.prepend(markup);
  // refs.favoritesGallery.insertAdjacentHTML('afterbegin', markup);

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