// JavaScript code for rock paper scissors project


// keep track of the score
let humanScore = 0;
let computerScore = 0;

// randomly returns rock, paper or scissors
function getComputerChoice() {
    const randomValue = Math.floor(Math.random() * 3);
    if (randomValue === 0) {
        return "rock";
    } else if (randomValue === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// takes the user choice and returns it
function getHumanChoice() {
    let humanChoice = prompt("Insert your move").toLowerCase(); // convert to lowercase
    if (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
        console.log("Your move is incorrect. Please insert a move, next time.");
        return null; // Indicates an invalid choice
        // resetGame(); this function is missing for now
    } else {
        return humanChoice;
    }
}

// logic to play a single round
function playRound(humanChoice, computerChoice) {
    if (!humanChoice) { // if the value humanChoice is falsy, then:
        console.log("No valid move.");
        return;
    }

    humanChoice = humanChoice.toLowerCase(); // make the humanChoice lowercase for case sensibility
    console.log('Human choice: ${humanChoice}, Computer choice: ${computerChoice}'); // returns the choices

    if (humanChoice === humanChoice) {        
            console.log("It's a tie! Play again.");
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