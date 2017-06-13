'use strict';
let junior = {};

function addMethod(object, name, fn) {

  let param = fn.length;
  // console.log('param ' + param);
  if (param == fn.length) {

    object[name] = function(...args) {

      if (param == args.length) {

         fn(args);
      }
    }
  }

}

addMethod(junior, 'ok', function() {
  console.log('zero arguments');
});
addMethod(junior, 'ok', function(one) {
  console.log('one arguments');
});
addMethod(junior, 'ok', function(one, two) {
  console.log('two arguments');
});
addMethod(junior, 'ok', function(one, two, three) {
  console.log('three arguments');
});

junior.ok(); //'zero arguments'
junior.ok(1); //'one arguments'
junior.ok(1, 2); // 'two arguments'
junior.ok(1, 2, 3); // 'three arguments'
