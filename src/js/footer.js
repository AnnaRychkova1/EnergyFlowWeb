import axios from 'axios';
import { refs } from './templates/refs';
import { hideLoader, showLoader } from './services/visibility';
import { errorResult, successResult } from './services/iziToast';

const form = document.querySelector('.footer-form');

if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const emailInput = document
      .querySelector('.footer-input')
      .value.trim()
      .toLowerCase();

    if (emailInput) {
      sendSubscriptionRequest(emailInput);
    } else {
      errorResult(
        'Invalid email entered. Please check the format and try again.'
      );
    }
  });
}

async function sendSubscriptionRequest(email) {
  showLoader(refs.loaderModal);
  const request = await axios
    .post('https://energyflow.b.goit.study/api/subscription', {
      email: email,
    })
    .then(function (response) {
      successResult('Your subscription is succesfully');
      form.reset();
    })
    .catch(function (error) {
      if (error.response.status === 409) {
        errorResult('Subscription already exists.');
      } else {
        errorResult(
          'An error occured while sending the request. Please try again.'
        );
      }
    })
    .finally(function () {
      hideLoader(refs.loaderModal);
      form.reset();
    });
}
