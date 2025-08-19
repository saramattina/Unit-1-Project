/** remember to clean up any unused variables, functions, etc... **/

// Variables

let board = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];

let winner = false;
let currentPlayer = "🔴";
let redScore = 0;
let blueScore = 0;

let spacesToMove;

const squareEls = document.querySelectorAll(".sqr");
const turnMessageEl = document.querySelector(".turn-message");
const rollMessageEl = document.querySelector(".roll-message");
const playerRedScore = document.querySelector("#player-red-score");
const playerBlueScore = document.querySelector("#player-blue-score");
const rollBtn = document.querySelector(".roll");
const resetBtn = document.querySelector(".reset");

const stick = document.querySelectorAll(".stick");
const numFlatSticks = document.getElementsByClassName("flat");

const stickOne = document.querySelector("#stick-one");
const stickTwo = document.querySelector("#stick-two");
const stickThree = document.querySelector("#stick-three");
const stickFour = document.querySelector("#stick-four");

const playerRed = "🔴";
const playerBlue = "🔵";

const turnMessage = () => `It's ${currentPlayer}'s turn!`;
const winMessage = `${currentPlayer} has won!`;

//functions

const removeFlatClass = (e) => {
  e.classList.remove("flat");
};

const init = () => {
  board = [
    "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
  ];
  squareEls.forEach((sqr) => (sqr.textContent = ""));
  turnMessageEl.textContent = "Let's play! 🔴 goes first!";
  winner = false;
  currentPlayer = "🔴";
  playerRedScore.textContent = `Red: ${redScore}`;
  playerBlueScore.textContent = `Blue: ${blueScore}`;
  // console.log(turnMessageEl)
  removeFlatClass(stickOne);
  removeFlatClass(stickTwo);
  removeFlatClass(stickThree);
  removeFlatClass(stickFour);
};

//placePiece
//maybe stretch goal: first roll is to place piece on board[0]
//target current piece place with board[i]

//add spaces to move to current board[i]
//place piece in new board[i]
//remove piece from previous board[i] to prevent having multiple pieces on board

const findPiece = (squareEls) => {
   // i is never passed in here
  return squareEls.id;
};

let pieceIdx;
let currentPieceSqr;

const placePiece = () => {
   // currentPieceSqr is always -1 because we're not passing in argument to findPiece
  currentPieceSqr = board.findIndex(findPiece);
  pieceIdx = (currentPieceSqr + spacesToMove);

  board[pieceIdx] = currentPlayer;


  console.log("current piece sqr" + currentPieceSqr)
  console.log("new piece idx:" + pieceIdx);

  //   console.log(board.findIndex(findPiece))
  updateBoard();
};

const updateBoard = () => {
//    console.log(board.findIndex(placePiece));
  board.forEach((sqr, idx) => {
    squareEls[idx].textContent = sqr;
  });
};

// console.log(updateBoard)
//^taken from my tic tac toe lab

//is there a way to keep only the last red or blue in the array?
//reverse array, filter or find for first value, reverse array again
//or use indexOf in some way?
//findLastIndex() ?

// const reverseBoard = board.reverse();
// reverseBoard.filter()
// board = reverseBoard.reverse();
// console.log(reverseBoard)

const switchPlayerTurn = () => {
  currentPlayer = currentPlayer === "🔴" ? "🔵" : "🔴";
  if (!winner) {
    turnMessageEl.innerText = turnMessage();
  }

  removeFlatClass(stickOne);
  removeFlatClass(stickTwo);
  removeFlatClass(stickThree);
  removeFlatClass(stickFour);
  // stick.classList.remove("round", "flat");
  // need remove flat or round class from sticks
};
//^partially taken from my tic tac toe lab

const rollSticks = (e) => {
  const randomNum = Math.random();
  // let roll = randomNum < 0.5 ? "flat-side" : "round-side";
  // console.log(roll)

  if (randomNum < 0.5) {
    e.classList.add("flat");
  } else {
    return;
    // will default to round
  }
};

//event listeners

rollBtn.addEventListener("click", () => {
  rollSticks(stickOne);
  rollSticks(stickTwo);
  rollSticks(stickThree);
  rollSticks(stickFour);

  if (numFlatSticks.length === 0) {
    turnMessageEl.textContent =
      "You rolled a yut! Put a piece on the board or move forward 4 spaces!";
    spacesToMove = 4;
  } else if (numFlatSticks.length === 1) {
    turnMessageEl.textContent =
      "You rolled a do! Put a piece on the board or move forward 1 space!";
    spacesToMove = 1;
  } else if (numFlatSticks.length === 2) {
    turnMessageEl.textContent =
      "You rolled a ge! Put a piece on the board or move forward 2 spaces!";
    spacesToMove = 2;
  } else if (numFlatSticks.length === 3) {
    turnMessageEl.textContent =
      "You rolled a geol! Put a piece on the board or move forward 3 spaces!";
    spacesToMove = 3;
  } else {
    turnMessageEl.textContent =
      "You rolled a mo! Put a piece on the board or move forward 5 spaces!";
    spacesToMove = 5;
  }

  placePiece();
   //  updateBoard();

//   if (!winner) {
//      switchPlayerTurn()};

  //   console.log(numFlatSticks.length);
});
//*** ^when I add the if (!winner) switch turns, the rollBtn stops working

resetBtn.addEventListener("click", init);

init();

//<dialog> for instructions?

//first move
//if no pieces are on the board, piece automatically gets placed on first square

// const firstPiece = () => {

// }
