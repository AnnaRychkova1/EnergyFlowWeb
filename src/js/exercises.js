import axios from 'axios';
import { refs } from './templates/refs.js';
import { renderExerciseByFilterName } from './exercises-details.js';
import { onPaginationClick, pagesPagination } from './services/pagination';

import { hide, show, showLoader, hideLoader } from './services/visibility';
import { scrollTo } from './services/scrollTo.js';

const BASE_URL = 'https://energyflow.b.goit.study/api';

let filterDefault = 'Muscles';
let page = 1;
let currentLimit = 0;
let screenWidth = window.innerWidth;
let exercisesParamFilter;
let exercisesParamName;

const queryParams = {
  filter: filterDefault,
  page: page,
  limit: currentLimit,
};

if (screenWidth < 1440) {
  currentLimit = 8;
} else {
  currentLimit = 12;
}

refs.exercisesBtnEl.addEventListener('click', filterBtnExercises);
refs.exercisesGalleryEl.addEventListener('click', filterCartsExercises);

refs.paginationEl.addEventListener(
  'click',
  onPaginationClick(
    createExercisesByFilterMarkup,
    getExercisesByFilter,
    queryParams,
    refs.exercisesGalleryEl,
    'first-pagination'
  )
);

fetchDefaultMuscles();

// default request
async function fetchDefaultMuscles() {
  refs.paginationEl.classList.add('first-pagination');
  refs.paginationEl.classList.remove('second-pagination');
  try {
    showLoader(refs.loaderModal);
    const { results, totalPages } = await getExercisesByFilter(page);

    if (totalPages > 1) {
      refs.paginationEl.innerHTML = pagesPagination(page, totalPages);
    }

    if (results && results.length > 0) {
      createExercisesByFilterMarkup(results);
      hideLoader(refs.loaderModal);
    } else {
      console.error('No results found for this filter');
    }
  } catch (error) {
    console.log('Error fetching images:', error);
    hideLoader(refs.loaderModal);
  }
}

// filter button request
async function filterBtnExercises(event) {
  event.preventDefault();

  const query = event.target.dataset.filter;

  filterDefault = query;

  showLoader(refs.loaderModal);

  if (event.target === event.currentTarget) {
    hideLoader(refs.loaderModal);
    return;
  }
  show(refs.exercisesGalleryEl);
  hide(refs.subexercisesFilteredCards);
  hide(refs.subexercisesSearchForm);
  hide(refs.exercisesTitleSpan);
  hide(refs.subexercisesTextNoFound);
  refs.exercisesGalleryEl.innerHTML = '';
  refs.exercisesSubtitle.innerHTML = '';
  refs.paginationEl.innerHTML = '';
  refs.subexercisesFilteredCards.innerHTML = '';
  refs.paginationEl.classList.add('first-pagination');
  refs.paginationEl.classList.remove('second-pagination');

  try {
    if (query === 'Body parts') {
      refs.bodyPartsBtnEl.classList.add('btn-item-active');
      refs.musclesBtnEl.classList.remove('btn-item-active');
      refs.equipmentBtnEl.classList.remove('btn-item-active');
    }
    if (query === 'Equipment') {
      refs.equipmentBtnEl.classList.add('btn-item-active');
      refs.musclesBtnEl.classList.remove('btn-item-active');
      refs.bodyPartsBtnEl.classList.remove('btn-item-active');
    }
    if (query === 'Muscles') {
      refs.musclesBtnEl.classList.add('btn-item-active');
      refs.equipmentBtnEl.classList.remove('btn-item-active');
      refs.bodyPartsBtnEl.classList.remove('btn-item-active');
    }

    const { results, totalPages } = await getExercisesByFilter(page);

    if (totalPages > 1) {
      refs.paginationEl.innerHTML = pagesPagination(page, totalPages);
    }

    if (results && results.length > 0) {
      createExercisesByFilterMarkup(results);

      hideLoader(refs.loaderModal);
    } else {
      console.error('No results found for this filter');
    }

    scrollTo(refs.exercisesContainerEl);
  } catch (error) {
    console.log(error);
    hideLoader(refs.loaderModal);
  }
}

// request to server
async function getExercisesByFilter(page) {
  showLoader(refs.loaderModal);
  try {
    const response = await axios.get(`${BASE_URL}/filters`, {
      params: {
        filter: filterDefault,
        page: page,
        limit: currentLimit,
      },
    });
    hideLoader(refs.loaderModal);
    return response.data;
  } catch (error) {
    console.log(error);
    hideLoader(refs.loaderModal);
  }
}

// create Markup
function createExercisesByFilterMarkup(results) {
  const markup = results
    .map(
      ({ name, filter, imgUrl }) =>
        `<li class="exercises-gallery-item" data-filter>
        <img class="exercises-gallery-img" src="${imgUrl}" alt="${filter}">
        <div class="exercises-gallery-text">
          <h3 class="exercises-gallery-title">${name}</h3>
          <p class="exercises-gallery-filter">${filter}</p>
        </div>
        </li>`
    )
    .join('');
  refs.exercisesGalleryEl.insertAdjacentHTML('beforeend', markup);
  hideLoader(refs.loaderModal);
}

// request for adition info
function filterCartsExercises(event) {
  const exerciseElement = event.target.closest('.exercises-gallery-item');
  if (exerciseElement) {
    const name = exerciseElement.querySelector(
      '.exercises-gallery-title'
    ).textContent;
    const filter = exerciseElement.querySelector(
      '.exercises-gallery-filter'
    ).textContent;
    exercisesParamName = name;
    exercisesParamFilter = filter;
  }
  show(refs.exercisesTitleSpan);

  refs.exercisesGalleryEl.innerHTML = '';
  refs.paginationEl.innerHTML = '';

  hideLoader(refs.loaderModal);
  renderExerciseByFilterName(exercisesParamFilter, exercisesParamName);
}

// export { };
