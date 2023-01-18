let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let lizard = document.getElementById("lizard");
let spock = document.getElementById("spock");
let injectHere = document.getElementById("injectHere");

let userInput;

let res;





rock.addEventListener("click", function(){
   userInput = "rock"
   console.log(userInput);
   console.log(res);
   OutCome();
   GetData();
})

paper.addEventListener("click", function(){
  userInput = "paper"
  console.log(userInput)
  console.log(res)
})

scissors.addEventListener("click", function(){
  userInput = "scissors"
  console.log(userInput)
  console.log(res)
})

lizard.addEventListener("click", function(){
  userInput = "lizard"
  console.log(userInput)
  console.log(res)
})

spock.addEventListener("click", function(){
  userInput = "spock"
  console.log(userInput)
  console.log(res)
})



function GetData() {
  fetch("https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption")
  .then(response => response.text())
  .then(data => {res = data;})
}

GetData();

function OutCome(){
  if(userInput == "rock" && res == "Paper")
  {
    injectHere.textContent = "You Lost, Computer Wins!"
  }
}




