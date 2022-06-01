const btn = document.querySelector('.btn');
const resField = document.querySelector('.result__res');
const warnField = document.querySelector('.warning');
let field = document.querySelector('.form__field');
const form = document.querySelector('.form');
let resInp;

const minValues = () => {
  let arr = [];
  if (field.value.length === 0) {
    warnField.innerHTML = 'Извините, массив не должен быть пустым!';
    field.value = '';
    resField.innerHTML = '';
    return;
  }

  resInp = field.value.split(',');

  if (resInp.length == 1) {
    if (!isNaN(Number(resInp))) {
      resField.innerHTML = Number(resInp);
      return;
    }
    if (isNaN(Number(resInp))) {
      resField.innerHTML = '';
      warnField.innerHTML = 'Извините, в пeредаваемых параметрах могут быть только числа!';
      field.value = '';
      return;
    }
  }

  if (resInp.length >= 15) {
    warnField.innerHTML = 'Извините, слишком много параметров!';
    field.value = '';
    resField.innerHTML = '';
    return;
  }

  resInp.forEach((el, i) => {
    if (isNaN(Number(el))) {
      if (el.includes('[') || el.includes(']')) {
        warnField.innerHTML = 'Пожалуйста, вводите массив без квадратных скобок!';
        resField.innerHTML = '';
        return;
      } else {
        resField.innerHTML = '';
        warnField.innerHTML = 'Извините, в пeредаваемых параметрах могут быть только числа введенные через запятую!';
        return;
      }
    }
    arr.push(Number(el));
    warnField.innerHTML = '';
    field.value = '';
  });

  arr.sort((a, b) => a - b);
  resField.innerHTML = arr[0] + arr[1];
  field.value = '';
};

field.addEventListener('keydown', (e) => {
  (e.keyCode === 13) && minValues();
});

btn.addEventListener('click', minValues);

field.addEventListener('change', () => {
  resField.innerHTML = '';
  warnField.innerHTML = '';
})