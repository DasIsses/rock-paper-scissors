
let playerScore = 0;
let computerScore = 0;
const  options = ["rock" , "paper" , "scissors"];
function computerPlay(){
    return options[~~(Math.random() * options.length)];
}
const computerSelection = computerPlay();
for (let i = 1; i <=5; i++) {
    console.log(playRound()); 
}
    function playRound(computerSelection) {
       let playerSelection = prompt('Make your choice');  
        playerSelection = playerSelection.toLowerCase();
        if (playerSelection != "rock", "paper", "scissors") {
            prompt('Your choice is invalid, pick between Rock, Paper or Scissors')
        }
        else {
          playRound();  
        } 
        if (playerSelection == computerSelection) {
            computerSelection;
            return  'It\s a draw!';
        }
        else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')
        ) {
            playerScore = playerScore++; 
            computerSelection;
            return 'You win ' + playerSelection + ' beats ' + computerSelection + '!';
        }
        else {
            computerSelection;
            computerScore = computerScore++;
            return 'You lose ' + computerSelection + ' beats ' + playerSelection + '!';
        }
    }