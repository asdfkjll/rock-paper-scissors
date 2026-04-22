console.log("hello world")

let humanScore = 0
let computerScore = 0
const rounds = 5

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3)

    if (random === 0) {
	return 1 
    } else if (random === 1) {
	return 2
    } else {
	return 3 
    }
}

function getHumanChoice() {
    const choice = prompt("Type your choose: rock, paper, or scissors").toLowerCase()

    if (choice === "rock") {
	return 1
    } else if (choice === "paper") {
	return 2
    } else if (choice === "scissors") {
	return 3
    } else {
	alert("invalid input")
	return getHumanChoice()
    }
}

function playRound(humanChoice, computerChoice) {
    const exception = (((humanChoice === 1) && 
	(computerChoice === 3)) || 
	((humanChoice === 3) && 
	(computerChoice === 1)))
    const result = exception ? 
	(humanChoice - computerChoice)*(-1) : 
	(humanChoice - computerChoice)

    if (result > 0) {
	humanScore += 1
	return "player"
    } else if (result < 0) {
	computerScore += 1
	return "computer"
    } else {
	return "tie"
    }
}

function playGame() {
    let options = {
	1: "✊",
	2: "✋",
	3: "✌️",
    }
    let humanSelection = null;
    let computerSelection = null;

    for (let i = 1; i <= rounds; i++) {
	humanSelection = getHumanChoice();
	computerSelection = getComputerChoice();
	winner = playRound(humanSelection, computerSelection);

	console.log(`Player's choice: ${options[humanSelection]}, CPU's choice: ${options[computerSelection]}, Winner: ${winner}, Round: ${i}`)
    }

    console.log(`Player's final score: ${humanScore}, CPU's final score: ${computerScore}`)
}

playGame()
