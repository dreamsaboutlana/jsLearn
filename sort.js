'use strict';
let myObject = {
  database: [
    { age: 100, name: 'b' },
    { age: 15, name: 'c' },
    { age: 25, name: 'a' }
  ],
  mySort: mySorter

};

function mySorter(value) {

  this.database.sort((a, b) => {
    if (typeof this.database[0][value] == 'number') {
      return a[value] - b[value];
    } else if (typeof this.database[0][value] == 'string') {

      var elemA = a[value].toUpperCase();
      var elemB = b[value].toUpperCase();

      if (elemA < elemB) {
        return -1;
      }
      if (elemA > elemB) {
        return 1;
      }
      return 0;
    }
  });

  return this.database;
}

// {age:15, name:'c'}, {age:25, name:'a'} {age:100, name:'b'}

console.log(myObject.mySort('age'));
console.log(myObject.mySort('name'));
