// Crate a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % % 
//  % % % %
//
var puffer = "";
for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    if (i % 2 == 0) {
      if (j % 2 == 0) {
        puffer += "%";
      } else {
        puffer += " ";
      }
    } else {
      if (j % 2 == 0) {
        puffer += " ";
      } else {
        puffer += "%";
      }
    }
  }
  console.log(puffer);
  puffer = "";
}
