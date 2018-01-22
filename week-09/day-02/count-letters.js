var countLetters = {
  occurrences: function(string) {
    var array = string.split('');
    var result = {};
    if (array instanceof Array) { // Check if input is array.
        array.forEach(function (v, i) {
            if (!result[v]) { // Initial object property creation.
                result[v] = 1; // Create an array for that property.
            } else { // Same occurrences found.
                result[v]++; // Fill the array.
            }
        });
    }
    return result;
  }
}

module.exports = countLetters;