async function getFavorites(_id) { //TODO
    const BASE_URL_FAVORITES = 'https://energyflow.b.goit.study/api/';
    const ENDPOINT_FAVORITES = 'exercises';
    const resFavorites = await axios.get(`${BASE_URL_FAVORITES}/${ENDPOINT_FAVORITES}`, {
        params: {
        keyword: 'favorite',
            page: 1,
            perPage: 9,
      
        },
    });
    return resFavorites.data;
}

const favoritesGallery = document.querySelector('.favorites-gallery');

const queryParams = {
  keyword,
  page: 1,
  perPage: 9,
};

// Adding items to Favorites after clicking on the button 'Add to Favorites' at modal-menu

const LS_KEY_FAVORITES = "favoritesGalleryItems";
const addToFavoritesBtn = document.querySelector(".modal-button");

addToFavoritesBtn.addEventListener("click", addItemToGallery);

async function addItemToGallery(event) {
  event.preventDefault();

  const favoritesStoredItems = localStorage.getItem(LS_KEY_FAVORITES);
  
  // if (!favoritesStoredItems) {
  //     return;
  //   }
     
  try {
    const galleryItems = await getFavorites(queryParams.id);
    createMarkupFavorites(results, favoritesGallery);

    // addItemToGallery.push(event);  
   
    favoritesStoredItems.JSON.parse(favoritesStoredItems);
    
  

  
    
    // Save the updated gallery items to localStorage
    localStorage.setItem(LS_KEY_FAVORITES, JSON.stringify(galleryItems));

    // favoritesGallery.insertAdjacentHTML('afterbegin', createMarkupFavorites(hits));
    // favoritesGallery.refresh();
    

  } catch (error) {
    console.error('Error adding item to gallery:', error);
  }
}

// async function addToFavorites(event) {
//     event.preventDefault();
    
    //     if (!queryParams.query) {
    //     createMessage("The search field can't be empty! Please, enter your request!");
    //     hideLoader();
    //     return;
    //   }

    //   try {
    //     const res = await getImages(queryParams.query, queryParams.page);
    //     if (res.hits.length === 0) {
    //       createMessage('Sorry, there are no images matching your search query. Please try again!');
    //       refs.form.reset();
    //       hideLoader();
    //       return;
    //     }
    //     refs.gallery.insertAdjacentHTML('beforeend', createMarkup(res.hits));
    //     simplyGallery.refresh();
            
    //     if (res.hits.length >= 15) {
    //       hideLoader();  
    //       showButton();
    //     } else {
    //       hideButton();
    //       createMessage("We're sorry, but you've reached the end of search results");
    //     }
    
    //     refs.form.reset();
      
    //   } catch (error) {
    //     hideButton();
    //     refs.gallery.innerHTML = '';
    //     createMessage("Sorry, there is a problem with connection with the server");
    
    //   } finally {
    //     hideLoader();
    //     refs.form.reset();
    //     if (queryParams.page === queryParams.maxPage) {
    //       createMessage("We're sorry, but you've reached the end of search results!");
    //     }
    //   }
    // }

    
  

// const removeFromFavorites = document.querySelectorAll('.')
// addEventListener('click', removeFromFavorites())

// async function removeFromFavoriets() {
// }   
// // Function to remove from localStorage
// const favoritesRemovedItems = localStorage.removeItem(LS_KEY_FAVORITES);
//     if (favoritesRemovedItems) {
//       resolve(JSON.parse(favoritesRemovedItems));
//     } else {
//       reject(" ");
//     }


function createMarkupFavorites(results) { 
  return results
    .map(
        ({
        bodyPart,
        name,
        target,
        burnedCalories,
        time,
        }) =>
          `
          <ul class="favorites-gallery">
            <li class="favorites-gallery-item">
                <span class="workout">workout</span>
                <a class="favorites-remove" href="#">
                  <button class="favorites-remove-btn" type="button"> 
                    <img class="favorites-remove-icon" src="../img/icons/all icons/basket.svg" alt="remove-icon"/>
                  </button>
                </a>
                <a class="favorites-start" href="#">
                  <button class="favorites-start-btn" type="button">Start 
                    <img class="favorites-start-icon" src="../img/icons/all icons/line.svg" alt="start-icon"/>
                  </button>
                </a>
                <img class="favorites-man-icon" src="../img/icons/all icons/Man.svg" alt="man-icon"/>
                <h3 class="favorites-item-title">${name}</h3>
                <ul class="favorites-gallery-info">
                  <li class="favorites-gallery-info-item">Burned calories: <span class="descr-span">${burnedCalories} / ${time} min</span></li>
                  <li class="favorites-gallery-info-item">Body part: <span class="descr-span">${bodyPart}</span></li>
                  <li class="favorites-gallery-info-item">Target: <span class="descr-span">${target}</span></li>
                </ul> 
            </li>
          </ul>`
      )
        .join('');
    
}
  

  function scrollBy() {
  window.scrollBy({
    top:
      2 *
      document.querySelector('.favorites-gallery-item').getBoundingClientRect().height,
    behavior: 'smooth',
  });
}
  