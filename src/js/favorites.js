function createMarkupFavorites(hits) { 
  return hits
    .map(
        ({
            _id,
        bodyPart,
        name,
        target,
        burnedCalories,
        time,
        }) =>
          `
          <ul class=""favorites-gallery">
            < class="favorites-gallery-item">
               <h4 class="workout">WORKOUT</h4>
               <a class="favorites-remove" href="#"> <img class="favorites-icon-bin" src="#" alt="icon-bin"/></a>
                <a class="favorites-start" href="#">Start 
                    <span>
                    <img class="favorites-icon-arrow" src="#" alt="icon-arrow"/> 
                    </span>  
                </a>
               <img class="favorites-icon-runner" src="#" alt="icon-runner"/>
            <h3>${name}</h3>
            <ul class="favorites-gallery-info">
              <li class="favorites-gallery-info-item">Burned calories: <span class="descr-span">${burnedCalories} / ${time} min</span></li>
              <li class="favorites-gallery-info-item">Body part: <span class="descr-span">${bodyPart}</span></li>
              <li class="favorites-gallery-info-item">Target: <span class="descr-span">${target}</span></li>
            </ul> 
          <a class="favorites-gallery-link" href="#">Start 
            <span>
              <img class="favorites-icon-arrow" src="#" alt="icon-arrow"/> 
            </span> 
          </a>`
      )
        .join('');
    
}
  

  
  