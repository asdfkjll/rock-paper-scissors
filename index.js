console.log("hello world")

let humanScore = 0
let computerScore = 0
const rounds = 5
const options = { "rock": 1, "paper": 2, "scissors": 3  }
const options_emojis = { 0: "🥊", 1: "✊", 2: "✋", 3: "✌️"  }

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1
    return computerChoice 
}

function getHumanChoice(choice) {	
    switch(choice) {
	case "rock":
	    return 1 
	case "paper":
	    return 2 
	case "scissors":
	    return 3 
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

function showResultUI(humanChoice, computerChoice, roundResult) {
    playerSelection.classList.add("player_getting_ready")
    cpuSelection.classList.add("cpu_getting_ready")
    playerSelection.textContent = options_emojis[0]
    cpuSelection.textContent = options_emojis[0]
    winner.textContent = "Get Ready"

    input.classList.add("hide")

    let count = 3;

    const timer = setInterval(() => {
	winner.textContent = count

	if (count === 0) {
	    clearInterval(timer) 
	    playerSelection.classList.remove("player_getting_ready")
	    cpuSelection.classList.remove("cpu_getting_ready")
	    input.classList.remove("hide")
	    playerSelection.textContent = options_emojis[humanChoice]
	    cpuSelection.textContent = options_emojis[computerChoice]
	    winner.textContent = roundResult
	}

	count--;
    }, 1000);
}

input.addEventListener("click", (event) => {
    const targetId = event.target.id

    if(targetId !== "input") {
	let humanChoice = getHumanChoice(targetId) 
	let computerChoice = getComputerChoice()
	const roundResult = playRound(humanChoice, computerChoice)
	showResultUI(humanChoice, computerChoice, roundResult)
    } 
})
