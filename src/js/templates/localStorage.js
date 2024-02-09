export function saveQuoteToLocalStorage(quoteData) {
  const currentDate = new Date();
  const dateObj = {
    year: currentDate.getFullYear(),
    month: currentDate.getMonth() + 1,
    day: currentDate.getDate(),
  };
  localStorage.setItem('quoteResponse', JSON.stringify(quoteData));
  localStorage.setItem('savedDate', JSON.stringify(dateObj));
}
