import { maxWidth1599, minWidth1600 } from "./mediaQuary";
export const rangeInputEvents = () => {
  const rangeInput = document.querySelector('#range-slider__input');
  const feedbackCarousel = document.querySelector('.feedback-cards__carousel');

  const translateXDesktop = 298; 
  const translateXSmallDesktop = 323; 
  
  rangeInput.addEventListener('input', (e) => {
    let target = e.target;
    let translateX = 0;

    if (maxWidth1599.matches) {
      translateX = translateXSmallDesktop;
    } else {
      translateX = translateXDesktop;
    }
    
    if (target.value) {
     feedbackCarousel.style.transform = `translateX(${(translateX * target.value) * -1}px)`
    }
  })
}