'use strict';
// Check if array contains all of the following elements: 4,8,12,16
// Create a 'numChecker' function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"

var listOfNumbers = [2, 4, 6, 8, 10, 12, 14, 16];
var testList = [4, 8, 12, 16];
var contains = true;

function numChecker(testList) {
  testList.forEach(function(number) {
    if (!listOfNumbers.includes(number)) {
      contains = false
    }
  });
  return contains;
}

console.log(numChecker(testList));