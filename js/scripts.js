function pigTranslate (word){
  //debugger;
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var vowels = "aeiou"
  var letters = word; //contains a string
  var result = '';
  var cons = '';
  var conCheck = '';
  var letter = letters[0];//contains a string 1 character long

  if (word.length === 1){
    if (alphabet.indexOf(letters) === -1){
      console.log(result);
      result = letters;
      return result
    }

    result = word + "ay";
  } else if (word.length > 1){

    // conCheck = checkCons(letters)

    //logic fires if and only if word is longer than 1
    if (letters[0] === "q" && letters[1] === "u") {
      result = letters.slice(2) + 'quay'
    } else if((vowels.indexOf(letters[0]) === -1) && (vowels.indexOf(letters[1]) === -1)){
      conCheck = checkCons(letters)
      result = letters.slice(1) + letters.slice(0, 1) + 'ay';
    } else if((vowels.indexOf(letters[0]) !== -1) && (vowels.indexOf(letters[1]) === -1) && (vowels.indexOf(letters[2]) === -1)){
      //console.log("first word vowel, next 2+ consonants ")
      var noVowel = letters.slice(1)
      cons = letters.slice(1, checkCons(noVowel)+1);
      result = letters.slice(checkCons(noVowel)+1) + letter + cons + "ay";
    }
    else {
      console.log("inner else ");
      result = word.slice(1) + letter + 'ay'
    }

  }
  else {
    console.log("outer else");
  }
  return result;
}

function checkCons (word){ //word = the
  //this should only ever run for words that start with consonants
  //returns the index of the last consonant
  //debugger;
  var letters = word.split(''); //letters = [t, h, e]
  var vowels = "aeiouy".split('');
  var end = 0; // end = 1
  for (var j=0;j<letters.length;j++){ // iteration 3
    var char = letters[j];  // char = e
    if (vowels.indexOf(char) === -1){
      end = j
    } else {
      return end // return
    }
  }
}

function pigSentence (sentence){
  //debugger;
  var words = sentence.split(' ');
  var result = [];

  for (var i=0; i<words.length; i+=1){
    console.log("i is: " + i);
    var word = words[i];
    result.push(pigTranslate(word));
  }

  return result.join(' ');
}

$(document).ready(function() {
  $("form#translate").submit(function(event) {
    event.preventDefault();
    var input = $("input#words").val();
    var result = pigSentence(input);
    $("#result").text(result);
  });
});
