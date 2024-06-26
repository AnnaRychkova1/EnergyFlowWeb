import axios from 'axios';
import { renderExerciseByFilterName } from '/js/exercises-details.js';
import { refs } from '/js/templates/refs.js';
import { onPaginationClick, pagesPagination } from '/js/services/pagination.js';
import { hide, show, showLoader, hideLoader } from '/js/services/visibility.js';
import { scrollTo } from '/js/services/scrollTo.js';
import { errorResult } from '/js/services/iziToast.js';

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

if (refs.exercisesBtnEl) {
  refs.exercisesBtnEl.addEventListener('click', filterBtnExercises);
}

if (refs.exercisesGalleryEl) {
  refs.exercisesGalleryEl.addEventListener('click', filterCartsExercises);
}

if (refs.paginationEl) {
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
}

fetchDefaultMuscles();

// default request
async function fetchDefaultMuscles() {
  if (refs.paginationEl) {
    refs.paginationEl.classList.add('first-pagination');
    refs.paginationEl.classList.remove('second-pagination');
  }
  showLoader(refs.loaderModal);
  try {
    const { results, totalPages } = await getExercisesByFilter(page);

    if (totalPages > 1 && refs.paginationEl) {
      refs.paginationEl.innerHTML = pagesPagination(page, totalPages);
    }

    if (results && results.length > 0) {
      createExercisesByFilterMarkup(results);
    } else {
      errorResult('No results found for this filter');
    }
  } catch (error) {
    errorResult('Server Exercises did not responded');
  } finally {
    hideLoader(refs.loaderModal);
  }
}

// filter button request
async function filterBtnExercises(event) {
  event.preventDefault();

  const query = event.target.dataset.filter;

  filterDefault = query;

  if (event.target === event.currentTarget) {
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

  showLoader(refs.loaderModal);
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
    } else {
      errorResult('No results found for this filter');
    }

    scrollTo(refs.exercisesContainerEl);
  } catch (error) {
    errorResult('Server Exercises did not responded');
  } finally {
    hideLoader(refs.loaderModal);
  }
}

// request to server
async function getExercisesByFilter(page) {
  const response = await axios.get(`${BASE_URL}/filters`, {
    params: {
      filter: filterDefault,
      page: page,
      limit: currentLimit,
    },
  });
  return response.data;
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

  if (refs.exercisesGalleryEl) {
    refs.exercisesGalleryEl.insertAdjacentHTML('beforeend', markup);
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

  renderExerciseByFilterName(exercisesParamFilter, exercisesParamName);
}
