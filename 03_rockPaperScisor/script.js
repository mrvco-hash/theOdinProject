let humanScore = 0;
let computerScore = 0;
let divResults = document.querySelector('.results')


function getComputerChoice() {
    const possibleChoices = ["rock", "paper", "scisor"];
    return (possibleChoices[Math.floor(Math.random() * possibleChoices.length)]);
} 

function getHumanChoice() {
    let humanChoice;
    while (true) {
        humanChoice = prompt("Make your choice : rock paper or scisor.").toLowerCase();
        if ((humanChoice == "rock") || (humanChoice == "paper") || (humanChoice == "scisor")) {
            break;
        }
    }
    console.log(humanChoice);
    return humanChoice;
}

function playRound(computerChoice, humanChoice) {

    function win(computer, human) {
        humanScore++
        divResults.innerHTML =
        `<p> You win, the ${human} beats the ${computer} </p>
        <p> Human score : ${humanScore} </p>
        <p> Computer score : ${computerScore} </p>`;
    }
    function lose(computer, human) {
        computerScore++
        divResults.innerHTML = 
        `<p> You lose, the ${computer} beats the ${human} </p>
        <p> Human score : ${humanScore} </p>
        <p> Computer score : ${computerScore} </p>`
    }

    if (humanChoice === computerChoice) {
        divResults.innerHTML = 
        `<p> it's a tie !. Your choice : ${humanChoice}. Computer choice : ${computerChoice}. </p>
        <p> Human score : ${humanScore} </p>
        <p> Computer score : ${computerScore} </p>`
    }

    switch (humanChoice) {
        case "rock" :
            if (computerChoice == "paper") {
                return lose(computerChoice, humanChoice)
            } else if (computerChoice == "scisor") {
                return win(computerChoice, humanChoice)
            }
            break;
        case "paper" :
            if (computerChoice == "rock") {
                return win(computerChoice, humanChoice)
            } else if (computerChoice == "scisor") {
                return lose(computerChoice, humanChoice)
            }
            break;
        case "scisor" :
            if (computerChoice == "paper") {
                return win(computerChoice, humanChoice)
            } else if (computerChoice == "rock") {
                return lose(computerChoice, humanChoice)
            }
            break;
    }
}

let rockButton = document.querySelector('#rock');
let paperButton = document.querySelector('#paper');
let scisorButton = document.querySelector('#scisor');

rockButton.addEventListener('click', () => {
    let playerSelection = 'rock';
    playRound(getComputerChoice(), playerSelection);
    function defineWinner(computer, human) {
    if (computer == 5) {
        divResults.innerHTML = `<p>Computer Win </p>`
    } else if (human == 5) {
        divResults.innerHTML = `<p>human Win </p>`
    }
}
    defineWinner(computerScore, humanScore)
})

paperButton.addEventListener('click', () => {
    let playerSelection = 'paper';
    playRound(getComputerChoice(), playerSelection);
    function defineWinner(computer, human) {
    if (computer == 5) {
        divResults.innerHTML = `<p>Computer Win </p>`
    } else if (human == 5) {
        divResults.innerHTML = `<p>human Win </p>`
    }
}
    defineWinner(computerScore, humanScore)
})

scisorButton.addEventListener('click', () => {
    let playerSelection = 'scisor';
    playRound(getComputerChoice(), playerSelection);
    function defineWinner(computer, human) {
    if (computer == 5) {
        divResults.innerHTML = `<p>Computer Win </p>`
    } else if (human == 5) {
        divResults.innerHTML = `<p>human Win </p>`
    }
}
    defineWinner(computerScore, humanScore)
})

// function playGame() {
//     i = 0
//     while (i < 5) {
//         playRound(getComputerChoice(), getHumanChoice())
//         i++
//     }
// }

// playGame()