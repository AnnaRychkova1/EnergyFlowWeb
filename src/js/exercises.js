import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import axios from 'axios';

const BASE_URL = 'https://energyflow.b.goit.study/api';
const ENDPOINT = 'filters';

const exercisesBtnEl = document.querySelector('.exercises-btn');
const exercisesGalleryEl = document.querySelector('.exercises-gallery');

let page = 1;

async function getExercisesByMuscles() {
  try {
    const response = await axios.get(`${BASE_URL}/${ENDPOINT}`, {
      params: {
        filter: 'Muscles',
        page: page,
        limit: 12,
      },
    });
    // return response;
    console.log(response);
    exercisesGalleryEl.innerHTML = createExercisesByMusclesMarkup(
      response.data.results
    );
  } catch (error) {
    console.error(error);
  }
}

getExercisesByMuscles();

const createExercisesByMusclesMarkup = arr =>
  arr
    .map(
      ({ name, filter, imgUrl }) =>
        `<li class="exercises-gallery-item"
         style="background: linear-gradient(0deg, rgba(16, 16, 16, 0.70) 0%, rgba(16, 16, 16, 0.70) 100%), url(${imgUrl});
         background-size: cover;
background-repeat: no-repeat;">
<div class="exercises-gallery-text">
          <h3 class="exercises-gallery-title">${name}</h3>
          <p class="exercises-gallery-filter">${filter}</p>
          </div> 
      </li>`
    )
    .join('');

// function onFetchError(error) {
//   iziToast.error({
//     title: 'Error',
//     message:
//       'Sorry, there are no images matching your search query. Please try again!',
//     position: 'topRight',
//     messageColor: '#fff',
//     messageSize: '20px',
//     backgroundColor: '#EF4040',
//     close: false,
//     closeOnClick: true,
//     progressBarEasing: 'linear',
//   });
// }
