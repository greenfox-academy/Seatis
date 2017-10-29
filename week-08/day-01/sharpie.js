class Sharpie {

  constructor(color, width) {
    this.color = color;
    this.width = width;
    this.inkAmount = 100;
  }

  use() {
    this.inkAmount -= this.width;
  }
}

var sharpie1 = new Sharpie("red", 12);
var sharpie2 = new Sharpie("blue", 20);
sharpie1.use();
sharpie1.use();
console.log(sharpie1.width);
console.log(sharpie1.inkAmount);

console.log(sharpie2.inkAmount);
while (sharpie2.inkAmount > 0) {
  sharpie2.use();
  console.log(sharpie2.inkAmount);
}