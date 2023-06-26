let startGame = () =>{
    document.getElementById("status-head").innerHTML = "Choose";
    document.getElementById("rock-button").innerHTML = "Rock";
    document.getElementById("paper-button").innerHTML = "Paper";
    document.getElementById("scissors-button").innerHTML = "Scissors";
    document.getElementsByClassName("move-display")[0].style.visibility = ("hidden");
}
let endGame = () => {

}

let randomMove = () =>{

}

let calcResult = (move1, move2) => {

}
document.addEventListener("onload", startGame());