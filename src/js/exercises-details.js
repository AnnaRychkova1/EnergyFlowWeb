import axios from 'axios';
import { hide, show, showLoader, hideLoader } from './services/visibility';
import { refs } from './templates/refs.js';
import { scrollTo } from './services/scrollTo.js';
import { createModalMenu } from './modal-menu.js';
import icons from '/img/icons/symbol-defs.svg';

const BASE_URL = 'https://energyflow.b.goit.study/api';
const ENDPOINT_EXERCISES = 'exercises';

const screenWidth = window.innerWidth;

const getParams = {
  filter: '',
  keyword: '',
  page: 1,
  limit: 9,
};

async function renderExerciseByFilterName(expectedFilter, name) {
  if (refs.exercisesGalleryEl) {
    hide(refs.subexercisesFilteredCards);
    hide(refs.subexercisesSearchForm);
  }

  if (screenWidth < 1440) {
    getParams.limit = 8;
  } else {
    getParams.limit = 9;
  }

  let filter;

  if (expectedFilter === 'Body parts') {
    filter = 'bodypart';
  } else if (expectedFilter === 'Muscles') {
    filter = 'muscles';
  } else if (expectedFilter === 'Equipment') {
    filter = 'equipment';
  }

  if (!filter || !name) {
    show(refs.subexercisesTextNoFound);
    hideLoader(refs.loaderModal);
    return;
  }

  show(refs.subexercisesSearchForm);
  show(refs.subexercisesFilteredCards);
  show(refs.exercisesSubtitle);
  hide(refs.subexercisesTextNoFound);
  refs.exercisesSubtitle.textContent = `${name}`;
  refs.subexercisesFilteredCards.innerHTML = '';

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
      hideLoader(refs.loaderModal);
      return;
    }

    renderCards(results);

    scrollTo(refs.subexercisesFilteredCards);
  } catch (error) {
    console.error('Error fetching images:', error);
  } finally {
    hideLoader(refs.loaderModal);
  }

  refs.subexercisesSearchForm.addEventListener('submit', handleSearch);

  async function handleSearch(evt) {
    evt.preventDefault();

    if (refs.exercisesGalleryEl) {
      hide(refs.subexercisesFilteredCards);
      hide(refs.subexercisesSearchForm);
    }

    const formData = evt.currentTarget;
    getParams.keyword = formData.query.value.trim();

    console.log(getParams.keyword);

    if (!getParams.keyword) {
      hideLoader(refs.loaderModal);
      console.log('input keyword');
    }

    refs.subexercisesFilteredCards.innerHTML = '';
    show(refs.subexercisesSearchForm);
    hide(refs.subexercisesTextNoFound);
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
        hideLoader(refs.loaderModal);
        return;
      }

      renderCards(results);

      scrollTo(refs.subexercisesFilteredCards);
    } catch (error) {
      console.error('Error fetching request:', error);
    } finally {
      hideLoader(refs.loaderModal);
      refs.subexercisesSearchForm.reset();
      getParams.keyword = '';
      refs.subexercisesSearchForm.removeEventListener('submit', handleSearch);
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

export { renderExerciseByFilterName };
