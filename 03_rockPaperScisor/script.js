let humanScore = 0;
let computerScore = 0;
let divResults = document.querySelector('.results');
let gameOver = false;

const getComputerChoice = function () {
    const possibleChoices = ["rock", "paper", "scisor"];
    return (possibleChoices[Math.floor(Math.random() * possibleChoices.length)]);
}

const playRound = function (computerChoice, humanChoice) {

    function win(computer, human) {
        humanScore++;
        divResults.innerHTML =
        `<p> You win, the ${human} beats the ${computer} </p>
        <p> Human score : ${humanScore} </p>
        <p> Computer score : ${computerScore} </p>`;
    }

    function lose(computer, human) {
        computerScore++;
        divResults.innerHTML = 
        `<p> You lose, the ${computer} beats the ${human} </p>
        <p> Human score : ${humanScore} </p>
        <p> Computer score : ${computerScore} </p>`;
    }

    if (humanChoice === computerChoice) {
        divResults.innerHTML = 
        `<p> It's a tie! Your choice : ${humanChoice}. Computer choice : ${computerChoice}. </p>
        <p> Human score : ${humanScore} </p>
        <p> Computer score : ${computerScore} </p>`;
    }

    switch (humanChoice) {
        case "rock":
            if (computerChoice == "paper") {
                return lose(computerChoice, humanChoice);
            } else if (computerChoice == "scisor") {
                return win(computerChoice, humanChoice);
            }
            break;
        case "paper":
            if (computerChoice == "rock") {
                return win(computerChoice, humanChoice);
            } else if (computerChoice == "scisor") {
                return lose(computerChoice, humanChoice);
            }
            break;
        case "scisor":
            if (computerChoice == "paper") {
                return win(computerChoice, humanChoice);
            } else if (computerChoice == "rock") {
                return lose(computerChoice, humanChoice);
            }
            break;
    }
}

const defineWinner = (computer, human) => {
    if (computer >= 5) {
        divResults.innerHTML = `<p>Computer Wins!</p>`;
        gameOver = true;
    } 
    if (human >= 5) {
        divResults.innerHTML = `<p>Human Wins!</p>`;
        gameOver = true;
    }
    
    if (gameOver) {
        rockButton.removeEventListener('click', chooseRock);
        paperButton.removeEventListener('click', choosePaper);
        scisorButton.removeEventListener('click', chooseScisor);
    }
}

let rockButton = document.querySelector('#rock');
let paperButton = document.querySelector('#paper');
let scisorButton = document.querySelector('#scisor');

const chooseRock = () => {
    if (!gameOver) {
        playRound(getComputerChoice(), 'rock');
        defineWinner(computerScore, humanScore);
    }
}

const choosePaper = () => {
    if (!gameOver) {
        playRound(getComputerChoice(), 'paper');
        defineWinner(computerScore, humanScore);
    }
}

const chooseScisor = () => {
    if (!gameOver) {
        playRound(getComputerChoice(), 'scisor');
        defineWinner(computerScore, humanScore);
    }
}

rockButton.addEventListener('click', chooseRock);
paperButton.addEventListener('click', choosePaper);
scisorButton.addEventListener('click', chooseScisor);
