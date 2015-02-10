var anagram = function(word, possible_anagrams) {
  var letters = word.split("").sort();
  var answer = [];

  possible_anagrams.forEach(function(word) {
    var wordMatch = true;
    var index = 0;
    word.split("").sort().forEach(function(letter) {
      if (letter !== letters[index]) {
        wordMatch = false;
      }
      index += 1;
    });
    if (wordMatch) {
      answer.push(word);
    }
  });
  return answer;
};
