let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let lizard = document.getElementById("lizard");
let spock = document.getElementById("spock");

let userInput;

let res;



rock.addEventListener("click", function(){
   userInput = "rock"
   console.log(userInput)
   console.log(res)
})

paper.addEventListener("click", function(){
  userInput = "paper"
  console.log(userInput)
})

scissors.addEventListener("click", function(){
  userInput = "scissors"
  console.log(userInput)
})

lizard.addEventListener("click", function(){
  userInput = "lizard"
  console.log(userInput)
})

spock.addEventListener("click", function(){
  userInput = "spock"
  console.log(userInput)
})


let dataReturn = document.getElementById("dataReturn");



function GetData() {
  fetch("https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption")
  .then(response => response.text())
  .then(data => {res = data;
    console.log(res);
  })
}

GetData();
