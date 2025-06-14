let randomNumber = Math.floor(Math.random()*100+1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        validateGuess(guess);
    })
}
function validateGuess(guess){
   
    if(isNaN(guess)){
        alert("please Enter A valid Number: ")
    }
    else if(guess<1 || guess >100){
        alert("please Enter A valid Number: ")
    }
    else{
        // displayGuess(guess);
        // checkGuess(guess);
        prevGuess.push(guess);
        if(numGuess==10){
            if(guess === randomNumber){
                displayMessage(`Congrats! You guessed it right`);
                endGame()
            }
            else{
            displayGuess(guess);
            displayMessage(`Game Over Random Number was ${randomNumber}`)
            endGame();
            }
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`Congrats! You guessed it right`);
        endGame()
    }
    else if(guess < randomNumber){
        displayMessage(`Number is Too Low`)
    }
    else{
        displayMessage(`Number is Too High`)
    }
}

function displayMessage(message){
    lowOrHi.innerHTML = message==="Congrats! You guessed it right" ? `<button>${message}</button>` : `<h2>${message}</h2>`
}

function displayGuess(guess){
   
    userInput.value = '';
    guessSlot.innerHTML += `${guess},`;
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`
}
function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id='newGame'>Start New Game</h2>`
    startOver.appendChild(p);
    playGame = false;
    newGame()

}
function newGame(){
    const btn = document.querySelector('#newGame')
    btn.addEventListener('click',function(){
        randomNumber =  Math.floor(Math.random()*100+1)
        prevGuess = []
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11-numGuess},`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p)
        playGame = true;
    })

}
