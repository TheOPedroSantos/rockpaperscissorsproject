// JavaScript code for rock paper scissors project


// keep track of the score
let humanScore = 0;
let computerScore = 0;

// addEventlistener for the buttons that call the playRound() with the playerSelection when btn is clicked
let btnRock = document.querySelector('.btnRock');
let btnPaper = document.querySelector('.btnPaper');
let btnScissors = document.querySelector('.btnScissors');



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
    // let humanChoice = prompt("Insert your move").toLowerCase(); // convert to lowercase // commented out because now we have a button to play

    let humanChoice = ;

    if (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
        console.log("Your move is incorrect. Please insert a move, next time.");
        return null; // Indicates an invalid choice
    } else {
        return humanChoice;
    }
}

// logic to play a single round
function playRound(humanChoice, computerChoice) {    
    if (!humanChoice) { // if the value humanChoice is falsy/not valid, then nothing happens:
        return;
    }

    humanChoice = humanChoice.toLowerCase(); // make the humanChoice lowercase for case sensibility
    computerChoice = computerChoice.toLowerCase();

    const humanChoiceCapitalized = capitalizeFirstLetter(humanChoice); // the variable stores the value of the "capitalize" function
    const computerChoiceCapitalized = capitalizeFirstLetter(computerChoice);

    console.log(`Human choice: ${humanChoiceCapitalized}, Computer choice: ${computerChoiceCapitalized}`); // returns the choices

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

function capitalizeFirstLetter(string) {
    if (!string) {
        return string;
    } else {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
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