'use strict';
//@SUPER
/* 2. Напишите функция которая преобразовывает/открывает скобки всех 
вложенных внутри массивов
Необходимо реализовать рекурсивный фызов функции.
Функция должна открывать любое количество внутренних массивов
 
example:
[[1,2],[3,[4]],5, 10] => [1,2,3,4,5,10]
[25,10,[10,[15]]] => [25,10,10,15]
 */
let arr = [
  [1, 2],
  [3, [4]], 5, 10
];
let arr2 = [25, 10, [10, [15]]];

function openBraces(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    // return arr.join();
    let elem = arr[i];
    if (Array.isArray(elem)) {
      return openBraces(elem);
    } else {
      return newArr.push(elem);
    }

  }
}


console.log(openBraces(arr));
console.log(openBraces(arr2));
