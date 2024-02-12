let linkClass = '.navigation-links';

let currentUrl = location.pathname;
const links = document.querySelectorAll(linkClass);
console.log(links);
for (let i = 0; i < links.length; i++) {
  let href = links[i].getAttribute('href');
  if (currentUrl.includes(href)) {
    links[i].classList.add('current');
  }
}
