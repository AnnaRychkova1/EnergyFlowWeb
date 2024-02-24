import axios from 'axios';
import { hide, show, showLoader, hideLoader } from './services/visibility';
import { refs } from './templates/refs.js';
import isiToast from './services/isiToast.js';
import { createModalMenu } from './modal-menu.js';

const BASE_URL = 'https://energyflow.b.goit.study/api';
const ENDPOINT_EXERCISES = 'exercises';

const getParams = {
  filter: '',
  keyword: '',
  page: 1,
  limit: 9,
};

if (refs.subexercisesFilteredCards.screenWidth < 768) {
  getParams.limit = 8;
} else {
  getParams.limit = 9;
}

async function renderExerciseByFilterName(expectedFilter, name) {
  let filter;

  show(refs.subexercisesSearchForm);

  if (expectedFilter === 'Body parts') {
    filter = 'bodypart';
  } else if (expectedFilter === 'Muscles') {
    filter = 'muscles';
  } else if (expectedFilter === 'Equipment') {
    filter = 'equipment';
  }

  if (refs.exercisesGalleryEl) {
    //hide(refs.subexercisesFilteredCards);
    //hide(refs.subexercisesSearchForm);
  }

  if (!filter || !name) {
    show(refs.subexercisesTextNoFound);
    hideLoader(refs.loaderModal);
    return;
  }

  refs.exercisesSubtitle.textContent = `${name}`;
  refs.subexercisesSearchForm.reset();
  refs.subexercisesFilteredCards.innerHTML = '';
  //show(refs.subexercisesSearchForm);
  show(refs.subexercisesFilteredCards);
  //show(refs.subexercisesSearchForm);
  showLoader(refs.loaderModal);

  try {
    const { results, totalPages } = await searchExerciseByFilters({
      filter: filter,
      name: name,
      keyword: getParams.keyword,
      limit: getParams.limit,
      page: getParams.page,
    });

    if (totalPages < 1) {
      show(refs.subexercisesTextNoFound);
      //show(refs.subexercisesSearchForm);
      hideLoader(refs.loaderModal);
      return;
    }

    renderCards(results);
    getParams.page += 1;

    if (!refs.subExercisesPaginationContainer) {
      pagesPagination(getParams.page, totalPages);
    }
  } catch (error) {
    console.error('Error fetching images:', error);
  } finally {
    hideLoader(refs.loaderModal);
  }

  refs.subexercisesSearchForm.addEventListener('submit', handleSearch);

  async function handleSearch(evt) {
    evt.preventDefault();

    if (refs.exercisesGalleryEl) {
      //hide(refs.subexercisesFilteredCards);
      //hide(refs.subexercisesSearchForm);
    }

    if (getParams.keyword.trim() === '') {
      hideLoader(refs.loaderModal);
      2;
    }

    refs.exercisesSubtitle.textContent = `${name}`;
    refs.subexercisesFilteredCards.innerHTML = '';
    //show(refs.subexercisesSearchForm);
    showLoader(refs.loaderModal);

    const formData = new FormData(evt.target);
    getParams.keyword = formData.get('query');
    console.log(getParams.keyword);

    try {
      const { results, totalPages } = await searchExerciseByFilters({
        filter: filter,
        name: name,
        keyword: getParams.keyword,
        limit: getParams.limit,
        page: getParams.page,
      });

      if (totalPages < 1) {
        isiToast.noResults();
        show(refs.subexercisesTextNoFound);
        //show(refs.subexercisesSearchForm);
        hideLoader(refs.loaderModal);
        return;
      }

      if (totalPages >= 2) {
        pagesPagination(getParams.page, totalPages);
      }

      renderCards(results);
      getParams.page += 1;

      if (!refs.subExercisesPaginationContainer) {
        pagesPagination(getParams.page, totalPages);
      }
    } catch (error) {
      console.error('Error fetching request:', error);
    } finally {
      hideLoader(refs.loaderModal);
    }
  }
}

refs.subexercisesFilteredCards.addEventListener(
  'click',
  handleClickOnCardStart
);

// request to modal window
function handleClickOnCardStart(evt) {
  if (!evt.target.dataset.id) {
    return;
  }

  const exerciseId = evt.target.dataset.id;
  // showLoader(refs.loaderModal);
  createModalMenu(exerciseId);
}

// request to server
async function searchExerciseByFilters({ filter, name, keyword, limit, page }) {
  const response = await axios.get(`${BASE_URL}/${ENDPOINT_EXERCISES}`, {
    params: {
      [filter]: name,
      keyword: keyword,
      limit: limit,
      page: page,
    },
  });
  return response.data;
}

// renderCards
function renderCards(results) {
  const markup = results.map(result => createCard(result)).join('');
  refs.subexercisesFilteredCards.innerHTML = markup;
}

// create Card
function createCard({
  _id,
  rating,
  name,
  burnedCalories,
  time,
  bodyPart,
  target,
}) {
  return `<li class="filtered-card-item">
        <div class="card-box-workout">
          <div class="card-box-info">
            <div class="filtered-workout">Workout</div>
            <div class="card-box-rating">
              <p class="filtered-rating">${Math.round(rating)}</p>
              <svg class="filtered-star" width="16" height="16">
                <use href="/img/icons/symbol-defs.svg#icon-Star-1"></use>
              </svg>
            </div>
          </div>
          <button class="to-favorites-start" type="submit" data-id=${_id}>
            <span>Start</span>
            <svg class="filtered-start" width="16" height="16">
              <use href="/img/icons/symbol-defs.svg#icon-arrow-right"></use>
            </svg>
          </button> 
        </div>

        <div class="card-box-title">
          <div class="filtered-athlete-box">
            <svg class="filtered-athlete" width="16" height="16">
              <use href="/img/icons/symbol-defs.svg#icon-Man"></use>
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
}

//  icon <svg class="start-svg" width="18" height="18"> <use href="./img/icons/symbol-defs.svg#icon-arrow-top-right"></use> </svg>
//     <svg class="filtered-athlete" width="14" height="14"><use href="./img/icons/symbol-defs.svg#icon-Man"></use></svg>

// Pagination

function pagesPagination(currentPage, totalPages) {
  let disabledMoveButton = '';
  const totalPagesToShow = Math.min(totalPages, 3);
  const startPage = Math.max(1, currentPage - 1);

  showLoader(refs.loaderModal);

  for (let i = startPage; i < startPage + totalPagesToShow; i++) {
    disabledMoveButton += `<button class="button-pagination" type="button">${i}</button>`;
  }

  hideLoader(refs.loaderModal);

  return disabledMoveButton;
}

async function onPaginationPages(event) {
  currentPage = event.target.textContent;
  // refs.subexercisesFilteredCards.innerHTML = '';
  try {
    const { totalPages } = await searchExerciseByFilters(results);
    renderCards(totalPages);
    scrollToExerciseGallery();
  } catch (error) {
    console.log(error);
  }
}

const screenWidth = window.innerWidth;
console.log(screenWidth);

export { renderExerciseByFilterName };

// import axios from 'axios';
// import { hide, show, showLoader, hideLoader } from './services/visibility';
// import { refs } from './templates/refs.js';
// import isiToast from './services/isiToast.js';
// import { createModalMenu } from './modal-menu.js';

// const BASE_URL = 'https://energyflow.b.goit.study/api';
// const ENDPOINT_EXERCISES = 'exercises';

// let currentPage;
// const getParams = {
//     filter: '',
//     keyword: '',
//     page: 1,
//     limit: 9,
// };

// if (window.innerWidth <= 768) {
//     getParams.limit = 8;
// } else {
//     getParams.limit = 9;
// }

// async function renderExerciseByFilterName(expectedFilter, name) {
//

//     let filter;

//     if (expectedFilter === 'Body parts') {
//         filter = 'bodypart';
//     } else if (expectedFilter === 'Muscles') {
//         filter = 'muscles';
//     } else if (expectedFilter === 'Equipment') {
//         filter = 'equipment';
//     }

//     if (!filter || !name) {
//         show(refs.subexercisesTextNoFound);
//         hideLoader(refs.loaderModal);
//         return;
//     }

//     refs.exercisesSubtitle.textContent = `${name}`;
//     refs.subexercisesFilteredCards.innerHTML = '';
//     refs.paginationEl.innerHTML = '';
//     showLoader(refs.loaderModal);

//     try {
//         const { results, totalPages } = await searchExerciseByFilters({
//             filter: filter,
//             name: name,
//             keyword: getParams.keyword,
//             limit: getParams.limit,
//             page: getParams.page
//         });

//         console.log(totalPages);
//         console.log(results);
//         console.log(getParams.page);

//         if (totalPages < 1) {
//             isiToast.noResults();
//             show(refs.subexercisesTextNoFound);
//             hideLoader(refs.loaderModal);
//             return;
//         }

//         refs.paginationEl.addEventListener('click', onPaginationPages);

//         currentPage += 1;
//         renderCards(results);

//         refs.paginationEl.innerHTML = pagesPagination(currentPage, totalPages);

//     } catch (error) {
//         console.error('Error fetching result:', error);
//     } finally {
//         hideLoader(refs.loaderModal);
//     }

//     //!  Works with search button
//         refs.subexercisesSearchForm.addEventListener('submit', handleSearch);

//         async function handleSearch(evt) {
//             evt.preventDefault();

//              if (refs.exercisesGalleryEl) {
//                 // refs.subexercisesSearchForm.reset();
//                 hide(refs.subexercisesSearchForm);
//             }

//             refs.exercisesSubtitle.textContent = `${name}`;
//             show(refs.subexercisesSearchForm);
//             showLoader(refs.loaderModal);
//             refs.subexercisesFilteredCards.innerHTML = '';
//         refs.subexercisesSearchForm.reset();

//             // get query
//             const formData = new FormData(evt.target)
//             getParams.keyword = formData.get('query');
//             console.log(getParams.keyword);

//             // ! check fot the wrong query

//              if (getParams.keyword.trim() === '') {
//                     isiToast.noQuery();
//                     hideLoader(refs.loaderModal);
//                     return
//             }

//         // ! Очищувати список вправ
//             // ! Очищувати мій дів
//         // ! Очищувати форму

//             try {
//                 const { results, totalPages } = await searchExerciseByFilters({
//                     filter: filter,
//                     name: name,
//                     keyword: getParams.keyword,
//                     limit: getParams.limit,
//                     page: getParams.currentPage
//                 });

//                 if (totalPages < 1) {
//                     isiToast.noResults();
//                     show(refs.subexercisesTextNoFound);
//                     hideLoader(refs.loaderModal);
//                     return;
//                 }

//                 if (totalPages > 1) {
//           refs.paginationEl.innerHTML = pagesPagination(currentPage, totalPages);
//         } else {
//           refs.paginationEl.innerHTML = '';
//         }

//                 renderCards(results);
//                 getParams.currentPage += 1;

//             } catch (error) {
//                 console.error('Error fetching images:', error);
//                 isiToast.apiIsiToastError();
//             } finally {
//                 // refs.subexercisesSearchForm.reset();
//                 hide(refs.loaderModal);
//             }
//         }
//     }

// refs.subexercisesFilteredCards.addEventListener('click', handleClickOnCardStart)

// function handleClickOnCardStart(evt) {
//     if (!evt.target.dataset.id) {
//         return
//     }
//     // showLoader(refs.loaderModal);
//     const exerciseId = evt.target.dataset.id;
//     console.log(exerciseId);
//     createModalMenu(exerciseId);

//     async function searchExerciseByFilters({ filter, name, keyword, limit, page }) {
//         const response = await axios.get(
//             `${BASE_URL}/${ENDPOINT_EXERCISES}`,
//             {
//                 params: {
//                     [filter]: name,
//                     keyword: keyword,
//                     limit: limit,
//                     page: page
//                 },
//             }
//         );
//         return response.data;
//     }
// }

// // ! +++
// function renderCards(results) {
//     const markup = results.map(result => createCard(result)).join('');
//     refs.subexercisesFilteredCards.innerHTML = markup;
// }

// // ! +++
// function createCard({ _id, rating, name, burnedCalories, time, bodyPart, target }) {
//     return `<li class="filtered-card-item">
//         <div class="card-box-workout">
//           <div class="card-box-info">
//             <div class="filtered-workout">Workout</div>
//             <div class="card-box-rating">
//               <p class="filtered-rating">${Math.round(rating)}</p>
//               <img class="filteered-star" href="#" alt="star" height="35"></img>
//             </div>
//           </div>
//           <button class="to-favorites-start" type="submit" data-id=${_id}"><a>Start</a></button>
//         </div>
//         <div class="card-box-title">
//           <img class="filtered-athlete" href="#" alt="athlete" height="35"></img>
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
//   </li>`;
// }
