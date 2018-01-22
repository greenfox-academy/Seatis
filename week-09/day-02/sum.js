var sum = {
  sumElements: function(numList) {
    var summa = 0;
    if (numList === null) {
      return "Null is not an array!";
    } else if (typeof numList === 'string') {
      return "This is a string!";
    } else {
      numList.forEach(function(element) {
        summa += element;
      }, this);
      return summa;
    }
  }
}

module.exports = sum;