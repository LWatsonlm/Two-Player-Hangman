# I. File list

- index.html Contains content using HTML
- style.css Contains the styling for HTML using CSS
- main.js Contains logic for game using JavaScript and jQuery
- hangman-stage.png The mainstage, the image that appears when game is loaded
- 01-hangman.png Hangman body part one, displays when user misses a letter
- 02-hangman.png Hangman body part two, displays when user misses 2 letters
- 03-hangman.png Hangman body part three, displays when user misses 3 letters
- 04-hangman.png Hangman body part one, displays when user misses 4 letters
- 05-hangman.png Hangman body part one, displays when user misses 5 letters
- 06-hangman.png Hangman body part one, displays when user misses the final 6th letter.
- body-background.jpeg The background of the game


# II. Technologies Used

## Style

Using CSS, instead using floats to arrange my layout, I took advantage of the CSS3 Flexible Box, aka flexbox. Flexbox gave me the flexiblity to easily move elements around on the page.

For color, instead of Hex code, I tried a different method of using colors. I used rgba to change the transparency of the color.

Lastly, I used Google Fonts to style the font

## Logic

I used JavaScript and jQuery to build the logic around the game. Using mostly functions, for loops and if statments.

When the player clicks "Click Here For Your Word" this shoots off an Ajax call to the word bank's API.

The game will display the number of letters in the secret word and empty dashes will appear.

When the player clicks on a letter, if the letter is in the secret word, the letter will appear on the dashes. If the letter is not in the word, a piece of the hangman will appear on the gallow.

After 6 missed guesses, the game will be over and the player will lose. The secret word will appear in the form of an alert.

# III. How To Run The Game

To run the game, simply open the ```index.html``` file in your browser.  You can quickly do this by typing the following command in your terminal:

```$ open index.html```

This will open the game! I recommend opening Developers Javascript's Console to follow the Ajax call and understand the flow of logic.

# IV. Approach Taken

First, On a piece of paper, I wrote pseudocode for the entire logic of hangman. On the paper I mapped out every step needed in order for the game to work.

I started out building the content using HTML. As a visual person, I need to see what's happening on the page before I can start building logic around it.

Once most of the elements were on the page, I picked my color sceme and theme.

For the logic, I started with declaring the varibles I needed at the top of the page. Once I mapped out the varibles needed, I started writing my first function.

The first function listens for a click of the button "Click Here" button. Once this button is clicked, an Ajax call is sent to the API and a word is randomly picked.

The next function runs when the player clicks on a letter in the alphabet box. It will check to see if the letter is in the secret word. A IF statement runs to display either the right word or if it's wrong, a body part.

Lastly, when all the logic was complete. I cleaned up comments and uncesscary code and I ran it in HTML and CSS validator.

# V. Unsolved Issues

There are a couple of features/issues I would like to fix.

1. The player can click on the same letter, twice
2. You win message when full word is guessed correctly
3. Turning a wrong letter red after player two clicks it

# Screenshots

![screenshot of game before play](screenshot1.png)
![screenshot of game after computer picks a word](screenshot2.png)
