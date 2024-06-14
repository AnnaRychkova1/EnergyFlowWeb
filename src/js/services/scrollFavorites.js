import 'perfect-scrollbar/css/perfect-scrollbar.css';
import PerfectScrollbar from 'perfect-scrollbar';
import { refs } from '../templates/refs.js';

const ps = new PerfectScrollbar(refs.containerScroll, {
  wheelSpeed: 2,
  wheelPropagation: true,
  minScrollbarLength: 153,
});

window.addEventListener('resize', createScrollFavorites);

function createScrollFavorites() {
  const screenWidth = window.innerWidth;
  const YRail = document.querySelector('.ps__rail-y');
  const YThumb = YRail.firstChild;

  if (
    screenWidth > 768 &&
    screenWidth < 1440 &&
    refs.favoritesGallery.children.length > 8
  ) {
    if (YRail) {
      YRail.style.opacity = '0.6';
      YRail.style.display = 'block';
      YRail.style.height = '479px';
      YRail.style.width = '8px';
      YRail.style.backgroundColor = 'rgba(27, 27, 27, 0.1)';
      YRail.style.borderRadius = '12px';
      YRail.style.right = '0px';
      refs.favoritesContainer.style.paddingRight = '16px';
      refs.favoritesGallery.style.width = '672px';
    }

    if (YThumb) {
      YThumb.style.width = '8px';
      YThumb.style.opacity = '1';
      YThumb.style.display = 'block';
      YThumb.style.height = '153px';
      YThumb.style.backgroundColor = '#7e847f';
      YThumb.style.borderRadius = '12px';
      YThumb.style.right = '0px';
    }
  } else if (screenWidth > 1440 && refs.favoritesGallery.children.length > 9) {
    if (YRail) {
      YRail.style.opacity = '0.6';
      YRail.style.display = 'block';
      YRail.style.height = '479px';
      YRail.style.width = '8px';
      YRail.style.backgroundColor = 'rgba(27, 27, 27, 0.1)';
      YRail.style.borderRadius = '12px';
      YRail.style.right = '0px';
      refs.favoritesContainer.style.paddingRight = '16px';
      refs.favoritesGallery.style.width = '1344px';
    }
    if (YThumb) {
      YThumb.style.width = '8px';
      YThumb.style.opacity = '1';
      YThumb.style.display = 'block';
      YThumb.style.height = '153px';
      YThumb.style.backgroundColor = '#7e847f';
      YThumb.style.borderRadius = '12px';
      YThumb.style.right = '0px';
    }
  }
}

export default createScrollFavorites;
