import axios from 'axios';

import { saveQuoteToLocalStorage } from './templates/localStorage.js';
import { refs } from './templates/refs.js';
import { hideLoader, showLoader } from './services/visibility.js';
import { errorResult } from './services/iziToast.js';

const BASE_URL = 'https://energyflow.b.goit.study/api';
const ENDPOINT_QUOTE = 'quote';

function displayQuoteOnPage(quoteData) {
  const quoteText = document.querySelector('.quote-text');
  const quoteAuthor = document.querySelector('.quote-author');
  quoteText.textContent = quoteData.quote;
  quoteAuthor.textContent = quoteData.author;
}

async function getQuoteOffTheDay() {
  const quoteResponse = JSON.parse(localStorage.getItem('quoteResponse'));
  const savedDate = JSON.parse(localStorage.getItem('savedDate'));
  showLoader(refs.loaderModal);
  try {
    let quoteData;
    if (savedDate && quoteResponse) {
      const currentDate = new Date();
      if (
        currentDate.getFullYear() === savedDate.year &&
        currentDate.getMonth() + 1 === savedDate.month &&
        currentDate.getDate() === savedDate.day
      ) {
        // Використовуємо збережену цитату з локального сховища
        quoteData = quoteResponse;
      } else {
        // Отримуємо нову цитату з сервера
        quoteData = await fetchQuoteFromServer();
        saveQuoteToLocalStorage(quoteData);
      }
    } else {
      // Отримуємо нову цитату з сервера
      quoteData = await fetchQuoteFromServer();
      saveQuoteToLocalStorage(quoteData);
    }
    // Відображаємо цитату на сторінці
    displayQuoteOnPage(quoteData);
  } catch (error) {
    errorResult('Saved Quotes did not respond');
  } finally {
    hideLoader(refs.loaderModal);
  }
}

getQuoteOffTheDay();

async function fetchQuoteFromServer() {
  showLoader(refs.loaderModal);
  try {
    const response = await axios.get(`${BASE_URL}/${ENDPOINT_QUOTE}`);
    return response.data;
  } catch (error) {
    errorResult('Server Quotes did not respond');
    throw error;
  } finally {
    hideLoader(refs.loaderModal);
  }
}
