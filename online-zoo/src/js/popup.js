import { mediaQuery } from "./mediaQuery";

const showPopup = (popupElement) => {
  const main = document.querySelector('.main');
  main.append(popupElement);
}

const createPopup = (element) => {
  const clonePopup = element.cloneNode(true);
  const popupSection = document.createElement('section');
  const feedbackCard = clonePopup.querySelector('.feedback-card');
  const closeDiv = document.createElement('div');
  const leftSpan = document.createElement('span');
  const rightSpan = document.createElement('span');

  popupSection.classList.add('popup__section');
  clonePopup.classList.add('popup__feedback-border');
  feedbackCard.classList.add('popup__feedback-card');

  closeDiv.classList.add('popup__close-button');
  leftSpan.classList.add('close-button__span');
  rightSpan.classList.add('close-button__span');

  closeDiv.append(leftSpan, rightSpan);

  popupSection.append(clonePopup, closeDiv);

  popupSection.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup__section')) {
      popupSection.addEventListener('animationend', () => {
        popupSection.remove();
      })
      popupSection.id = 'close-animation';
    }
  })
  closeDiv.addEventListener('click', () => {
    popupSection.addEventListener('animationend', () => {
      popupSection.remove();
    })
    popupSection.id = 'close-animation';
  })
  return popupSection;
}

export const popupListener = (e) => {
  if (e.target.closest('.feedback-border')) {
    let feedbackDiv = e.target.closest('.feedback-border');
    let clonedPopup = createPopup(feedbackDiv);

    showPopup(clonedPopup);
  }
}