'use strict'

var test = require('tape');
var sum = require('./sum.js');


test('array test', function (t) {
  var actual = sum.sumElements([6, 2, 4]);
  var expected = 12;
  t.equal(actual, expected);
  t.end();
});

test('one element test', function (t) {
  var actual = sum.sumElements([2]);
  var expected = 2;
  t.equal(actual, expected);
  t.end();
});

test('empty array', function (t) {
  var actual = sum.sumElements([]);
  var expected = 0;
  t.equal(actual, expected);
  t.end();
});

test('null test', function (t) {
  var actual = sum.sumElements(null);
  var expected = "This is not an array!";
  t.equal(actual, expected);
  t.end();
});

test('string test', function (t) {
  var actual = sum.sumElements('string');
  var expected = "This is not an array!";
  t.equal(actual, expected);
  t.end();
});