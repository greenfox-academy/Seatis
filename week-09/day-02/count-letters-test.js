'use strict'

var test = require('tape');
var counter = require('./count-letters.js');


test('alabama test', function (t) {
  var actual = counter.occurrences('alabama');
  var expected = {'a': 4, 'l': 1, 'b': 1, 'm': 1};
  t.deepEqual(actual, expected);
  t.end();
});