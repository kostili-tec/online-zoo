import './normalize.css';
import './sass/main.scss';

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
    // input.style.borderColor = 'green';
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
  if (el.classList.contains('pets-img')) {
    const card = el.parentNode.parentNode;
    card.style.backgroundColor = 'rgb(224, 223, 223)';
    const description = el.parentNode.parentNode.querySelector('.pets-descpiption');
    description.style.transform = 'translateY(0px)';
  }
})

petsSection.addEventListener('mouseout', (e) => {
  const el = e.target; 
  if ( el.classList.contains('pets-img') ) {
    const card = el.parentNode.parentNode;
    card.style.backgroundColor = 'rgb(255, 255, 255)';
    const description = el.parentNode.parentNode.querySelector('.pets-descpiption');
    description.style.transform = 'translateY(-55px)';
  }
})
