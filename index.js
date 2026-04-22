console.log("hello world")

let humanScore = 0
let computerScore = 0
const rounds = 5

const options = {
    1: "rock",
    2: "paper",
    3: "scissors",
}

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

// ui
//

container.addEventListener("click", (event) => {
    const targetId = event.target.id
    let humanChoice = null
    let computerChoice = getComputerChoice()

    switch(targetId) {
	case "rock":
	    humanChoice = 1 
	    playRound(humanChoice, computerChoice)
	    break
	case "paper":
	    humanChoice = 2 
	    playRound(humanChoice, computerChoice)
	    break
	case "scissors":
	    humanChoice = 3 
	    playRound(humanChoice, computerChoice)
	    break
    }

    console.log(humanChoice, computerChoice)
})




