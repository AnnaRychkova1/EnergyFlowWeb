
import { hide, show, showLoader, hideLoader } from "./services/visibility";
import { refs } from './templates/refs.js';
import { searchExerciseByFilters } from "./services/mainApi.js";
import { BASE_URL } from "./services/mainApi.js";


// https://energyflow.b.goit.study/api/exercises?bodypart=waist&muscles=abs&equipment=assisted&keyword=side&page=1&limit=10

// import { filterExercise, nameExercise} from './exercises';

const filterExercise = 'bodypart';
const nameExercise = 'waist';

export { filterExercise, nameExercise };

const queryParams = {
  filter: nameExercise,
  keyword: '',
  page: 1,
  limit: 9,
};





refs.exercisesHeader.textContent = `/${nameExercise}`;
refs.textResult.classList.add("is-hidden");
renderExerciseByFilter();

async function renderExerciseByFilter(evt) {

  try {
    const { results, totalPages } = await searchExerciseByFilters(queryParams);
    console.log(results);
    console.log(totalPages);
    
    // if (results.length > 0 && results.length !== totalPages) {
    //   refs.loadMoreBtn.addEventListener('click', handleLoadMore);
    //   buttonService.show(refs.loadMoreBtn);
    // } else {
    //   isiToast.endOfSearch();
    //   buttonService.hide(refs.loadMoreBtn);
    //   buttonService.enableBtn(refs.searchBtn);
    // }

      renderItemsMarkup(results, refs.resultContainer);
      // const lightbox = new SimpleLightbox('.filtered-cards a', {
      //     captionsData: 'alt',
      //     captionDelay: 250,
      // });

      // lightbox.refresh();
      
  } catch (error) {
    console.error('Error fetching images:', error);
    alert('Wrong request')
  } finally {
      
  }
}





refs.searchForm.addEventListener('submit', handleSearch);
refs.resultContainer.innerHTML = '';


async function handleSearch(event) {
  event.preventDefault();

  refs.resultContainer.innerHTML = '';
  
  queryParams.page = 1;

  const formQuery = event.currentTarget;
    queryParams.keyword = formQuery.elements.query.value.trim();
    console.log(queryParams.keyword);

  if (!queryParams.keyword) {
    alert('Empty value')
    return;
  }

  try {
    console.log(queryParams);
      const { results, totalPages } = await searchExerciseByFilters(queryParams);

    const getQuery = (results, toQuery) =>
    results.filter(result => result.name.includes(toQuery));

      console.log(getQuery(results, queryParams.keyword)); 
      

console.log(totalPages);
    // if (results.length > 0 && results.length !== totalPages) {
    //   refs.loadMoreBtn.addEventListener('click', handleLoadMore);
    //   buttonService.show(refs.loadMoreBtn);
    // } else {
    //   isiToast.endOfSearch();
    //   buttonService.hide(refs.loadMoreBtn);
    //   buttonService.enableBtn(refs.searchBtn);
      // }

      renderItemsMarkup(results, refs.resultContainer);
      // const lightbox = new SimpleLightbox('.filtered-cards a', {
      //     captionsData: 'alt',
      //     captionDelay: 250,
      // });

      // lightbox.refresh();
      
  } catch (error) {
    console.error('Error fetching images:', error);
    alert('Wrong request')
  } finally {
      refs.searchForm.reset();
  }
}

function renderItemsMarkup(results, resultContainer ) {
  const markup = results
    .map(
      ({ _id, rating, name, burnedCalories, time, bodyPart, target }) => `<li class="filtered-card-item">
        <div class="card-box-workout">
          <div class="card-box-info">
            <div class="filtered-workout">Workout</div>
            <div class="card-box-rating">
              <p class="filtered-rating">${Math.round(rating)}</p>
              <img class="filteered-star" href="#" alt="star" height="35"></img>
            </div>
          </div>
          <button data-id=${_id} class="to-favorites-start">Start</button><a/>
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
  `
    )
    .join('');

  resultContainer.insertAdjacentHTML('beforeend', markup);
}
