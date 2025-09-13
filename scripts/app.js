let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let lizard = document.getElementById("lizard");
let spock = document.getElementById("spock");
let injectHere = document.getElementById("injectHere");
let user = document.getElementById("user")
let cpu = document.getElementById("cpu")
let rounds = document.getElementById("rounds")
let ties = document.getElementById("ties")
let userInput;
let res;
let vsCPU = document.getElementById("vsCPU");
let tPlayers = document.getElementById("tPlayers");
let oneround = document.getElementById("oneround");
let fiverounds = document.getElementById("fiverounds");
let sevenrounds = document.getElementById("sevenrounds");
let gamebody = document.getElementById("gamepanel");

// Game state variables
let userCounter = 0;
let cpuCounter = 0;
let tiesCounter = 0;
let roundsCounter = 0;
let maxRounds = 1; // Default to 1 round
let gameMode = "cpu"; // Default to CPU mode
let player2Choice = null;

// Event Listeners for Images
rock.addEventListener("click", function() {
  handleChoice("rock");
});

paper.addEventListener("click", function() {
  handleChoice("paper");
});

scissors.addEventListener("click", () => {
  handleChoice("scissors");
});

lizard.addEventListener("click", () => {
  handleChoice("lizard");
});

spock.addEventListener("click", () => {
  handleChoice("spock");
});

// Event Listeners for Check Boxes
vsCPU.addEventListener("click", () => {
  if (document.getElementById("vsCPU").checked) {
    document.getElementById("tPlayers").checked = false;
    document.getElementById("tPlayers").disabled = true;
    document.getElementById("rselect").classList.remove("hide");
    gameMode = "cpu";
  } else {
    document.getElementById("tPlayers").disabled = false;
    document.getElementById("rselect").classList.add("hide");
  }
});

tPlayers.addEventListener("click", () => {
  if (document.getElementById("tPlayers").checked) {
    document.getElementById("vsCPU").checked = false;
    document.getElementById("vsCPU").disabled = true;
    document.getElementById("rselect").classList.remove("hide");
    gameMode = "2players";
  } else {
    document.getElementById("vsCPU").disabled = false;
    document.getElementById("rselect").classList.add("hide");
  }
});

oneround.addEventListener("click", () => {
  if (document.getElementById("oneround").checked) {
    maxRounds = 1;
    document.getElementById("fiverounds").checked = false;
    document.getElementById("sevenrounds").checked = false;
    document.getElementById("gamepanel").classList.remove("hide");
  }
});

fiverounds.addEventListener("click", () => {
  if (document.getElementById("fiverounds").checked) {
    maxRounds = 3;
    document.getElementById("oneround").checked = false;
    document.getElementById("sevenrounds").checked = false;
    document.getElementById("gamepanel").classList.remove("hide");
  }
});

sevenrounds.addEventListener("click", () => {
  if (document.getElementById("sevenrounds").checked) {
    maxRounds = 5;
    document.getElementById("oneround").checked = false;
    document.getElementById("fiverounds").checked = false;
    document.getElementById("gamepanel").classList.remove("hide");
  }
});

// Main function to handle user choice
async function handleChoice(choice) {
  userInput = choice;
  console.log("User chose:", userInput);
  
  if (gameMode === "cpu") {
    // Get CPU choice from API
    try {
      const response = await fetch("https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption");
      res = await response.text();
      console.log("CPU chose:", res);
      determineOutcome(userInput, res);
    } catch (error) {
      console.error("Error fetching CPU choice:", error);
      // Fallback to random choice if API fails
      const options = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
      res = options[Math.floor(Math.random() * options.length)];
      console.log("CPU chose (fallback):", res);
      determineOutcome(userInput, res);
    }
  } else {
    // Two-player mode - need to handle player 2's choice
    if (player2Choice === null) {
      // First player's choice
      player2Choice = choice;
      injectHere.textContent = "Player 1 has chosen. Player 2's turn.";
    } else {
      // Second player's choice
      determineOutcome(player2Choice, choice);
      player2Choice = null; // Reset for next round
    }
  }
}

// Function to determine outcome
function determineOutcome(player1, player2) {
  // Convert to lowercase for consistent comparison
  player1 = player1.toLowerCase();
  player2 = player2.toLowerCase();
  
  // Check for tie
  if (player1 === player2) {
    tiesCounter++;
    injectHere.textContent = `${capitalizeFirstLetter(player1)} vs. ${capitalizeFirstLetter(player2)}, This is a Tie!`;
  } 
  // Check for player 1 win conditions
  else if (
    (player1 === "rock" && (player2 === "scissors" || player2 === "lizard")) ||
    (player1 === "paper" && (player2 === "rock" || player2 === "spock")) ||
    (player1 === "scissors" && (player2 === "paper" || player2 === "lizard")) ||
    (player1 === "lizard" && (player2 === "paper" || player2 === "spock")) ||
    (player1 === "spock" && (player2 === "rock" || player2 === "scissors"))
  ) {
    userCounter++;
    injectHere.textContent = getWinMessage(player1, player2);
  } 
  // Otherwise player 2 wins
  else {
    cpuCounter++;
    injectHere.textContent = getLoseMessage(player1, player2);
  }
  
  // Update counters
  roundsCounter = userCounter + cpuCounter + tiesCounter;
  updateCounters();
  
  // Check if game is over
  if (roundsCounter >= maxRounds || userCounter > maxRounds/2 || cpuCounter > maxRounds/2) {
    endGame();
  }
}

// Helper function to capitalize first letter
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Helper function to get win message
function getWinMessage(winner, loser) {
  const messages = {
    "rock-scissors": "Rock crushes Scissors, You Win!",
    "rock-lizard": "Rock crushes Lizard, You Win!",
    "paper-rock": "Paper covers Rock, You Win!",
    "paper-spock": "Paper disproves Spock, You Win!",
    "scissors-paper": "Scissors cut Paper, You Win!",
    "scissors-lizard": "Scissors decapitate Lizard, You Win!",
    "lizard-paper": "Lizard eats Paper, You Win!",
    "lizard-spock": "Lizard poisons Spock, You Win!",
    "spock-rock": "Spock vaporizes Rock, You Win!",
    "spock-scissors": "Spock smashes Scissors, You Win!"
  };
  
  return messages[`${winner}-${loser}`] || `${capitalizeFirstLetter(winner)} beats ${capitalizeFirstLetter(loser)}, You Win!`;
}

// Helper function to get lose message
function getLoseMessage(loser, winner) {
  const messages = {
    "rock-paper": "Rock gets covered by Paper, You Lose!",
    "rock-spock": "Spock vaporizes Rock, You Lose!",
    "paper-scissors": "Paper gets cut by Scissors, You Lose!",
    "paper-lizard": "Paper gets eaten by Lizard, You Lose!",
    "scissors-rock": "Scissors get crushed by Rock, You Lose!",
    "scissors-spock": "Scissors get smashed by Spock, You Lose!",
    "lizard-rock": "Lizard gets crushed by Rock, You Lose!",
    "lizard-scissors": "Lizard gets decapitated by Scissors, You Lose!",
    "spock-paper": "Spock gets disproved by Paper, You Lose!",
    "spock-lizard": "Spock gets poisoned by Lizard, You Lose!"
  };
  
  return messages[`${loser}-${winner}`] || `${capitalizeFirstLetter(winner)} beats ${capitalizeFirstLetter(loser)}, You Lose!`;
}

// Update counter displays
function updateCounters() {
  user.textContent = "Player 1 Wins: " + userCounter;
  cpu.textContent = gameMode === "cpu" ? "CPU Wins: " + cpuCounter : "Player 2 Wins: " + cpuCounter;
  ties.textContent = "Ties: " + tiesCounter;
  rounds.textContent = "Total Rounds: " + roundsCounter;
}

// End game and show result
function endGame() {
  let message = "Game Over! ";
  
  if (userCounter > cpuCounter) {
    message += "Player 1 Wins the Game!";
  } else if (cpuCounter > userCounter) {
    message += (gameMode === "cpu" ? "CPU Wins the Game!" : "Player 2 Wins the Game!");
  } else {
    message += "It's a Tie Game!";
  }
  
  setTimeout(() => {
    alert(message);
    resetGame();
  }, 500);
}

// Reset game
function resetGame() {
  userCounter = 0;
  cpuCounter = 0;
  tiesCounter = 0;
  roundsCounter = 0;
  player2Choice = null;
  updateCounters();
  injectHere.textContent = "Please Make Your Selection to start the game";
}

// Initialize counters
updateCounters();