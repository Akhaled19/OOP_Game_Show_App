//Global Variables 

//Phrase class handle the creation of phrases 
class Phrase {
    constructor(phrase) {
        //initialize a 'phrase' property set to the phrase and converted to all lower case
        this.phrase = phrase.toLowerCase();
    }   

    //this method adds the letter and space placeholder to display when game starts 
    addPhraseToDisplay() {
        let phrasediv = document.getElementById('phrase').firstElementChild;
        //each letter is represented by an empty box, one li element for each letter
        for(let i = 0; i < this.phrase.length; i ++) {
            let liBoxs = document.createElement('li');
            let character = this.phrase[i];
            if(this.phrase[i] !== "") {
                //each element you create for a letter should have the following classes
                //hide,letter, & a class representing the letter itself  
                liBoxs.innerHTML = `<li class="hide letter ${character}">${character}</li>`        
                phrasediv.appendChild(liBoxs);
                
            } else {
                //Each element created for a space, should have the class of "space" 
                liBoxs.innerHTML= '<li class="space"></li>';
                phrasediv.appendChild(liBoxs);
            }

        }
    }    
    //this method checks if a letter is in the phrase
    checkLetter(letter) {  
        //
        const matchedLetter = this.phrase.includes(letter);
        if(matchedLetter !== undefined) {
            return true;
        } else {
            return false;
        } 
    }        
     //this method reveals the letter(s) on the board that matches the player's section
    showMatchedLetter(letter) {
        //select all the of the letter DOM elements that have a CSS class name that matches the selected letter
        let matchedLetter = document.getElementsByClassName('letter');
        for(let i = 0; i < matchedLetter.length; i++) {
            if(matchedLetter[i].innerHTML === letter ) {
                //and replace each selected element's hide CSS class with the show CSS class 
                matchedLetter[i].classList.remove('hide');
                matchedLetter[i].classList.add('show');
            }    

        }
        //return the function by calling the letter property 
        return letter;

    }    
}