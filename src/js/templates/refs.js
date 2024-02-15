export const refs = {
  // Loader
  loaderModal: document.querySelector('.overlay'),

  // Vasilina
  exercisesBtnEl: document.querySelector('.exercises-btn-list'),
  buttonsEl: document.querySelectorAll('.exercises-btn-item'),
  musclesBtnEl: document.querySelector('[data-filter="muscles"]'),
  bodyPartsBtnEl: document.querySelector('[data-filter="Body parts"]'),
  equipmentBtnEl: document.querySelector('[data-filter="Equipment"]'),
  exercisesGalleryEl: document.querySelector('.exercises-gallery'),
  paginationEl: document.querySelector('.exercises-pagination'),
  exercisesContainerEl: document.querySelector('.exercises-container'),
  exercisesTitleSpan: document.querySelector('.exercises-title-span'),

  //  Anna
  subexercisesDetailsContainer: document.querySelector(
    '.subexercises-deteils-container'
  ),
  subexercisesFilteredCards: document.querySelector(
    '.subexercises-filtered-cards'
  ),
  subexercisesSearchForm: document.querySelector('.subexercises-search-form'),
  subexercisesSearchBtn: document.querySelector('.subexercises-search-btn'),
  subexercisesTextNoFound: document.querySelector(
    '.subexercises-text-no-found'
  ),
  exercisesSubtitle: document.querySelector('.exercises-subtitle'),
  subExercisesPaginationContainer: document.querySelector(
    '.subexercises-pagination-container'
  ),
  subexercisesPaginationButton: document.querySelector(
    '.subexercises-pagination-button'
  ),

  // Oksana
  favoritesGallery: document.querySelector('.favorites-gallery'),
  favoritesMessage: document.querySelector('.favorites-box-block'),
  onRemoveBtn: document.querySelector('.favorites-remove-btn'),
  onStartBtn: document.querySelector('.favorites-start-btn'),
  addToFavoritesBtn: document.querySelector('.ex-add-btn'),
  galleryItem: document.querySelector('.favorites-gallery-item'),
};
