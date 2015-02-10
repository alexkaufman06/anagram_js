var anagram = function(word, possibleAnagrams) {
  var letters = word.split("").sort();
  var answer = [];

  possibleAnagrams.forEach(function(possibleAnagram) {
    var wordMatch = true;
    possibleAnagram.split("").sort().forEach(function(letter) {
      if (letters.indexOf(letter) === -1) {
        wordMatch = false;
      }
    });
    if (wordMatch) {
      answer.push(possibleAnagram);
    }
  });
  return answer;
};
