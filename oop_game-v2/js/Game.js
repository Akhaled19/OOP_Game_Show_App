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
            const randomPhrase = this.phrase[Math.floor(Math.random() * this.phrase.length)];
            return randomPhrase;   
        }


        // add a method  and call it 'startGame()'
        startGame() {
            // this method hides the start screen overlay 
            const startScreen = document.getElementById("overlay");
            startScreen.style.display = 'none'

            // this method sets the 'activePhrase' property to a random phrase and adds that phrase to board by calling the addPhraseToDisplay() method
            let word = this.getRandomPhrase();
            word.addPhraseToDisplay();
            this.activePhrase = word;
        }    

        // add a method and call it 'handleInteraction()' 
        handleInteraction(button) {
            //this method disables the selected letter's onscreen keyboard button 
            //const keyboard = document.getElementsByClassName('key'); 
            //const value = keyboard[keyboard.selectedIndex].value;
            //value.setAttribute("disabled", "disabled");
            button.setAttribute("disabled", true);

            //if the button clicked by the player does not match a letter in the phrase
            if(value.checkLetter() = false ) {
                //the WRONG CSS class is added to the selected letter's keyboard button 
                value.classList.add('wrong');
                //the 'removeLife()' method is called
                this.removeLife();
           
            //if the button clicked by the player does match a letter in the phrase 
            } else if(value.checkLetter() = true) {  
                //the CHOSEN CSS class is added to the selected letter's keyboard button 
                value.classList.remove('wrong');
                value.classList.add('chosen');
                //the 'showMatchedLetter()' method is called on the phrase 
                Phrase.showMatchedLetter();
                //the 'checkForWin()'method is called
                this.checkForWin();
                    //if the player has won the game 
                    if(this.checkLetter() = true) {
                        //the 'gameOver()' method is called
                        this.gameOver();
                    } else {
                        return false;
                    }   

            }            
        }

        //add a method and call it 'checkForWin()' method  
        checkForWin() {
            //this method checks if the player has revealed all the letters in the 'activePhrase'

        }

        //add a method and call it 'removeLife()' 
        removeLife() {
            //this method removes a life from the scoreboard increments the missed property (one of the liveHeart.png images is replaced with a lostHeart.png image)   
            const scoreboard = document.querySelectorAll('img');
            for (let i = 0; i < scoreboard.length; i++) {
                const lostHeartScore = scoreboard[i].src.replace('liveHeart.png', 'lostHeart.png');
            }
            //if the player has lost the game 
            if(this.missed < 4 ) {
                //call the gameOver() method 
                this.gameOver();
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

