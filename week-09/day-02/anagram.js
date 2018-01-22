var anagram = {
  isAnagram: function(string_1, string_2) {
    if (string_1 && string_2 && string_1.length === string_2.length) {
      let array_1 = string_1.split('').sort();
      let array_2 = string_2.split('').sort();
      return array_1.filter((letter, i) => letter === array_2[i]).length === array_1.length;
    } else {
      return false;
    }
  }
}

module.exports = anagram;