'use strict';

var students = [
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Zsombor', 'age': 12, 'candies': 5}
]

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function moreCandies(studentList) {
  let string = "They have more than 4 candies: "
  studentList.forEach(function(element) {
    if (element['candies'] > 4) {
      string += element['name'] + " ";
    }
  });
  console.log(string);
}

function candiesAverage(studentList) {
  let sum = 0;
  studentList.forEach(function(element) {
    sum += element['candies'];
  });
  return sum / studentList.length;
}

moreCandies(students);
console.log(candiesAverage(students));