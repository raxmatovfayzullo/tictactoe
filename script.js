const container = document.querySelector(".container");
const game = document.querySelector(".game");
const restart = document.querySelector("button.restart");
const buttons = document.querySelector(".buttons");
const nextPlayer = document.querySelector(".player");

const cells = game.querySelectorAll(".cell");
const winnerElm = game.querySelector(".winner");
const board = new Array(9).fill(NaN);
let currentPlayer = "X";
let winnerExist = false;
let num = 1;
let mainArray = [];
const positions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

restart.addEventListener("click", () => {
  ctrl + r;
});

function checkWinner() {
  for (let position of positions) {
    const [x, y, z] = position;
    if (board[x] === board[y] && board[y] === board[z]) return true;
  }
}

cells.forEach((cell, idx) => {
  cell.addEventListener("click", () => {
    const value = cell.innerText;
    let createBtn = document.createElement("button");
    createBtn.classList.add("go-to-move");
    createBtn.innerText = `Go to move #${num++}`;
    buttons.appendChild(createBtn);
    if (!winnerExist && !value) {
      board[idx] = currentPlayer;
      cell.innerText = currentPlayer;
      winnerExist = checkWinner();
      if (winnerExist) {
        winnerElm.innerText = `Winner: ${currentPlayer}`;
      }
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      nextPlayer.innerText = `New Player: ${currentPlayer}`;
    }
  });
});

