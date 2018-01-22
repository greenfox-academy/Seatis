'use strict'

var test = require('tape');
var counter = require('./count-letters.js');


test('anagram ok test', function (t) {
  var actual = counter.occurrences('alabama');
  var expected = {'a': 4, 'l': 1, 'b': 1, 'm': 1};
  t.equal(actual, expected);
  t.end();
});