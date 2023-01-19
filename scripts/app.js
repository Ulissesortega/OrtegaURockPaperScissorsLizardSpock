
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

//Counters===========================================================================================
let userCounter = 0;
console.log(userCounter)

let cpuCounter = 0;
console.log(userCounter)

let tiesCounter = 0;
console.log(userCounter)

let roundsCounter = userCounter + cpuCounter;
console.log(roundsCounter)

// Event Listeners====================================================================================
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

// User Counter===========================================================================================
rock.addEventListener("click", () =>{
  user.textContent = " Player 1 Wins " + userCounter;
})

paper.addEventListener("click", () =>{
  user.textContent = " Player 1 Wins " + userCounter;
})

scissors.addEventListener("click", () =>{
  user.textContent = " Player 1 Wins " + userCounter;
})

lizard.addEventListener("click", () =>{
  user.textContent = " Player 1 Wins " + userCounter;
})

spock.addEventListener("click", () =>{
  user.textContent = " Player 1 Wins " + userCounter;
})

//CPU counter============================================================================================
rock.addEventListener("click", () =>{
  cpu.textContent = " CPU 1 Wins " + cpuCounter;
})

paper.addEventListener("click", () =>{
  cpu.textContent = " CPU 1 Wins " + cpuCounter;
})

scissors.addEventListener("click", () =>{
  cpu.textContent = " CPU 1 Wins " + cpuCounter;
})

lizard.addEventListener("click", () =>{
  cpu.textContent = " CPU 1 Wins " + cpuCounter;
})

spock.addEventListener("click", () =>{
  cpu.textContent = " CPU 1 Wins " + cpuCounter;
})

//Total Rounds============================================================================================
rock.addEventListener("click", () =>{
  rounds.textContent = "Total Rounds " + " " + roundsCounter;
})

paper.addEventListener("click", () =>{
  rounds.textContent = " Total Rounds " + " " + roundsCounter;
})

scissors.addEventListener("click", () =>{
  rounds.textContent = " Total Rounds " + " " + roundsCounter;
})

lizard.addEventListener("click", () =>{
  rounds.textContent = " Total Rounds " + " " + roundsCounter;
})

spock.addEventListener("click", () =>{
  rounds.textContent = " Total Rounds " + " " + roundsCounter;
})



// Fect Fuction============================================================================================
function GetData() {
  fetch("https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption")
    .then(response => response.text())
    .then(data => { res = data; })
}

GetData();

// Function Outome=========================================================================================
function OutCome() {

  // Rock
  if (userInput == "rock" && res == "Rock") {
    injectHere.textContent = "Rock vs. Rock, This is a Tie!"
    console.log();
  } 
  else if (userInput == "rock" && res == "Paper") {
    injectHere.textContent = "Rock get's Cover by Paper, You Lose!"
    cpuCounter++
    console.log(cpuCounter)
    roundsCounter++
  }
  else if (userInput == "rock" && res == "Scissors") {
    injectHere.textContent = "Rock Crushes Scissors, You Win!"
   userCounter++ 
   console.log(userCounter)
   roundsCounter++
  }
  else if (userInput == "rock" && res == "Lizard") {
    injectHere.textContent = "Rock Crushes Lizard, You Win!"
    userCounter++
    console.log(userCounter)
    roundsCounter++
  }
  else if (userInput == "rock" && res == "Spock") {
    injectHere.textContent = "Spock Vaporizes Rock, You Lose!"
    cpuCounter++
    console.log(cpuCounter)
    roundsCounter++
  }

  // Paper
  if (userInput == "paper" && res == "Paper") {
    injectHere.textContent = "Paper vs. Paper, This is a Tie!"
    console.log();
  }
  else if (userInput == "paper" && res == "Rock") {
    injectHere.textContent = "Paper Covers Rock, You Win!"
    userCounter++ 
   console.log(userCounter)
   roundsCounter++
  }
  else if (userInput == "paper" && res == "Scissors") {
    injectHere.textContent = "Paper Get Cut by Scissors, You Lose!"
    cpuCounter++
    console.log(cpuCounter)
    roundsCounter++
  }
  else if (userInput == "paper" && res == "Lizard") {
    injectHere.textContent = "Paper Gets Eaten by Lizard, You Lose!"
    cpuCounter++
    console.log(cpuCounter)
  }
  else if (userInput == "paper" && res == "Spock") {
    injectHere.textContent = "Paper Disproves Spock, You Win!"
    userCounter++ 
   console.log(userCounter)
   roundsCounter++
  }

  //Scissors
  if (userInput == "scissors" && res == "Scissors") {
    injectHere.textContent = "Scissors vs. scissors, This is a Tie!"
    console.log();
  }
  else if (userInput == "scissors" && res == "Rock") {
    injectHere.textContent = "Scissors Crushed by Rock, You Lose!"
    cpuCounter++
    console.log(cpuCounter)
    roundsCounter++
  }
  else if (userInput == "scissors" && res == "Paper") {
    injectHere.textContent = "Scissors Cuts Paper, You Win!"
    userCounter++ 
   console.log(userCounter)
   roundsCounter++
  }
  else if (userInput == "scissors" && res == "Lizard") {
    injectHere.textContent = "Scissors Decapitates Lizard, You Win!"
    userCounter++ 
   console.log(userCounter)
   roundsCounter++
  }
  else if (userInput == "scissors" && res == "Spock") {
    injectHere.textContent = "Scissors Smashed by Spock, You Lose!"
    cpuCounter++
    console.log(cpuCounter)
    roundsCounter++
  }

  //Lizard
  if (userInput == "lizard" && res == "Lizard") {
    injectHere.textContent = "Lizard vs. Lizard, This is a Tie!"
    console.log();
  }
  else if (userInput == "lizard" && res == "Rock") {
    injectHere.textContent = "Lizard Crushed by Rock, You Lose!"
    cpuCounter++
    console.log(cpuCounter)
    roundsCounter++
  }
  else if (userInput == "lizard" && res == "Paper") {
    injectHere.textContent = "Lizard Eats Paper, You Win!"
    userCounter++ 
   console.log(userCounter)
   roundsCounter++
  }
  else if (userInput == "lizard" && res == "Scissors") {
    injectHere.textContent = "Lizard Decapitated by Scissors, You Lose!"
    cpuCounter++
    console.log(cpuCounter)
    roundsCounter++
  }
  else if (userInput == "lizard" && res == "Spock") {
    injectHere.textContent = "Lizard Vaporized by Spock, You Lose!"
    cpuCounter++
    console.log(cpuCounter)
    roundsCounter++
  }

  //Spock
  if (userInput == "spock" && res == "Spock") {
    injectHere.textContent = "Spock vs. Spock, This is a Tie!"
    console.log();
  }
  else if (userInput == "spock" && res == "Rock") {
    injectHere.textContent = "Spock Vaporize Rock, You Win!"
    userCounter++ 
   console.log(userCounter)
   roundsCounter++
  }
  else if (userInput == "spock" && res == "Paper") {
    injectHere.textContent = "Spock Disproved by Paper, You Lose!"
    cpuCounter++
    console.log(cpuCounter)
    roundsCounter++
  }
  else if (userInput == "spock" && res == "Scissors") {
    injectHere.textContent = "Spock Smashes Scissors, You Win!"
    userCounter++ 
   console.log(userCounter)
   roundsCounter++
  }
  else if (userInput == "spock" && res == "Lizard") {
    injectHere.textContent = "Spock Posined by Lizard, You Lose!"
    cpuCounter++
    console.log(cpuCounter)
    roundsCounter++
  }

}