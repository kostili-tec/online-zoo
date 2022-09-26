import './normalize.css';
import './sass/main.scss';


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

function inputValidation() {
  input.addEventListener('input', onInput);
}

inputValidation();