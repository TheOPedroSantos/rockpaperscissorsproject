// JavaScript code for rock paper scissors project

function getComputerChoice() {
    randomElement = Math.floor(Math.random() * 100);
    return randomElement;
}

console.log(getComputerChoice());