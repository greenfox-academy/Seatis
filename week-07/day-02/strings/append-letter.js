'use strict';
// Add "a" to every string in far

var far = ["kuty", "macsk", "kacs", "rók", "halacsk"];

far.forEach(function(item) {
  far[far.indexOf(item)] += "a";
});

console.log(far);