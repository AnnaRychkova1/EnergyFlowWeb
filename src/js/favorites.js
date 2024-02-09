async function getFavorites() { 
    const BASE_URL_FAVORITES = 'https://energyflow.b.goit.study/api/';
    const ENDPOINT_FAVORITES = 'exercises';
    const resFavorites = await axios.get(`${BASE_URL_FAVORITES}/${ENDPOINT_FAVORITES}`, {
        params: {
        names: '',
            page: 1,
            perPage: 9,
      
        },
    });
    return resFavorites.data;
}

const favoritesGallery = document.querySelector(".favorites-gallery");

const queryParams = {
  results: [],
  
};
const addToFavoritesBtn = document.querySelector(".modal-button");
addToFavoritesBtn.addEventListener("click", addItemToGallery);

// Adding items to Favorites after clicking on the button 'Add to Favorites' at modal-menu
async function addItemToGallery(event) {
  event.preventDefault();

const LS_KEY_FAVORITES = "favoritesGalleryItems";


localStorage.setItem(LS_KEY_FAVORITES, JSON.stringify(queryParams.results));
  
 

  const namesFromLS = JSON.parse(localStorage.getItem(LS_KEY_FAVORITES));
  console.log(namesFromLS);
  
  if (namesFromLS === null) {
     return;
   }
     
  try {
    const galleryItems = await getFavorites(queryParams.id);
    createMarkupFavorites(results, favoritesGallery);

    // addItemToGallery.push(event);  
   
    // favoritesStoredItems.JSON.parse(favoritesStoredItems);
    
  

  
    
    // Save the updated gallery items to localStorage
    // localStorage.setItem(LS_KEY_FAVORITES, JSON.stringify(galleryItems));

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
  


// const fullUrl = window.location.pathname;
// const lastSlashIndex = fullUrl.lastIndexOf('/');
// const result = fullUrl.substring(lastSlashIndex);

// if (result === '/page-2.html') {
//   document.addEventListener('DOMContentLoaded', function () {
//     // Get the favorites list, pagination block, and message info
//     const favoritesList = document.querySelector('.favorites-list');
//     const paginationBlock = document.querySelector(
//       '.favorites-pagination-block'
//     );
//     const messageInfo = document.querySelector('.message-info');
//     const favoritesContainerBlock = document.querySelector(
//       '.favorites-contanier-block'
//     );

//     // Function to show pagination based on screen width
//     function togglePagination() {
//       const currentPage = window.location.pathname; // Get current page path

//       // Check if current page is '/page-2.html' and screen width is less than or equal to 767px
//       if (
//         currentPage === '/fitnes-app/page-2.html' &&
//         window.innerWidth <= 767 &&
//         isFavoritesListVisible()
//       ) {
//         // Show pagination for small screens on page 2
//         paginationBlock.style.display = 'flex';
//       } else {
//         // Hide pagination for larger screens or if favorites list is not visible
//         paginationBlock.style.display = 'none';
//       }
//     }

//     // Function to check if favorites list is visible
//     function isFavoritesListVisible() {
//       return favoritesList && favoritesList.offsetParent !== null;
//     }

//     // Function to handle pagination logic
//     function paginate() {
//       // Define items per page based on screen width and visibility of favorites list
//       const itemsPerPage =
//         window.innerWidth <= 767 && isFavoritesListVisible()
//           ? 6
//           : favoritesList.children.length;

//       // Show all items if screen width is greater than 767px
//       if (window.innerWidth > 767 && isFavoritesListVisible()) {
//         for (let i = 0; i < favoritesList.children.length; i++) {
//           favoritesList.children[i].style.display = 'block';
//         }
//         return;
//       }

//       const totalPages = Math.ceil(
//         favoritesList.children.length / itemsPerPage
//       );
//       let currentPage = 1;

//       // Function to show items for current page
//       function showPage(page) {
//         const startIndex = (page - 1) * itemsPerPage;
//         const endIndex = startIndex + itemsPerPage;

//         // Hide all items
//         for (let i = 0; i < favoritesList.children.length; i++) {
//           favoritesList.children[i].style.display = 'none';
//         }

//         // Show items for current page
//         for (
//           let i = startIndex;
//           i < endIndex && i < favoritesList.children.length;
//           i++
//         ) {
//           favoritesList.children[i].style.display = 'block';
//         }
//       }

//       // Show the first page initially
//       showPage(currentPage);

//       // Event listeners for pagination buttons
//       paginationBlock.addEventListener('click', function (event) {
//         if (event.target.tagName === 'BUTTON') {
//           // Remove active class from all buttons
//           const buttons = paginationBlock.querySelectorAll('button');
//           buttons.forEach(button => button.classList.remove('active-btn'));

//           // Add active class to the clicked button
//           event.target.classList.add('active-btn');

//           // Show the corresponding page
//           currentPage = parseInt(event.target.textContent);
//           showPage(currentPage);
//         }
//       });
//     }

//     // Check if favorites list is empty and show message accordingly
//     // if (!isFavoritesListVisible()) {
//     //     messageInfo.style.display = 'block';
//     // } else {
//     //     messageInfo.style.display = 'none';
//     // }

//     // Function to handle scroll behavior
//     function checkScroll() {
//       if (window.matchMedia('(min-width: 768px)').matches) {
//         favoritesContainerBlock.style.overflowY = 'scroll';
//       } else {
//         favoritesContainerBlock.style.overflowY = 'visible';
//       }

//       if (window.matchMedia('(min-width: 1440px)').matches) {
//         favoritesContainerBlock.style.maxHeight = '480px'; // Set maximum height if necessary
//       } else {
//         favoritesContainerBlock.style.maxHeight = 'none';
//       }
//     }

//     // Check scroll behavior on initial load
//     checkScroll();

//     // Check pagination visibility on initial load
//     togglePagination();

//     // Check pagination visibility and initialize pagination on window resize
//     window.addEventListener('resize', function () {
//       togglePagination();
//       paginate();
//       checkScroll();
//     });

//     // Initialize pagination if needed
//     if (isFavoritesListVisible() && favoritesList.children.length >= 6) {
//       paginate();
//     }
//   });
// }