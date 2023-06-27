let aiScore = 0
let playerScore = 0
let roundWon = ""
let playerChoice;
let roundTie = "Its a draw stand down"
//let start = parseInt(promt("Choose your weapon"));

// buttons for selectors
let rockBtn = document.querySelector('.button-rock')
let paperBtn = document.querySelector('.button-paper')
let scissorsBtn = document.querySelector('.button-scissors');

rock.addEventListener('click', () => playRound('rock', compChoice()))
paper.addEventListener('click', () => playRound('paper', compChoice()))
scissors.addEventListener('click', () => playRound('scissors', compChoice()))



function playRound(playerChoice, aiChoice) {
    console.log(playerChoice, aiChoice)
    if (playerChoice === aiChoice) {
        roundTie = "Its a draw stand down."
        console.log(roundTie)
        return;
    }

    // player choices
    if (
        (playerChoice === 'paper' && aiChoice === 'rock') ||
        (playerChoice === 'rock' && aiChoice === 'scissors') ||
        (playerChoice === 'scissors' && aiChoice === 'paper')
    ) {
        roundWon = 'player';
        playerScore++
    }
    // ai choices
    if (
        (aiChoice === 'paper' && playerChoice === 'rock') ||
        (aiChoice === 'rock' && playerChoice === 'scissors') ||
        (aiChoice === 'scissors' && playerChoice === 'paper')
    ) {
        roundWon = 'ai';
        aiScore++
    }
    console.log(roundWon)
}


function compChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    console.log(randomNum)
    // return aiChoice['rock', 'paper', 'scissors']
    if (randomNum === 0) {
        return 'rock';
    }
    if (randomNum === 1) {
        return 'paper';
    }
    if (randomNum === 2) {
        return 'scissors';
    }

}


compChoice()