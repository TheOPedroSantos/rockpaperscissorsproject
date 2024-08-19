// JavaScript code for rock paper scissors project


// keep track of the score
let humanScore = 0;
let computerScore = 0;

// addEventlistener for the buttons that call the playRound() with the playerSelection when btn is clicked
let btnRock = document.querySelector('.btnRock');
let btnPaper = document.querySelector('.btnPaper');
let btnScissors = document.querySelector('.btnScissors');

btnRock.addEventListener('click', () => {
    playRound("rock", getComputerChoice());
});
btnPaper.addEventListener('click', () => {
    playRound("paper", getComputerChoice());
});
btnScissors.addEventListener('click', () => {
    playRound("scissors", getComputerChoice());
});

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

// takes the user choice and returns it // commented out because now we have a button to play

// function getHumanChoice() {
//     let humanChoice = prompt("Insert your move").toLowerCase(); // convert to lowercase 

//     if (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
//         console.log("Your move is incorrect. Please insert a move, next time.");
//         return null; // Indicates an invalid choice
//     } else {
//         return humanChoice;
//     }
// }

// logic to play a single round
function playRound(humanChoice, computerChoice) {    
    // if (!humanChoice) { // if the value humanChoice is falsy/not valid, then nothing happens:
    //     return;
    // }

    // humanChoice = humanChoice.toLowerCase(); // make the humanChoice lowercase for case sensibility
    // computerChoice = computerChoice.toLowerCase();

    // const humanChoiceCapitalized = capitalizeFirstLetter(humanChoice); // the variable stores the value of the "capitalize" function
    // const computerChoiceCapitalized = capitalizeFirstLetter(computerChoice);;

    let currentScore = document.querySelector('.currentScore');
    currentScore.textContent = (`Human choice: ${humanChoice}. Computer choice: ${computerChoice}`); // returns the choices

    const para = document.createElement("p");

    if (humanChoice === computerChoice) {        
        para.textContent = "It's a tie.";
        document.body.appendChild(para);
    } else if (
        humanChoice === "rock" &&  computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper"
    ) {
        para.textContent = "You win this round.";
        humanScore++;
        document.body.appendChild(para);
    } else {
        para.textContent = "Computer win this round.";
        computerScore++;
        document.body.appendChild(para);
    }

    if (humanScore === 5 || computerScore === 5) {
        announceWinner();
        currentScore.textContent = "";
    }
}

// Function not necessary
// function capitalizeFirstLetter(string) {
//     if (!string) {
//         return string;
//     } else {
//     return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
//     }
// }

// logic to play the whole game
// function playGame() {
//     // commented out because there's no more a 5 round play
// //    for (let round = 0; round < 5; round++) {
//     // const humanSelection = getHumanChoice();
//     // const computerSelection = getComputerChoice();
// //     playRound(humanSelection, computerSelection);
// //    } 

//     const computerSelection = getComputerChoice();
//     playRound(humanChoice, computerSelection);

//    console.log(`FINAL SCORE: Human - ${humanScore}, Computer - ${computerScore}`);
//    if (humanScore > computerScore) {
//     console.log("Congrats, you win!");
//    } else if (humanScore === computerScore) {
//     console.log("It's a tie! Play again.");
//    } else {
//     console.log("Too bad. Computer win!");
//    }
// }

function announceWinner() {
    let finalResult = document.querySelector('.finalResult');
    if (humanScore === 5) {
        finalResult.textContent = "You are the winner!";
    } else {
        finalResult.textContent = "You lost. Computer wins!";
    }
    humanScore = 0;
    computerScore = 0;
};