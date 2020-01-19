//Global Variables

// Game class (1) contains methods for starting and ending the game, (2) handles interactions, (3) gets random phrases
// (4) checks for a win, (5) and removes a life from the scoreboard
class Game {
    constructor() {
        //tracks the number of missed guesses by the player
        this.missed = 0;

        //an array [] to store phrases
        this.phrases = this.phraseMaker();

        //The phrase object that is currently in play
        this.activePhrase = null;
    }

    //method  that creates phrases
    phraseMaker() {
        const phrases = [
            new Phrase('filter method'),
            new Phrase('getter method'),
            new Phrase('object interaction'),
            new Phrase('callback function'),
            new Phrase('anonymous function'),
        ];
        //return the function by calling the phrases array
        return phrases;
    }

    //this method randomly retrieves one phrase from the phrases array
    getRandomPhrase() {
        const randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        //return the function by calling the randomPhrase variable
        return randomPhrase;
    }

    //this method (1) hides the start screen overlay, (2) sets the 'activePhrase' property to a random phrase
    //(3) and adds that phrase to the board
    startGame() {
        document.getElementById('overlay').style.display = 'none';

        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    //this method controls most of the game logic
    handleInteraction(button) {
        //(1) Disables the selected letter's onscreen keyboard button
        button.setAttribute('disabled', true);

        //if the button clicked by the player does match a letter in the phrase
        if (this.activePhrase.checkLetter(button.innerText) === true) {
            //the CHOSEN CSS class is added to the selected letter's keyboard button
            button.className = 'chosen';
            //the 'showMatchedLetter()' method is called on the phrase
            this.activePhrase.showMatchedLetter(button.innerText);

            //if the button clicked by the player does not match a letter in the phrase
        } else {
            //the 'removeLie()' method is called
            this.removeLife();
            //the WRONG CSS class is added to the selected letter's keyboard button
            button.className = 'wrong';
        }
        //if all letters  in the phrase are set to show - win
        if (this.checkForWin()) {
            //the 'gameOver()' method is called
            this.gameOver(true);
        }
    }

    //this method removes a life from the scoreboard
    removeLife() {
        //selects the scoreboard div
        const scoreboard = document.getElementsById('scoreboard');
        const arrayScoreBoard = scoreboard.map(heart => heart.innerHTML);
        for (let i = 0; i < arrayScoreBoard[i].length; i++) {
            //one of the liveHeart.png images is replaced with a lostHeart.png image
            scoreboard[i].src.replace('liveHeart.png', 'lostHeart.png');
            //increments the missed property
            return this.missed++;
        }
        //if the player has lost the game
        if (this.missed < 4) {
            //call the gameOver() method
            this.gameOver();
        }
    }

    //this method checks if the player has revealed all the letters in the 'activePhrase'
    checkForWin() {
        //console.log('The phrases property: ', this.phrases);
        //const arrayActivePhrase = this.phrases.map(item => item.phrase);

        //select all the letters in the activePhrase with a class name 'hide'
        const phraseLetterDomNodes = document.querySelectorAll("div#phrase ul li");

        const hiddenPhraseLettersDomNodes = [...phraseLetterDomNodes].filter(item => item.classList.contains("hide"));

        const hiddenPhraseLetters = hiddenPhraseLettersDomNodes.map(hiddenNode => hiddenNode.textContent);
        
        // //selects all the letters in the activePhrase with a class name 'show'
        // const shownPhraseLettersDomNodes = [...phraseLetterDomNodes].filter(item => item.classList.contains("show"));
        // const shownPhraseLetters = shownPhraseLettersDomNodes.map(hiddenNode => hiddenNode.textContent);


        console.log("The hidden list items: ", hiddenPhraseLettersDomNodes, hiddenPhraseLetters)
        //console.log("The shown list items: ", shownPhraseLettersDomNodes, shownPhraseLetters)
        //if the hidden letters length equals to the activePhrase letters length
        if (hiddenPhraseLetters.length > 0) {
            //keep the game going
            return false;
            //if the shown letters length equals to the activePhrase letters lenght
        } else {
            //stop the game, the usr has won
            return true;
        }
    }

    //this method deals with updating the screen after each game
    gameOver() {
        //showing the original start screen overlay
        startScreen.style.display = 'block';
        //this method displays a final 'win' or 'loss' message and updates overlay screen with CSS class
        const h1 = document.getElementById('game-over-message');
        if (this.missed < 4) {
            h1.innerHTML = 'Game over';
            startGame.classList.add('lose');
        } else {
            h1.classList.remove('lose');
            h1.innerHTML = 'Congratulations, you won!';
            startScreen.classList.add('win');
        }
    }
}
