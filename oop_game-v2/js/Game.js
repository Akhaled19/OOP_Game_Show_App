//Global Variables 

// Game class
class Game {
    //add a constructor,
    constructor (missed, phrase, activePhrase) { 
        //initialize 'missed' property and set it to 0
        this.missed = 0;

        //initialize 'phrase' property and set it to an array [] of five Phrase objects
        this.phrase = ['filter method', 'getter method', 'object interaction', 'callback function', 'anonymous function' ]; 

        //initialize 'activePhrase' property and set it to null 
        this.activePhrase = null;
    }    

        // add a method  and call it 'startGame()'
        startGame() {
            // this method hides the start screen overlay 
            const startScreen = document.getElementById("overlay");
            startScreen.hidden();

            // this method sets the 'activePhrase' property to a random phrase
            this.activePhrase = getRandomPhrase();

            // this method calls 'addPhraseToDisplay() method on the 'activePhrase' property 
        }    

        // add a method and call it 'getRandomPhrase()'
        getRandomPhrase() {
            //this method randomly retrieves one phrase from the phrases array
            const randomNumber = Math.floor(Math.random() * this.phrase.length);
            const randomPhrase = this.phrase[randomNumber];
        }  

        // add a method and call it 'handleInteraction()' 
        handleInteraction() {
            //this method disables the selected letter's onscreen keyboard button 
            
            //if the phrase does NOT include the guessed letter
                //the WRONG CSS class is added to the selected letter's keyboard button 
                //the 'removeLife()' method is called
             
            //if the phrase includes the guessed letter  
                //the CHOSEN CSS class is added to the selected letter's keyboard button 
                //the 'showMatchedLetter()' method is called on the phrase 
                //the 'checkForWin()'method is called
                    //if the player has won the game 
                        //the 'gameOver()' method is called 
        }

        //add a method and call it 'checkForWin()' method  
        checkForWin() {
            //this method checks if the player has revealed all the letters in the active 'phrase'
        }

        //add a method and call it 'removeLife()' 
        removeLife() {
            //this method removes a life from the scoreboard increments the missed property (one of the liveHeart.png images is replaced with a lostHeart.png image)   
            //if the player has lost the game 
                //call the gameOver() method 
        } 

        //add a method and call it 'gameOver()' 
        gameOver() {
            //this method displays a final 'win' or 'loss' message 
            //by showing the original start screen overlay styled with either win or loss CSS class  
        }           
}