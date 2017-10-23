'use strict';

var lineCount = 4;

// Write a program that draws a
// pyramid like this:
//
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

var stars = '';
var spaces = '';
var limit = 0;
for (let i = 0; i < lineCount; i++) {
  for (let j = lineCount - 1; j > i; j--) {
    spaces += " ";
  }
  for (let j = 0; j <= limit; j++ ) {
    stars += "*";
  }
  limit += 2;
  console.log(spaces + stars);
  stars = '';
  spaces = '';
}