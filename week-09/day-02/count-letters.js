var countLetters = {
  occurrences: function(string) {
    var result = {};
    if (string) {
      var array = string.split('');
    }
    if (array instanceof Array) {
      array.forEach(function (v, i) {
        if (!result[v]) { 
          result[v] = 1; 
        } else { 
          result[v]++;
        }
      });
    }
    return result;
  }
}

module.exports = countLetters;