'use strict';

let junior = {};

function addMethod(object, name, fn) {

  let method = object[name];

  object[name] = function() {
    if (fn.length == arguments.length) {
      fn.apply(this, arguments);
    } else if (typeof method === 'function') {
      method.apply(this, arguments);
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
