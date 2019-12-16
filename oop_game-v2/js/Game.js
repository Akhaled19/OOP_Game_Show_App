//Global Variables 

// Game class
class Game {
    //add a constructor,
    constructor () { 
        //initialize 'missed' property and set it to 0
        this.missed = 0;

        //initialize 'phrase' property and set it to an array [] of five Phrase objects
        this.phrase = ['filter method', 'getter method', 'object interaction', 'callback function', 'anonymous function' ]; 

        //initialize 'activePhrase' property and set it to null 
        this.activePhrase = null;
    };    

        // add a method  and call it 'startGame()'
        startGame() {
            // this method hides the start screen overlay 
            const startScreen = document.getElementById("overlay");
            startScreen.style.display = 'none'

            // this method sets the 'activePhrase' property to a random phrase and adds that phrase to board by calling the addPhraseToDisplay() method
            let word = this.getRandomPhrase().addPhraseToDisplay();
            this.activePhrase = word; 
        };    

        // add a method and call it 'getRandomPhrase()'
        getRandomPhrase() {
            //this method randomly retrieves one phrase from the phrases array
            const randomPhrase = this.phrase[Math.floor(Math.random() * this.phrase.length)];
            return randomPhrase;   
        };  

        // add a method and call it 'handleInteraction()' 
        handleInteraction() {
            //this method disables the selected letter's onscreen keyboard button 
            const keyboard = document.getElementsByClassName('key'); 
            const value = keyboard[keyboard.selectedIndex].value;
            value.setAttribute("disabled", "disabled");

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
            //this method checks if the player has revealed all the letters in the active 'phrase'
        }

        //add a method and call it 'removeLife()' 
        removeLife() {
            //this method removes a life from the scoreboard increments the missed property (one of the liveHeart.png images is replaced with a lostHeart.png image)   
            
            //if the player has lost the game 
            if(this.missed < 4 ) {
                //call the gameOver() method 
            }    
        } 

        //add a method and call it 'gameOver()' 
        gameOver() {
            //this method displays a final 'win' or 'loss' message 
            //by showing the original start screen overlay styled with either win or loss CSS class  
        }           
}