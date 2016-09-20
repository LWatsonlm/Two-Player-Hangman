var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
var word = $("#enterWord #word-field");
var answerArray = [];
var secretWord = "";
var guessArray = [];
var wordLength = 0;



// this functions gets the typed in word, splits it and creates
// dashes based on the length of the word

function getWord(e) {
  e.preventDefault();
  secretWord = word.val();
  letters = secretWord.split('');
  var remainingLetters = secretWord.length; // not used yet
    for (i = 0; i < letters.length; i++) {
      $(".dashes span").text(letters.length);
      answerArray[i] = " _ ";
      $(".dashes div").append(answerArray[i]);
      console.log("word split works!");
    }
}

// this function takes the letter from player two after they
// click on the letter. It looks at the guess array and matches
// it go the

function letterGuess() {
  guess = $(this).attr('id');
  guessArray.push(guess);
    console.log("guess: " + guess);
  matches = letters.every(function(letter, index) {
  return guessArray.includes(letter);
  });
    console.log("guessArray: " + guessArray);
    console.log("matches: " + matches);
    processGuess();
}

// p.code:
// if letter is in array, update $(".dashes div") with letter
// else
// display hangman a body part of hangman

function processGuess() {
  // this is saying if all of the guess array is true, then fill out the letters. Which is why the letters are appearing after it true
  if (guessArray.includes(letters) !== matches) {
    $(".dashes div").html(letters);
  } else {
    alert("you got it wrong");
  }
}


$("#enterWord #submit-word").on("click", getWord);
$(".alpha").children().on("click", letterGuess);
// $(".alpha").children().on("click", css("background-color", red));


// return letter == secretWord[index];
// console.log("letter: " + letters);

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
