var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
var word = $("#enterWord #word-field");
var answerArray = [];
var secretWord = "";
var guessArray = [];
var wordLength = 0;



// var submit = $("#enterWord #submit-word");

function getWord(e) {
  e.preventDefault();
  secretWord = word.val();
  letter = secretWord.split('');
  var remainingLetters = secretWord.length;
    for (i = 0; i < letter.length; i++) {
      $(".dashes span").text(letter.length);
      answerArray[i] = "_"; // need to get this to display
      console.log("why??");
    }
}

// if clicked #a ... #z
// check if #a ... #z is in the secretWord array
// if it's in the array, that's good
// if it's not in the array, you get a strike (have 5 chances)

function guessLetter() {
guess = $(this).attr('id');
guessArray.push(guess);
var same = guessArray.every(function(element, index) {
return element == secretWord[index];
  });
  console.log(same);
  console.log(guessArray);
}

$("#enterWord #submit-word").on("click", getWord);
$(".alpha").children().on("click", guessLetter);


// if #a is in the letter array, display "you got a right letter"
// else decrease remainingLetters by 1  example: remainingLetters--




// prevent refreshing when button or letter is clicked
$(".alpha").on("click", function(e) {
  e.preventDefault();
  console.log(e);
});

// for (j = 0; j < letter.length; j++) {
//   console.log(letter[j]);
//   }
// }


// function handleGuesses() {
//   if ()
// }
//
// $("#a").on("click", handleGuesses);

// if letter is in the array, do this
// if not, add to hangman




// function translate (word) {
//     // take a string and make it into an array of letters
//   return word.split("")
//     // iterate over each letter in the array
//       .map(function (letter) {
//       // if the letter is a vowel
//       if( vowels.includes(letter) ) {
//           // add ub infront
//         return "ub" + letter
//       } else {
//           // otherwise just need the letter
//         return letter
//       }
//     })
//     // don't forget to turn the array back into a string
//     .join("")
// }
//
// translate("hello")
