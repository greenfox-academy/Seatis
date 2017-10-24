'use strict';
// - Create a variable named `nimals`
//   with the following content: `["kuty", "macsk", "cic"]`
// - Add all elements an `"a"` at the end
// - try to use built in functions instead of loops

var nimals = ["kuty", "macsk", "cic"];
nimals = nimals.map(function(a) {
  return a + "a";
});

console.log(nimals);