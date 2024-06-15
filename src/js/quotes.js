import axios from 'axios';

import { saveQuoteToLocalStorage } from '/js/templates/localStorage.js';
import { refs } from '/js/templates/refs.js';
import { hideLoader, showLoader } from '/js/services/visibility.js';
import { errorResult } from '/js/services/iziToast.js';

const BASE_URL = 'https://energyflow.b.goit.study/api';
const ENDPOINT_QUOTE = 'quote';

// display quote
function displayQuoteOnPage(quoteData) {
  const quoteText = document.querySelector('.quote-text');
  const quoteAuthor = document.querySelector('.quote-author');
  quoteText.textContent = quoteData.quote;
  quoteAuthor.textContent = quoteData.author;
}

getQuoteOffTheDay();

async function getQuoteOffTheDay() {
  const quoteResponse = JSON.parse(localStorage.getItem('quoteResponse'));
  const savedDate = JSON.parse(localStorage.getItem('savedDate'));
  const currentDate = new Date();
  showLoader(refs.loaderModal);
  try {
    let quoteData;
    if (savedDate && quoteResponse) {
      if (
        currentDate.getFullYear() === savedDate.year &&
        currentDate.getMonth() + 1 === savedDate.month &&
        currentDate.getDate() === savedDate.day
      ) {
        // Використовуємо збережену цитату з локального сховища
        quoteData = quoteResponse;
      }
    } else {
      // Отримуємо нову цитату з сервера
      quoteData = await fetchQuoteFromServer();
      saveQuoteToLocalStorage(quoteData);
    }
    // Відображаємо цитату на сторінці
    displayQuoteOnPage(quoteData);
  } catch (error) {
    errorResult('Server Quotes did not respond');
  } finally {
    hideLoader(refs.loaderModal);
  }
}

// request to server
async function fetchQuoteFromServer() {
  const response = await axios.get(`${BASE_URL}/${ENDPOINT_QUOTE}`);
  return response.data;
}
