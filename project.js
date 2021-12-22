const  options = ["rock" , "paper" , "scissors"];
function computerPlay(){
    return options[Math.floor(Math.random() * options.length)];
} 
    function playRound(playerSelection, computerSelection) {
        // computerSelection = computerPlay().toLowerCase();
        let playerScore = 0;
     let computerScore = 0;
         playerSelection = playerSelection.toLowerCase();
         if (computerSelection == playerSelection) {
             alert("Tie game!");
         } else if (
             (computerSelection == "rock" && playerSelection == "scissors") ||
         (computerSelection == "scissors" && playerSelection == "paper") ||
         (computerSelection == "paper" && playerSelection == "rock")
       ) {
        let computerScore = 0;
           computerScore = ++computerScore;
           alert("You Lose! " + computerSelection + " beats " + playerSelection )
       }
       else {
        let playerScore = 0;
           playerScore = ++playerScore;
           alert("You Win! " + playerSelection + " beats " + computerSelection)
       }
     }
    if (playerScore = 3) {
        alert("You lose! The Computer won " + computerScore + ' times and you won' + playerScore + ' times.')
    } else {
        alert('You win! You won ' + playerScore + ' times and the computer won' + computerScore + ' times.')
    }

const playerSelection = prompt('Chose between Rock, Paper or Scissors');
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));