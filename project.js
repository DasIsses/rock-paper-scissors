let options = ["rock" , "paper" , "scissors"];
let computerPlay = options[Math.floor(Math.random() * options.length)];

let playerSelection = prompt("Please select between rock, paper and scissors:");
let computerSelection = computerPlay();
let determineWinner(){ 
    let result;
if (playerSelection('rock') && computerSelection('scissors')
playerSelection('paper') && computerSelection('rock')
playerSelection('scissors') && computerSelection('paper')) {
   result = 'Congratulations, You won!'
} else if (playerSelection('rock') && computerSelection('rock')
playerSelection('scissors') && computerSelection('scissors')
playerSelection('paper') && computerSelection('paper'){
    result = 'It\'s a draw!'
}
else{
    result = ''
}

function playRound(playerSelection, somputerSelection) {
}
console.log(playerSelection);