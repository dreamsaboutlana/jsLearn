'use strict';
/*
1. Написать функцию, которая будет считать кол-во повторяющихся букв в строке.
Результат оформить в любом удобном варианте (массив или обьект). Пример:
lettersCount(“Any string here”);
function lettersCount(str) {
return ...; }
Функция должна вернуть кол-во букв “а”, “n”, “y” и т. д.
*/

// функция считает все буквы в строке
const lettersCount = (str) => {

  let arr = str.split('');
  let obj = {};

  arr.forEach((elem, index, arr1) => {

    let counter = 0;

    if (elem === ' ') return;

    for (let j = 0; j < arr.length; j++) {

      if (arr[j] === elem) {
        counter++;
      };
      obj[elem] = counter;
    }
  })

  return obj;
}

console.log(lettersCount('lllllll'));//{ l:7 }
console.log(lettersCount('lo lo lo ll'));//{ l: 5, o: 3 }
console.log(lettersCount('Any string here'));//{ A: 1, n: 2, y: 1, s: 1, t: 1, r: 2, i: 1, g: 1, h: 1, e: 2 }

// функция считает буквы в строке которые повторяются больше одного раза
const lettersRepaetCount = (str) => {

  let arr = str.split('');
  let obj = {};

  arr.forEach((elem, index, arr1) => {

    let counter = 0;
    if (elem === ' ') return;

    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === elem) {
        counter++;
        if (counter !== 1) {
          obj[elem] = counter;
        }
      };
    }
  })

  return obj;
}

console.log(lettersRepaetCount('lllllll'));//{ l: 7 }
console.log(lettersRepaetCount('lo lo lo ll'));//{ l: 5, o: 3 }
console.log(lettersRepaetCount('Any string here'));//{ n: 2, r: 2, e: 2 }

/*
2. Написать функцию, которая будет делать реверс каждого слова в строке. 
Функция принимает строку минимум из 2х слов. Пример:
wordsReverse(“Any string”);
function wordsReverse(str) {
return ...; }
Функция должна вернуть строку “ynA gnirts”
*/

let newJs = 'JavaScript is cool    languages with awesome community';

function reverseWordInStr(line) {

  let str = line.split(' ');

  if (str.length === 1) return `String should be a little bit longer at least two words`;

  let arr = [];

  for (let i = 0; i < str.length; i++) {
    let newStr = str[i].split('').reverse().join('');
    arr.push(newStr);
  }

  return arr.join(' ');
}

// console.log(reverseWordInStr('lololo'));
// console.log(reverseWordInStr('JavaScript is cool languages, with awesome   community and other stuffs!'));
// console.log(reverseWordInStr(newJs));
// console.log(reverseWordInStr('Any string'));