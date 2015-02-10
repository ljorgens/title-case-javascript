var titleCase = function(word) {
  var word_array = word.split(" ");
  var upper_case_array = [];
  var lowercase_words = ["the", "a", "an", "and"];
  for (var t = 0; t < word_array.length; t++) {
    var whole_word = word_array[t].toLowerCase();
    if (t === 0 || lowercase_words.indexOf(whole_word.toLowerCase()) === -1) {
      var first_letter = whole_word[0].toUpperCase();
      var rest = whole_word.slice(1);
      upper_case_array.push(first_letter + rest);
    } else {
      upper_case_array.push(whole_word.toLowerCase());
    };
  };
  return upper_case_array.join(" ");
};
