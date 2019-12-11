//Global variables 
    //button = Start Game
    const startGameButton = document.getElementById('btn__reset');

//add a click event(keyup or keydown) to button = Start Game
startGameButton.addEventListener('keyup', event => {
//w/keyup or keydown = pressing a physical keyboard button results in the 'handleInteraction()' method being called for the associated onscreen keyboard button
   console.log(startGameButton);
    const target = event.target; 
    if(target.isComposing || target.keyCode === 229 ) {
        console.log(startGameButton);
        //creates a new game object  
        //starts the game 
    }
});


//disable event listen on anywhere besides onscreen keyboard buttons
    //clicking the spaces between and around the onscreen keyboard buttons does not result in the handleInteraction() method being called 

//if game is completed 
    //gameboard is reset
    //clicking the 'start game' button loads a new game
    
 
//notes//
//MUST use HTML and CSS 
//MUST personalize the App styles & noted in the README.md file     