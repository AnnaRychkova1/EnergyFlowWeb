import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import axios from 'axios';

const BASE_URL = 'https://energyflow.b.goit.study/api';
const ENDPOINT = 'filters';

const exercisesBtnEl = document.querySelector('.exercises-btn-list');
const exercisesGalleryEl = document.querySelector('.exercises-gallery');
const paginationEl = document.querySelector('.exercises-pagination');

let filterDefault = 'Muscles';
let currentPage = 1;
let currentLimit = 0;
let screenWidth = window.innerWidth;

if (screenWidth <= 375) {
  currentLimit = 8;
} else if (screenWidth <= 768) {
  currentLimit = 12;
} else {
  currentLimit = 12;
}

exercisesBtnEl.addEventListener('click', filterBtnExercises);

async function getExercisesByFilter() {
  try {
    const response = await axios.get(`${BASE_URL}/${ENDPOINT}`, {
      params: {
        filter: filterDefault,
        page: currentPage,
        limit: currentLimit,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function filterBtnExercises(event) {
  event.preventDefault();
  const query = event.target.dataset.filter;
  exercisesGalleryEl.innerHTML = '';
  if (!query) {
    return;
  }
  filterDefault = query;
  currentPage = 1;
  try {
    getExercisesByFilter(query).then(data => {
      const { results, page, totalPages } = data;
      createExercisesByFilterMarkup(results);
      if (totalPages > 1) {
        const moveButton = pagesPagination(page, totalPages);
        paginationEl.innerHTML = moveButton;
      } else {
        paginationEl.innerHTML = '';
      }
    });
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
  exercisesGalleryEl.insertAdjacentHTML('beforeend', markup);
}
function pagesPagination(page, totalPages) {
  let disabledMoveButton = '';
  for (let i = 1; i <= totalPages; i += 1) {
    disabledMoveButton += `<button class="button-pagination" type="button">${i}</button>`;
  }
  return disabledMoveButton;
}

async function onPaginationPages(event) {
  currentPage = event.target.textContent;
  exercisesGalleryEl.innerHTML = '';
  try {
    const { results, page, totalPages } = await getExercisesByFilter();
    const filter = results[0].filter;

    if (page === totalPages) {
      return;
    }
    createExercisesByFilterMarkup(results);
  } catch (error) {
    console.log(error);
  }
}
paginationEl.addEventListener('click', onPaginationPages);
