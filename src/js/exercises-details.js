import Pagination from 'tui-pagination'; 
import 'tui-pagination/dist/tui-pagination.min.css';
import axios from 'axios';
import { hide, show, showLoader, hideLoader } from "./services/visibility";
import { refs } from './templates/refs.js';

import { BASE_URL } from "./services/mainApi.js";

import { searchExerciseByFilters } from "./services/mainApi.js";
import isiToast from './services/isiToast.js';

const filterExercise = 'bodypart';
const nameExercise = 'waist';

export { filterExercise, nameExercise };

const queryParams = {
  filter: nameExercise,
  keyword: '',
  page: 1,
  limit: 9,
};

refs.exercisesHeader.textContent = `/${nameExercise}`;
refs.textResult.classList.add("is-hidden");

async function renderExerciseByFilter() {

  show(refs.searchForm)
  showLoader(refs.loaderModal);
  // hide(refs.pagi);
  
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

    //! there's the same if !queryParams.filter
    // if (!results || totalPages === 0) {
    //   isiToast.noResults();
    //   show(refs.textResult);
    //   hideLoader(refs.loaderModal);
    //   return
    // }

    if (totalPages > 1) {
      createPagination(totalPages);
      renderMoreExercises();
      } else {
      isiToast.endOfSearch();
    }

    // if (results.length > 0 && results.length !== totalPages)
    renderItemsMarkup(results, refs.resultContainer);
  } catch (error) {
    console.error('Error fetching images:', error);
    isiToast.apiIsiToastError();
  } finally {
    hideLoader(refs.loaderModal);
    //! removeListener from another person
  }
}

async function renderMoreExercises() {
  // showLoader(refs.pagi)
  // refs.pagi.addEventListener('click', renderMoreExercises);
  showLoader(refs.loaderModal);
  queryParams.page += 1;

  try {
    const { results, totalPages } = await searchExerciseByFilters(queryParams);
    renderItemsMarkup(results, refs.resultContainer);
    console.log(totalPages);
    
    if (totalPages > 1) {
      createPagination(totalPages);
    } else {
      isiToast.endOfSearch();
    }

    // const elementHeight = document.querySelector('.gallery-item').getBoundingClientRect().height;
    // window.scrollBy({
    //   top: 1.7 * elementHeight,
    //   behavior: 'smooth',
    // })

  } catch (error) {
    console.error('Error fetching request:', error);
    isiToast.apiIsiToastError();
  } finally {
    //! refs.resultContainer.innerHTML = '';  need or not
    hideLoader(refs.loaderModal);
    if (queryParams.page === queryParams.totalPages) {
      isiToast.endOfSearch();  
      // refs.pagi.removeEventListener('click', renderMoreExercises);      
    }

  }

}


refs.searchForm.addEventListener('submit', handleSearch);
refs.resultContainer.innerHTML = '';

async function handleSearch(event) {
  event.preventDefault();

  refs.resultContainer.innerHTML = '';
  
  queryParams.page = 1;

  const formQuery = event.currentTarget;
    queryParams.keyword = formQuery.elements.query.value.trim();
    console.log(queryParams.keyword);

  if (!queryParams.keyword) {
    alert('Empty value')
    return;
  }

  try {
    console.log(queryParams);
      const { results, totalPages } = await searchExerciseByFilters(queryParams);

    const getQuery = (results, toQuery) =>
    results.filter(result => result.name.includes(toQuery));

      console.log(getQuery(results, queryParams.keyword)); 
      

console.log(totalPages);

      renderItemsMarkup(results, refs.resultContainer);
      
  } catch (error) {
    console.error('Error fetching images:', error);
    alert('Wrong request')
  } finally {
    refs.searchForm.reset();
    hideLoader(refs.loaderModal);
  }
}

function renderItemsMarkup(results, resultContainer) {
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
}




// deal with currentPage, ul, li ?????????????



function createPagination(totalPages) {
  // Створіть новий екземпляр пагінації з використанням поточних налаштувань та totalPages
  const instance = new Pagination(refs.pagi, { 
    totalItems: totalPages, // Кількість елементів, які будуть розділені по сторінках
    itemsPerPage: 9, // Кількість елементів на одній сторінці
    visiblePages: 3, // Кількість видимих сторінок в пагінації
    page: queryParams.page, // Початкова сторінка
    centerAlign: true, // Вирівнювання пагінації по центру
    template: {
      page: '<a class="tui-pagination-btn">{{page}}</a>',
      currentPage: '<strong class="tui-pagination-btn tui-pagination-active">{{page}}</strong>',
      moveButton: '<a class="tui-pagination-btn tui-pagination-control"></a>',
      disabledMoveButton: '<a class="tui-pagination-btn tui-pagination-control disabled"></a>',
      moreButton: '<a class="tui-pagination-btn tui-pagination-ellipsis" aria-label="More"></a>'
    }
  });
}

function updatePagination(totalPages) {
  // Створіть новий екземпляр пагінації з використанням поточних налаштувань та totalPages
  const instance = new Pagination(refs.pagi, { 
    totalItems: totalPages, // Кількість елементів, які будуть розділені по сторінках
    itemsPerPage: 9, // Кількість елементів на одній сторінці
    visiblePages: 6, // Кількість видимих сторінок в пагінації
    page: 1, // Початкова сторінка
    centerAlign: true, // Вирівнювання пагінації по центру
    template: {
      page: '<a class="tui-pagination-btn">{{page}}</a>',
      currentPage: '<strong class="tui-pagination-btn tui-pagination-active">{{page}}</strong>',
      moveButton: '<a class="tui-pagination-btn tui-pagination-control"></a>',
      disabledMoveButton: '<a class="tui-pagination-btn tui-pagination-control disabled"></a>',
      moreButton: '<a class="tui-pagination-btn tui-pagination-ellipsis" aria-label="More"></a>'
    }
  });
}

export { renderExerciseByFilter };

renderExerciseByFilter();


//! createModal
// refs.toStartBtn.addEventListener('sudmit', createModal);
  
  //! removeListener another developer

// async function createModal(evt) {
//   try {
//     const { results } = await renderModal();
//     console.log(results);
//   } catch (error) {
//     console.error('Error fetching images:', error);
//     alert('Wrong request')
//   }
// }

//! Pagination
//import Pagination from 'tui-pagination'; 

// const pagi = document.getElementById('tui-pagination-container');
// const instance = new Pagination(pagi, { 
//   totalItems: 19, // Загальна кількість елементів, які будуть розділені по сторінках
//   itemsPerPage: 9, // Кількість елементів на одній сторінці
//   visiblePages: 6, // Кількість видимих сторінок в пагінації
//   page: 1, // Початкова сторінка
//   centerAlign: true, // Вирівнювання пагінації по центру
//   template: {
//     // Налаштування шаблону кнопок пагінації
//     page: '<a class="tui-pagination-btn">{{page}}</a>',
//     currentPage: '<strong class="tui-pagination-btn tui-pagination-active">{{page}}</strong>',
//     moveButton:
//       '<a class="tui-pagination-btn tui-pagination-control"></a>',
//     disabledMoveButton:
//       '<a class="tui-pagination-btn tui-pagination-control disabled"></a>',
//     moreButton:
//       '<a class="tui-pagination-btn tui-pagination-ellipsis" aria-label="More"></a>'
//   }
//  });

// instance.getCurrentPage();

//Finish pagination

// async function renderExerciseByFilter() {

//   try {
//     const { results, totalPages } = await searchExerciseByFilters(queryParams);
//     console.log(results);
//     console.log(totalPages);
    
//     if (results.length > 0 && results.length !== totalPages) {
//       createPagination(totalPages);
//     } else {
//       isiToast.endOfSearch();
//     }


//     renderItemsMarkup(results, refs.resultContainer);
      
//   } catch (error) {
//     console.error('Error fetching images:', error);
    
//   } finally {
      
//   }
// }