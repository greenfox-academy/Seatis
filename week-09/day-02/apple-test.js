'use strict'

var test = require('tape');
var apple = require('./apple.js');


test('string test', function (t) {
  var actual = apple.getApple();
  var expected = 'apple';
  t.equal(actual, expected);
  t.end();
});