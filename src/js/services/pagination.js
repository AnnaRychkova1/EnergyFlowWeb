// import { refs } from '../templates/refs';
// import { showLoader, hideLoader } from './visibility';

// export async function pagesPagination(page, totalPages, getExercisesByFilter) {
//   let buttons = '';
//   const maxVisibleButtons = 3;

//   let startButton = Math.max(1, page - 1);
//   let endButton = Math.min(totalPages, startButton + maxVisibleButtons - 1);

//   if (startButton > 1) {
//     buttons += `<button class="button-pagination prev" type="button">+</button>`;
//   }

//   for (let i = startButton; i <= endButton; i++) {
//     buttons += `<button class="button-pagination ${
//       i === page ? 'active' : ''
//     }" type="button">${i}</button>`;
//   }

//   if (endButton < totalPages) {
//     buttons += `<button class="button-pagination next" type="button">+</button>`;
//   }

//   return buttons;
// }

// export async function onPaginationPages(
//   event,
//   queryParams,
//   page
// ) {
//   const button = event.target;

//   if (button.classList.contains('prev') || button.classList.contains('next')) {
//     const currentPageButton = refs.paginationEl.querySelector(
//       '.button-pagination.active'
//     );
//     page = parseInt(currentPageButton.textContent, 10);
//     const newPage = button.classList.contains('prev') ? page - 1 : page + 1;
//     page = newPage;
//   } else {
//     page = parseInt(event.target.textContent, 10);
//   }

//   refs.exercisesGalleryEl.innerHTML = '';

//   try {
//     showLoader(refs.loaderModal);
//     const { results, totalPages } = await getExercisesByFilter();
//     queryParams.page = page;
//     createExercisesByFilterMarkup(results);
//     hideLoader(refs.loaderModal);
//     refs.paginationEl.innerHTML = await pagesPagination(
//       page,
//       totalPages,
//       getExercisesByFilter
//     );
//     scrollTo(refs.exercisesContainerEl);
//   } catch (error) {
//     console.log(error);
//     hideLoader(refs.loaderModal);
//   }
// }
