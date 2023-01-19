
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let lizard = document.getElementById("lizard");
let spock = document.getElementById("spock");
let injectHere = document.getElementById("injectHere");

let userInput;

let res;


rock.addEventListener("click", function () {
  userInput = "rock"
  console.log(userInput);
  console.log(res);
  OutCome();
  GetData();
})

paper.addEventListener("click", function () {
  userInput = "paper"
  console.log(userInput);
  console.log(res);
  OutCome();
  GetData();
})

scissors.addEventListener("click", function () {
  userInput = "scissors"
  console.log(userInput);
  console.log(res);
  OutCome();
  GetData();
})

lizard.addEventListener("click", function () {
  userInput = "lizard"
  console.log(userInput);
  console.log(res);
  OutCome();
  GetData();
})

spock.addEventListener("click", function () {
  userInput = "spock"
  console.log(userInput);
  console.log(res);
  OutCome();
  GetData();
})



function GetData() {
  fetch("https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption")
    .then(response => response.text())
    .then(data => { res = data; })
}

GetData();

function OutCome() {

  // Rock
  if (userInput == "rock" && res == "Rock") {
    injectHere.textContent = "Rock vs. Rock, This is a Tie!"
  } 
  else if (userInput == "rock" && res == "Paper") {
    injectHere.textContent = "Rock get's Cover by Paper, You Lose!"
  }
  else if (userInput == "rock" && res == "Scissors") {
    injectHere.textContent = "Rock Crushes Scissors, You Win!"
  }
  else if (userInput == "rock" && res == "Lizard") {
    injectHere.textContent = "Rock Crushes Lizard, You Win!"
  }
  else if (userInput == "rock" && res == "Spock") {
    injectHere.textContent = "Spock Vaporizes Rock, You Lose!"
  }

  // Paper
  if (userInput == "paper" && res == "Paper") {
    injectHere.textContent = "Paper vs. Paper, This is a Tie!"
  }
  else if (userInput == "paper" && res == "Rock") {
    injectHere.textContent = "Paper Covers Rock, You Win!"
  }
  else if (userInput == "paper" && res == "Scissors") {
    injectHere.textContent = "Paper Get Cut by Scissors, You Lose!"
  }
  else if (userInput == "paper" && res == "Lizard") {
    injectHere.textContent = "Paper Gets Eaten by Lizard, You Lose!"
  }
  else if (userInput == "paper" && res == "Spock") {
    injectHere.textContent = "Paper Disproves Spock, You Win!"
  }

  //Scissors
  if (userInput == "scissors" && res == "Scissors") {
    injectHere.textContent = "Scissors vs. scissors, This is a Tie!"
  }
  else if (userInput == "scissors" && res == "Rock") {
    injectHere.textContent = "Scissors Crushed by Rock, You Lose!"
  }
  else if (userInput == "scissors" && res == "Paper") {
    injectHere.textContent = "Scissors Cuts Paper, You Win!"
  }
  else if (userInput == "scissors" && res == "Lizard") {
    injectHere.textContent = "Scissors Decapitates Lizard, You Win!"
  }
  else if (userInput == "scissors" && res == "Spock") {
    injectHere.textContent = "Scissors Smashed by Spock, You Lose!"
  }

  //Lizard
  if (userInput == "lizard" && res == "Lizard") {
    injectHere.textContent = "Lizard vs. Lizard, This is a Tie!"
  }
  else if (userInput == "lizard" && res == "Rock") {
    injectHere.textContent = "Lizard Crushed by Rock, You Lose!"
  }
  else if (userInput == "lizard" && res == "Paper") {
    injectHere.textContent = "Lizard Eats Paper, You Win!"
  }
  else if (userInput == "lizard" && res == "Scissors") {
    injectHere.textContent = "Lizard Decapitated by Scissors, You Lose!"
  }
  else if (userInput == "lizard" && res == "Spock") {
    injectHere.textContent = "Lizard Vaporized by Spock, You Lose!"
  }

  //Spock
  if (userInput == "spock" && res == "Spock") {
    injectHere.textContent = "Spock vs. Spock, This is a Tie!"
  }
  else if (userInput == "spock" && res == "Rock") {
    injectHere.textContent = "Spock Vaporize Rock, You Win!"
  }
  else if (userInput == "spock" && res == "Paper") {
    injectHere.textContent = "Spock Disproved by Paper, You Lost!"
  }
  else if (userInput == "spock" && res == "Scissors") {
    injectHere.textContent = "Spock Smashes Scissors, You Win!"
  }
  else if (userInput == "spock" && res == "Lizard") {
    injectHere.textContent = "Spock Posined by Lizard, You Lose!"
  }

}