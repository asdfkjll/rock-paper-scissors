console.log("hello world")

let humanScore = 0
let computerScore = 0
let rounds = 5
const options = { "rock": 1, "paper": 2, "scissors": 3  }
const options_emojis = { 0: "🥊", 1: "✊", 2: "✋", 3: "✌️", 4: "🥳", 5: "😭", 6: "🤞"  }

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
// 23 / 04 / 2026 -> 2:11 a.m : I am tired, just wanna finish this shit

function showRoundUI(humanChoice, computerChoice, roundResult) {
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
	    rounds -= 1
	    roundCounter.textContent = rounds

	    if (rounds <= 0) {
		input.classList.add("hide")
		round.classList.add("hide")
		setTimeout(() => { showWinnerUI(getWinner()) }, 1000)
	    }
	}

	count--
    }, 1000)
}

function showWinnerUI(winnerName) {
    winner.textContent = "And the winner is..."
    playerSelection.style.transform = "rotate(0) scaleX(1)" 
    cpuSelection.style.transform = "rotate(0)" 
    playerSelection.textContent = options_emojis[6]
    cpuSelection.textContent = options_emojis[6]

    let count = 3;

    const timer = setInterval(() => {
	winner.textContent = count

	if (count === 0) {
	    clearInterval(timer) 
	    winner.textContent = winnerName

	    if (winnerName === "player") {
		playerSelection.textContent = options_emojis[4]
		cpuSelection.textContent = options_emojis[5]
	    } else if (winnerName === "computer") {
		playerSelection.textContent = options_emojis[5]
		cpuSelection.textContent = options_emojis[4]
	    } else {
		playerSelection.textContent = options_emojis[5]
		cpuSelection.textContent = options_emojis[5]
	    }
	}

	count--
    }, 1000)
}

function getWinner() {
    if (humanScore > computerScore) {
	return "player"
    } else if (humanScore < computerScore) {
	return "computer"
    } else {
	return "tie"
    }
}

input.addEventListener("click", (event) => {
    const targetId = event.target.id
    if(targetId !== "input" && rounds > 0) {
	let humanChoice = getHumanChoice(targetId) 
	let computerChoice = getComputerChoice()
	const roundResult = playRound(humanChoice, computerChoice)
	showRoundUI(humanChoice, computerChoice, roundResult)
    } 
})

