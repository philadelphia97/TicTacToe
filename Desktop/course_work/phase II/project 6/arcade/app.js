//constants that reference our html quer selectors
const cells = document.querySelectorAll(".cell");
const board = document.querySelector(".board");
const play = document.querySelector(".playButton");
const reset = document.querySelector(".resetButton")
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
function playerO(){
  for (let i = 0; i < cells.length; i++){
    setTimeout(cells[i].innerText = "O", 5000)
  }}
 
  //functions for playerOnes markers
function playerX(){
for (let i = 0; i < cells.length; i++){
  cells[i].addEventListener('click',(e) =>{
    cells[i].innerText = "X"
    boardCheck.push(cells[i])
  })
  }}

//checks if cell was clicked
function wasItCicked(){
    if (cells.clicked == true){
      alert("button was clicked")
    }
  }

//play game initilaizes a for loop and 
//determines whether or not it is divisible by two
//if it is then playerone goes 
//if it is not then player two goes
//until the for loop is done
function playGame(){
for (let i = 0; i < 8; i++){
  if ( i % 2 === 0){
    playerX();
  } else {
    playerO();
  }
 }
}

function resetGame(){
  reset.addEventListener('click', (e) =>{
    location.reload()
  })
}

//function checks if playerOne has
//won the game by checking which cells 
//are ture
function checkForWin(){
 if(cellOne && cellTwo && cellThree){
   alert("you have won!!")
 }
 if(cellOne && cellFour && cellSeven){
  alert("you have won!!")
}
if(cellOne && cellFive && cellNine){
  alert("you have won!!")
}
if(cellTwo && cellFive && cellEight){
  alert("you have won!!")
}
if(cellThree && cellSix && cellNine){
  alert("you have won!!")
}
if(cellThree && cellFive && cellSeven){
  alert("you have won!!")
}
if(cellFour && cellFive && cellSix){
  alert("you have won!!")
}
if(cellSeven && cellEight && cellNine){
  alert("you have won!!")
}}

function startGame(){
  play.addEventListener('click',(e) =>{
    playGame();
  })
}

startGame();
resetGame();
