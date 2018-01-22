var sum = {
  sumElements: function(numList) {
    var summa = 0;
    if (!Array.isArray(numList)) {
      return "This is not an array!";
    } else {
      numList.forEach(function(element) {
        summa += element;
      }, this);
      return summa;
    }
  }
}

module.exports = sum;