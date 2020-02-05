
// Game class contains (1) methods for starting and ending the game, (2) handles interactions, (3) gets random phrases 
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

        //method  that creates phrases (array of objects) 
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
            //console.log(this.activePhrase);
        }    
 
        //this method controls most of the game logic 
        handleInteraction(button) {
            //Disables the selected letter's onscreen keyboard button
            button.setAttribute("disabled", true);

            //If the button clicked by the player match a letter in the activePhrase
            if(this.activePhrase.checkLetter(button.innerHTML)) {
                //the CHOSEN CSS class is added to the selected letter's keyboard button
                button.className = 'chosen';
                //and the button is revealed
                this.activePhrase.showMatchedLetter(button.textContent);
                //console.log(`button is: ${button}`);
                 //if all letters  in the phrase are set to show CSS class
                if(this.checkForWin()) {
                    //player won
                    this.gameOver(true);
                } 
                  
            //if the button clicked by the player does not match a letter in the phrase       
            } else {
                //the WRONG CSS class is added to the selected letter's keyboard button 
                button.className = 'wrong';
                //a life is removed
                this.removeLife();

            }  
        }
             
        //this method removes a life from the scoreboard
        removeLife() {
            //selects the scoreboard div and its list of images and stores them in an array   
            const scoreboardDomNodes = [...document.querySelectorAll('#scoreboard li img')];
            
            //loops through the scoreboard array
            for (let i = 0; i < scoreboardDomNodes.length; i++) {
                console.log(scoreboardDomNodes);
                //and checks if the img is live heart
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
            //console.log(`missed ${this.missed}`)
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

            //checks if the player won: is the length of the hiddenPhraseLetters greater than 0 ?
            if(hiddenPhraseLetters.length > 0) {
                console.log(hiddenPhraseLetters);
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
            
            const overlay = document.getElementById("overlay");
            const gameOverMessageH1 = document.getElementById('game-over-message');

            //this method displays a final 'win' or 'loss' message and updates overlay screen with CSS class
            if (gameWon === true) {       
                //overlay.classList.remove('start');
                //overlay.classList.add('win');
                overlay.className = 'win';

                overlay.style.display = "block";

                gameOverMessageH1.textContent = "Congratulations, you won!";
                
                
            } else if (gameWon === false){
                //overlay.classList.remove('start');
                //overlay.classList.remove('win');
                //overlay.classList.add('lose');
                overlay.className = 'lose';

                overlay.style.display = "block";

                gameOverMessageH1.textContent = "Game over! You ran out of lives.";
            }
            console.log(gameWon);
            this.restart(); 
        }    
        
        //Restarts the game between games 
        restart() {
                //grabs the phrase div's url
                const phraseUl = document.querySelector(' #phrase ul ');
                //console.log(phraseUl);

                //removes all li elements from the phrase ul element
                while (phraseUl.firstChild) {
                    phraseUl.removeChild(phraseUl.firstChild);
                    console.log(phraseUl.firstChild);
                }
                
                //grabs all keyrow div's buttons and stores them in an array
                const keysArray = [...document.querySelectorAll('.keyrow button')]; 

                //enables each button on the beyboard & updates each button with the key class
                keysArray.forEach(button => {
                    button.removeAttribute("disabled", true);
                    button.className = 'key';
                });

                //grabs all imgs in the  scoreboard and stores them in an array
                const heartArray = [...document.querySelectorAll('#scoreboard li img')];

                //resets all the heart images 
                heartArray.forEach(heart => {
                    heart.src = 'images/liveHeart.png';
                });
        }; 

}

