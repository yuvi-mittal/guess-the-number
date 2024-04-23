const randomnumber= parseInt(Math.random()*100 +1);
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const loworhi = document.querySelector('.lowOrHi');
const remaining = document.querySelector('.lastResult');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;
let playGame = true ;

if(playGame ){
    submit.addEventListener('click', 
    function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert(`please enter valid number`)
    } else if(guess<1){
        alert(`please enter valid number`)
    }else if(guess> 100){
        alert(`please enter valid number`)
    }else {
        prevGuess.push(guess)
        if (numGuess === 11){
            displayGuess(guess);
            displayMessage(`game over , random number was ${randomnumber}`)
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
// value number hai and limit mai hai 
}

function checkGuess(guess){
    if (guess === randomnumber) {
        displayMessage(`right display`);
        endGame();
        
    } else if( guess < randomnumber){
        displayMessage(`guess is less`);
    } else if (guess > randomnumber){
        displayMessage(`guess is high`);
    }
// message li validation mai kya aya
}

function displayGuess(message){
    userInput.value = '';
    guessSlot.innerHTML += `${message}`;
    numGuess++;
    remaining.innerHTML = `${11- numGuess}`;
    // clean karega 
}


function displayMessage(message){
loworhi.innerHTML = `<h2>${message}</h2>`;
  // print message 
}
function endGame(){
 userInput.value = '';
 userInput.setAttribute('disabled' , '');
 p.classList.add('button');
 p.innerHTML = `<h2 id ="newGame" > start new game</h2>`;
 startOver.appendChild(p);
 playGame= false;
 newGame();
 
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
      randomNumber = parseInt(Math.random() * 100 + 1);
      prevGuess = [];
      numGuess = 1;
      guessSlot.innerHTML = '';
      remaining.innerHTML = `${11 - numGuess} `;
      userInput.removeAttribute('disabled');
      startOver.removeChild(p);
  
      playGame = true;
    });
}

