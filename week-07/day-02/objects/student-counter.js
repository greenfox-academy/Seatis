'use strict';

var students = [
        {'name': 'Teodor', 'age': 3, 'candies': 2},
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Zsombor', 'age': 12, 'candies': 5},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Olaf', 'age': 12, 'candies': 7},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
]

// create a function that takes a list of students and logs: 
// - how many candies are owned by students

// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies

function candies(studentList) {
  // let names = [];
  studentList.forEach(function(element) {
    // names.push(element['name']);
    console.log(element['name'] + ": " + element['candies'] + " candies");
  });
}

function ages(studentList) {
  let sum = 0;
  studentList.forEach(function(element) {
    if (element['candies'] < 5) {
      sum += element['age'];
    }
  });
  return sum;
}

candies(students);
console.log(ages(students));