function pigTranslate (word){
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split
  var letters = word.toLowerCase();
  var result;

  if (word.length === 1){
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
