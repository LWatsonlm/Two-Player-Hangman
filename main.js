var word = $("#enterWord #word-field");
var answerArray = [];
var secretWord = "";
var guessArray = [];
var wordLength = 0;

$("#submit-word").on("click", () => {
  var url = "http://linkedin-reach.hagbpyjegb.us-west-2.elasticbeanstalk.com/words?minLength=4"
  $.ajax({
    url: url,
    type: "get",
    dataType: "text"  // "text/plain" is wrong - it gave me a bug that took forever to fix!
  }).done((response) => {
    console.log("Ajax request success!")
    lines = response.split( '\n' );
    randomLineIndex = Math.floor(Math.random() * lines.length);
    secretWord = lines[randomLineIndex];
    console.log(secretWord);
    getWord();
  }).fail((response) => {
    console.log("Ajax request fails!")
  }) //  Set promises. Promises are callbacks that may or may not happen. A promise represents the future result of an asynchronous operation.
})

function getWord() {
  letters = secretWord.split('');
  console.log(letters);
  for (i = 0; i < letters.length; i++) {
    $(".dashes span").text(letters.length);
    answerArray[i] = "  _  ";
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
  }     else if (guessCount === 1) {
          $("img").attr("src", "06-hangman.png");
    }   else if (guessCount === 2) {
          $("img").attr("src", "05-hangman.png");
    }   else if (guessCount === 3) {
          $("img").attr("src", "04-hangman.png");
    }   else if (guessCount === 4) {
          $("img").attr("src", "03-hangman.png");
    }   else if (guessCount === 5) {
          $("img").attr("src", "02-hangman.png");
    }   else {
          $("img").attr("src", "01-hangman.png");
          alert("Game Over. The secret word is: " + "''" + secretWord + "''");
        }
}

function underscoreify(word, guesses) {
  var underscores = "";
  for (var i = 0; i < word.length; i++) {
      if (guesses.includes(word[i])) {
        underscores = underscores + word[i];
      } else {
          underscores = underscores + " _ ";
      }
  }
  return underscores;
}


$("#submit-word").on("click", function(e) {
  e.preventDefault()
  // getWord();
  // $("#enterWord #word-field").hide();
  $("#submit-word").hide();
  // $("#playerOne h2").hide();
});

$(".alpha").children().on("click", letterGuess);

// prevent refreshing when button or letter is clicked
$(".alpha").on("click", function(e) {
  e.preventDefault();
  console.log(e);
});
