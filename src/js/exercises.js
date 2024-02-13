import axios from 'axios';
import { refs } from './templates/refs.js';
import { renderExerciseByFilterName } from './exercises-details.js';

import { hide } from './services/visibility';

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

if (screenWidth <= 375) {
  currentLimit = 8;
} else if (screenWidth <= 768) {
  currentLimit = 12;
} else {
  currentLimit = 12;
}

async function getExercisesByFilter() {
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
      refs.paginationEl.innerHTML = pagesPagination(page, totalPages);
    } else {
      console.error('No results found for this filter');
    }
  } catch (error) {
    console.log('Error fetching images:', error);
  }
}

fetchDefaultMuscles();

// .classList.add('active');

async function filterBtnExercises(event) {
  event.preventDefault();

  const query = event.target.dataset.filter;
  refs.exercisesGalleryEl.innerHTML = '';
  filterDefault = query;
  currentPage = 1;
  console.log(exercisesParamFilter);
  if (event.target === event.currentTarget) {
    return;
  }

  try {
    const { results, page, totalPages } = await getExercisesByFilter(
      queryParams
    );
    createExercisesByFilterMarkup(results);

    if (totalPages > 1) {
      refs.paginationEl.innerHTML = pagesPagination(page, totalPages);
    } else {
      refs.paginationEl.innerHTML = '';
    }
  } catch (error) {
    console.log(error);
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
}

function pagesPagination(page, totalPages) {
  let disabledMoveButton = '';
  for (let i = 1; i <= totalPages; i++) {
    disabledMoveButton += `<button class="button-pagination" type="button">${i}</button>`;
  }
  return disabledMoveButton;
}

// ===  Функція перехід по сторінкам

async function onPaginationPages(event) {
  currentPage = event.target.textContent;
  refs.exercisesGalleryEl.innerHTML = '';
  try {
    const { results, page, totalPages } = await getExercisesByFilter(
      queryParams
    );
    createExercisesByFilterMarkup(results);
  } catch (error) {
    console.log(error);
  }
}

function filterCartsExercises(event) {
  hide(refs.exercisesGalleryEl);
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
  console.log(exercisesParamFilter);
  console.log(exercisesParamName);
  renderExerciseByFilterName(exercisesParamFilter, exercisesParamName);
}
