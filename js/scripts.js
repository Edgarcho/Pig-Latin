function pigTranslate (word){
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var vowels = "aeiou"
  var letters = word;
  var result = '';
  var letter = letters[0];

  if (word.length === 1){
    if (alphabet.indexOf(letters) === -1){
      console.log(result);
      result = letters;
      return result
    }

    result = word + "ay";
  } else if (word.length > 1){
    result = word.slice(1) + letter + 'ay'

    //logic fires if and only if word is longer than 1
    if (letters[0] === "q" && letters[1] === "u") {
      result = word.slice(2) + letter + 'ay'
    } else if((vowels.indexOf(letters[0]) === -1) && (vowels.indexOf(letters[1]) === -1)){
      cons = word.slice(0, checkCons(letters));
      result = word.slice(checkCons(letters)) + cons + "ay"
    }
  }
  return result;
}

function checkCons (word){
  var letters = word.split('');
  var vowels = "aeiouy".split('');
  var end = 0;
  for (i=0;i<letters.length;i++){
    var char = letters[i];
    if (vowels.indexOf(char) === -1){
      end = i
    } else {
      return end
    }
  }
}

$(document).ready(function() {
  $("form#translate").submit(function(event) {
    event.preventDefault();
    var word = $("input#words").val();
    var result = pigTranslate(word);
    $("#result").text(result);
  });
});
