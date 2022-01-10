let playerScore = 0;
let computerScore = 0;
function keepScore() {
    if (playerScore < computerScore) {
        return ('You lost the battle!')
    } else {
        return ('You won the war! The fianal Score is ' + playerScore + ' : ' + computerScore + '!')
    }
}
const  options = ["rock" , "paper" , "scissors"];
function computerPlay(){
    return options[~~(Math.random() * options.length)];
}
function playRound(playerSelection) {
    let computerSelection = computerPlay();
        if (playerSelection == computerSelection) {
            return  'It\s a draw!';
        }
        else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')
        ) {
            playerScore++;
            return 'You win ' + playerSelection + ' beats ' + computerSelection + '!';
        }
        else {
            computerScore++;
            return 'You lose ' + computerSelection + ' beats ' + playerSelection + '!';
        }
}
console.log(game());
function game() {
    for(let i = 1; i <= 5; i ++) {
        let playerPrompt = prompt('Make your choice.'); 
        let playerSelection = playerPrompt.toLowerCase(); 
        console.log(playRound(playerSelection));
        console.log(`The score is ${playerScore} : ${computerScore} .`);
    }
}
console.log(keepScore());