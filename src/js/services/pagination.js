import { refs } from '../templates/refs.js';
import { showLoader, hideLoader } from '../services/visibility.js';
import { scrollTo } from '../services/scrollTo.js';

function pagesPagination(page, totalPages) {
  let buttons = '';
  const maxVisibleButtons = 3;

  let startButton = Math.max(1, page - 1);
  let endButton = Math.min(totalPages, startButton + maxVisibleButtons - 1);

  if (startButton > 1) {
    buttons += `<button class="button-pagination prev" type="button"><<</button>`;
  }

  for (let i = startButton; i <= endButton; i++) {
    buttons += `<button class="button-pagination ${
      i === page ? 'active' : ''
    }" type="button">${i}</button>`;
  }

  if (endButton < totalPages) {
    buttons += `<button class="button-pagination next" type="button">>></button>`;
  }

  return buttons;
}

function onPaginationClick(
  createMarkup,
  requestFunction,
  params,
  filledContainer,
  identifier
) {
  let page = 1;
  return async function onPagination(event) {
    const button = event.target;
    if (!button.parentElement.classList.contains(identifier)) {
      return;
    }

    if (
      button.classList.contains('prev') ||
      button.classList.contains('next')
    ) {
      const currentPageButton = refs.paginationEl.querySelector(
        '.button-pagination.active'
      );
      const currentPage = parseInt(currentPageButton.textContent, 10);
      page = button.classList.contains('prev')
        ? currentPage - 1
        : currentPage + 1;
    } else {
      page = parseInt(event.target.textContent, 10);
    }

    params.page = page;

    filledContainer.innerHTML = '';

    try {
      showLoader(refs.loaderModal);
      const { results, totalPages } = await requestFunction(page, params);

      if (results && results.length > 0) {
        createMarkup(results);
        refs.paginationEl.innerHTML = pagesPagination(page, totalPages);
        scrollTo(refs.exercisesContainerEl);
      } else {
        console.error('No results found for this filter');
      }
    } catch (error) {
      console.log(error);
    } finally {
      hideLoader(refs.loaderModal);
    }
  };
}

export { pagesPagination, onPaginationClick };
