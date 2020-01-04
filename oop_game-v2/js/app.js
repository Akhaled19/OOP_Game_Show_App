//Global variables 
    //button = Start Game
    const startGameButton = document.getElementById('btn__reset');
    //button = keyboard 
    const screenKeyboard = document.getElementById('qwerty');
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
    const clickedButton = e.target;
    //if a letter (not the div) was clicked log the button/letter 
    if(clickedButton.getAttribute('class') === 'key') {
        //call the 'handleInteraction()' method on the game object
        game.handleInteraction(clickedButton);
    }

});


//if game is completed 
    //gameboard is reset
    //clicking the 'start game' button loads a new game
    
 
//notes//
//MUST use HTML and CSS 
//MUST personalize the App styles & noted in the README.md file     