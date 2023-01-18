let dataReturn = document.getElementById("dataReturn");

function GetData() {
  fetch("https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption")
  .then(response => response.text())
  .then(data => dataReturn.textContent = data)
}

GetData();