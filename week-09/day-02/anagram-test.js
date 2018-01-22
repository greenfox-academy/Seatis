'use strict'

var test = require('tape');
var anagram = require('./anagram.js');


test('anagram test', function (t) {
  var actual = anagram.isAnagram('votes', 'stove');
  var expected = 'apple';
  t.equal(actual, expected);
  t.end();
});