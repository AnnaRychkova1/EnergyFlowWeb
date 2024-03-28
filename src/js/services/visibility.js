function hide(element) {
  element.classList.add('is-hidden');
}

function show(element) {
  element.classList.remove('is-hidden');
}

function showLoader(element) {
  element.classList.add('show');
}

function hideLoader(element) {
  element.classList.remove('show');
}

export { hide, show, showLoader, hideLoader };
