// JavaScript code for rock paper scissors project


// keep track of the score
let humanScore = 0;
let computerScore = 0;

// randomly returns rock, paper or scissors
function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
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
    console.log(`Human choice: ${humanChoice}, Computer choice: ${computerChoice}`); // returns the choices

    if (humanChoice === computerChoice) {        
            console.log("It's a tie!");
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

// logic to play the whole game
function playGame() {
   for (let round = 0; round < 5; round++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
   }

   console.log(`FINAL SCORE: Human - ${humanScore}, Computer - ${computerScore}`);
   if (humanScore > computerScore) {
    console.log("Congrats, you win!");
   } else if (humanScore === computerScore) {
    console.log("It's a tie! Play again.");
   } else {
    console.log("Too bad. Computer win!");
   }
}

playGame();