'use strict';
// Create a simple calculator application which does read the parameters from the standard input 
// and prints the result to the console.

// It should support the following operations: 
// +, -, *, /, % and it should support two operands. 

// The format of the expressions must be: {operation} {operand} {operand}. 
// Examples: "+ 3 3" (the result will be 6) or "* 4 4" (the result will be 16)

// You should use the command line arguments to accept user input

// It should work like this:

// Start the program with "node calculator.js + 5 6"
// If number of arguments are not correct, print some nice errors
// Else print the result
// Say goodbye

var args = process.argv.splice(2); // Just a helper for you to get started

let operator = args[0];
let op_1 = Number(args[1]);
let op_2 = Number(args[2]);
let result;

switch(operator) {
  case "+":
    result = op_1 + op_2;
    break;
  case "-":
    result = op_1 - op_2;
    break;
  case "*":
    result = op_1 * op_2;
    break;
  case "/":
    if (op_2 != 0) {
      result = op_1 / op_2;
    } else {
      result = "Division by zero is not permitted!";
    }
    break;
  case "%":
    if (op_2 != 0) {
      result = op_1 % op_2;
    } else {
      result = "Division by zero is not permitted!";
    }
    break;
  default:
    result = "No operator added";
}


console.log('The result is:',result);