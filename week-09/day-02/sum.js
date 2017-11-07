var sum = {
  sumElements: function(numList) {
    var summa = 0;
    numList.forEach(function(element) {
      summa += element;
    }, this);
    return summa;
  }
}

module.exports = sum;