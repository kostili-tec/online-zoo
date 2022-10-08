import { loadCardsOnStart } from "./createCards";

export const maxWidth999 = window.matchMedia('(max-width: 999px)');
export const minWidth1000 = window.matchMedia('(min-width: 1000px)');
export const maxWidth1599 = window.matchMedia('(max-width: 1599px)');
export const minWidth1600 = window.matchMedia('(min-width: 1600px) and (max-width: 2500px)');

export const mediaQuery = {
  mobile: window.matchMedia('(max-width: 640px)'),
  tablet: window.matchMedia('(min-width: 641px) and (max-width: 999px)'),
  smallDesktop: window.matchMedia('(min-width: 1000px) and (max-width: 1599px)'),
  desktop: window.matchMedia('(min-width: 1600px) and (max-width: 2560px)'),
}


function resizeScreenCarousel(e) {   
  if (e.matches) { 
    document.querySelector('.pets-corousel').replaceChildren();  
      loadCardsOnStart();    
  } 
}

function resizeScreenFeedback(e) {
  let lastInputValue = null;
  const feedbackCarousel = document.querySelector('.feedback-cards__carousel');
  const rangeInput = document.querySelector('#range-slider__input');

  if (mediaQuery.tablet.matches) { 
    lastInputValue = rangeInput.value;
    feedbackCarousel.style.transform = `translateX(0px)`;
  }  

  if (mediaQuery.desktop.matches) {
    feedbackCarousel.style.transform = `translateX(${(rangeInput.value * 298) * -1}px)`;
  }
  if (mediaQuery.smallDesktop.matches) {
    if (lastInputValue === null) {
      feedbackCarousel.style.transform = `translateX(${(rangeInput.value * 323) * -1}px)`;
    } else {
      feedbackCarousel.style.transform = `translateX(${(lastInputValue * 323) * -1}px)`;
    }
  }
}

const mediaQueryListeners = (e) => {
  resizeScreenCarousel(e);
  resizeScreenFeedback(e);
}

export const widthListeners = () => {

  // maxWidth999.addEventListener('change', resizeScreenCarousel);
  // minWidth1000.addEventListener('change', resizeScreenCarousel);

  mediaQuery.smallDesktop.addEventListener('change', mediaQueryListeners);
  mediaQuery.desktop.addEventListener('change', mediaQueryListeners);
  mediaQuery.tablet.addEventListener('change', mediaQueryListeners);
}