var word = $("#enterWord #word-field");
var answerArray = [];
var secretWord = "";
var guessArray = [];
var wordLength = 0;

function getWord() {
  secretWord = word.val();
  letters = secretWord.split('');
    for (i = 0; i < letters.length; i++) {
      $(".dashes span").text(letters.length);
      answerArray[i] = " _ ";
      $(".dashes div").append(answerArray[i]);
    }
}

function letterGuess() {
  guess = $(this).attr('id');
  guessArray.push(guess);
  guessCount = guessArray.length;
    var matches = letters.includes(guess);
    if (matches) {
    $(".dashes div").html(underscoreify(secretWord, guessArray));
    }   else if (guessCount == 1) {
        $("img").attr("src", "06-hangman.png");
    }   else if (guessCount == 2) {
          $("img").attr("src", "05-hangman.png");
    }   else if (guessCount == 3) {
          $("img").attr("src", "04-hangman.png");
    }   else if (guessCount == 4) {
          $("img").attr("src", "03-hangman.png");
    }   else if (guessCount == 5) {
          $("img").attr("src", "02-hangman.png");
    }   else {
          $("img").attr("src", "01-hangman.png");
          alert("Game Over");
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


$("#enterWord #submit-word").on("click", function() {
  getWord();
  $("#enterWord #word-field").hide();
  $("#enterWord #submit-word").hide();
  $("#playerOne h2").hide();
  // add hint .show()
});

$(".alpha").children().on("click", letterGuess);

// prevent refreshing when button or letter is clicked
$(".alpha").on("click", function(e) {
  e.preventDefault();
  console.log(e);
});
