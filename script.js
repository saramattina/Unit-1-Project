/* remember to clean up any unused variables, functions, etc... */
//<dialog> for instructions?


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

const dialogEl = document.querySelector("dialog");
const openDialogBtn = document.querySelector("#dialog-btn-open");
const closeDialogBtn = document.querySelector("#dialog-btn-close")

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
  winner = false;
  rollAgain = false;
  currentPlayer = "🔴";
  let redScore = 0;
  let blueScore = 0;
  turnMessageEl.textContent = turnMessage();
  rollMessageEl.textContent = "";
  playerRedScore.textContent = `Red: ${redScore}`;
  playerBlueScore.textContent = `Blue: ${blueScore}`;
  rollBtn.disabled = false;
  resetBtn.textContent = "Reset";
  // console.log(turnMessageEl)
  removeFlatClass(stickOne);
  removeFlatClass(stickTwo);
  removeFlatClass(stickThree);
  removeFlatClass(stickFour);
};

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

  newPieceIdx = oldPieceIdx + spacesToMove;

  if (newPieceIdx > board.length -1) { //<--- check for winner
   winner = true;
   turnMessageEl.textContent = `${currentPlayer} has won!`;
   rollMessageEl.textContent = "";
   rollBtn.disabled = true;
   resetBtn.textContent = "Play again?"
      if (currentPlayer === "🔴"){
         redScore = 1;
         playerRedScore.textContent = `Red: ${redScore}`;
         return;
      } else {
         blueScore = 1;
         playerBlueScore.textContent = `Blue: ${blueScore}`;
         return;
      }
   // return;
 } else {

  board[newPieceIdx] = currentPlayer;
//   console.log("new idx: " + newPieceIdx);
 }
};

const handleRollAgain = () => {
   if (numFlatSticks.length === 0 || numFlatSticks.length === 4) {
      rollAgain = true;
   } else {
      rollAgain = false;
   }
}


const switchPlayerTurn = () => {
  currentPlayer = currentPlayer === "🔴" ? "🔵" : "🔴";
  turnMessageEl.innerText = turnMessage();
};

//^partially taken from my tic tac toe lab


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

  if (!winner && !rollAgain) {
    switchPlayerTurn();
  } else;

});

resetBtn.addEventListener("click", init);


openDialogBtn.addEventListener("click", () => {
   dialogEl.showModal();
   console.log('open dialog button clicked')
 });

 closeDialogBtn.addEventListener("click", () => {
   dialogEl.close();
   console.log('close dialog button clicked')
 });



init();




