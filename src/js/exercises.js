import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import axios from 'axios';

const BASE_URL = 'https://energyflow.b.goit.study/api';
const ENDPOINT = 'filters';

const exercisesBtnEl = document.querySelector('.exercises-btn-list');
const exercisesGalleryEl = document.querySelector('.exercises-gallery');
const paginationEl = document.querySelector('.exercises-pagination');
// const exercisesGalleryItemEl = document.querySelectorAll(
//   '.exercises-gallery-item'
// );

let filterDefault = 'Muscles';
let currentPage = 1;
let currentLimit = 0;
let screenWidth = window.innerWidth;

exercisesBtnEl.addEventListener('click', filterBtnExercises);

if (screenWidth <= 375) {
  currentLimit = 8;
} else if (screenWidth <= 768) {
  currentLimit = 12;
} else {
  currentLimit = 12;
}

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

async function fetchDefaultMuscles() {
  try {
    getExercisesByFilter().then(data => {
      const { results, page, totalPages } = data;
      if (results && results.length > 0) {
        createExercisesByFilterMarkup(results);
        paginationEl.innerHTML = pagesPagination(page, totalPages);
      } else {
        console.error('No results found for this filter');
      }
    });
  } catch (error) {
    console.error('Error fetching images:', error);
  }
}

fetchDefaultMuscles();

async function filterBtnExercises(event) {
  event.preventDefault();
  const query = event.target.dataset.filter;
  exercisesGalleryEl.innerHTML = '';

  filterDefault = query;
  currentPage = 1;

  // Array.from(event.currentTarget.children).map(item => {
  //   if (item.textContent !== event.target.textContent) {
  //     item.classList.remove('ButtonIsActive');
  //   } else {
  //     event.target.classList.add('ButtonIsActive');
  //   }

  if (!query) {
    return;
  }

  try {
    getExercisesByFilter(query).then(data => {
      const { results, page, totalPages } = data;
      createExercisesByFilterMarkup(results);
      if (totalPages > 1) {
        paginationEl.innerHTML = pagesPagination(page, totalPages);
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

// ===  Функція перехід по сторінкам

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
