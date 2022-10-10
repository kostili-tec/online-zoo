const burgerButton = document.querySelector('.burger-menu__button');
const burgerLines = document.querySelector('.burger-button__lines');
const burgerMenu = document.querySelector('.menu-container');
const burgerOverlay = document.querySelector('.burger-menu__overlay');

function toggleMenu() {
  let isOpen = false;
  burgerButton.addEventListener('click', () => {
    if (!isOpen) {
      burgerMenu.classList.remove('menu-container__close');
      burgerMenu.classList.add('menu-container__open');
      isOpen = true;
    } else {
      burgerMenu.classList.remove('menu-container__open');
      burgerMenu.classList.add('menu-container__close');
      isOpen = false;
    }
    burgerLines.classList.toggle('burger-button__lines-open');
    burgerOverlay.classList.toggle('burger-menu__overlay-active');
  })
  burgerOverlay.addEventListener('click', () => {
    isOpen = false;
    burgerMenu.classList.remove('menu-container__open');
    burgerMenu.classList.add('menu-container__close');    
    burgerLines.classList.toggle('burger-button__lines-open');
    burgerOverlay.classList.toggle('burger-menu__overlay-active');
  })
}

export default toggleMenu;