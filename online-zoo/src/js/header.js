const burgerButton = document.querySelector('.burger-menu__button');
const burgerLines = document.querySelector('.burger-button__lines');
const burgerMenu = document.querySelector('.menu-container');
const burgerOverlay = document.querySelector('.burger-menu__overlay');

function toggleMenu() {
  burgerButton.addEventListener('click', () => {
    burgerMenu.classList.toggle('menu-container__show');
    burgerLines.classList.toggle('burger-button__lines-open');
    burgerOverlay.classList.toggle('burger-menu__overlay-active');
  })
  burgerOverlay.addEventListener('click', () => {
    burgerMenu.classList.toggle('menu-container__show');
    burgerLines.classList.toggle('burger-button__lines-open');
    burgerOverlay.classList.toggle('burger-menu__overlay-active');
  })
}

export default toggleMenu;