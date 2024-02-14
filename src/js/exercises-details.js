import axios from 'axios';
import { hide, show, showLoader, hideLoader } from './services/visibility';
import { refs } from './templates/refs.js';
import isiToast from './services/isiToast.js';
import { createModalMenu } from './modal-menu.js';

const BASE_URL = 'https://energyflow.b.goit.study/api';
const ENDPOINT_EXERCISES = 'exercises';

refs.resultContainer.addEventListener('click', handleClickOnCardStart)

const getParams = {
    filter: name,
    keyword: '',
    page: 1,
    limit: 9,
}

async function renderExerciseByFilterName(exeptedFilter, name) {
    let filter;

    if (exeptedFilter === 'Body parts') {
        filter = 'bodypart'
    }
    if (exeptedFilter === 'Muscles') {
        filter = 'muscles'
    }
    if (exeptedFilter === 'Equipment') {
        filter = 'equipment'
    }

    if (refs.exercisesGalleryEl) {
        hide(refs.containerFilteredCards);
    }
    refs.exercisesSubtitle.textContent = `${name}`;
    show(refs.containerFilteredCards);
    show(refs.searchForm);
    showLoader(refs.loaderModal);

    // ! need to check for the first ul. is there or not

    refs.resultContainer.innerHTML = '';

    if (!filter || !name) {
        isiToast.noResults();
        show(refs.textResult);
        hideLoader(refs.loaderModal);
        return;
    }

    try {
        const { results, totalPages } = await searchExerciseByFilters({
            filter: filter,
            name: name,
            keyword: getParams.keyword,
            limit: getParams.limit,
            page: getParams.page
        });
        console.log(results);
        console.log(totalPages);

        if (!results || totalPages === 0) {
            isiToast.noResults();
            show(refs.textResult);
            hideLoader(refs.loaderModal);
            return;
        }

        // ! create markup for the first time or once

        let markup = '';
        for (const result of results) {
            markup += createCardsOfExercises(result);
        }
        refs.resultContainer.innerHTML = markup;

        // !  change number of pages
        getParams.page += 1

        if (totalPages > 1) {
            // ! Pagination start
            // createPagination();
        }

    } catch (error) {
        console.error('Error fetching images:', error);
        isiToast.apiIsiToastError();
    } finally {
        hideLoader(refs.loaderModal);
        // hide(paginationContainer);
        // ! I have to removeListener from another person or not
    }


    // ! Works with search button
    refs.searchForm.addEventListener('submit', handleSearch);

    async function handleSearch(evt) {

        evt.preventDefault();
        refs.resultContainer.innerHTML = '';
        getParams.page = 1;

        const inputKeyword = evt.currentTarget;
        getParams.keyword = inputKeyword.elements.query.value.trim();
        console.log(getParams.keyword)

        try {
            const { results, totalPages } = await searchExerciseByFilters({
                filter: filter,
                name: name,
                keyword: getParams.keyword,
                limit: getParams.limit,
                page: getParams.page
            });
// Correct
            if (!getParams.keyword) {
                isiToast.noQuery();
                show(refs.textResult);
                hideLoader(refs.loaderModal);
                return
            }

            // ! check fot the wrong query 
           

            // ! create markup for the first time or once

            let markupFilteredCards = '';
            for (const result of results) {
                markupFilteredCards += createCardsOfExercises(result);
            }
            refs.resultContainer.innerHTML = markupFilteredCards;

        } catch (error) {
            console.error('Error fetching images:', error);
            isiToast.apiIsiToastError();
        } finally {
            refs.searchForm.reset();
            //hide(paginationContainer);
        }
    }
}


// ! Create markup

function createCardsOfExercises({ _id, rating, name, burnedCalories, time, bodyPart, target }) {
    return `<li class="filtered-card-item">
        <div class="card-box-workout">
          <div class="card-box-info">
            <div class="filtered-workout">Workout</div>
            <div class="card-box-rating">
              <p class="filtered-rating">${Math.round(rating)}</p>
              <img class="filteered-star" href="#" alt="star" height="35"></img>
            </div>
          </div>
          <button type="submit" data-id=${_id} class="to-favorites-start">Start</button><a/>
        </div>
        <div class="card-box-title">
          <img class="filteered-athlete" href="#" alt="athlete" height="35"></img>
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
  </li>
  `;
}

// ! Function for create modal  Створити делегування подій на лішку

function handleClickOnCardStart(evt) {
    // showLoader(refs.loaderModal);
    const exerciseId = evt.target.dataset.id;
    console.log(exerciseId);
    createModalMenu(exerciseId);
}

// ! Api Function

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

export { renderExerciseByFilterName };
