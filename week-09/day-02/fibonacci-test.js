'use strict'

var test = require('tape');
var fibonacci = require('./fibonacci.js');
console.log(fibonacci);

test('number 6 test', function (t) {
  var actual = fibonacci.compute(6);
  var expected = 8;
  t.equal(actual, expected);
  t.end();
});

test('number 0 test', function (t) {
  var actual = fibonacci.compute(0);
  var expected = 0;
  t.equal(actual, expected);
  t.end();
});

test('number 1 test', function (t) {
  var actual = fibonacci.compute(1);
  var expected = 1;
  t.equal(actual, expected);
  t.end();
});

test('number 2 test', function (t) {
  var actual = fibonacci.compute(2);
  var expected = 1;
  t.equal(actual, expected);
  t.end();
});

test('empty arg', function (t) {
  var actual = fibonacci.compute();
  var expected = 'Wrong type!';
  t.equal(actual, expected);
  t.end();
});

test('null arg', function (t) {
  var actual = fibonacci.compute(null);
  var expected = 'Wrong type!';
  t.equal(actual, expected);
  t.end();
});

test('NaN arg', function (t) {
  var actual = fibonacci.compute(NaN);
  var expected = 'Wrong type!';
  t.equal(actual, expected);
  t.end();
});

test('undefined arg', function (t) {
  var actual = fibonacci.compute(undefined);
  var expected = 'Wrong type!';
  t.equal(actual, expected);
  t.end();
});

test('string arg', function (t) {
  var actual = fibonacci.compute('string');
  var expected = 'Wrong type!';
  t.equal(actual, expected);
  t.end();
});

test('float arg', function (t) {
  var actual = fibonacci.compute(3.35);
  var expected = 'Wrong type!';
  t.equal(actual, expected);
  t.end();
});

test('boolean arg', function (t) {
  var actual = fibonacci.compute(true);
  var expected = 'Wrong type!';
  t.equal(actual, expected);
  t.end();
});