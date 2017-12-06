function pigTranslate (word){
  var alphabet = "abcdefghijklmnopqrstuvwxyz"
  var letters = word.toLowerCase();
  var result;

  if (alphabet.indexOf(letters === 0)){
    return word;
  } else if (word.length === 1){
    result = word + "ay";
  }

  return result;
}




$(document).ready(function() {
  $("form#translate").submit(function(event) {
    event.preventDefault();
    var word = $("input#words").val();
    var result = pigTranslate(word);
    $("#result").text(result);
  });
});
