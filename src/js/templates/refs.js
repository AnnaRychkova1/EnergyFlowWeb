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

  //  Anna
  containerFilteredCards: document.querySelector('.exercises-deteils'),
  resultContainer: document.querySelector('.filtered-cards'),
  searchForm: document.querySelector('.form'),
  textResult: document.querySelector('.exercise-text-no-found'),

  // Oksana
  favoritesGallery: document.querySelector('.favorites-gallery'),
  favoritesMessage: document.querySelector('.favorites-box-block'),
  onRemoveBtn: document.querySelector('.favorites-remove-btn'),
  onStartBtn: document.querySelector('.favorites-start-btn'),
  addToFavoritesBtn: document.querySelector('.ex-add-btn'),
  galleryItem: document.querySelector('.favorites-gallery-item'),
};
