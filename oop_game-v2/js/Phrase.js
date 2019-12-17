//Global Variables 

//Phrase class 
class Phrase {
    //add a constructor, and pass in 'phrase' parameter
    constructor(phrase) {
        //initialize a 'phrase' property set to the phrase and converted to all lower case
        this.phrase = phrase.toLowerCase();
    }    
    //add a method and call it 'addPhraseToDisplay()'
    addPhraseToDisplay() {
        //this method adds the letter placeholder to display when game starts
       let phrasediv = document.getElementById('phrase').firstElementChild;
       let liBoxs = document.createElement('li');
       phrasediv.appendChild(liBoxs);
        //each letter is represented by an empty box, one li element for each letter
        for(let i = 0; i < Game.phrase.length; i ++) {
            if(this.phrase[i] !== "") {
                liBoxs.classList.add('hide letter');
            } else {
                liBoxs.classList.remove('hide letter');
                liBoxs.classList.add('space');
            }

        }
    }    
    //add a second method and call it 'checkLetter()' 
    checkLetter() {
        key = document.getElementsByClassName('key');
        let i = key;
        //this method checks if a letter is in the phrase
        if(this.phrase.includes(i)) {
            return true;
        } else {
            return false;
        }
    }        
    // add a third method and call it 'showMatchedLetter()'
    showMatchedLetter(letter) {
        //this method reveals the letter(s) on the board that matches the player's section
        //select all the of the letter DOM elements that have a CSS class name that matches the selected letter
        matchedLetter = document.getElementsByClassName('letter');
        for(let i = 0; i < matchedLetter.length; i++) {
            if(matchedLetter[i].innerHTML === key ) {
                //and replace each selected element's hide CSS class with the show CSS class 
                matchedLetter[i].classList.remove('hide letter');
                matchedLetter[i].classList.add('show');
            }    

        }
        //return the function by calling the letter property 
        return letter;

    }    
}