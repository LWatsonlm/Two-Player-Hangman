var word = $("#enterWord #word-field");
var answerArray = [];
var secretWord = "";
var guessArray = [];
var wordLength = 0;
var limbCount = 0;



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


function letterGuess() {
  guess = $(this).attr('id');
  guessArray.push(guess);
    console.log("guess: " + guess);
    var matches = letters.includes(guess);
    console.log("guessArray: " + guessArray);
    console.log("matches: " + matches);
    if (matches) {
      $(".dashes div").html(underscoreify(secretWord, guessArray)); // function inside of jquery selector!!! say what!?
    } else {
      alert("you got it wrong");
      limbCount += 1;
      $("#hangman-counter img").attr("src", "06-hangman.png");
    }
}

function underscoreify(word, guesses) {
  var underscores = "";
  for (var i = 0; i < word.length; i++) {
      if (guesses.includes(word[i])) {
        underscores = underscores + word[i];
      } else {
          underscores = underscores + "_";
      }
  }
  return underscores;
}

$("#enterWord #submit-word").on("click", getWord);
$(".alpha").children().on("click", letterGuess);
// $(".alpha").children().on("click", css("background-color", red));


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
