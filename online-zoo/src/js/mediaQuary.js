import { loadCardsOnStart } from "./createCards";

export const maxWidth999 = window.matchMedia('(max-width: 999px)');
export const minWidth1000 = window.matchMedia('(min-width: 1000px)');
export const maxWidth1599 = window.matchMedia('(max-width: 1599px)');
export const minWidth1600 = window.matchMedia('(min-width: 1600px)');

function resizeScreenCarousel(e) {   
  if (e.matches) { 
    document.querySelector('.pets-corousel').replaceChildren();  
      loadCardsOnStart();    
  } 
}

function resizeScreenFeedback(e) {
  if (e.matches) { 
    const feedbackCarousel = document.querySelector('.feedback-cards__carousel');
    const rangeInput = document.querySelector('#range-slider__input');
    feedbackCarousel.style.transform = `translateX(0px)`;
    rangeInput.value = 0;
  }
}

export const widthListeners = () => {

  maxWidth999.addEventListener('change', resizeScreenCarousel);
  minWidth1000.addEventListener('change', resizeScreenCarousel);

  maxWidth1599.addEventListener('change', resizeScreenFeedback);
  minWidth1600.addEventListener('change', resizeScreenFeedback);
}