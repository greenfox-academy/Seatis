'use strict';

var fruits = [
  'melon',
  'apple',
  'strawberry',
  'blueberry',
  'pear',
  'banana'
];

var doubles = fruits.map(function(fruit) {
  var counter = 0;
  for (var i = 0; i < fruit.length; i++) {
    if (fruit[i] === 'e') {
        counter++;
    } 
  }
  return counter;
});

console.log(doubles);
// Create a new array of consists numbers that shows how many times the 'e' letter
// occurs in the word stored under the same index at the fruits array!
// Please use the map method.
