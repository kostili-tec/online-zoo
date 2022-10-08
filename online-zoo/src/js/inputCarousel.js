import { mediaQuery } from "./mediaQuery";
export const rangeInputEvents = () => {
  const rangeInput = document.querySelector('#range-slider__input');
  const feedbackCarousel = document.querySelector('.feedback-cards__carousel');

  const translateXDesktop = 298; 
  const translateXSmallDesktop = 323; 

  const desktopArr = Array(9).fill().map((item, index) => index * translateXDesktop);
  const smallDesktopArr = Array(9).fill().map((item, index) => index * translateXSmallDesktop);
  
  rangeInput.addEventListener('input', (e) => {
    let target = e.target;
 
    
    if (target.value) {
      if (mediaQuery.smallDesktop.matches) {
        feedbackCarousel.style.transform = `translateX(${(smallDesktopArr[target.value]) * -1}px)`;
      } else {
        feedbackCarousel.style.transform = `translateX(${(desktopArr[target.value]) * -1}px)`;
      }
    }
  })
}