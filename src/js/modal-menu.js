import axios from 'axios';
import icons from '..img/icons.svg';

const modalBackdrop = document.querySelector('.modal-menu');
const startBtn = document.querySelector('.exercises-details');

const modalVisibility = 'is-open';

startBtn.addEventListener('click', handleClick);

async function handleClick(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  const res = event.target.closest('li').id;
  try {
    const obj = await axios.get(`/exercises/${res}`);
    modalWindowMarkup(obj.data);
    modalBackdrop.classList.add(modalVisibility);

    const stars = document.querySelectorAll('.stars-wrap-svg');
    const starsRating = Math.round(obj.data.rating);
    getStars(stars, starsRating);
  } catch {
    err => console.log(err);
  }
  const closebtn = document.getElementById('modal-close-btn');
  closebtn.addEventListener('click', () => {
    modalBackdrop.classList.remove(modalVisibility);
  });
  window.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      onCloseBtn(event);
    }
  });
}
modalBackdrop.addEventListener('click', onBackDropClick);

function onBackDropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseBtn(event);
  }
}

function onCloseBtn() {
  window.removeEventListener('keydown', onWindowKeydown);
  modalBackdrop.classList.remove(modalVisibility);
}
function onWindowKeydown(event) {
  if (event.code === 'Escape') {
    onCloseBtn(event);
  }
}
function modalWindowMarkup(filters = {}) {
  const {
    _id,
    bodyPart,
    equipment,
    time,
    target,
    burnedCalories,
    gifUrl,
    name,
    popularity,
    rating,
    description,
  } = filters;
  const markup = `<div class="exercises-modal-window">
          <div class="exercise-container">
            <button class="exercise-close-btn" id="modal-close-btn" type="button">
              <svg
                class="exercise-close-icon"
                width="10"
                height="10"
                aria-label="Close icon"
              >
                <use href="${icons}#icon-close-btn"></use>
              </svg>
            </button>
            <div class="exercise-image-wrapper">
              <img
                src="${gifUrl}"
                alt=""
                class="exercise-image-modal"
              />
            </div>
            <div class="exercise-info-wrapper">
              <div class="exercise-name-container decorate-line">
                <p class="exercise-name">${name}</p>
                <div class="rating-container">
                <p class="exercise-rating">${rating}</p>
                <div class="stars-wrap">
                  <svg class="stars-wrap-svg" width="18" height="18">
                    <use href="${icons}#icon-star"></use>
                  </svg>
                  <svg class="stars-wrap-svg" width="18" height="18">
                    <use href="${icons}#icon-star"></use>
                  </svg>
                  <svg class="stars-wrap-svg" width="18" height="18">
                    <use href="${icons}#icon-star"></use>
                  </svg>
                  <svg class="stars-wrap-svg" width="18" height="18">
                    <use href="${icons}#icon-star"></use>
                  </svg>
                  <svg class="stars-wrap-svg" width="18" height="18">
                    <use href="${icons}#icon-star"></use>
                  </svg>
               </div>
                </div>
              </div>
              <div class="exercise-params-container decorate-line">
                <ul class="exercise-params-list">
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Target</p>
                    <p class="exercise-param-value exercise-param-target">${target}</p>
                  </li>
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Body part</p>
                    <p class="exercise-param-value exercise-param-bodypart">${bodyPart}</p>
                  </li>
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Equipment</p>
                    <p class="exercise-param-value exercise-param-equipment">${equipment}</p>
                  </li>
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Popular</p>
                    <p class="exercise-param-value exercise-param-popularuty">${popularity}</p>
                  </li>
                  <li class="exercise-params-card">
                  <p class="exercise-param-name">Burned calories</p>
                  <p class="exercise-param-value exercise-param-popularuty">${burnedCalories}/${time} m</p></li>
                </ul>
              </div>
              <p class="exercise-descr">${description}</p>
              <div class="exercise-buttons">
                <button
                  class="exercise-favorite-btn"
                  type="submit"
                  data="${_id}"
                >
                  Add to favorites
                  <svg
                  class="exercise-fav-icon"
                  aria-label="Heart icon"
                  >
                  <use href="${icons}#icon-heart"></use>
                  </svg>
                </button>
                <button class="exercise-raiting-btn" type="submit" data="${_id}">
                  Give a rating
                </button>
              </div>
            </div>
          </div>
        </div>`;

  modalBackdrop.innerHTML = markup;
}

function getStars(arr, rate) {
  arr.forEach((el, id) => {
    id < rate ? el.classList.add('yellow') : null;
  });
}