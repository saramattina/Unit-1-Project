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

//constants
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

const turnMessage = `It's ${currentPlayer}'s turn!`;
const winMessage = `${currentPlayer} has won!`;

const doMessage = "You rolled a do! Move forward 1 space!"; //<--- 3 round, 1 flat up
const geMessage = "You rolled a ge! Move forward 2 spaces!"; //<--- 2 round, 2 flat up
const geolMessage = "You rolled a geol! Move forward 3 spaces!"; //<--- 1 round, 3 flat up
const yutMessage = "You rolled a yut! Move forward 4 space!s"; //<--- 4 flat up + go again
const moMessage = "You rolled a mo! Move forward 5 space!"; //<--- 4 round up + go again

//functions

const init = () => {
  turnMessageEl.textContent = "Let's play! 🔴 goes first!";
  winner = false;
  currentPlayer = "🔴";
  playerRedScore.textContent = `Red: ${redScore}`;
  playerBlueScore.textContent = `Blue: ${blueScore}`;
  // console.log(turnMessageEl)
  //need to remove .flat from sticks
};

// init();

const updateBoard = () => {
  board.forEach((sqr, idx) => {
    squareEls[idx].textContent = sqr;
  });
};
//^taken from my tic tac toe lab

const placePiece = (i) => {
  board[i] = currentPlayer;
  updateBoard();
};
//^taken from my tic tac toe lab

const switchPlayerTurn = () => {
  currentPlayer = currentPlayer === "🔴" ? "🔵" : "🔴";
  if (!winner) {
    turnMessageEl.innerText = turnMessage();
  }
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

//if randomNum < 0.5, add class "round" to stick or have this be default
//if randomNum > 0.5, add class "flat" to stick

//event listeners

rollBtn.addEventListener("click", () => {
  rollSticks(stickOne);
  rollSticks(stickTwo);
  rollSticks(stickThree);
  rollSticks(stickFour);

   if (numFlatSticks.length = 0) {
      turnMessageEl.textContent = moMessage;
   } else if (numFlatSticks.length = 1) {
       turnMessageEl.textContent = doMessage;
   } else if (numFlatSticks.length = 2) {
      turnMessageEl.textContent = geMessage
   } else if (numFlatSticks.length = 3) {
      turnMessageEl.textContent = geolMessage;
   } else {
      turnMessageEl.textContent = yutMessage;
   }


  console.log(numFlatSticks.length);
});

resetBtn.addEventListener("click", init);
