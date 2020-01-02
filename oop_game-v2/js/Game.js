//Global Variables 

// Game class
class Game {
    //add a constructor,
    constructor () { 
        //initialize 'missed' property and set it to 0
        this.missed = 0;

        //initialize 'phrase' property and set it to an array [] of five Phrase objects
        this.phrase = this.phraseMaker(); 

        //initialize 'activePhrase' property and set it to null 
        this.activePhrase = null;
    }    

        //method  that creates phrases 
        phraseMaker() {
           let phrases = [
               new Phrase("filter method"),
               new Phrase("getter method"),
               new Phrase("object interaction"),
               new Phrase("callback function"),
               new Phrase("anonymous function")
           ];
         return phrases;
        };

        // add a method and call it 'getRandomPhrase()'
        getRandomPhrase() {
            //this method randomly retrieves one phrase from the phrases array
            let randomPhrase = this.phrase[Math.floor(Math.random() * this.phrase.length)];
            return randomPhrase;   
        }

        // add a method  and call it 'startGame()'
        startGame() {
            //this method hides the start screen overlay 
            const startScreen = document.getElementById("overlay");
            startScreen.style.display = 'none'

            //this method sets the 'activePhrase' property to a random phrase 
            let word = this.getRandomPhrase();
            //this returns an object (phrase), which then allows me to call that object's display method
            this.activePhrase = word;
            word.addPhraseToDisplay();
        }    
 
        // add a method and call it 'handleInteraction()' & pass in a 'button' property 
        handleInteraction(button) {
            //this method disables the selected letter's onscreen keyboard button 
            button.setAttribute("disabled", true);

            //if the button clicked by the player does match a letter in the phrase
            if(this.activePhrase.checkLetter(button.innerText) === true ) {
                //the CHOSEN CSS class is added to the selected letter's keyboard button
                button.classList.add('chosen');
                //the 'showMatchedLetter()' method is called on the phrase 
                this.activePhrase.showMatchedLetter(button.innerText);
                //the 'checkForWin()'method is called
                if(this.checkForWin() === true) {
                    //the 'gameOver()' method is called
                    this.gameOver();
                }      
            //if the button clicked by the player does not match a letter in the phrase       
            } else if(this.activePhrase.checkLetter(button.innerText) === false) {
                //the 'removeLie()' method is called
                this.removeLife()
                //the WRONG CSS class is added to the selected letter's keyboard button 
                button.classList.add('wrong');
                button.classList.remove('chosen');

            } 
        }
             

        //add a method and call it 'removeLife()' 
        removeLife() {
            //this method removes a life from the scoreboard, increments the missed property (one of the liveHeart.png images is replaced with a lostHeart.png image)   
            const scoreboard = document.querySelectorAll('img');
            for (let i = 0; i < scoreboard.length; i++) {
                scoreboard[i].src.replace('liveHeart.png', 'lostHeart.png');
                return this.missed++
            }
            //if the player has lost the game 
            if(this.missed < 4 ) {
                //call the gameOver() method 
                this.gameOver();
            }    
        } 

        //add a method and call it 'checkForWin()' method  
        checkForWin() {
            //this method checks if the player has revealed all the letters in the 'activePhrase'
            const hiddenLetters = this.activePhrase.classList.contains('hide');
            const shownLetters = this.activePhrase.classList.contains('show');
            if(hiddenLetters.length === game.activePhrase.phrase.replace(/\s+/g, '').length) {
                return false;
            }else if(shownLetters.length === game.activePhrase.phrase.replace(/\s+/g, '').length) {
                return true;
            }
        }

        //add a method and call it 'gameOver()' 
        gameOver() {
            //showing the original start screen overlay
            startScreen.style.display = '';
            //this method displays a final 'win' or 'loss' message and updating overlay screen
            const h1 = document.getElementById('game-over-message');
            if (this.missed < 4) {
                h1.innerHTML = "Game over";
                startGame.classList.add('lose');
            } else {
                h1.classList.remove('lose');
                h1.innerHTML = "Congratulations, you won!";
                startScreen.classList.add('win');
            }
        }           
}

