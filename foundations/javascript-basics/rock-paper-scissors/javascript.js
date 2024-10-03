let humanScore = 0;
let computerScore = 0;
let conclusion = "";

const result = document.querySelector("#result");
result.textContent = "testing";

function getComputerChoice(){
	return Math.trunc(Math.random()*3 + 1);
}

function playRound(humanChoice, computerChoice){
	console.log("human choice: " + humanChoice);
	console.log("computer choice: " + computerChoice);
	let winner = "";
	if(humanChoice == 1 && computerChoice == 3){
		result.textContent = "human wins";
		winner = "human";
	} else if (humanChoice > computerChoice){
		result.textContent = "human wins";
		winner =  "human";
	}else if(humanChoice == computerChoice){
		result.textContent = "tie";
		winner= "tie";
	}else{
		result.textContent = "computer wins";
		winner =  "computer";
	}

	switch(winner){
		case "human":
				humanScore++;
				break;
			case "computer":
				computerScore++;
				break;
			case "tie":
				break;
	}
	if(humanScore > 4 || computerScore > 4){
		if (humanScore > 4){
			result.textContent = "Human wins!";	
		}else{
			result.textContent = "Computer wins!";	
		}
	}

	console.log("human score: " + humanScore);
	console.log("computer score: " + computerScore);
}

document.getElementById("rock").addEventListener("click", () => {  playRound(1, getComputerChoice())});
document.getElementById("paper").addEventListener("click", () => {  playRound(2, getComputerChoice())});
document.getElementById("scissors").addEventListener("click", () => {  playRound(3, getComputerChoice())});
