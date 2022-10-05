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

export const renderCards = async (container) => {
  const data = await getJson();
  const arrayCards = [];
  data.forEach(pet => {
   const card = createCard(pet.name, pet.info, pet.H3, pet.location, pet.imgSrc, pet.svgClass, pet.svgSrc);
    arrayCards.push(card);
  })
  return arrayCards;
}

export const getJson = async () => {
  const response = await fetch('./copies/pets-json/pets.json');
  const result = await response.json();
  return result;   
}

