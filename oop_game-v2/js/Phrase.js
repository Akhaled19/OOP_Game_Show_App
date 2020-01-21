

//Phrase class handle the creation of phrases 
class Phrase {
    constructor(phrase) {
        //initialize a 'phrase' property set to the phrase and converted to all lower case
        this.phrase = phrase.toLowerCase();

        this.LettersInPhrase = this.phrase.split("");
    }   

    //this method adds the letter and space placeholder to display when game starts 
    addPhraseToDisplay() {
        let phraseUl = document.getElementById('phrase').firstElementChild;
        //each letter is represented by an empty box, one li element for each letter
        for(let i = 0; i < this.LettersInPhrase.length; i++) {
            let liBox = document.createElement('li');
            let character = this.LettersInPhrase[i];
            if(this.LettersInPhrase[i] !== " ") {
                //each element you create for a letter should have the following classes
                //hide,letter, & a class representing the letter itself  
                liBox.className = `hide letter ${character}`;  
                liBox.innerText = character;      
                
            } else if(this.LettersInPhrase[i] === " ") {
                //Each element created for a space, should have the class of "space" 
                liBox.className= ('space');
                
            }
            phraseUl.appendChild(liBox);

        }
        
    }    
    //this method checks if a letter is in the phrase
    checkLetter(letter) {  
        //returns true if letter is included in phrase, returns false if not included
    
        return this.LettersInPhrase.includes(console.log(letter));    
        
    }  

     //this method reveals the letter(s) on the board that matches the player's section
    showMatchedLetter(clickedLetter) {
        
        LettersInPhrase.forEach(letter, index => {
            if(clickedLetter === letter)
            this.LettersInPhrase[index].className = 'show';
            
        });
        //(let i = 0; i < listOfLi.length; i++) {
        //    let eachLetterLi = [...listOfLi].textContent;

        //    if(eachLetterLi === letter ) {
                //and replace each selected element's hide CSS class with the show CSS class 
        //        listOfLi[i].className = 'show';
        //    }    

    //    }
        //return the function by calling the matchedLetter 
        //return listOfLi;

    }    
}