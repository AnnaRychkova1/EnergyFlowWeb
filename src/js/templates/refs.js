export const refs = {
  // Loader
  loaderModal: document.querySelector('.overlay-loader'),

  // ScrollUp
  scrollUpBtn: document.querySelector('.scroll-up-btn'),

  // Pagination
  paginationEl: document.querySelector('.pagination'),

  // exercises
  buttonsEl: document.querySelectorAll('.exercises-btn-item'),
  musclesBtnEl: document.querySelector('[data-filter="Muscles"]'),
  bodyPartsBtnEl: document.querySelector('[data-filter="Body parts"]'),
  equipmentBtnEl: document.querySelector('[data-filter="Equipment"]'),
  exercisesBtnEl: document.querySelector('.exercises-btn-list'),
  exercisesGalleryEl: document.querySelector('.exercises-gallery'),
  exercisesContainerEl: document.querySelector('.exercises-container'),
  exercisesTitleSpan: document.querySelector('.exercises-title-span'),
  exercisesSubtitle: document.querySelector('.exercises-subtitle'),

  //  subexercises
  subexercisesFilteredCards: document.querySelector(
    '.subexercises-filtered-cards'
  ),
  subexercisesSearchForm: document.querySelector('.subexercises-search-form'),
  subexercisesSearchBtn: document.querySelector('.subexercises-search-btn'),
  subexercisesTextNoFound: document.querySelector(
    '.subexercises-text-no-found'
  ),

  // favorites
  favoritesContainer: document.querySelector('.favorites-container'),
  favoritesGallery: document.querySelector('.favorites-gallery'),
  favoritesMessage: document.querySelector('.favorites-box-block'),
  containerScroll: document.querySelector('.scroll-fav'),

  // modal-menu
  backdrop: document.querySelector('.backdrop'),
};
