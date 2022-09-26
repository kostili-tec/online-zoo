const petsSection = document.querySelector('.section-pets');

petsSection.addEventListener('mouseover', (e) => {
  const el = e.target; 
  const related = e.relatedTarget;
  if (el.classList.contains('pets-img') || el.classList.contains('pets-p__info')
  || el.classList.contains('pets-view__card') || el.classList.contains('pets-descpiption') 
  || el.classList.contains('pets-h3') || el.classList.contains('pets-p') ) {
    const infoAnimal = el.parentNode.parentNode.querySelector('.pets-p__info');
    const imgAnimal = el.parentNode.parentNode.querySelector('.pets-img');    
 
    infoAnimal.classList.add('pets-p__info-show');
    imgAnimal.classList.add('pets-img__hover');    
  }
})

petsSection.addEventListener('mouseout', (e) => {
  const el = e.target; 
  if (el.classList.contains('pets-img') || el.classList.contains('pets-p__info')
  || el.classList.contains('pets-view__card') || el.classList.contains('pets-descpiption')) {
    const infoAnimal = el.parentNode.parentNode.querySelector('.pets-p__info');
    const imgAnimal = el.parentNode.parentNode.querySelector('.pets-img');
    
    infoAnimal.classList.remove('pets-p__info-show');
    imgAnimal.classList.remove('pets-img__hover');

  }
})

