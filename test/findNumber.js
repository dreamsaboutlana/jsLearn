// 'use strict';
const arr = [1, 2, 75, 310, 20, 75];
const obj = {
  name: 'qwerty',
  qwerty: [1, 2, 3, 310, 20, 10]
}

function findIsArray(obj, arg) {
  // let obj = arr;
  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      var elem = obj[i];
      if (elem > arg) {
        return elem;
      }
    }
  }
}

console.log(findIsArray(arr, 4));

function findNumber(obj, arg) {
  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      var elem = obj[i];
      if (elem > arg) {
        return elem;
      }
    }
  }
  for (key in obj) {
    var index = obj[key];
    if (Array.isArray(index)) {
      for (var i = 0; i < index.length; i++) {
        var elem = index[i];
        if (elem > arg) {
          return elem;
        }
      }
    }
  }
  return;
}
console.log(findNumber(arr, 3));
console.log(findNumber(obj, 3));
