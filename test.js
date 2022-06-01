const assert = require('assert');

const minValues = (inArr) => {
  let arr = [];
  let res;

  if (inArr.length == 0) return 'Извините, массив не должен быть пустым!';
  if (inArr.length == 1) {
    if (!isNaN(Number(inArr))) return Number(inArr);
    if (isNaN(Number(inArr))) return 'Извините, в пeредаваемых параметрах могут быть только числа!';
  }

  if (inArr.length >= 15) {
    return 'Извините, слишком много параметров!';
  }

  inArr.forEach((el, i) => {
    if (isNaN(Number(el))) {
      if (el.includes('[') || el.includes(']')) {
        return 'Пожалуйста, вводите массив без квадратных скобок!';
      } else {
        return 'Извините, в пeредаваемых параметрах могут быть только числа!';
      }
    } else {
      arr.push(Number(el));
    }

  });
  if (!isNaN(arr[0])) {
    arr.sort((a, b) => a - b);
    res = arr[0] + arr[1];
    return res;
  } else {
    return 'Извините, в пeредаваемых параметрах могут быть только числа!';
  }
};


it('при вводе массива  [4, 0, 3, 19, 492, -10, 1] возвращает -10', () => {
  assert.equal(minValues([4, 0, 3, 19, 492, -10, 1]), -10);
});

it('при вводе массива  [] возвращает ошибку', () => {
  assert.equal(minValues([]), 'Извините, массив не должен быть пустым!');
});

it('при вводе массива  ["aff", "fs", "afdsf", "d"] возвращает ошибку', () => {
  assert.equal(minValues(['aff', 'fs', 'afdsf', 'd']), 'Извините, в пeредаваемых параметрах могут быть только числа!');
});

it('при вводе массива  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16] возвращает ошибку', () => {
  assert.equal(minValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]), 'Извините, слишком много параметров!');
});