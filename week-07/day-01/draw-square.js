'use strict';

var lineCount = 6;

// Write a program that draws a
// square like this:
//
//
// %%%%%
// %   %
// %   %
// %   %
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is
var puffer = "";
for (let k = 0; k < lineCount; k++) {
  for (let i = 0; i < lineCount; i++) {
    if (k == 0 || k == lineCount - 1) {
      puffer += "%";
    }
    else {
      if (i == 0 || i == lineCount - 1) {
        puffer += "%";
      }
      else {
        puffer += " ";
      }
    }
  }
  console.log(puffer);
  puffer = '';
}