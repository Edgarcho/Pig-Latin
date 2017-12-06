function pigTranslate (word){
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split
  var letters = word.toLowerCase();
  // for (i=0;i<letters.length;i++){
  //   var letter = letters[i];
  //   console.log(letter);
  //   if (alphabet.indexOf(letter) === -1){
  //     return letter;
  //   }
  //
  // }
  return word
}




$(document).ready(function() {
  $("form#translate").submit(function(event) {
    event.preventDefault();
    var word = $("input#words").val();
    var result = pigTranslate(word);
    $("#result").text(result);
  });
});
