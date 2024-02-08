import axios from 'axios';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';




const BASE_URL = 'https://energyflow.b.goit.study/api';
const END_POINT = 'exercises';

// https://energyflow.b.goit.study/api/exercises?bodypart=waist&muscles=abs&equipment=assisted&keyword=side&page=1&limit=10

const queryParams = {
    bodypart: '',
    muscles: '',
    equipment: '',
    keyword: '',
    page: 1,
    limit: 10,
};

queryParams.bodypart = 'waist';
queryParams.muscles = 'abs';
queryParams.equipment = 'dumbbell';



const refs = {
    exercisesHeader: document.querySelector('.exersises-header'),
    resultContainer: document.querySelector('.filtered-cards'),
    searchForm: document.querySelector('.form'),
}


console.log(refs.exercisesHeader.textContent);

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
      const { results } = await searchExerciseByFilters(queryParams);

    //   const isSearch = results.map(({ name }) => name.join(''))
    //   console.log(isSearch);

     let arr = [];
        for (const result of results) { 
          console.log(result.name);
          arr.push(result.name);    
      }
      console.log(arr);
 
const hasSeasch = arr.some(item => item.includes(queryParams.keyword));
console.log(hasSeasch);
      


    // if (results.length > 0 && results.length !== totalPages) {
    //   refs.loadMoreBtn.addEventListener('click', handleLoadMore);
    //   buttonService.show(refs.loadMoreBtn);
    // } else {
    //   isiToast.endOfSearch();
    //   buttonService.hide(refs.loadMoreBtn);
    //   buttonService.enableBtn(refs.searchBtn);
      // }

      renderItemsMarkup(results, refs.resultContainer);
      const lightbox = new SimpleLightbox('.filtered-cards a', {
          captionsData: 'alt',
          captionDelay: 250,
      });

      lightbox.refresh();
      
  } catch (error) {
    console.error('Error fetching images:', error);
    alert('Wrong request')
  } finally {
      formQuery.reset();
  }
}



function renderItemsMarkup(results, resultContainer ) {
  const markup = results
    .map(
      ({
        rating,
          gifUrl,
          name,
          burnedCalories, time, bodyPart, target
        }) => `<li class="filtered-card-item">
        <button class="filtered-btn">Workout</button>
        <p class="filtered-rating">${rating}</p>
        <img class="filteered-star" href="#" alt="star" height="35"></img>
        <a class="to-favorites-link" href="${gifUrl}"><button class="to-favorites-start">Start</button><a/>
        <img class="filteered-athlete" href="#" alt="athlete" height="35"></img>
        <h3 class="filteered-title">${name}</h3>
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



async function searchExerciseByFilters({bodyQuery, musclesQuery,equipmentQuery,keywordQuery, page = 1, limit}) {
  const response = await axios
      .get(`${BASE_URL}/${END_POINT}/`, {
          params: {
              bodypart: bodyQuery,
              muscles: musclesQuery,
              equipment: equipmentQuery,
              keyword: keywordQuery,
              page,
              limit,
          },
      })
  return response.data;
}


