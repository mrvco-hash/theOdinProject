let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choices = ["rock", "paper", "scisor"];
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    let choice = prompt("Enter your choice. Rock, Paper or Scisor :").toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scisor") {
        return choice;
    } else {
        alert("Invalid choice, please retry.");
        return getHumanChoice();
    }
}

function playRound(human, computer) {

    function win(human, computer) {
        console.log(`You win. computer choice : ${computer}. Your choice : ${human}
Computer score : ${computerScore}
Human Score : ${humanScore}`)
    }
    function lose(human, computer) {
        console.log(`You lose. computer choice : ${computer}. Your choice : ${human}
Computer score : ${computerScore}
Human Score : ${humanScore}`)
    }

    if (human === computer) {
        console.log(`It's a tie. computer choice : ${computer}. Your choice : ${human}
Computer score : ${computerScore}
Human Score : ${humanScore}`);
    }
    switch (human) {
        case "rock" :
            if (computer === "paper") {
                computerScore++;
                lose(human, computer)
            } else if (computer === "scisor") {
                humanScore++;
                win(human, computer)
            }
            break;
        case "paper" :
            if (computer === "scisor") {
                computerScore++;
                lose(human, computer)
            } else if (computer === "rock") {
                humanScore++;
                win(human, computer)
            }
            break;
        case "scisor" :
            if (computer === "rock") {
                computerScore++;
                lose(human, computer)
            } else if (computer === "paper") {
                humanScore++;
                win(human, computer)
            }
            break;
    }
}

function playGame() {
    let i = 0;
    while (i < 5) {
        playRound(getHumanChoice(), getComputerChoice());
        i++
    }
    if (humanScore > computerScore) {
        console.log("Humanity win's")
    } else if (computerScore > humanScore) {
        console.log("Terminator win's")
    } else {
        console.log("It's a tie, both live in harmony")
    }
    console.log(`Final Scores: 
Human: ${humanScore}
Computer: ${computerScore}`);
}

playGame()