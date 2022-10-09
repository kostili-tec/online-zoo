const removeClass = (elements, nameClass) => {
  elements.forEach((el) => {
    if (el.classList.contains(nameClass)) {
      el.classList.remove(nameClass);
    }
  })
}

const donateEvents = () => {  
  const moneyInputs = document.querySelectorAll('.feed-contant__radio-input');
  const moneyLabel = document.querySelectorAll('.radio-value__number');
  const moneySvg = document.querySelectorAll('.dollar-svg');
  const anotherInput = document.querySelector('.form__input-number');
  
  moneyInputs.forEach((input, index) => {
    input.addEventListener('click', (e) => {
      removeClass(moneyLabel, 'checked-label');
      removeClass(moneySvg, 'checked-svg');
      moneyLabel[index].classList.add('checked-label');
      moneySvg[index].classList.add('checked-svg');
      anotherInput.value = Number(moneyLabel[index].textContent);
    })
  })
  
  anotherInput.addEventListener('input', function() {
    let value = parseInt(this.value);
  
    if (value > 9999) {
      this.value = 9999
    }
    if (value < 1) {
      this.value = 1;
    }
    removeClass(moneyLabel, 'checked-label');
    removeClass(moneySvg, 'checked-svg');
  
    moneyInputs.forEach((input) => {
      if (input.checked === true)
      input.checked = false;
    })
  
    moneyLabel.forEach((label, index) => {
      if (value === Number(label.textContent)) {
        moneyInputs[index].checked = true;
        label.classList.add('checked-label');
        moneySvg[index].classList.add('checked-svg');
      } 
    })  
  })
}

donateEvents();
