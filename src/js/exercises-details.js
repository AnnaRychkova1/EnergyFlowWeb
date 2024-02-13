// ! imports
import axios from 'axios';
import { hide, show, showLoader, hideLoader } from './services/visibility';
import { refs } from './templates/refs.js';
import isiToast from './services/isiToast.js';
//import { exercisesParamFilter, exercisesParamName } from '../exercises'; - wait for push
import { getCardInfo } from './modal-menu.js';

const BASE_URL = 'https://energyflow.b.goit.study/api';
const ENDPOINT_EXERCISES = 'exercises';

// ! add listeners
//refs.searchForm.addEventListener('submit', handleSearch); // спочатку відкрити, потім закрити, по днфолту в нього має бути клас хіден
// refs.containerFilteredCards // mine div for all exept form - спочатку відкрити, потім закрити, по днфолту в нього має бути клас хіден
refs.resultContainer.addEventListener('click', handleClickOnCardStart)

// ! temporarely consts
// const exercisesParamFilter = "bodypart";
// const exercisesParamFilter = "muscles";
// const exercisesParamFilter = "equipment";
// const exercisesParamName = 'waist';
// const exercisesParamName = 'barbell';

// const getParams = {
//     filter: name,
//     keyword: '',
//     page: 1,
//     limit: 9,
// };

// ! work with title Vasilina
// refs.exercisesHeader.textContent = `/${exercisesParamName}`;

// ! Василина викликає мою функцію renderExerciseByFilterName();
// renderExerciseByFilterName(exercisesParamFilter, exercisesParamName);
// renderExerciseByFilterName();

async function renderExerciseByFilterName(filter, name) {
    //hide(refs.exercisesGalleryEl);
    const getParams = {
        [filter]: name,
        keyword: '',
        page: 1,
        limit: 9,
    }

    show(refs.containerFilteredCards);
    show(refs.searchForm);
    // showLoader(refs.loaderModal);

    // ! має появитися частинка заголовка, але не я, а Василина
    // ! need or not
    refs.resultContainer.innerHTML = '';

    // ! need or not
    if (!filter || !name) {
        isiToast.noResults();
        show(refs.textResult);
        hideLoader(refs.loaderModal);
        return;
    }

    try {
        const { results, totalPages } = await searchExerciseByFilters(getParams);
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
    getParams.keyword = inputKeyword.elements.exercise.value.trim();
    console.log(getParams.keyword)

    try {
        const { results, totalPages } = await searchExerciseByFilters(getParams);

        if (!getParams.keyword) {
            isiToast.noResults();
            show(refs.textResult);
            hideLoader(refs.loaderModal);
            return
        }


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
        hide(paginationContainer);
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
    showLoader(refs.loaderModal);
    const exerciseId = evt.target.dataset.id;
    getCardInfo(exerciseId);
}

// ! Api Function

async function searchExerciseByFilters({filter, name, keyword, limit, page}) {
    const response = await axios.get(
        `${BASE_URL}/${ENDPOINT_EXERCISES}`,
        {
            params: {
                [filter]: name,
                keyword: keyword,
                limit,
                page
            },
        }
    );
    return response.data;
}

export { renderExerciseByFilterName };
// export { exerciseId };

// ! will delete in future
// export {exercisesParamFilter, exercisesParamName }


