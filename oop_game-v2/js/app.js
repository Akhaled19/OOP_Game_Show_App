//Global variables 
    //button = Start Game
    const startGameButton = document.getElementById('btn__reset');
    //button = keyboard 
    const screenKeyboard = document.getElementsByClassName('keyrow', 'key');
    let game;
//add a click event(keyup or keydown) to button = Start Game
startGameButton.addEventListener('click', () => {
//w/keyup or keydown = pressing a physical keyboard button results in the 'handleInteraction()' method being called for the associated onscreen keyboard button
    //creates a new game object  
    game = new Game();
     //starts the game 
    game.startGame();
}); 

//add a click event to each of the onscreen keyboard buttons = user interaction
screenKeyboard.addEventListener('click', (e) => {
    //targe only the buttons 
    let button = e.target;
    //call the 'handleInteraction()' method on the game object
    game.handleInteraction(button);

});


//disable event listen on anywhere besides onscreen keyboard buttons
    //clicking the spaces between and around the onscreen keyboard buttons does not result in the handleInteraction() method being called 

//if game is completed 
    //gameboard is reset
    //clicking the 'start game' button loads a new game
    
 
//notes//
//MUST use HTML and CSS 
//MUST personalize the App styles & noted in the README.md file     