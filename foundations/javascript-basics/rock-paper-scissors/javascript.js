function getComputerChoice(){
	return Math.trunc(Math.random()*3 + 1);
}
function getHumanChoice(){	
	let choice = prompt("Choose rock(1), paper(2), or scissors(3):")
	return choice;
}

function playRound(humanChoice, computerChoice){
	console.log(humanChoice);
	console.log(computerChoice);
	if(humanChoice == 1 && computerChoice == 3){
		console.log("human wins");
		return "human";
	} else if (humanChoice > computerChoice){
		console.log("human wins");
		return "human";
	}else if(humanChoice == computerChoice){
		console.log("tie");
		return "tie";
	}else{
		console.log("computer wins");
		return "computer";
	}
}

function playGame(){
	let humanScore = 0;
	let computerScore = 0;
	let conclusion = "";
	conclusion = playRound(getHumanChoice(), getComputerChoice());

	switch(conclusion){
		case "human":
			humanScore++;
			break;
		case "computer":
			computerScore++;
			break;
		case "tie":
			break;
	}
	
}

playGame();
