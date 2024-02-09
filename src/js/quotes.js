import axios from 'axios';

export async function getQuoteOffTheDay() {
  const quoteText = document.querySelector('.quote-text');
  const quoteAuthor = document.querySelector('.quote-author');
  try {
    // Отримуємо дані з локального сховища
    const quoteResponse = JSON.parse(localStorage.getItem('quoteResponse'));
    const savedDate = JSON.parse(localStorage.getItem('savedDate'));
    // Отримуємо поточну дату
    const currentDate = new Date();
    // Перевіряємо, чи вже були збережені дані у локальному сховищі та чи вони відповідають поточній даті
    if (
      savedDate &&
      quoteResponse &&
      currentDate.getFullYear() === savedDate.year &&
      currentDate.getMonth() + 1 === savedDate.month &&
      currentDate.getDate() === savedDate.day
    ) {
      // Якщо дата в локальному сховищі співпадає з поточною датою, відображаємо збережену цитату на сторінці
      quoteText.textContent = quoteResponse.quote;
      quoteAuthor.textContent = quoteResponse.author;
    } else {
      // Якщо дата в локальному сховищі не співпадає з поточною датою, здійснюємо запит до сервера для отримання нової цитати
      const response = await axios.get(
        'https://energyflow.b.goit.study/api/quote'
      );
      const data = response.data;
      // Створюємо об'єкт з датою поточного дня
      const dateObj = {
        year: currentDate.getFullYear(),
        month: currentDate.getMonth() + 1,
        day: currentDate.getDate(),
      };
      // Зберігаємо нову цитату та дату у локальному сховищі
      localStorage.setItem(
        'quoteResponse',
        JSON.stringify({
          quote: data.quote,
          author: data.author,
        })
      );
      localStorage.setItem('savedDate', JSON.stringify(dateObj));
      // Відображаємо нову цитату на сторінці
      quoteText.textContent = data.quote;
      quoteAuthor.textContent = data.author;
    }
  } catch (error) {
    console.log(error);
  }
  return;
}
