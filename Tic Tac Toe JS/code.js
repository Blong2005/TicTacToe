let turn = "O"
turnRotate();
console.log("start game")
let b1Filled = false;
let b2Filled = false;
let b3Filled = false;
let b4Filled = false;
let b5Filled = false;
let b6Filled = false;
let b7Filled = false;
let b8Filled = false;
let b9Filled = false;

var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
var b4 = document.getElementById("b4");
var b5 = document.getElementById("b5");
var b6 = document.getElementById("b6");
var b7 = document.getElementById("b7");
var b8 = document.getElementById("b8");
var b9 = document.getElementById("b9");

function turnRotate(){
  if (turn == "X"){
    turn = "O";
    document.getElementById("turnCounter").innerHTML = "Turn: O"

  }
  else{
    turn = "X"
    document.getElementById("turnCounter").innerHTML = "Turn: X"
  }
}








 function func1() {
  
  if (turn=="X" && b1Filled==false){
    b1.value = "X";
    b1Filled = true
  }
  else if (turn=="O" && b1Filled==false){
    b1.value = "O";
    b1Filled = true

  }
  else{
    //pass
  }
  turnRotate();
  checkWin()
}
function func2() {
  
  if (turn=="X" && b2Filled==false){
    b2.value = "X";
    b2Filled = true
  }
  else if (turn=="O" && b2Filled==false){
    b2.value = "O";
    b2Filled = true

  }
  else{
    //pass
  }
  turnRotate();
  checkWin()
}
function func3() {
  
  if (turn=="X" && b3Filled==false){
    b3.value = "X";
    b3Filled = true
  }
  else if (turn=="O" && b3Filled==false){
    b3.value = "O";
    b3Filled = true

  }
  else{
    //pass
  }
  turnRotate();
  checkWin()
}
function func4() {
  
  if (turn=="X" && b4Filled==false){
    b4.value = "X";
    b4Filled = true
  }
  else if (turn=="O" && b4Filled==false){
    b4.value = "O";
    b4Filled = true

  }
  else{
    //pass
  }
  turnRotate();
  checkWin()
}
function func5() {
  
  if (turn=="X" && b5Filled==false){
    b5.value = "X";
    b5Filled = true
  }
  else if (turn=="O" && b5Filled==false){
    b5.value = "O";
    b5Filled = true

  }
  else{
    //pass
  }
  turnRotate();
  checkWin()
}
function func6() {
  
  if (turn=="X" && b6Filled==false){
    b6.value = "X";
    b6Filled = true
  }
  else if (turn=="O" && b6Filled==false){
    b6.value = "O";
    b6Filled = true

  }
  else{
    //pass
  }
  turnRotate();
  checkWin()
}
function func7() {
  
  if (turn=="X" && b7Filled==false){
    b7.value = "X";
    b7Filled = true
  }
  else if (turn=="O" && b7Filled==false){
    b7.value = "O";
    b7Filled = true

  }
  else{
    //pass
  }
  turnRotate();
  checkWin()
}
function func8() {
  
  if (turn=="X" && b8Filled==false){
    b8.value = "X";
    b8Filled = true
  }
  else if (turn=="O" && b8Filled==false){
    b8.value = "O";
    b8Filled = true

  }
  else{
    //pass
  }
  turnRotate();
  checkWin()
}
function func9() {
  
  if (turn=="X" && b9Filled==false){
    b9.value = "X";
    b9Filled = true
  }
  else if (turn=="O" && b9Filled==false){
    b9.value = "O";
    b9Filled = true

  }
  else{
    //pass
  }
  turnRotate();
  checkWin()
  
}


function checkWin() {
  // Check rows
  if (checkRow(b1.value, b2.value, b3.value) ||
      checkRow(b4.value, b5.value, b6.value) ||
      checkRow(b7.value, b8.value, b9.value)) {
    turnRotate()
    document.getElementById("winnerText").innerHTML = turn + " wins!";
    document.getElementById("winnerText").style.color = "blue"
    // You can add further logic here, such as stopping the game or resetting the board.
  }

  // Check columns
  else if (checkRow(b1.value, b4.value, b7.value) ||
           checkRow(b2.value, b5.value, b8.value) ||
           checkRow(b3.value, b6.value, b9.value)) {
    turnRotate()
    document.getElementById("winnerText").innerHTML = turn + " wins!";
    document.getElementById("winnerText").style.color = "blue"
  }

  // Check diagonals
  else if (checkRow(b1.value, b5.value, b9.value) ||
           checkRow(b3.value, b5.value, b7.value)) {
    turnRotate()
    document.getElementById("winnerText").innerHTML = turn + " wins!";
    document.getElementById("winnerText").style.color = "blue"

  }
}

// Helper function to check if all elements in a row are the same and not empty
function checkRow(a, b, c) {
  return (a === b && b === c && a !== "");
}
