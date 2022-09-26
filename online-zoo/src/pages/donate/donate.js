const moneyInputs = document.querySelectorAll('.feed-contant__radio-input');
const moneyLabel = document.querySelectorAll('.radio-value__number');
const moneySvg = document.querySelectorAll('.dollar-svg');

const anotherInput = document.querySelector('.form__input-number');

moneyInputs.forEach((input, index) => {
  input.addEventListener('click', (e) => {
    moneyLabel.forEach((label) => {
      if (label.classList.contains('checked-label')) {
        label.classList.remove('checked-label')
      }
    })
    moneySvg.forEach((svg) => {
      if (svg.classList.contains('checked-svg')) {
        svg.classList.remove('checked-svg')
      }
    })
    moneyLabel[index].classList.add('checked-label');
    moneySvg[index].classList.add('checked-svg');   
  })
})

anotherInput.addEventListener('change', function() {
  let value = parseInt(this.value);
  if (value > 9999) {
    this.value = 9999
  }
  if (value < 1) {
    this.value = 1;
  }
})
