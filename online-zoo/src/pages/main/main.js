import { renderCards } from "../../js/createCards";

const cardsLeavingText = () => {
  const petsSection = document.querySelector('.section-pets');
  
  petsSection.addEventListener('mouseover', (e) => {
    const el = e.target; 
    const related = e.relatedTarget;
    if (el.classList.contains('pets-img') || el.classList.contains('pets-p__info')
    || el.classList.contains('pets-card') || el.classList.contains('pets-description') 
    || el.classList.contains('pets-h3') || el.classList.contains('pets-p') ) {
      const infoAnimal = el.parentNode.parentNode.querySelector('.pets-p__info');
      const imgAnimal = el.parentNode.parentNode.querySelector('.pets-img');  
      
      if (infoAnimal) {
        infoAnimal.classList.add('pets-p__info-show');
      }
  
      if (imgAnimal) {
        imgAnimal.classList.add('pets-img__hover');
      } 
    }
  })
  
  petsSection.addEventListener('mouseout', (e) => {
    const el = e.target; 
    if (el.classList.contains('pets-img') || el.classList.contains('pets-p__info')
    || el.classList.contains('pets-card') || el.classList.contains('pets-description')) {
      const infoAnimal = el.parentNode.parentNode.querySelector('.pets-p__info');
      const imgAnimal = el.parentNode.parentNode.querySelector('.pets-img');
      
      infoAnimal.classList.remove('pets-p__info-show');
      imgAnimal.classList.remove('pets-img__hover');
  
    }
  }) 
}

function shuffle(array) {
  const shuffledArr = Array.from(array);
  for (let i = shuffledArr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));  
    [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
  }
  return shuffledArr;
}

const returnCardsArray = async () => {
  return await renderCards();  
}

const createCardsContainer = async (id) => {
  const carousel = document.querySelector('.pets-corousel');
  const container = document.createElement('div');
  container.id = id;
  container.classList.add('pets-cards__container');

  const cardsArray = await renderCards();  
  const shuffledArray = shuffle(cardsArray);
  console.log(shuffle(cardsArray));
  console.log(cardsArray);
  shuffledArray.forEach(card => {
    container.appendChild(card);
  })
  carousel.append(container);
}

createCardsContainer('left');
createCardsContainer('center');
createCardsContainer('right');

// console.log(returnCardsArray());

const resizeScreen = () => {
  const mQueryMin1000px = window.matchMedia('(min-width: 1000px)');

  const countCards = (e) => {
    if (e.matches) {

    }
  }
}

const mQuery = window.matchMedia('(max-width: 1599px)')

function handleMobilePhoneResize(e) {   
   // Проверяем, верен ли медиа-запрос
   if (e.matches) {     
        // Затем выводим в консоль следующее сообщение
        console.log('Media Query Matched!')   
   } 
} 

// Настраиваем слушателя событий
mQuery.addEventListener('change', handleMobilePhoneResize)

cardsLeavingText();

