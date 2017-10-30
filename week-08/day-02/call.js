'use strict';

function factorialTillLimitWithCallback(limit, callback) {
  var factorial = 1;
  for (var i = 1; i <= limit; ++i) {
    callback(factorial);
    factorial *= i;
  }
  console.log(factorial);
}

function factorialCalc(factorialNumber) {
  console.log(factorialNumber)
}

factorialTillLimitWithCallback(20, factorialCalc);

// Create a function and pass it as a parameter to the factorialTillLimitWithCallback
// function, and print all the factorial numbers till 20