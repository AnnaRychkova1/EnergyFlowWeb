function scrollTo(element) {
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

export { scrollTo };
