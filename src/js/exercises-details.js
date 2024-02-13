// ! imports
//import Pagination from 'tui-pagination'; 
// import 'tui-pagination/dist/tui-pagination.min.css';
import axios from 'axios';
const BASE_URL = 'https://energyflow.b.goit.study/api';
const ENDPOINT_EXERCISES = 'exercises';
import { hide, show, showLoader, hideLoader } from "./services/visibility";
import { refs } from './templates/refs.js';
import isiToast from './services/isiToast.js';
// import { exercisesParamFilter, exercisesParamName } from '../exercises'; - wait for push
// import { getCardInfo } from './modal-menu.js';

// ! add listeners
refs.searchForm.addEventListener('submit', handleSearch); // спочатку відкрити, потім закрити, по днфолту в нього має бути клас хіден
// refs.containerFilteredCards // mine div for all exept form - спочатку відкрити, потім закрити, по днфолту в нього має бути клас хіден
refs.resultContainer.addEventListener('click', handleClickOnCardStart)


// ! temporarely consts
const exercisesParamFilter = "bodypart";
// const exercisesParamFilter = "muscles";
// const exercisesParamFilter = "equipment";
const exercisesParamName = 'waist';
// const exercisesParamName = 'barbell';

const queryParams = {
  filter: exercisesParamName,
  keyword: '',
  page: 1,
  limit: 9,
  totalItems: 0,
};

let exerciseId;

// Я взяла з мейнApi

const ENDPOINT_FILTER = 'exercises';

async function searchExerciseByFilters({ keyword}) {
  const response = await axios.get(
    `${BASE_URL}/${ENDPOINT_EXERCISES}`,
    {
      params: {
        [exercisesParamFilter]: exercisesParamName,
        keyword: keyword, 
      },
    }
  );
  return response.data;
}

// Це кінець того, що я взяла

// ! work with title
// refs.exercisesHeader.textContent = `/${exercisesParamName}`;

// ! Василина викликає мою функцію renderExerciseByFilterName();
renderExerciseByFilterName();
async function renderExerciseByFilterName() {

  // here need to create mine container

  // ! need or not
  // refs.resultContainer.innerHTML = ''; 

  show(refs.searchForm)
  showLoader(refs.loaderModal);

  if (!exercisesParamFilter || !exercisesParamName ) {
    isiToast.noResults();
    show(refs.textResult);
    hideLoader(refs.loaderModal);
    return
  }

  try {
    const { results, totalPages } = await searchExerciseByFilters(queryParams);
    console.log(results);
    console.log(totalPages);

    // there is almost the same as if (!exercisesParamFilter || !exercisesParamName )
    if (!results || totalPages === 0) {
      isiToast.noResults();
      show(refs.textResult);
      hideLoader(refs.loaderModal);
      return
    }

    //! має появитися частинка заголовка, але не я, а Василина

    // ! create markup for the first time or once

    let markup = '';
    for (const result of results) {
      markup += createCardsOfExercises(result);
    }
    refs.resultContainer.innerHTML = markup;
    
    if (totalPages > 1) {
      const total = queryParams.limit * totalPages;
      queryParams.page += 1
      console.log(total);

      // ! Pagination start
      //createPagination(total);
    } else {
      isiToast.endOfSearchIsiToast();
    }
  
  } catch (error) {
    console.error('Error fetching images:', error);
    isiToast.apiIsiToastError();
  } finally {
    hideLoader(refs.loaderModal);
    hide(paginationContainer);
    // ! I have to removeListener from another person
  }
}

// ! Works with search button
async function handleSearch(event) {
  event.preventDefault();
  refs.resultContainer.innerHTML = '';

  const formQuery = event.currentTarget;
  queryParams.keyword = formQuery.elements.query.value.trim();
  console.log(queryParams.keyword);

  if (!queryParams.keyword) {
    isiToast.noResults();
    show(refs.textResult);
    hideLoader(refs.loaderModal);
    return
  }

  try {
    console.log(queryParams);
    const { results } = await searchExerciseByFilters(queryParams);
    
    console.log(results);

    // ! create markup for the first time or once

    let markupFilteredCards = '';
    for (const result of results) {
      markupFilteredCards += createCardsOfExercises(result);
    }
    refs.resultContainer.innerHTML = markupFilteredCards;
      
  } catch (error) {
    console.error('Error fetching images:', error);
    isiToast.apiIsiToastError();
  } finally {
    refs.searchForm.reset();
    hide(paginationContainer);
  }
}

// ! Create markup

function createCardsOfExercises({ _id, rating, name, burnedCalories, time, bodyPart, target }) {
  return `<li class="filtered-card-item">
        <div class="card-box-workout">
          <div class="card-box-info">
            <div class="filtered-workout">Workout</div>
            <div class="card-box-rating">
              <p class="filtered-rating">${Math.round(rating)}</p>
              <img class="filteered-star" href="#" alt="star" height="35"></img>
            </div>
          </div>
          <button type="submit" data-id=${_id} class="to-favorites-start">Start</button><a/>
        </div>
        <div class="card-box-title">
          <img class="filteered-athlete" href="#" alt="athlete" height="35"></img>
          <h3 class="filteered-title">${name}</h3>
        </div>
        <ul class="filtered-description">
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Burned calories: <spam class="filtered-descr-value">${burnedCalories} / ${time} min</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Body part: <spam class="filtered-descr-value">${bodyPart}</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Target: <spam class="filtered-descr-value">${target}</spam></p>
          </li>
        </ul>  
  </li>
  `;
}

// function createCardsOfExercises(results, resultContainer) {
//   const markup = results
//     .map(
//       ({ _id, rating, name, burnedCalories, time, bodyPart, target }) => `<li class="filtered-card-item">
//         <div class="card-box-workout">
//           <div class="card-box-info">
//             <div class="filtered-workout">Workout</div>
//             <div class="card-box-rating">
//               <p class="filtered-rating">${Math.round(rating)}</p>
//               <img class="filteered-star" href="#" alt="star" height="35"></img>
//             </div>
//           </div>
//           <button type="submit" data-id=${_id} class="to-favorites-start">Start</button><a/>
//         </div>
//         <div class="card-box-title">
//           <img class="filteered-athlete" href="#" alt="athlete" height="35"></img>
//           <h3 class="filteered-title">${name}</h3>
//         </div>
//         <ul class="filtered-description">
//           <li class="filtered-descr-item">
//             <p class="filtered-descr-title">Burned calories: <spam class="filtered-descr-value">${burnedCalories} / ${time} min</spam></p>
//           </li>
//           <li class="filtered-descr-item">
//             <p class="filtered-descr-title">Body part: <spam class="filtered-descr-value">${bodyPart}</spam></p>
//           </li>
//           <li class="filtered-descr-item">
//             <p class="filtered-descr-title">Target: <spam class="filtered-descr-value">${target}</spam></p>
//           </li>
//         </ul>  
//   </li>
//   `
//     )
//     .join('');

//   resultContainer.insertAdjacentHTML('beforeend', markup);
  
// }


//! Pagination
//const paginationContainer = document.getElementById('pagination-container');
//function createPagination(totalPages, total) {
    
    
    // Перевірка на те, чи потрібно створювати пагінацію
    if (totalPages > 1) {
        // Створюємо новий екземпляр пагінації
        const pagination = new Pagination(paginationContainer, {
            totalItems: total, // Загальна кількість елементів, які будуть розділені по сторінках
            itemsPerPage: 1, // Кількість елементів на одній сторінці
            visiblePages: 3, // Кількість видимих сторінок в пагінації
            page: 1, // Початкова сторінка
            centerAlign: true, // Вирівнювання пагінації по центру
            template: {
                // Налаштування шаблону кнопок пагінації
                page: '<a class="tui-pagination-btn">{{page}}</a>',
                currentPage: '<strong class="tui-pagination-btn tui-pagination-active">{{page}}</strong>',
                moveButton: '<a class="tui-pagination-btn tui-pagination-control"></a>',
                disabledMoveButton: '<a class="tui-pagination-btn tui-pagination-control disabled"></a>',
                moreButton: '<a class="tui-pagination-btn tui-pagination-ellipsis" aria-label="More"></a>'
            }
        });
    } else {
        // Якщо сторінка одна, пагінація не потрібна
      paginationContainer.innerHTML = ''; // Очищуємо контейнер
    }
//}

// async function handlePagination(event) {
//     if (event.target.tagName === 'A' && event.target.classList.contains('tui-pagination-btn')) {
//         const pageNum = parseInt(event.target.textContent);
//         console.log(pageNum);
        
//         queryParams.page = pageNum;

//         try {
//             const { results, totalPages } = await searchExerciseByFilters(queryParams);

//             if (!results || totalPages === 0) {
//                 isiToast.noResults();
//                 show(refs.textResult);
//                 hideLoader(refs.loaderModal);
//                 return;
//             }

//             //refs.resultContainer.innerHTML = '';
//             createCardsOfExercises(results, refs.resultContainer);
//         } catch (error) {
//             console.error('Error fetching images:', error);
//             isiToast.apiIsiToastError();
//         } finally {
//             hideLoader(refs.loaderModal);
//         }
//     }
// }





    // ! Function for create modal  Створити делегування подій на лішку
    
function handleClickOnCardStart(evt) {
      
  console.log(evt);
  console.log(evt.target.closest('ul').dataset.id);
  
//       exerciseId = evt.currentTarget.dataset.id;
//       console.log(exerciseId);
//   evt.preventDefault();
// console.log('hi');
//   console.log(evt.tarlet.dataset.id);
  
  // console.log(evt.target.closest('ul').dataset.exercises);
  //     if (evt.target.closest('ul').dataset.exercises) {
  //       getCardInfo();
  //   }
    
} 



export { renderExerciseByFilterName };
export { exerciseId };
  
// ! will delete in future
// export {exercisesParamFilter, exercisesParamName }
