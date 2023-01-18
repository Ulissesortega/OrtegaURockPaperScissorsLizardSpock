let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let lizard = document.getElementById("lizard");
let spock = document.getElementById("spock");


let dataReturn = document.getElementById("dataReturn");
let name = "Ulisea"
let res;

function GetData() {
  fetch("https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption")
  .then(response => response.text())
  .then(data => {res = data;
    console.log(res);
  })
}



GetData();

console.log(res);