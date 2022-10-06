const createCard = (petsName, petsInformation, petsHeader, petsLocationInfo, srcImg, svgClass, svgSrc) => {
  const petsCardBorder = document.createElement('div');
  petsCardBorder.classList.add('pets-border');
  petsCardBorder.id = `card-${petsName}`;

  const petsCard = document.createElement('div');
  petsCard.classList.add('pets-card');

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('pets-img__container');
  const imgPet = document.createElement('img');
  imgPet.classList.add('pets-img');
  imgPet.src = `${srcImg}`;
  imgPet.alt = `${petsName}`;
  imgContainer.appendChild(imgPet);

  const petsInfo = document.createElement('p');
  petsInfo.classList.add('pets-p__info');
  petsInfo.textContent = `${petsInformation}`;

  const petsDescription = document.createElement('div');
  petsDescription.classList.add('pets-description');

  const petsText = document.createElement('div');
  petsText.classList.add('pets-text');

  const petsH3 = document.createElement('h3');
  petsH3.classList.add('pets-h3');
  petsH3.textContent = `${petsHeader}`;
  const petsLocation = document.createElement('p');
  petsLocation.classList.add('pets-p');
  petsLocation.textContent = `${petsLocationInfo}`;
  

  petsText.appendChild(petsH3);
  petsText.appendChild(petsLocation);

  const svgFood = document.createElement('svg');
  svgFood.classList.add('icon-svg', `${svgClass}`);
  svgFood.innerHTML = `<use xlink:href="./copies/images/svg/sprite.svg${svgSrc}"></use>`;

  petsDescription.appendChild(petsText);
  petsDescription.appendChild(svgFood);

  petsCard.appendChild(imgContainer);
  petsCard.appendChild(petsInfo);
  petsCard.appendChild(petsDescription);

  petsCardBorder.appendChild(petsCard);

  return petsCardBorder;
}

export const getJson = async () => {
  const response = await fetch('./copies/pets-json/pets.json');
  const result = await response.json();
  return result;   
}

export const renderCards = async (container) => {
  const data = await getJson();
  const arrayCards = [];
  data.forEach(pet => {
   const card = createCard(pet.name, pet.info, pet.H3, pet.location, pet.imgSrc, pet.svgClass, pet.svgSrc);
    arrayCards.push(card);
  })
  return arrayCards;
}

const test = renderCards();
console.log('test', test);


function shuffle(array) {
  const shuffledArr = Array.from(array);
  for (let i = shuffledArr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));  
    [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
  }
  return shuffledArr;
}

export const createCards = async (count = 6) => {
  const randomCountsArr = shuffle([...Array(7).keys()]);
  const cuttedCountsArr = randomCountsArr.slice(0, count);
  // console.log(randomCountsArr);
  const cardsArray = await renderCards();  
  
  const cuttedCarsArray = [];

  cuttedCountsArr.forEach((item) => {
    cuttedCarsArray.push(cardsArray[item]);
  })

  return cuttedCarsArray;
}


export const createCardsContainer = async (id, count = 6) => {
  const carousel = document.querySelector('.pets-corousel');
  const container = document.createElement('div');
  container.id = id;
  container.classList.add('pets-cards__container');

  const cards = await createCards(count);
  console.log(cards);

  cards.forEach((card) => {
    container.append(card);
  })
  carousel.append(container);
}


export const loadCardsOnStart = () => {
  const screenWidth = document.documentElement.clientWidth;

  if (screenWidth >= 1000) {
    createCardsContainer('left', 6);
    createCardsContainer('center', 6);
    createCardsContainer('right', 6);
  } else {
    createCardsContainer('left', 4);
    createCardsContainer('center', 4);
    createCardsContainer('right', 4);
  }
}


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
console.log(document.documentElement.clientWidth);

// Настраиваем слушателя событий
mQuery.addEventListener('change', handleMobilePhoneResize);



