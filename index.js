console.log("hello world")

let humanScore = 0
let computerScore = 0
const rounds = 5

const options = {
    "rock": 1,
    "paper": 2,
    "scissors": 3,
}

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1
    return random 
}

function getHumanChoice() {
    const choice = prompt("Type your choose: rock, paper, or scissors").toLowerCase()
    return options[choice]
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




