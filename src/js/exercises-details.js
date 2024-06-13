import axios from 'axios';
import { hide, show, hideLoader, showLoader } from './services/visibility';
import { refs } from './templates/refs.js';
import { scrollTo } from './services/scrollTo.js';
import { onPaginationClick, pagesPagination } from './services/pagination';
import { renderModalMenu } from './modal-menu.js';
import icons from '/img/icons/symbol-defs.svg';

const BASE_URL = 'https://energyflow.b.goit.study/api';
const ENDPOINT_EXERCISES = 'exercises';

const screenWidth = window.innerWidth;

let page = 1;
let filter = '';
let currentLimit;
let getParams = {
  keyword: '',
  page: page,
  limit: currentLimit,
};

if (screenWidth < 1440) {
  currentLimit = 8;
} else {
  currentLimit = 9;
}

if (refs.subexercisesSearchForm) {
  refs.subexercisesSearchForm.addEventListener('submit', handleSearch);
}

if (refs.paginationEl) {
  refs.paginationEl.addEventListener(
    'click',
    onPaginationClick(
      renderCards,
      searchExerciseByFilters,
      getParams,
      refs.subexercisesFilteredCards,
      'second-pagination'
    )
  );
}

async function renderExerciseByFilterName(expectedFilter, expectedName) {
  hideLoader(refs.loaderModal);

  if (!expectedFilter || !expectedName) {
    show(refs.subexercisesTextNoFound);
    return;
  }

  getParams = {
    keyword: '',
    page: page,
    limit: currentLimit,
  };

  if (expectedFilter === 'Body parts') {
    filter = 'bodypart';
  } else if (expectedFilter === 'Muscles') {
    filter = 'muscles';
  } else if (expectedFilter === 'Equipment') {
    filter = 'equipment';
  }

  getParams[filter] = expectedName;

  hide(refs.subexercisesTextNoFound);
  show(refs.subexercisesSearchForm);
  show(refs.subexercisesFilteredCards);
  show(refs.exercisesSubtitle);
  refs.exercisesSubtitle.textContent = `${expectedName}`;
  refs.subexercisesFilteredCards.innerHTML = '';
  refs.paginationEl.innerHTML = '';
  refs.exercisesGalleryEl.innerHTML = '';
  refs.paginationEl.classList.add('second-pagination');
  refs.paginationEl.classList.remove('first-pagination');

  try {
    showLoader(refs.loaderModal);
    const { results, totalPages } = await searchExerciseByFilters(page);

    if (totalPages > 1) {
      refs.paginationEl.innerHTML = pagesPagination(page, totalPages);
    }

    if (results && results.length > 0) {
      renderCards(results);
      hideLoader(refs.loaderModal);
    } else {
      show(refs.subexercisesTextNoFound);
      hideLoader(refs.loaderModal);
      return;
    }

    scrollTo(refs.exercisesContainerEl);
  } catch (error) {
    console.error('Error fetching images:', error);
    hideLoader(refs.loaderModal);
  } finally {
    hideLoader(refs.loaderModal);
  }
}

async function handleSearch(evt) {
  evt.preventDefault();

  const formData = evt.currentTarget;
  getParams.keyword = formData.query.value.trim();

  if (!getParams.keyword) {
    console.log('input keyword');
  }

  show(refs.subexercisesSearchForm);
  hide(refs.subexercisesTextNoFound);
  refs.subexercisesFilteredCards.innerHTML = '';
  refs.paginationEl.innerHTML = '';
  refs.exercisesGalleryEl.innerHTML = '';

  try {
    showLoader(refs.loaderModal);
    const { results, totalPages } = await searchExerciseByFilters(page);

    if (totalPages > 1) {
      refs.paginationEl.innerHTML = pagesPagination(page, totalPages);
    }

    if (results && results.length > 0) {
      renderCards(results);
      hideLoader(refs.loaderModal);
    } else {
      show(refs.subexercisesTextNoFound);
      hideLoader(refs.loaderModal);
      return;
    }
    scrollTo(refs.exercisesContainerEl);
  } catch (error) {
    console.error('Error fetching request:', error);
    hideLoader(refs.loaderModal);
  } finally {
    refs.subexercisesSearchForm.reset();
  }
}

if (refs.subexercisesFilteredCards) {
  refs.subexercisesFilteredCards.addEventListener(
    'click',
    handleClickOnCardStart
  );
}

// request to modal window
function handleClickOnCardStart(evt) {
  if (!evt.target.dataset.id) {
    return;
  }
  const exerciseId = evt.target.dataset.id;
  showLoader(refs.loaderModal);
  renderModalMenu(exerciseId);
}

// request to server
async function searchExerciseByFilters(page) {
  const response = await axios.get(`${BASE_URL}/${ENDPOINT_EXERCISES}`, {
    params: { ...getParams, page },
  });
  return response.data;
}

// renderCards
function renderCards(results) {
  refs.exercisesGalleryEl.innerHTML = '';
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
              <p class="filtered-rating">${rating.toFixed(1)}</p>
              <svg class="filtered-star" width="16" height="16">
                <use href="${icons}#icon-Star-1"></use>
              </svg>
            </div>
          </div>

          <button class="to-favorites-start" type="click" data-id=${_id}>
            <span data-id=${_id}>Start</span>
            <svg data-id=${_id} class="filtered-start" width="16" height="16">
              <use href="${icons}#icon-arrow-right"></use>
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
            <p class="filtered-descr-title">Burned calories: <span class="filtered-descr-value">${burnedCalories} / ${time} min</span></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Body part: <span class="filtered-descr-value">${
              bodyPart.charAt(0).toUpperCase() + bodyPart.slice(1)
            }</span></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Target: <span class="filtered-descr-value">${
              target.charAt(0).toUpperCase() + target.slice(1)
            }</span></p>
          </li>
        </ul>
  </li>`;
}

export { renderExerciseByFilterName, handleSearch };
