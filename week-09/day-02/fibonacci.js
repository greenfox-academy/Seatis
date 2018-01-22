var fibonacci = {
  hello: 3,
  compute: function(index) {
    if (index === 0) {
      return 0;
    } else if (index > 0 && Number.isInteger(index)) {
      let sum = 1;
      let num_1 = 0;
      let num_2 = 1;
      for (let i = 0; i < index-1; i++) {
        sum = num_1 + num_2;
        num_1 = num_2;
        num_2 = sum;
      }
      return sum;
    } else {
      return 'Wrong type!';
    }
  }
}

module.exports = fibonacci;