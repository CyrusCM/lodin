let aiScore = 0
let playerScore = 0
let roundWon = ""
let playerChoice;
let aiChoice = 'rock';
let roundTie = "Its a draw stand down"
// buttons for selectors
let rockBtn = document.querySelector('.button-rock')
let paperBtn = document.querySelector('.button-paper')
let scissorsBtn = document.querySelector('.button-scissor');

rockBtn.addEventListener('click', () => playRound('rock', aiChoice))
paperBtn.addEventListener('click', () => playRound('paper', aiChoice))
scissorsBtn.addEventListener('click', () => playRound('scissors', aiChoice))



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
        (aiChoice === 'rock' && aiChoice === 'scissors') ||
        (aiChoice === 'scissors' && aiChoice === 'paper')
    ) {
        roundWon = 'ai';
        aiScore++
    }
    console.log(roundWon)
}

