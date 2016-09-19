var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

// if letter is in the array, do this
// if not

function getWord() {
  var word = $("#guessWord #letter-field").val();
  var letters = word.split(' ');
  for (i = 0; i < letters.length; i++) {

  }
}


function translate (word) {
    // take a string and make it into an array of letters
  return word.split("")
    // iterate over each letter in the array
      .map(function (letter) {
      // if the letter is a vowel
      if( vowels.includes(letter) ) {
          // add ub infront
        return "ub" + letter
      } else {
          // otherwise just need the letter
        return letter
      }
    })
    // don't forget to turn the array back into a string
    .join("")
}

translate("hello")
