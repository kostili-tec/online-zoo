import { createCardsContainer, createCards} from "./createCards";

const leftBTN = document.querySelector('#slided-btn1');
const rightBTN = document.querySelector('#slided-btn2');
const carousel = document.querySelector('.pets-corousel');

const moveLeft = () => {
  carousel.classList.add('transition-left');
  leftBTN.removeEventListener('click', moveLeft);
  rightBTN.removeEventListener('click', moveRight);
}

const moveRight = () => {
  carousel.classList.add('transition-right');
  leftBTN.removeEventListener('click', moveLeft);
  rightBTN.removeEventListener('click', moveRight);
}

export const caruselEvents = async () => { 

  let storeCardsArr = [];

  leftBTN.addEventListener('click', () => {
    moveLeft();
  })
  rightBTN.addEventListener('click', () => {
    moveRight();
  })

  carousel.addEventListener('animationstart', async (animationEvent) => { 
    if (animationEvent.animationName === 'move-left' || 
        animationEvent.animationName === 'move-right') {      
          storeCardsArr = await createCards();
          // console.log('leftCardsArr', storeCardsArr);
        }
  })
  
  carousel.addEventListener('animationend', (animationEvent) => {
    if (animationEvent.animationName === 'move-left') { 
      const left = document.querySelector('#left');
      const center = document.querySelector('#center'); 
      const leftChilds = left.querySelectorAll('.pets-border');
      
      carousel.classList.remove('transition-left');     
       
      center.replaceChildren(...leftChilds);

      storeCardsArr.forEach((card) => {
        left.append(card);
      })
    }

    if (animationEvent.animationName === 'move-right') { 
      const center = document.querySelector('#center');
      const right = document.querySelector('#right');
      const rightChilds = right.querySelectorAll('.pets-border');

      carousel.classList.remove('transition-right'); 

      center.replaceChildren(...rightChilds);

      storeCardsArr.forEach((card) => {
        right.append(card);
      })
    }
  })
}