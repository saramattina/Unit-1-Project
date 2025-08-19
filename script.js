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
let rollAgain = false;

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
  rollAgain = false;
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

const rollSticks = (e) => {
  const randomNum = Math.random();
//   console.log(randomNum)
  if (randomNum < 0.5) {
    e.classList.add("flat");
  } else {
    return; // will default to round
  }
};

const removeFlatClass = (e) => {
  e.classList.remove("flat");
};

const updateBoard = () => {
  //    console.log(board.findIndex(placePiece));
  if (oldPieceIdx.textContent !== "") {
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

  //   updateBoard();
};

const handleRollAgain = () => {
   if (numFlatSticks.length === 0 || numFlatSticks.length === 4) {
      rollAgain = true;
   } else {
      rollAgain = false;
   }
}

//check for numFlatSides & scoping issues

const switchPlayerTurn = () => {
  currentPlayer = currentPlayer === "🔴" ? "🔵" : "🔴";
  turnMessageEl.innerText = turnMessage();
};

//^partially taken from my tic tac toe lab

const checkForWinner = () => {
//if current player piece idx is greater than 20, that player wins
//show win message
//if no winner, keep playing

if () {
   winner = true;
} else;

};

//event listeners

rollBtn.addEventListener("click", () => {
  removeFlatClass(stickOne);
  removeFlatClass(stickTwo);
  removeFlatClass(stickThree);
  removeFlatClass(stickFour);

  rollSticks(stickOne);
  rollSticks(stickTwo);
  rollSticks(stickThree);
  rollSticks(stickFour);

  handleRollAgain();

  if (numFlatSticks.length === 0) {
    rollMessageEl.textContent =
      `${currentPlayer} rolled a yut! Move forward 4 spaces and roll again!`;
    spacesToMove = 4;
  } else if (numFlatSticks.length === 1) {
    rollMessageEl.textContent = `${currentPlayer} rolled a do! Move forward 1 space!`;
    spacesToMove = 1;
  } else if (numFlatSticks.length === 2) {
    rollMessageEl.textContent = `${currentPlayer} rolled a ge! Move forward 2 spaces!`;
    spacesToMove = 2;
  } else if (numFlatSticks.length === 3) {
    rollMessageEl.textContent = `${currentPlayer} rolled a geol! Move forward 3 spaces!`;
    spacesToMove = 3;
  } else {
    rollMessageEl.textContent =
      `${currentPlayer} rolled a mo! Move forward 5 spaces and roll again!`;
    spacesToMove = 5;
  }

  placePiece();
  updateBoard();
//   checkForWinner();

  if (!winner && !rollAgain) {
    switchPlayerTurn();
  } else;

  //   console.log(numFlatSticks.length);
});

resetBtn.addEventListener("click", init);

init();

//<dialog> for instructions?
