import axios from 'axios';
import { hide, show, showLoader, hideLoader } from './services/visibility';
import { refs } from './templates/refs.js';
import isiToast from './services/isiToast.js';
//import {modalExercisesMarkup } from './modal-menu.js';

const BASE_URL = 'https://energyflow.b.goit.study/api';
const ENDPOINT_EXERCISES = 'exercises';

// ! add listeners
refs.resultContainer.addEventListener('click', handleClickOnCardStart)

const getParams = {
    filter: '',
    keyword: '',
    page: 1,
    limit: 9,
}

if (window.innerWidth <= 768) {
    getParams.limit = 8;
} else {
    getParams.limit = 9;
}

async function renderExerciseByFilterName(expectedFilter, name) {
    let filter;

    if (expectedFilter === 'Body parts') {
        filter = 'bodypart'
    }
    if (expectedFilter === 'Muscles') {
        filter = 'muscles'
    }
    if (expectedFilter === 'Equipment') {
        filter = 'equipment'
    }

    refs.exercisesSubtitle.textContent = `${name}`;
    show(refs.containerFilteredCards);
    show(refs.searchForm);
    showLoader(refs.loaderModal);

    // ! need to check for the first ul. is there or not

    refs.resultContainer.innerHTML = '';

    // ! need or not
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

        if (totalPages > 2) {
//            show(refs.exercisesPagination); 
//           createPagination(totalPages);
        }

        if (totalPages === 0) {
            isiToast.noResults();
            show(refs.textResult);
            hideLoader(refs.loaderModal);
            return;
        }

        if (!results || totalPages === 0) {
            isiToast.noResults();
            show(refs.textResult);
            hideLoader(refs.loaderModal);
            return;
        }

        //  create markup for the first time or once

        let markup = '';
        for (const result of results) {
            markup += createCardsOfExercises(result);
        }

        refs.resultContainer.innerHTML = markup;

        getParams.page += 1;
//        handlePageChange(getParams.page);

    } catch (error) {
        console.error('Error fetching images:', error);
        isiToast.apiIsiToastError();
    } finally {
        hideLoader(refs.loaderModal);
 //       hide(refs.exercisesPagination);
    }


    //  Works with search button
    refs.searchForm.addEventListener('submit', handleSearch);

    async function handleSearch(evt) {

        evt.preventDefault();
        refs.resultContainer.innerHTML = '';
        getParams.page += 1;

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

            if (getParams.keyword.trim() === '') {
                isiToast.noQuery();
                show(refs.textResult);
                hideLoader(refs.loaderModal);
                return
            }

            // ! check fot the wrong query

            if (totalPages > 2) {
 //                show(refs.exercisesPagination);
 //               createPagination(totalPages);
            }
            
            //  create markup for the first time or once

            let markupFilteredCards = '';
            for (const result of results) {
                markupFilteredCards += createCardsOfExercises(result);
            }
            refs.resultContainer.innerHTML = markupFilteredCards;
            getParams.page += 1;
 //           handlePageChange(getParams.page);

        } catch (error) {
            console.error('Error fetching images:', error);
            isiToast.apiIsiToastError();
        } finally {
            refs.searchForm.reset();
 //           hide(refs.exercisesPagination);
        }
    }
}


// Create markup

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

// Function for create modal  Створити делегування подій на лішку

function handleClickOnCardStart(evt) {
    if (evt.target.classList.contains('to-favorites-start')) {
        const exerciseId = evt.target.dataset.id;
        console.log(exerciseId);
        //modalExercisesMarkup();
    }
}

// Api Function

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

// Pagination

// let currentPage = 1;

//// Функція для створення пагінації
// function createPagination(totalPages) {
//     const paginationContainer = document.querySelector('.exercises-pagination');

//     // Очистити попередні кнопки пагінації
//     paginationContainer.innerHTML = '';

//     // Створити кнопки для кожної сторінки
//     for (let i = 1; i <= totalPages; i++) {
//         const button = document.createElement('button');
//         button.textContent = i;
//         button.addEventListener('click', () => handlePageChange(i));
//         paginationContainer.appendChild(button);
//     }
// }

// // Функція для обробки зміни сторінки при кліку на кнопці пагінації
// function handlePageChange(pageNumber) {
//     // Оновити значення поточної сторінки
//     currentPage = pageNumber;

//     // Викликати функцію для завантаження даних з нової сторінки (наприклад, функцію renderExerciseByFilterName)
//     // Передайте поточну сторінку як аргумент, якщо потрібно
// }
