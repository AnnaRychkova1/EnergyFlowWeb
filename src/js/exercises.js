import axios from 'axios';
import { refs } from './templates/refs.js';
import { renderExerciseByFilterName } from './exercises-details.js';

import { hide, show, showLoader, hideLoader } from './services/visibility';

const BASE_URL = 'https://energyflow.b.goit.study/api';

let filterDefault = 'Muscles';
let currentPage = 1;
let currentLimit = 0;
let screenWidth = window.innerWidth;
let exercisesParamFilter;
let exercisesParamName;

const queryParams = {
  filter: filterDefault,
  page: currentPage,
  limit: currentLimit,
};

refs.exercisesBtnEl.addEventListener('click', filterBtnExercises);
refs.exercisesGalleryEl.addEventListener('click', filterCartsExercises);
refs.paginationEl.addEventListener('click', onPaginationPages);

if (screenWidth < 768) {
  currentLimit = 8;
} else {
  currentLimit = 12;
}

async function getExercisesByFilter() {
  showLoader(refs.loaderModal);

  try {
    const response = await axios.get(`${BASE_URL}/filters`, {
      params: {
        filter: filterDefault,
        page: currentPage,
        limit: currentLimit,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function fetchDefaultMuscles() {
  try {
    const { results, page, totalPages } = await getExercisesByFilter(
      queryParams
    );

    if (results && results.length > 0) {
      createExercisesByFilterMarkup(results);
      refs.paginationEl.innerHTML = '';
      refs.paginationEl.innerHTML = pagesPagination(page, totalPages);
    } else {
      console.error('No results found for this filter');
    }
  } catch (error) {
    console.log('Error fetching images:', error);
  }
}

fetchDefaultMuscles();

async function filterBtnExercises(event) {
  event.preventDefault();

  const query = event.target.dataset.filter;

  filterDefault = query;
  currentPage = 1;
  showLoader(refs.loaderModal);

  if (event.target === event.currentTarget) {
    return;
  }

  hide(refs.subexercisesFilteredCards);
  hide(refs.subexercisesSearchForm);
  hide(refs.exercisesTitleSpan);
  hide(refs.subexercisesTextNoFound);

  refs.exercisesGalleryEl.innerHTML = '';
  refs.exercisesSubtitle.innerHTML = '';
  refs.subexercisesFilteredCards.innerHTML = '';

  try {
    const { results, page, totalPages } = await getExercisesByFilter(
      queryParams
    );
    createExercisesByFilterMarkup(results);
    hideLoader(refs.loaderModal);

    if (query !== 'Body parts') {
      refs.musclesBtnEl.classList.add('btn-item-active');
    }
    if (query !== 'Equipment') {
      refs.musclesBtnEl.classList.add('btn-item-active');
    }
    if (query !== 'Muscles') {
      refs.musclesBtnEl.classList.remove('btn-item-active');
    }

    if (totalPages > 1) {
      refs.paginationEl.innerHTML = pagesPagination(page, totalPages);
    } else {
      refs.paginationEl.innerHTML = '';
    }
    scrollToExerciseGallery();
  } catch (error) {
    console.log(error);
  } finally {
    filterDefault = '';
  }
}

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

function pagesPagination(page, totalPages) {
  let disabledMoveButton = '';
  showLoader(refs.loaderModal);
  for (let i = 1; i <= totalPages; i++) {
    disabledMoveButton += `<button class="button-pagination" type="button">${i}</button>`;
    hideLoader(refs.loaderModal);
  }

  return disabledMoveButton;
}

async function onPaginationPages(event) {
  currentPage = event.target.textContent;
  refs.exercisesGalleryEl.innerHTML = '';
  try {
    const { results, page, totalPages } = await getExercisesByFilter(
      queryParams
    );
    createExercisesByFilterMarkup(results);
    scrollToExerciseGallery();
  } catch (error) {
    console.log(error);
  }
}

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
  scrollToExerciseGallery();
}

function scrollToExerciseGallery() {
  refs.exercisesContainerEl.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}
export { scrollToExerciseGallery };
