/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

// Creating the phrase class to house individual phrases and their methods.
// These methods are responsible for checking guesses against the phrase, and changes to dispalying the phrase.
class Phrase {
    constructor(phrase){
        this.phrase = phrase;
    }
    // This method adds the phrase to the display on game start.
    addPhraseToDisplay(){
        let phraseBox = document.getElementById('phrase');
        let phraseArray = this.phrase.split('')
        let phraseHTML = '<ul>';
        // Constructing the HTML as a string, I use a forEach loop to add a new element for each letter or space.
        phraseArray.forEach((el)=>{
            if (el === ' '){
                phraseHTML += '<li class="space"> </li>';
            } else {
                phraseHTML += `<li class="hide letter ${el}">${el}</li>`;
            }
        })
        phraseHTML += '</ul>'
        // The string is then placed inside the phrase box.
        phraseBox.innerHTML = phraseHTML;
    }
    // this method checks whether the supplied letter is in the phrase.
    checkLetter(letter){
        return this.phrase.toLowerCase().includes(letter.toLowerCase());
    }
    // This method reveals all matching letters in the phrase.
    showMatchedLetter(letter){
        let matchElements = document.getElementsByClassName(letter);
        for (let i = 0;i<matchElements.length;i++){
            matchElements[i].classList.remove('hide');
            matchElements[i].classList.add('show');
        }
    }
}
