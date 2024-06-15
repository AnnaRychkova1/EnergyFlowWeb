import axios from 'axios';
import { onEscape } from '/js/modal-menu.js';
import { refs } from '/js/templates/refs.js';
import { hide, showLoader, hideLoader } from '/js/services/visibility.js';
import { errorResult, successResult } from '/js/services/iziToast.js';

let giveRatingBtn;
let id;
const overlayRating = document.querySelector('.overlay-rating');
const modalRating = document.querySelector('.modal-rating');
const closeRatingBtn = document.querySelector('.close-modal-rating-btn');
const starContainer = document.querySelector('.star-container');
const sendRatingBtn = document.querySelector('.send-rating-btn');

export function addGiveRatingListener() {
  giveRatingBtn = document.querySelector('.ex-rating-button');
  giveRatingBtn.addEventListener('click', handleGiveRatingClick);
  closeRatingBtn.addEventListener('click', closeRatingModal);
  overlayRating.addEventListener('click', closeOnOverlayClick);
  starContainer.addEventListener('click', handleClickOnStar);
  sendRatingBtn.addEventListener('click', handleSendRatingBtnClick);
}

export function removeGiveRatingListener() {
  giveRatingBtn.removeEventListener('click', handleGiveRatingClick);
  closeRatingBtn.removeEventListener('click', closeRatingModal);
  overlayRating.removeEventListener('click', closeOnOverlayClick);
  starContainer.removeEventListener('click', handleClickOnStar);
  sendRatingBtn.removeEventListener('click', handleSendRatingBtnClick);
}

function handleGiveRatingClick(event) {
  event.preventDefault();
  document.removeEventListener('keydown', onEscape);
  id = event.target.dataset.id;
  hideExercisesModal();
  openGiveRatingModal();
}

function openGiveRatingModal() {
  modalRating.classList.remove('is-hidden');
  overlayRating.style.display = 'block';
  refs.backdrop.style.display = 'none';
}

function handleClickOnStar(event) {
  if (event.target.tagName === 'INPUT') {
    const value = event.target.value;
    const ratingValue = document.querySelector('.rating-value');
    ratingValue.textContent = Number(value).toFixed(1);
  }
}

function handleSendRatingBtnClick(event) {
  event.preventDefault();
  const formData = document.querySelector('.rating-form');
  const rate = formData.elements['star'].value;
  const email = formData.elements['email'].value.trim();
  const review = formData.elements['review'].value.trim();

  const re = /\S+@\S+\.\S+/;

  if (rate === '') {
    errorResult('Please set your estimation!');
    return;
  }
  if (email === '' || !re.test(email)) {
    errorResult('Please enter your email!');
    return;
  }

  if (review === '') {
    errorResult('Please enter your review!');
    return;
  }

  sendRatingData(rate, email, review)
    .then(function (response) {
      successResult('Thank you! Your rating has been sent!');
      const ratingValue = document.querySelector('.rating-value');
      ratingValue.textContent = '0.0';
      formData.reset();
      closeRatingModal();
    })
    .catch(function (error) {
      if (error.response.status === 409) {
        errorResult('Such email already exists!');
      } else if (error.response.status === 404) {
        errorResult('Such exercise not found!');
      } else {
        errorResult('Server Rating did not responded');
      }
    });
}

async function sendRatingData(rate, email, review) {
  showLoader(refs.loaderModal);
  try {
    const BASE_URL = 'https://energyflow.b.goit.study/api';
    const ENDPOINT = 'exercises';
    rate = Number(rate);
    return axios.patch(`${BASE_URL}/${ENDPOINT}/${id}/rating/`, {
      rate,
      email,
      review,
    });
  } catch (error) {
    errorResult('Server Rating did not responded');
  } finally {
    hideLoader(refs.loaderModal);
  }
}

function closeRatingModal() {
  hide(modalRating);
  overlayRating.style.display = 'none';
  refs.backdrop.style.display = 'flex';
  restoreExercisesModal();
  document.addEventListener('keydown', onEscape);
}

function hideExercisesModal() {
  const modalCard = document.querySelector('.modal-container');
  modalCard.classList.add('is-hidden');
}

function restoreExercisesModal() {
  const modalCard = document.querySelector('.modal-container');
  modalCard.classList.remove('is-hidden');
}

function closeOnOverlayClick(event) {
  if (event.target.classList.contains('overlay-rating')) {
    closeRatingModal();
  }
}
