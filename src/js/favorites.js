



function createMarkupFavorites(hits) { 
  return hits
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
                <span class="workout">WORKOUT</span>
                <a class="favorites-remove" href="#"> <img class="favorites-remove-icon" src="../img/icons/all icons/basket.svg" alt="remove-icon"/></a>
                <a class="favorites-start" href="#">Start <img class="favorites-start-icon" src="../img/icons/all icons/line.svg" alt="start-icon"/></a>
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
  

  
  