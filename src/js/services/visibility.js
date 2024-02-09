function hide(button) {
  button.classList.add("is-hidden");
}

function show(button) {
  button.classList.remove("is-hidden");
}

function showLoader(button) {
  button.classList.add('show');
}

function hideLoader(button) {
  button.classList.remove('show');
}

export  { hide, show, showLoader, hideLoader  };