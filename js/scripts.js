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

$(document).ready(function() {
  $("form#anagram-finder").submit(function(event) {

    var word = $("input#word").val();
    var possibleAnagrams = $("input#possible-anagrams").val().split(", ");
    var answer = anagram(word, possibleAnagrams);
    var answerString = answer.join(", ")

    $(".matching-anagrams").text(answerString);
    $("#result").show();
    event.preventDefault();
  });
});
