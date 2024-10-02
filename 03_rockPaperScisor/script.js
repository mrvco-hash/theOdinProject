let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const possibleChoices = ["rock", "paper", "scissor"];
    return (possibleChoices[Math.floor(Math.random() * possibleChoices.length)]);
} 

function getHumanChoice() {
    let humanChoice;
    while (true) {
        humanChoice = prompt("Make your choice : rock paper or scissor.").toLowerCase();
        if ((humanChoice == "rock") || (humanChoice == "paper") || (humanChoice == "scissor")) {
            break;
        }
    }
    console.log(humanChoice);
    return humanChoice;
}

function playRound(computerChoice, humanChoice) {

    function win(a, b) {
        humanScore++
        console.log("You win, the " + b + " beats the " + a);
        console.log("Human score : ", humanScore);
        console.log("Computer score : ", computerScore);
    }
    function lose(a, b) {
        computerScore++
        console.log("You lose, the " + a + " beats the " + b);
        console.log("Human score : ", humanScore);
        console.log("Computer score : ", computerScore);
    }

    if (humanChoice === computerChoice) {
        console.log("it's a tie !");
        console.log("Human score : ", humanScore);
        console.log("Computer score : ", computerScore);
    }

    switch (humanChoice) {
        case "rock" :
            if (computerChoice == "paper") {
                return lose(computerChoice, humanChoice)
            } else if (computerChoice == "scissor") {
                return win(computerChoice, humanChoice)
            }
            break;
        case "paper" :
            if (computerChoice == "rock") {
                return win(computerChoice, humanChoice)
            } else if (computerChoice == "scissor") {
                return lose(computerChoice, humanChoice)
            }
            break;
        case "scissor" :
            if (computerChoice == "paper") {
                return win(computerChoice, humanChoice)
            } else if (computerChoice == "rock") {
                return lose(computerChoice, humanChoice)
            }
            break;
    }
}

function playGame() {
    i = 0
    while (i < 5) {
        playRound(getComputerChoice(), getHumanChoice())
        i++
    }
}

playGame()