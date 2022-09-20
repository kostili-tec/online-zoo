import './normalize.css';
import './sass/main.scss';

const petsSection = document.querySelector('.section-pets');


petsSection.addEventListener('mouseover', (e) => {
  const el = e.target; 
  const related = e.relatedTarget;
  if (el.classList.contains('pets-img')) {
    const card = el.parentNode.parentNode;
    card.style.backgroundColor = 'rgba(0, 0, 0, 0.07)';
    const description = el.parentNode.parentNode.querySelector('.pets-descpiption');
    description.style.transform = 'translateY(0px)';
  }
})

petsSection.addEventListener('mouseout', (e) => {
  const el = e.target; 
  if ( el.classList.contains('pets-img') ) {
    const card = el.parentNode.parentNode;
    card.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    const description = el.parentNode.parentNode.querySelector('.pets-descpiption');
    description.style.transform = 'translateY(-55px)';
  }
})
