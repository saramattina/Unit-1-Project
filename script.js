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

  squareEls.forEach((sqr) => (sqr.textContent = ""));
  turnMessageEl.textContent = "Let's play! 🔴 goes first!";
  rollMessageEl.textContent = "";
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
//target current piece place with board[i]
//add spaces to move to current board[i]
//place piece in new board[i]
//remove piece from previous board[i] to prevent having multiple pieces on board

const updateBoard = () => {
  //    console.log(board.findIndex(placePiece));
  if (oldPieceIdx.textContent !== ""){
   board[oldPieceIdx] = "";
  }
  board.forEach((sqr, idx) => {
    squareEls[idx].textContent = sqr;
  });

};

let newPieceIdx;
let oldPieceIdx;
let squareElsArray;

const placePiece = () => {
  squareElsArray = Array.from(squareEls);
  oldPieceIdx = squareElsArray.findIndex(
    (squareEl) => squareEl.textContent === currentPlayer
  );

  // console.log(pieceIdx)

  newPieceIdx = oldPieceIdx + spacesToMove;
  board[newPieceIdx] = currentPlayer;
  // console.log("new idx: " + newPieceIdx);

  updateBoard();
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
};
//^partially taken from my tic tac toe lab

const rollSticks = (e) => {
  const randomNum = Math.random();
  // console.log(roll)

  if (randomNum < 0.5) {
    e.classList.add("flat");
  } else {
    return; // will default to round
  }
};

const handleWinner = () => {
  //if current player piece idx is greater than 20, that player wins
  //show win message
  //if no winner, keep playing
  //*** ^when I add the if (!winner) switch turns, the rollBtn stops working
};

//event listeners

rollBtn.addEventListener("click", () => {
  rollSticks(stickOne);
  rollSticks(stickTwo);
  rollSticks(stickThree);
  rollSticks(stickFour);

  if (numFlatSticks.length === 0) {
    rollMessageEl.textContent = "You rolled a yut! Move forward 4 spaces and roll again!";
    spacesToMove = 4;
  } else if (numFlatSticks.length === 1) {
    rollMessageEl.textContent = "You rolled a do! Move forward 1 space!";
    spacesToMove = 1;
  } else if (numFlatSticks.length === 2) {
    rollMessageEl.textContent = "You rolled a ge! Move forward 2 spaces!";
    spacesToMove = 2;
  } else if (numFlatSticks.length === 3) {
    rollMessageEl.textContent = "You rolled a geol! Move forward 3 spaces!";
    spacesToMove = 3;
  } else {
    rollMessageEl.textContent = "You rolled a mo! Move forward 5 spaces and roll again!";
    spacesToMove = 5;
  }

  placePiece();
  updateBoard();

  if (!winner) {
    switchPlayerTurn();
  }

  //   console.log(numFlatSticks.length);
});


resetBtn.addEventListener("click", init);

init();

//<dialog> for instructions?