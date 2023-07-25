/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor(phrases) {
        this.missed = 0;
        this.phrases = phrases;
        this.activePhrase = null;
    }
    // Use the Math.random method to generate a random number and modify it using the # of phrases to generate a selection
    getRandomPhrase(){
        return this.phrases[Math.floor(Math.random()*this.phrases.length)];
    }
    // this function both initializes the game by hiding the overlay and clearing any keys that were disabled.
    startGame(){
        let overlay = document.getElementById('overlay');
        let keys = document.getElementsByClassName('key');
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();

        // This loop clears the keys of any additional classes and enables all of them.
        for (let i = 0; i<keys.length;i++){
            keys[i].className = 'key';
            keys[i].disabled = false;
        }
    }

    // this method removes a life on each call and, if there are no remaining, invokes gameOver
    removeLife(){
        let remainingLives = document.getElementsByClassName('tries');
        this.misses++;
        remainingLives[0].remove();
        let numberLives = remainingLives.length;
            if (this.misses >= 5){
                this.gameOver(false);
            }
    }

    // This method handles letter inputs from either keyboard or clicking on a letter.
    // If a letter is correct, this Method also invokes checkForWin to see if the player won.
    handleInteraction(letter){
        let button = document.getElementById(letter);
        button.classList.add('chosen');
        if (this.activePhrase.checkLetter(letter)){
            this.activePhrase.showMatchedLetter(letter);
            if (this.checkForWin()){
                this.gameOver(true)
            }
        } else {
            this.removeLife();
            button.classList.add('wrong');
        }
    }

    // This method iterates through all the of the phrase letters and checks if they've all been shown OR are just spaces.
    // If all are shown or are spaces then it returns true, else it returns false.
    checkForWin(){
        let allLetters = document.getElementById('phrase').children[0].children;
        let isWin = true;
        for (let i = 0;i<allLetters.length;i++){
            console.log(allLetters[i])
            if (!allLetters[i].classList.toString().includes('show')){
                if(!allLetters[i].classList.toString().includes('space')){
                    isWin = false;   
                }
            }
        }
        return isWin;
    }

    // this method takes a boolean as a paramater which determines if the player won or lost
    // It cleans up the display by resetting the html of the scorboard and emptying the phrase list element
    // Lastly, based on the input boolean, it displays a win or lose screen and enables the overlay.
    gameOver(winBool){
        let overlay = document.getElementById('overlay');
        let header = document.getElementById('game-over-message');
        let phraseElements = document.getElementById('phrase').children[0];
        let remainingLives = document.getElementById('scoreboard').children[0];

        remainingLives.innerHTML = `
            <li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>
            <li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>
            <li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>
            <li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>
            <li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>`
        
        phraseElements.innerHTML='';
        if (winBool){
            overlay.className = 'win';
            header.innerText = 'Congratulations! You Won!';
        } else {
            overlay.className = 'lose'
            header.innerText = 'Oh no! You lost!';
        }
        overlay.style.display = '';
    }
}