var countLetters = {
  occurrences: function(string) {
    var array = string.split('');
    var result = {};
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