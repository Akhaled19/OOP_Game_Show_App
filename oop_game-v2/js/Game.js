//Global Variables 

// Game class (1) contains methods for starting and ending the game, (2) handles interactions, (3) gets random phrases 
    // (4) checks for a win, (5) and removes a life from the scoreboard  
class Game {
    constructor () { 
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
               new Phrase("filter method"),
               new Phrase("getter method"),
               new Phrase("object interaction"),
               new Phrase("callback function"),
               new Phrase("anonymous function")
           ];
           //return the function by calling the phrases array
           return phrases;
        };

        //this method randomly retrieves one phrase from the phrases array
        getRandomPhrase() { 
            const randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
            //return the function by calling the randomPhrase variable
            return randomPhrase;   
        }

        //this method (1) hides the start screen overlay, (2) sets the 'activePhrase' property to a random phrase 
            //(3) and adds that phrase to the board 
        startGame() {   
            document.getElementById("overlay").style.display = 'none'

            this.activePhrase = this.getRandomPhrase();
            this.activePhrase.addPhraseToDisplay(); 
            console.log(this.activePhrase);
        }    
 
        //this method controls most of the game logic 
        handleInteraction(button) {
            //(1) Disables the selected letter's onscreen keyboard button
            button.setAttribute("disabled", true);

            //if the button clicked by the player does match a letter in the phrase
            if(this.activePhrase.checkLetter(button.innerHTML)) {
                //the CHOSEN CSS class is added to the selected letter's keyboard button
                button.className = 'chosen';
                //the 'showMatchedLetter()' method is called on the phrase 
                this.activePhrase.showMatchedLetter(button.textContent);
                console.log(`button is: ${button}`);
                  
            //if the button clicked by the player does not match a letter in the phrase       
            } else {
                //the WRONG CSS class is added to the selected letter's keyboard button 
                button.className = 'wrong';
                //the 'removeLie()' method is called
                this.removeLife();

            } 
            //if all letters  in the phrase are set to show - win
            if(this.checkForWin()) {
                //the 'gameOver()' method is called
                this.gameOver(true);
            }  
        }
             
        //this method removes a life from the scoreboard
        removeLife() {
            //selects the scoreboard div   
            const scoreboardDomNodes = [...document.querySelectorAll('#scoreboard li img')];
            
        
            for (let i = 0; i < scoreboardDomNodes.length; i++) {
                console.log(scoreboardDomNodes);
                if (scoreboardDomNodes[i].getAttribute('src') === 'images/liveHeart.png') {
                    //increments the missed property
                    this.missed += 1;
                    //replace live heart with lost heart 
                    scoreboardDomNodes[i].src = 'images/lostHeart.png';
                    //break after each run
                    break;
                }
            } 
            //if the player has lost the game 
           if(this.missed === 5 ) {
            //call the gameOver() method 
            this.gameOver(false);
            console.log(`missed ${this.missed}`)
           }    
        } 

        //this method checks if the player has revealed all the letters in the 'activePhrase'
        checkForWin() {
            //grabbed the phrase div and its ul and lis. This will be used to filter through  
            const phraseLetterDomNodes = document.querySelectorAll('div #phrase ul li');
            //filter through the phraseLetterDomNodes array to select only ones with 'hide' class name
            const hiddenPhraseLetterDomNodes = [...phraseLetterDomNodes].filter(letter => letter.classList.contains('hide'));
            //after filtering through, we want to read the text content of selected nodes
            const hiddenPhraseLetters = hiddenPhraseLetterDomNodes.map(hiddenNode => hiddenNode.textContent); 
            console.log(`the hidden list items: ${hiddenPhraseLetters} ${hiddenPhraseLetterDomNodes}`);
            //checks if the player won by checking is the length of the hiddenPhraseLetters is greater than 0 or not
            if(hiddenPhraseLetters.length > 0) {
                //keep the game going
                return false;
            //if the shown letters length equals to the activePhrase letters length    
            }else {
                //stop the game, the player has won
                return true;
            }
        }

        //this method deals with updating the screen after each game
        gameOver(gameWon) {
            //showing the original start screen overlay
            const overlay = document.getElementById("overlay");
            //this method displays a final 'win' or 'loss' message and updates overlay screen with CSS class
            const gameOverMessageH1 = document.getElementById('game-over-message');

            if (gameWon === true) {       
                overlay.classList.remove('start');
                overlay.classList.add('win');

                overlay.style.display = "block";

                gameOverMessageH1.textContent = "Congratulations, you won!";
                
                
            } else if (gameWon === false) {
                overlay.classList.remove('win');
                overlay.classList.add('lose');

                overlay.style.display = "block";

                gameOverMessageH1.textContent = "Game over! You ran out of lives.";
            }
           
        }    
        
        //Restarts the game between games 
        restart() {
                //removes all li elements from the phrase ul element
                const phraseUl = document.querySelectorAll('#phrase ul');
                console.log(phraseUl);
                while (phraseUl.hasChildNodes) {
                    console.log(phraseUl.firstChild);
                    phraseUl.removeChild(phraseUl.firstChild);
                }
                
                //enables each key on the beyboard & updates each key with the key class
                const keysArray = [...document.querySelectorAll('.key')]; 
                keysArray.forEach(key => {
                    //key.setAttribute("disabled", false);
                    key.className = 'key';
                });

                //resets all the heart images 
                const heartArray = [...document.querySelectorAll('#scoreboard li img')];
                heartArray.forEach(heart => {
                    heart.src = 'images/liveHeart.png';
                });
        }; 

}

