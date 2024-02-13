import axios from 'axios';
const BASE_URL = 'https://energyflow.b.goit.study/api';
const ENDPOINT_QUOTE = 'quote';
import { fetchQuoteFromServer } from './services/mainApi';
import { saveQuoteToLocalStorage } from './templates/localStorage';

function displayQuoteOnPage(quoteData) {
  const quoteText = document.querySelector('.quote-text');
  const quoteAuthor = document.querySelector('.quote-author');
  quoteText.textContent = quoteData.quote;
  quoteAuthor.textContent = quoteData.author;
}
export async function getQuoteOffTheDay() {
  const quoteResponse = JSON.parse(localStorage.getItem('quoteResponse'));
  const savedDate = JSON.parse(localStorage.getItem('savedDate'));
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
    console.log(error);
  }
}
getQuoteOffTheDay();

// async function fetchQuoteFromServer() {
//   try {
//     const response = await axios.get(`${BASE_URL}/${ENDPOINT_QUOTE}`);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// }

