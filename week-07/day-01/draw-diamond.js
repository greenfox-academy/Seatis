'use strict';

var lineCount = 7;



// Write a program that draws a
// diamond like this:
//
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

var stars = '';
var spaces = '';
var limit = 0;
var top_limit = (lineCount + 1) / 2;
for (let i = 0; i < top_limit; i++) {
  for (let j = top_limit - 1; j > i; j--) {
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

limit = lineCount - 3;
for (let i = 0; i < top_limit - 1; i++) {
  for (let j = 0; j <= i; j++) {
    spaces += " ";
  }
  for (let j = 0; j <= limit; j++ ) {
    stars += "*";
  }
  limit -= 2;
  console.log(spaces + stars);
  stars = '';
  spaces = '';
}
