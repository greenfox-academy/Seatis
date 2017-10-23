'use strict';

var massInKg = 81.2;
var heightInM = 1.78;

// Print the Body mass index (BMI) based on these values

console.log("My BMI index is: " + (massInKg / (heightInM * heightInM)));
console.log("My BMI index is: " + (massInKg / Math.pow(heightInM,2)));