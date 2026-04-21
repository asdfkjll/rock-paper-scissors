console.log("hello world")

let humanScore = 0
let computerScore = 0
let rounds = 5

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
    let choice = prompt("Type your choose: rock, paper, or scissors").toLowerCase()

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
    let exception = (((humanChoice === 1) && (computerChoice === 3)) || ((humanChoice === 3) && (computerChoice === 1)))
    let result = exception ? (humanChoice - computerChoice)*(-1) : (humanChoice - computerChoice)

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
    let humanSelection = " ";
    let computerSelection = " ";

    for (let i = 1; i <= rounds; i++) {
	humanSelection = getHumanChoice();
	computerSelection = getComputerChoice();
	winner = playRound(humanSelection, computerSelection);

	console.log(`Player's choice: ${options[humanSelection]}, CPU's choice: ${options[computerSelection]}, Winner: ${winner}, Round: ${i}`)
    }
}

playGame()
