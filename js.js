// JavaScript code for rock paper scissors project


// keep track of the score
let humanScore = 0;
let computerScore = 0;

// randomly returns rock, paper or scissors
function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 100);
    if (computerChoice <= 33) {
        computerChoice = "Rock".toUpperCase();
    } else if (computerChoice >= 34 && computerChoice<= 66) {
        computerChoice = "Paper".toUpperCase();
    } else if (computerChoice >= 67) {
        computerChoice = "Scissors".toUpperCase();
    }
    return computerChoice;
}

// takes the user choice and returns it
function getHumanChoice() {
    humanChoice = prompt("Insert your move: ");
    if (!isNaN(humanChoice) && humanChoice.trim() !== "") {
        return ("Your move is incorrect. Please insert a move, next time.")
        // resetGame(); this function is missing for now
    } else {
        return humanChoice;
    }
}

// logic to play a single round
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toUpperCase(); // make the humanChoice uppercase for case sensibility
    if (humanChoice === "paper" || humanChoice === "rock" || humanChoice === "scissors") {
        if (computerChoice === humanChoice) {
            console.log("It's a tie! Play again.");
        }
    } else if (
        humanChoice === "rock" &&  computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper"
        ) {
        console.log("You win!");
        humanScore++;
    } else {
        console.log("Computer wins!");
        computerScore++;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);


function playGame() {

}


console.log(getComputerChoice());
console.log(getHumanChoice());
console.log(humanScore, computerScore);