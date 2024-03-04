let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
let randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".player1 img").setAttribute("src", randomDiceImage1);
document.querySelector(".player2 img").setAttribute("src", randomDiceImage2);
let buttom = document.querySelector(".btn");

let btnAction = buttom.addEventListener("click", clickButton);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}else if (randomNumber1 < randomNumber2) { 
    document.querySelector("h1").innerHTML = "Player 2 Wins!";

}else {
  document.querySelector("h1").innerHTML = "Draw!";
}
function clickButton() {
    
    location.reload()
}
