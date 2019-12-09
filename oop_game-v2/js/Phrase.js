//Global Variables 

//Phrase class 
class Phrase {
    //add a constructor, and pass in 'phrase' parameter
    constructor(phrase) {
        //initialize a 'phrase' property set to the phrase 
        this.phrase = phrase;
    }    
    //add a method and call it 'addPhraseToDisplay()'
    addPhraseToDisplay() {
        //this method adds the phrase to the gameboard
        let gameboard = this.phrase;
    }    
    //add a second method and call it 'checkLetter()' 
    checkLetter() {
        key = document.getElementsByClassName('key');
        let i = key;
        //this method checks if a letter is in the phrase
        if(this.phrase.includes(i)) {
            //do something
        }
    }        
    // add a third method and call it 'showMatchedLetter()'
    showMatchedLetter() {
        //this method reveals the letter(s) on the board that matches the player's section

    }    
}