let winMsg = 'Victory'; 
let loseMsg = 'Crushing defeat';
let tieMsg = 'Tie';
let moveList = ['Rock', 'Paper', 'Scissors'];
let statusDisplay = document.querySelector('#status-head');
let moveDisplays = document.querySelectorAll(".move-display h2");
let buttons = document.querySelectorAll ("button");

function calcResult(move1, move2){
    if (move1 == move2){
        statusDisplay.textContent = tieMsg;
        moveDisplays[0].textContent = "You played" + moveList[move1];
        moveDisplays[1].textContent = "Computer played" + moveList[move2];
    }
    else if ((move1 == 0 && move2 == 1) || (move1 == 1 && move2 == 2)){
        statusDisplay.textContent = winMsg;
        moveDisplays[0].textContent = "You played" + moveList[move1];
        moveDisplays[1].textContent = "Computer played" + moveList[move2];
    }
    else if (move1 == 1 && move2 == 2){
        statusDisplay.textContent = winMsg;

    }
}
function randomMove(){
    return Math.floor(Math.random() * 3);
}

function startGame(){
    statusDisplay.textContent = 'Choose !'
    for (i=0; i < buttons.length; i++ ){
        buttons[i].textContent = moveList[i];
        buttons[i].style.display = "inline-block"
    }
}
function endGame(event){

}
startGame();