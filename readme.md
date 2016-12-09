I. User Stories
------------

1. As user 1, I should be able to type in a word so that other players can guess my secret word.
2. As user 2, I should be able to click on any letter in the alphabet so I can guess the word.
3. As user 2, I should be able to know how many letters are in the secret word so that I can make good guesses.
4. As user 2, I should be able to see the hangman pieces display so that I can see how many tries I have left.
5. As user 2, I should be able to know when the game is over so that I can play again!

II. File list
------------
1. index.html		      Contains content using HTML
2. style.css           Contains the styling for HTML using CSS
3. main.js		          Contains logic for game using JavaScript and jQuery
4. hangman-stage.png   The mainstage, the image that appears when game is loaded
5. 01-hangman.png      Hangman body part one, displays when user misses a letter
6. 02-hangman.png      Hangman body part two, displays when user misses 2 letters
7. 03-hangman.png      Hangman body part three, displays when user misses 3 letters
8. 04-hangman.png      Hangman body part one, displays when user misses 4 letters
9. 05-hangman.png      Hangman body part one, displays when user misses 5 letters
10. 06-hangman.png      Hangman body part one, displays when user misses the final 6th letter.
11. body-background.jpeg      The background of the game


III. Technologies Used
----------

### Style
Using CSS, instead using floats to arrange my layout, I took advantage of the CSS3 Flexible Box, aka flexbox. Flexbox gave me the flexiblity to easily move elements around on the page.

For color, instead of Hex code, I tried a different method of using colors. I used rgba to change the transparency of the color.

Lastly, I used Google Fonts to style the font

### Logic
I used JavaScript and jQuery to build the logic around the game. Using mostly functions, for loops and if statments.

When player one types in a word and clicks on submit, a function will trigger and uses jQuery to hide the secret word from player two.

The game will display the number of letters in the secret word and empty dashes will appear.

When player two clicks on a letter, if the letter is in the secret word, the letter will appear on the dashes. If the letter is not in the word, a piece of the hangman will appear on the gallow.

After 6 missed guesses, the game will be over and player two will lose.

IV. Approach Taken
----------
First, On a piece of paper, I wrote pseudocode for the entire logic of hangman. On the paper I mapped out every step needed in order for the game to work.

I started out building the content using HTML. As a visual person, I need to see what's happening on the page before I can start building logic around it.

Once most of the elements were on the page, I picked my color sceme and theme.

For the logic, I started with declaring the varibles I needed at the top of the page. Once I mapped out the varibles needed, I started writing my first function.

The first function takes a look at the word typed into the input box and splits it into it's own array. From there, the function will display the length of the word and dashes will appear on page.

The next function runs when player two clicks on a letter in the alphabet box. It will check to see if the letter is in the secret word. A IF statement runs to display either the right word or if it's wrong, a body part.

Lastly, when all the logic was complete. I cleaned up comments and uncesscary code and I ran it in HTML and CSS validator.

V. Unsolved Issues
----------
There are a couple of features/issues I would like to fix.

1. Player two can click on the same letter, twice
2. Adding a box where player one can type in a suggestion or word hint. This will appear after the secret word is submitted
3. You win message when full word is guessed correctly
4. Turning a wrong letter red after player two clicks it
