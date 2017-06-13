'use strict';
let arr3 = [
  [1, 2],
  [3, [4]], 5, [10]
];
let arr4 = [25, 10, [10, [15]]];

function openBraces(arr) {
  if (Array.isArray(arr)) {
    return arr.reduce((done, curr) => {
      return done.concat(openBraces(curr));
    }, []);
  } else {
    return arr;
  }
}

console.log(openBraces(arr3));
console.log(openBraces(arr4));
