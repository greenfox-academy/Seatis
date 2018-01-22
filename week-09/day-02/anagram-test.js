'use strict'

var test = require('tape');
var anagram = require('./anagram.js');


test('anagram ok test', function (t) {
  var actual = anagram.isAnagram('votes', 'stove');
  var expected = true;
  t.equal(actual, expected);
  t.end();
});

test('anagram fail test with same length', function (t) {
  var actual = anagram.isAnagram('votes', 'stive');
  var expected = false;
  t.equal(actual, expected);
  t.end();
});

test('anagram fail test with different length', function (t) {
  var actual = anagram.isAnagram('votes', 'stover');
  var expected = false;
  t.equal(actual, expected);
  t.end();
});

test('anagram fail test with missing parameter', function (t) {
  var actual = anagram.isAnagram('votes');
  var expected = false;
  t.equal(actual, expected);
  t.end();
});

test('anagram fail test with missing parameters', function (t) {
  var actual = anagram.isAnagram();
  var expected = false;
  t.equal(actual, expected);
  t.end();
});

test('anagram fail test with number and string', function (t) {
  var actual = anagram.isAnagram('hello', 6);
  var expected = false;
  t.equal(actual, expected);
  t.end();
});

