import axios from 'axios';
import { refs } from './templates/refs.js';
import { renderExerciseByFilterName } from './exercises-details.js';
// import { pagesPagination, onPaginationPages } from './services/pagination';

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
refs.paginationEl.addEventListener('click', onPaginationPages);

fetchDefaultMuscles();

async function filterBtnExercises(event) {
  event.preventDefault();
  queryParams.page = 1;
  page = 1;

  const query = event.target.dataset.filter;

  filterDefault = query;

  showLoader(refs.loaderModal);

  if (event.target === event.currentTarget) {
    hideLoader(refs.loaderModal);
    return;
  }

  hide(refs.subexercisesFilteredCards);
  hide(refs.subexercisesSearchForm);
  hide(refs.exercisesTitleSpan);
  hide(refs.subexercisesTextNoFound);
  refs.exercisesGalleryEl.innerHTML = '';
  refs.exercisesSubtitle.innerHTML = '';
  refs.subexercisesFilteredCards.innerHTML = '';
  refs.paginationEl.innerHTML = '';

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

    const { results, totalPages } = await getExercisesByFilter();

    if (totalPages > 1) {
      refs.paginationEl.innerHTML = pagesPagination(page, totalPages);
    }

    if (results && results.length > 0) {
      createExercisesByFilterMarkup(results);
      refs.paginationEl.innerHTML = pagesPagination(page, totalPages);
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

// default request
async function fetchDefaultMuscles() {
  try {
    showLoader(refs.loaderModal);
    const { results, totalPages } = await getExercisesByFilter();

    if (results && results.length > 0) {
      createExercisesByFilterMarkup(results);
      hideLoader(refs.loaderModal);

      if (totalPages > 1) {
        refs.paginationEl.innerHTML = pagesPagination(page, totalPages);
      }
    } else {
      console.error('No results found for this filter');
    }
  } catch (error) {
    console.log('Error fetching images:', error);
    hideLoader(refs.loaderModal);
  }
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

// request function
async function getExercisesByFilter() {
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

// pagination
function pagesPagination(page, totalPages) {
  let buttons = '';
  const maxVisibleButtons = 3;

  let startButton = Math.max(1, page - 1);
  let endButton = Math.min(totalPages, startButton + maxVisibleButtons - 1);

  if (startButton > 1) {
    buttons += `<button class="button-pagination prev" type="button">+</button>`;
  }

  for (let i = startButton; i <= endButton; i++) {
    buttons += `<button class="button-pagination ${
      i === page ? 'active' : ''
    }" type="button">${i}</button>`;
  }

  if (endButton < totalPages) {
    buttons += `<button class="button-pagination next" type="button">+</button>`;
  }

  return buttons;
}

async function onPaginationPages(event) {
  const button = event.target;

  if (button.classList.contains('prev') || button.classList.contains('next')) {
    const currentPageButton = refs.paginationEl.querySelector(
      '.button-pagination.active'
    );
    const currentPage = parseInt(currentPageButton.textContent, 10);
    const newPage = button.classList.contains('prev')
      ? currentPage - 1
      : currentPage + 1;
    page = newPage;
  } else {
    page = parseInt(event.target.textContent, 10);
  }

  refs.exercisesGalleryEl.innerHTML = '';

  try {
    showLoader(refs.loaderModal);
    const { results, totalPages } = await getExercisesByFilter();
    queryParams.page = page;
    createExercisesByFilterMarkup(results);
    hideLoader(refs.loaderModal);
    refs.paginationEl.innerHTML = pagesPagination(page, totalPages);
    scrollTo(refs.exercisesContainerEl);
  } catch (error) {
    console.log(error);
    hideLoader(refs.loaderModal);
  }
}

// export {};
