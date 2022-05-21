//constants that reference our html quer selectors
const cells = document.querySelectorAll(".cell");
const board = document.querySelector(".board");
const play = document.querySelector(".playButton");
const reset = document.querySelector(".resetButton")
let isPlayerXTrue = true;
const players = {
  xAndo : ['x', 'o']
}
const boardCheck = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
  ]

//id's for our cells
cellOne = document.getElementById("one");
cellTwo = document.getElementById("two");
cellThree = document.getElementById("three");
cellFour = document.getElementById("four");
cellFive = document.getElementById("five");
cellSix = document.getElementById("six");
cellSeven = document.getElementById("seven");
cellEight = document.getElementById("eight");
cellNine = document.getElementById("nine");

//function for player two's markers
function playerO(playGame){
  for (let i = 0; i < cells.length; i++){
    cells[i].addEventListener('click',(e) =>{
      cells[i].innerText = "O";
      playGame();
  })
  }}
 
  //functions for playerOnes markers
function playerX(playGame){
for (let i = 0; i < cells.length; i++){
  cells[i].addEventListener('click',(e) =>{
    cells[i].innerText = "X";
    playGame();
  })
  }}

//checks if cell was clicked
function swapTurns(){
  isPlayerXTrue = !isPlayerXTrue;
  console.log(isPlayerXTrue)
}
//play game initilaizes a for loop and 
//determines whether or not it is divisible by two
//if it is then playerone goes 
//if it is not then player two goes
//until the for loop is done
// function playGame(){
  
    // for (let i = 0; i < cells.length; i++){
    //   cells[i].addEventListener('click',(e) =>{
    //     //console.log("is player true", isPlayerXTrue)
    //     cells[i].innerText = isPlayerXTrue ? "x" : "o";
    //     swapTurns();
    // })
  //   }
  // }
function resetGame(){
  reset.addEventListener('click', (e) =>{
    location.reload()
  })
}

function displayLetter(event) {
event.target.innerText = isPlayerXTrue ? "x" : "o";
swapTurns();
console.log(event)
checkForWin();
  // e.innerText = "X";
}

function startGame(){
  // for (let i = 0; i < cells.length; i++){
  //   cells[i].addEventListener('click',(e) =>{
  //     console.log("clicked cell")
  //   })}

  play.addEventListener('click',(e) =>{
    // playGame();
  })
}



function checkForWin(){
  if(cellOne.innerText === "x" && cellTwo.innerText === "x" && cellThree.innerText === "x"){
    alert("playuer x has won!!")
  }
  if(cellOne.innerText === "x" && cellFour.innerText === "x" && cellSeven.innerText === "x"){
   alert("player x has won!!")
 }
 if(cellOne.innerText === "x" && cellFive.innerText === "x" && cellNine.innerText === "x"){
   alert("player x has won!!")
 }
 if(cellTwo.innerText === "x" && cellFive.innerText === "x" && cellEight.innerText === "x"){
   alert("player x has won!!")
 }
 if(cellThree.innerText === "x" && cellSix.innerText === "x" && cellNine.innerText === "x"){
   alert("player x has won!!")
 }
 if(cellThree.innerText === "x" && cellFive.innerText === "x" && cellSeven.innerText === "x"){
   alert("player x has won!!")
 }
 if(cellFour.innerText === "x" && cellFive.innerText === "x" && cellSix.innerText === "x"){
   alert("player x has won!!")
 }
 if(cellSeven.innerText === "x" && cellEight.innerText === "x" && cellNine.innerText === "x"){
   alert("player x has won!!")
 }
 if(cellOne.innerText === "o" && cellTwo.innerText === "o" && cellThree.innerText === "o"){
  alert("player o has won!!")
}
if(cellOne.innerText === "o" && cellFour.innerText === "o" && cellSeven.innerText === "o"){
 alert("player o has won!!")
}
if(cellOne.innerText === "o" && cellFive.innerText === "o" && cellNine.innerText === "o"){
 alert("player o has won!!")
}
if(cellTwo.innerText === "o" && cellFive.innerText === "o" && cellEight.innerText === "o"){
 alert("player o has won!!")
}
if(cellThree.innerText === "o" && cellSix.innerText === "o" && cellNine.innerText === "o"){
 alert("player o has won!!")
}
if(cellThree.innerText === "o" && cellFive.innerText === "o" && cellSeven.innerText === "o"){
 alert("player o has won!!")
}
if(cellFour.innerText === "o" && cellFive.innerText === "o" && cellSix.innerText === "o"){
 alert("player o has won!!")
}
if(cellSeven.innerText === "o" && cellEight.innerText === "o" && cellNine.innerText === "o"){
 alert("player o has won!!")
}
if (cellOne.innerText === "x" | "o" && cellTwo.innerText === "x" | "o" && cellThree.innerText === "x" | "o" &&
    cellFour.innerText === "x" | "o" && cellFive.innerText === "x" | "o" && cellSix.innerText === "x" | "o" &&
    cellSeven.innerText === "x" | "o" && cellEight.innerText === "x" | "o" && cellNine.innerText === "x" | "o"){
      alert("It's a draw!!")
    }
}

startGame();
resetGame();
//checkForWin();

