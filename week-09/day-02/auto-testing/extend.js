'use strict';

// Adds a and b, returns as result
const addNumbers = function(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    throw 'Invalid value';
  }
}

// Returns the highest value from the three given params
const maxOfThree = function(a, b, c) {
  if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
    return Math.max(a, b, c);
  } else {
    throw 'Invalid value';
  }
}

//Returns the median value of a list given as param
const median = function(pool){
  if (pool.filter(item => typeof item === 'number').length === pool.length) {
    let sortedPool = pool.sort(function(a, b){return a-b});
    if (pool.length % 2 === 1) {
      return sortedPool[(pool.length - 1) / 2];
    } else {
      return((sortedPool[(pool.length) / 2] + sortedPool[(pool.length) / 2 - 1]) / 2);
    }
  } else {
    return 'Invalid value';
  }
}

// Returns true if the param is a vovel
const isVovel = function(char){
  if (char === '' || !char) {
    return 'Please, give me one character';
  } else if (char.length > 1) {
    return 'Please, give me one character';
  } else {
    return 'aeiouéáőűöüóí'.includes(char);
  }
}

// Create a method that translates hungarian into the teve language
const translate = function(hungarian) {
  if (typeof hungarian === 'string') {
    let text = hungarian.split('');
    let teve = '';
    text.forEach(function(char){
      if (isVovel(char)){
        teve += char + 'v'+ char;
      } else {
        teve += char;
      }
    });
    return teve;
  } else {
    return 'Invalid value';
  }
}

module.exports = {
  addNumbers: addNumbers,
  maxOfThree: maxOfThree,
  median: median,
  isVovel: isVovel,
  translate: translate
}