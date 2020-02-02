//Global variables 
    //button = Start Game
    const startGameButton = document.getElementById('btn__reset');

    //button = keyboard 
    const screenKeyboard = document.getElementById('qwerty');

    let game;

//add a click event(keyup or keydown) to button = Start Game
startGameButton.addEventListener('click', () => {
   
    //creates a new game object  
    game = new Game();
    //starts the game 
    game.startGame();
    
    
}); 

//add a click event to each of the onscreen keyboard buttons = user interaction
screenKeyboard.addEventListener('click', (e) => {
    //targe only the buttons 
    const clickedButton = e.target;
    //if a letter (not the div) was clicked 
    if(clickedButton.getAttribute('class') === 'key') {
        //call the 'handleInteraction()' method on the game object
        game.handleInteraction(clickedButton);
    }

});


//notes for future//
//Must use keydown or keyup 
//MUST use HTML and CSS 
//MUST personalize the App styles & noted in the README.md file     