'use strict';
// - Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// - Log the sum of the elements in `ai` to the console

let ai = [3, 4, 5, 6, 7];
let sum = 0;
ai.forEach(function(e) {
  sum += e;
});
console.log(sum);