const petsSection = document.querySelector('.section-pets');


const inputBorder = document.querySelector('.input-border');
const input = document.querySelector('.footer-input');
const inputButton = document.querySelector('.input-button');

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

function isEmailValid(value) {
  return EMAIL_REGEXP.test(value);
}

function onInput() {
	if (isEmailValid(input.value)) {
    inputBorder.classList.remove('input-border__invalid');
    inputBorder.classList.add('input-border__valid');
    input.classList.remove('footer-input__invalid');
    inputButton.classList.remove('input-button__invalid');
    inputButton.classList.add('input-button__default');
    inputButton.classList.add('input-button__hover');
	} else {
    inputBorder.classList.add('input-border__invalid');
    inputBorder.classList.remove('input-border__valid');
    input.classList.add('footer-input__invalid');
    inputButton.classList.add('input-button__invalid');
    inputButton.classList.remove('input-button__hover');
	}
}

input.addEventListener('input', onInput);

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
