'use strict';

// Create a program that prints all the even numbers between 0 and 500
var number = 500;
while (number > 0) {
  if (number % 2 == 0) {
    console.log(number);
  }
  number--;
}