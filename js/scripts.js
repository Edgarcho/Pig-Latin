function pigTranslate (word){
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var letters = word;
  var result = '';
  var letter = letters[0];

  //for (i=0;i<letters.length;i++){
    //var letter = letters[i]

    if (word.length === 1){
      if (alphabet.indexOf(letters) === -1){
        console.log(result);
        result = letters;
        return result
      }
      result = word + "ay";
    } else if (word.length > 1){
      result = word.slice(1) + letter + 'ay'
    }
  //}


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
