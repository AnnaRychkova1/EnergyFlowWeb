import{P as r}from"./vendor-fd853f38.js";import{refs as l}from"./refs-89afcfb6.js";new r(l.containerScroll,{wheelSpeed:2,wheelPropagation:!0,minScrollbarLength:153});window.addEventListener("resize",s);function s(){const i=window.innerWidth,e=document.querySelector(".ps__rail-y"),t=e.firstChild;i>768&&i<1440&&l.favoritesGallery.children.length>8?(e&&(e.style.opacity="0.6",e.style.display="block",e.style.height="479px",e.style.width="8px",e.style.backgroundColor="rgba(27, 27, 27, 0.1)",e.style.borderRadius="12px",e.style.right="0px",l.favoritesContainer.style.paddingRight="16px",l.favoritesGallery.style.width="672px"),t&&(t.style.width="8px",t.style.opacity="1",t.style.display="block",t.style.height="153px",t.style.backgroundColor="#7e847f",t.style.borderRadius="12px",t.style.right="0px")):i>1440&&l.favoritesGallery.children.length>9&&(e&&(e.style.opacity="0.6",e.style.display="block",e.style.height="479px",e.style.width="8px",e.style.backgroundColor="rgba(27, 27, 27, 0.1)",e.style.borderRadius="12px",e.style.right="0px",l.favoritesContainer.style.paddingRight="16px",l.favoritesGallery.style.width="1344px"),t&&(t.style.width="8px",t.style.opacity="1",t.style.display="block",t.style.height="153px",t.style.backgroundColor="#7e847f",t.style.borderRadius="12px",t.style.right="0px"))}export{s as default};
//# sourceMappingURL=scrollFavorites-579ce649.js.map