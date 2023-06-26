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
        return {"Message": tieMsg, "player":move1, "Computer":move2}
    }
    else if ((move1 == 0 && move2 == 2) || (move1 == 1 && move2 == 0) || (move1 == 2 && move2 == 1)){
        return { "Message": winMsg, "player":move1, "Computer":move2}
    }
    else{
        return{ "Message": loseMsg, "player":move1, "Computer":move2} 
    }
}
function randomMove(){
    return Math.floor(Math.random() * 3);
}

function startGame(){
    statusDisplay.textContent = 'Choose !'
    for (i=0; i < buttons.length; i++ ){
        buttons[i].removeEventListener("click",startGame);
        buttons[i].addEventListener("click",endGame);
        buttons[i].textContent = moveList[i];
        buttons[i].style.visibility = "visible";
        buttons[i].style.display = "inline-block";
    }
    for (i=0; i <moveDisplays.length; i++){
        moveDisplays[i].style.visibility = 'hidden';
    }
}
function endGame(event){
    let player_move = moveList.indexOf(event.target.innerHTML);
    let computer_move = randomMove();
    let movements = calcResult(player_move, computer_move);
    document.getElementById("status-head").innerHTML = movements["Message"];
    for (i = 0; i <buttons.length; i = i + 2 ){
        buttons[i].style.visibility = 'hidden';
    }
    document.querySelectorAll("button")[1].innerHTML = "Play Again";
    buttons[1].addEventListener("click", startGame);
    for(i = 0; i < moveDisplays.length; i++){
        moveDisplays[i].style = 'display:visible';
    }
    
    moveDisplays[0].innerHTML = "You played" + " " +moveList[player_move];
    moveDisplays[1].innerHTML = "Computer played" +  " " +moveList[computer_move];
}
startGame();