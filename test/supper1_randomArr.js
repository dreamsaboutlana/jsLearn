'use strict';
//@SUPER
/*
 1. Найдите число отсутствующее в заданной последовательности
 
 example:
 [1,3,5,9] => 7
 [0,8,16,32] => 24
 [4, 6, 8, 10] => 2 // число сначала
 [0,16,24,32] => 8
  
 */

let arr = [1, 3, 5, 9];

function random(arr) {

  let step = (arr[arr.length - 1] - arr[0]) / arr.length;

  for (var i = 0; i < arr.length - 1; i++) {

    if ((step ^ 0) === step && (arr[i + 1] - arr[i]) !== step) {

      let mistNum = arr[i] + step;

      arr.splice(i + 1, 0, mistNum);
      return arr;
    } else {

      let newStep = arr[i + 1] - arr[i];
      let lostNum = arr[0] - newStep;
      arr.splice(0, 0, lostNum);
      return arr;
    }

  }



}

// console.log(random([1, 3, 5, 9]));
// console.log(random([0, 8, 16, 32]));
// console.log(random([0, 16, 24, 32]));
// console.log(random([4, 6, 8, 10]));
