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

if (window.innerWidth <= 768) {
    getParams.limit = 8;
} else {
    getParams.limit = 9;
}

async function renderExerciseByFilterName(expectedFilter, name) {
    hideLoader(refs.loaderModal);

    let filter;

    if (expectedFilter === 'Body parts') {
        filter = 'bodypart';
    } else if (expectedFilter === 'Muscles') {
        filter = 'muscles';
    } else if (expectedFilter === 'Equipment') {
        filter = 'equipment';
    }  

    // ! why search form is still shown? Maybe i need remove listener from form?

    if (refs.exercisesGalleryEl) {
        hide(refs.subexercisesDetailsContainer);
        refs.subexercisesSearchForm.reset();
        // hide(refs.subexercisesSearchForm);
    }

    refs.subexercisesFilteredCards.innerHTML = ''
    refs.exercisesSubtitle.textContent = `${name}`;
    show(refs.subexercisesDetailsContainer);
    show(refs.subexercisesSearchForm);
    showLoader(refs.loaderModal);

    if (!filter || !name) {
        isiToast.noResults();
        show(refs.subexercisesTextNoFound);
        hideLoader(refs.loaderModal);
        return;
    }

    // ! Робити інер, тобто очищати список перед кожним трай
     // ! Очищувати список вправ
        // ! Очищувати мій дів
    // ! Очищувати форму
        

    try {
        const { results, totalPages } = await searchExerciseByFilters({
            filter: filter,
            name: name,
            keyword: getParams.keyword,
            limit: getParams.limit,
            page: getParams.page
        });

        console.log(totalPages);
        console.log(results);
        console.log(getParams.page);

        if (totalPages < 1) {
            isiToast.noResults();
            show(refs.subexercisesTextNoFound);
            hideLoader(refs.loaderModal);
            return;
        }

        renderCards(results);
        
        if (!refs.subExercisesPaginationContainer) {
            createPagination(totalPages);
        }

    } catch (error) {
        console.error('Error fetching images:', error);
        isiToast.apiIsiToastError();
    } finally {
        hideLoader(refs.loaderModal);
        refs.subexercisesSearchForm.reset();

    }

    //!  Works with search button
    refs.subexercisesSearchForm.addEventListener('submit', handleSearch);
    
    async function handleSearch(evt) {
        evt.preventDefault();

         if (refs.exercisesGalleryEl) {
            hide(refs.subexercisesDetailsContainer);
            // refs.subexercisesSearchForm.reset();
            hide(refs.subexercisesSearchForm);
        }

        refs.exercisesSubtitle.textContent = `${name}`;
        show(refs.subexercisesDetailsContainer);
        show(refs.subexercisesSearchForm);
        showLoader(refs.loaderModal);
        refs.subexercisesFilteredCards.innerHTML = '';

        // get query
        const formData = new FormData(evt.target)
        getParams.keyword = formData.get('query');
        console.log(getParams.keyword);

        // ! check fot the wrong query
    
         if (getParams.keyword.trim() === '') {
                isiToast.noQuery();
                hideLoader(refs.loaderModal);
                return
        }

    // ! Очищувати список вправ
        // ! Очищувати мій дів
    // ! Очищувати форму
        

       
        try {
            const { results, totalPages } = await searchExerciseByFilters({
                filter: filter,
                name: name,
                keyword: getParams.keyword,
                limit: getParams.limit,
                page: getParams.page
            });

            if (totalPages < 1) {
                isiToast.noResults();
                show(refs.subexercisesTextNoFound);
                hideLoader(refs.loaderModal);
                return;
            }
            
            if (totalPages >= 2) {
                createPagination(totalPages);
            }

            renderCards(results);
            getParams.page += 1;

        } catch (error) {
            console.error('Error fetching images:', error);
            isiToast.apiIsiToastError();
        } finally {
            // refs.subexercisesSearchForm.reset();
            hide(refs.loaderModal);
        }
    }
}

refs.subexercisesFilteredCards.addEventListener('click', handleClickOnCardStart)

function handleClickOnCardStart(evt) {
    if (!evt.target.dataset.id) {
        return
    }
    // showLoader(refs.loaderModal);
    const exerciseId = evt.target.dataset.id;
    hide(refs.subexercisesDetailsContainer);
    //console.log(exerciseId);
    createModalMenu(exerciseId);
}

async function searchExerciseByFilters({filter, name, keyword, limit, page}) {
    const response = await axios.get(
        `${BASE_URL}/${ENDPOINT_EXERCISES}`,
        {
            params: {
                [filter]: name,
                keyword: keyword,
                limit: limit,
                page: page
            },
        }
    );
    return response.data;
}

// ! +++
function renderCards(results) {
    const markup = results.map(result => createCard(result)).join('');
    refs.subexercisesFilteredCards.innerHTML = markup;
}

// ! +++
function createCard({ _id, rating, name, burnedCalories, time, bodyPart, target }) {
    return `<li class="filtered-card-item">
        <div class="card-box-workout">
          <div class="card-box-info">
            <div class="filtered-workout">Workout</div>
            <div class="card-box-rating">
              <p class="filtered-rating">${Math.round(rating)}</p>
              <img class="filteered-star" href="#" alt="star" height="35"></img>
            </div>
          </div>
          <button class="to-favorites-start" type="submit" data-id=${_id}>Start</button>
        </div>
        <div class="card-box-title">
          <img class="filtered-athlete" href="#" alt="athlete" height="35"></img>
          <h3 class="filteered-title">${name}</h3>
        </div>
        <ul class="filtered-description">
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Burned calories: <spam class="filtered-descr-value">${burnedCalories} / ${time} min</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Body part: <spam class="filtered-descr-value">${bodyPart}</spam></p>
          </li>
          <li class="filtered-descr-item">
            <p class="filtered-descr-title">Target: <spam class="filtered-descr-value">${target}</spam></p>
          </li>
        </ul>
  </li>`;
}

// ! Pagination

function createPagination(totalPages, pageCurrentNumber) {

    refs.subExercisesPaginationContainer.innerHTML = '';

    let startPage = Math.max(1, pageCurrentNumber - 1);
    let endPage = Math.min(totalPages, startPage + 2);
    console.log(pageCurrentNumber);

    for (let i = startPage; i <= endPage; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.classList.add('subexercises-pagination-button');
        if (i === pageCurrentNumber) {
            button.classList.add('active');
        }
        button.addEventListener('click', () => handlePageChange(i));
        refs.subExercisesPaginationContainer.appendChild(button);
    }
    console.log(refs.subExercisesPaginationContainer);
}

function handlePageChange(pageNumber) {
    getParams.page = pageNumber;
    console.log(pageNumber);
    renderExerciseByFilterName(); 
}

export { renderExerciseByFilterName };
