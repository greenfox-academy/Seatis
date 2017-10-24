'use strict';

// Swap the values of these variables
var a = 123;
var b = 526;

// Swap like in python
[a, b] = [b, a]
console.log(a);

// Swap with using temp
var tmp
tmp = a;
a = b;
b = tmp;
console.log(a);
console.log(b);

// One-line swap
b = [a, a = b][0];
console.log(a);
console.log(b);

[a, b] = [b, a]