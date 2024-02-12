// ! imports
import Pagination from 'tui-pagination'; 
// import 'tui-pagination/dist/tui-pagination.min.css';
import axios from 'axios';
import { hide, show, showLoader, hideLoader } from "./services/visibility";
import { refs } from './templates/refs.js';
// import { searchExerciseByFilters } from "./services/mainApi.js";
import isiToast from './services/isiToast.js';
// import { exercisesParamFilter, exercisesParamName } from '../exercises'; - wait for push
// import { getCardInfo } from './modal-menu.js';


// ! add listeners
refs.searchForm.addEventListener('submit', handleSearch);

const paginationContainer = document.getElementById('pagination-container');
paginationContainer.addEventListener('click', handlePagination);

// ! temporarely consts
const exercisesParamFilter = "bodypart";
// const exercisesParamFilter = "muscles";
// const exercisesParamFilter = "equipment";
const exercisesParamName = 'waist';
// const exercisesParamName = 'barbell';

let exerciseId;
let startButtonFavorite;


// Я взяла з мейну
const BASE_URL = 'https://energyflow.b.goit.study/api';

const ENDPOINT_FILTER = 'exercises';


async function searchExerciseByFilters({ keyword, page = 1, limit }) {
  const response = await axios.get(
    `${BASE_URL}/${ENDPOINT_FILTER}`,
    {
      params: {
        [exercisesParamFilter]: exercisesParamName,
        keyword: keyword,
        limit,
        page,
      },
    }
  );
  return response.data;
}

// Це кінець того, що я взяла

const queryParams = {
  filter: exercisesParamName,
  keyword: '',
  page: 1,
  limit: 9,
  totalItems : 0,
};

// ! work with title
// refs.exercisesHeader.textContent = `/${exercisesParamName}`;

// ! Function for create modal
function handleStartExerciseByClick(evt) {
  exerciseId = evt.currentTarget.dataset.id;
  console.log(exerciseId);
  show(refs.backdrop);
  getCardInfo(exerciseId);                 
  // startExerciseButton.removeEventListener();
}

// const startExerciseButton = document.querySelector('.to-favorites-start');
// startExerciseButton.addEventListener('click', handleStartExerciseByClick);

// ! Василина викликає мою функцію renderExerciseByFilter();
renderExerciseByFilter();
async function renderExerciseByFilter() {

  refs.resultContainer.innerHTML = '';

  show(refs.searchForm)
  showLoader(refs.loaderModal);
  
  queryParams.page = 1;

  if (!queryParams.filter) {
    isiToast.noResults();
    show(refs.textResult);
    hideLoader(refs.loaderModal);
    return
  }

  try {
    const { results, totalPages } = await searchExerciseByFilters(queryParams);
    console.log(results);
    console.log(totalPages);

    // there's the same if !queryParams.filter
    if (!results || totalPages === 0) {
      isiToast.noResults();
      show(refs.textResult);
      hideLoader(refs.loaderModal);
      return
    }

    if (totalPages > 1) {
      const total = queryParams.limit * totalPages;
      console.log(total);
      createPagination(total); 
    } else {
      isiToast.endOfSearch();
    }

   
      // ! create markup for the first time or once
    

    createCardsOfExercises(results, refs.resultContainer);

    // Створити делегування подій на лішку
    const buttonCljsestElemtntLi = document.querySelector('.exercises-gallery');
    buttonCljsestElemtntLi.addEventListener('click', handleClickOnCard)

//     function handleClickOnCard(event){
//     event.preventDefault();
//       if (event.target.closest('ul').dataset.exercises) {
//         getCardInfo();
//     }
//     return;
    // }
    
function handleClickOnCard(evt) {
      evt.preventDefault();
      if (evt.target.closest('ul').dataset.exercises) {
        getCardInfo();
    }
    return;
} 
    
  
  } catch (error) {
    console.error('Error fetching images:', error);
    isiToast.apiIsiToastError();
  } finally {
    hideLoader(refs.loaderModal);
    // ! I have to removeListener from another person
  }
}

// ! create marcup for a lot of cards and pagination
// async function createMoreCardsOfExercises() {
  
//   show(refs.pagi)
//   showLoader(refs.loaderModal);
//   page += 1

//   try {
//     const { results, totalPages } = await searchExerciseByFilters(queryParams);

//     createCardsOfExercises(results, refs.resultContainer);
//     console.log(totalPages);
    
//     if (page !== totalPages) {

//     } else {
//       isiToast.endOfSearch();
//     }

//   } catch (error) {
//     console.error('Error fetching request:', error);
//     isiToast.apiIsiToastError();
//   } finally {
//     //! refs.resultContainer.innerHTML = '';  need or not
//     hideLoader(refs.loaderModal);

//     if (queryParams.page === queryParams.totalPages) {
//       isiToast.endOfSearch();  
//       refs.pagi.removeEventListener('click', createMoreCardsOfExercises);      
//     }

//   }
// }

// ! Works with search button
async function handleSearch(event) {
  event.preventDefault();

  refs.resultContainer.innerHTML = '';
  
  queryParams.page = 1;

  const formQuery = event.currentTarget;
  queryParams.keyword = formQuery.elements.query.value.trim();
  console.log(queryParams.keyword);

  if (!queryParams.keyword) {
    isiToast.noQuery();
    return;
  }

  try {
    console.log(queryParams);
    const { results, totalPages } = await searchExerciseByFilters(queryParams);
    
    console.log(results);

    // ! mistake

    let filter;
    
    if (exercisesParamFilter === "bodypart") {
      filter = "bodyPart";
    } if (exercisesParamFilter === "muscles") {
      filter = "target";
    } else {
      filter = "equipment"
    }

    if (exercisesParamFilter === "bodypart") {
      filter = "bodyPart";
    }

    const filteredValues = results.map(result => result[filter]);
    console.log(filteredValues);
    const getQuery = (results, toQuery) =>
    results.filter(result => result.name.includes(toQuery));
    console.log(getQuery(results, queryParams.keyword)); 

    // console.log(results.filter.value);
    
    //  if (results || totalPages === 0) {
    //   isiToast.noResults();
    //   show(refs.textResult);
    //   hideLoader(refs.loaderModal);
    //   return
    // }
    createCardsOfExercises(results, refs.resultContainer);
      
  } catch (error) {
    console.error('Error fetching images:', error);
    isiToast.apiIsiToastError();
  } finally {
      refs.searchForm.reset();
  }
}

function createCardsOfExercises(results, resultContainer) {
  const markup = results
    .map(
      ({ _id, rating, name, burnedCalories, time, bodyPart, target }) => `<li class="filtered-card-item">
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
  `
    )
    .join('');

  resultContainer.insertAdjacentHTML('beforeend', markup);
  
  const startButtonFavorite = document.querySelector('.to-favorites-start');
  startButtonFavorite.addEventListener('click', handleStartExerciseByClick);
  
}


//! Pagination

function createPagination(totalPages, total) {
    const paginationContainer = document.getElementById('pagination-container');
    
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
}

async function handlePagination (event) {
    // Перевірити, чи клікнули на кнопку пагінації
    if (event.target.classList.contains('tui-pagination-btn')) {
        // Отримати номер сторінки, на яку клікнули
      const pageNum = parseInt(event.target.textContent);
      console.log(pageNum);
        
        // Оновити параметр page у queryParams
        queryParams.page = pageNum;

        // Викликати функцію renderExerciseByFilter з оновленими параметрами
        await renderExerciseByFilter();
    }
}




export { renderExerciseByFilter };
export { exerciseId };
  
// ! will delete in future
export {exercisesParamFilter, exercisesParamName }
