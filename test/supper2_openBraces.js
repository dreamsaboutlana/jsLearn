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
  arr.forEach(elem => {

    if (Array.isArray(elem)) {
      elem.forEach(elem1 => {

        if (Array.isArray(elem1)) {
          elem1.forEach(elem2 => {
            newArr.push(elem2);
          });
        } else {
          newArr.push(elem1);
        }
      });
    } else {
      newArr.push(elem);
    }
  });

  return newArr;
}

console.log(openBraces(arr));
console.log(openBraces(arr2));
