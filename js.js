// JavaScript code for rock paper scissors project

function getComputerChoice() {
    randomElement = Math.floor(Math.random() * 100);
    if (randomElement <= 33) {
        randomElement = "Rock";
    } else if (randomElement >= 34 && randomElement<= 66) {
        randomElement = "Paper";
    } else if (randomElement >= 67) {
        randomElement = "Scissors";
    }

    return randomElement;
}

function getHumanChoice() {
    humanInput = prompt("Insert your move: ");
    if (!isNaN(humanInput) && humanInput.trim() !== "") {
        return ("Your move is incorrect. Please insert a move, next time.")
    } else {
        return humanInput;
    }
}

console.log(getComputerChoice());
console.log(getHumanChoice());