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
    injectHere.textContent = "Rock get's Cover by Paper, You Lost!"
  }
  else if (userInput == "rock" && res == "Scissors") {
    injectHere.textContent = "Rock Crushes Scissors, You Win!"
  }
  else if (userInput == "rock" && res == "Lizard") {
    injectHere.textContent = "Rock Crushes Lizard, You Win!"
  }
  else if (userInput == "rock" && res == "Spock") {
    injectHere.textContent = "Spock Vaporizes Rock, You Lost!"
  }

  // Paper
  if (userInput == "paper" && res == "Paper") {
    injectHere.textContent = "Paper vs, Paper, This is a Tie!"
  }
  else if (userInput == "paper" && res == "Rock") {
    injectHere.textContent = "Paper Covers Rock, You Wins!"
  }
  else if (userInput == "paper" && res == "Scissors") {
    injectHere.textContent = "Paper Get Cut by Scissors, You Lost!"
  }
  else if (userInput == "paper" && res == "Lizard") {
    injectHere.textContent = "Paper gets eaten by Lizard, You Lost!"
  }
  else if (userInput == "paper" && res == "Spock") {
    injectHere.textContent = "Paper Disproves Spock, You Win!"
  }


}