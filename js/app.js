/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// Global variables
let startButton = document.getElementById('btn__reset');
let keyboard = document.getElementById('qwerty');
let newGame;

// Creating phrase list, the game is designed to take a list of any number of phrases.
let phrase1 = new Phrase('dinner time');
let phrase2 = new Phrase('hot dog');
let phrase3 = new Phrase ('jump for joy');
let phrase4 = new Phrase('hot tamale');
let phrase5 = new Phrase('juggernaut');

let phraseList = [phrase1,phrase2,phrase3,phrase4,phrase5];

// adding event listeners
startButton.addEventListener('click',(e)=>{
    newGame = new Game(phraseList);
    newGame.startGame();
})

keyboard.addEventListener('click',(e)=>{
    if (e.target.className === 'key'){
        newGame.handleInteraction(e.target.innerText);
    }
})

// This event listener allows the user to use their keyboard to play the game.
// It uses a regex to ensure the key is on the displayed keyboard before beginning the handleInteraction function.
document.addEventListener('keyup',(e)=>{
    let regex = /^[a-z]$/g;
    let keyPressed = e.key;
    let keyButton = document.getElementById(keyPressed);
    if (regex.test(keyPressed) && !keyButton.classList.toString().includes('chosen')){ 
        newGame.handleInteraction(e.key);
    }
})