'use strict'

var test = require('tape');
var fibonacci = require('./fibonacci-test.js');


test('number test', function (t) {
  var actual = fibonacci.compute(6);
  var expected = 8;
  t.equal(actual, expected);
  t.end();
});