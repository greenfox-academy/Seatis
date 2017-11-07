'use strict'

var test = require('tape');
var sum = require('./sum.js');


test('string test', function (t) {
  var actual = sum.sumElements([6]);
  var expected = 6;
  t.equal(actual, expected);
  t.end();
});