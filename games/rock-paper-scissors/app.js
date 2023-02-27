const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id
    userChoiceDisplay.style.color = "rgb(220, 20, 60)"
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}));

function generateComputerChoice() {
    const randomNumber = Math.floor((Math.random() * possibleChoices.length) + 1)

    switch (randomNumber) {
        case 1:
            computerChoice = "rock"
            break
        case 2:
            computerChoice = "scissors"
            break
        case 3:
            computerChoice = "paper"
            break
    }

    computerChoiceDisplay.style.color = "rgb(220, 20, 60)"

    computerChoiceDisplay.innerHTML = computerChoice
};

function getResult() {
    if (computerChoice === userChoice) {
        result = "It's a Draw!"
    }
    if (computerChoice === "rock" && userChoice === "paper") {
        result = "You won!"
    }
    if (computerChoice === "rock" && userChoice === "scissors") {
        result = "You lost!"
    }
    if (computerChoice === "paper" && userChoice === "rock") {
        result = "You lost!"
    }
    if (computerChoice === "paper" && userChoice === "scissors") {
        result = "You won!"
    }
    if (computerChoice === "scissors" && userChoice === "paper") {
        result = "You lost!"
    }
    if (computerChoice === "scissors" && userChoice === "rock") {
        result = "You won!"
    }

    resultDisplay.style.background = "rgb(220, 20, 60)"
    resultDisplay.style.color = "rgb(225, 225, 225)"
    resultDisplay.style.padding = "4px 8px"
    resultDisplay.style.borderRadius = "8px"

    resultDisplay.innerHTML = result

};