let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

function makeMove(cellIndex) {
  if (gameActive && board[cellIndex] === "") {
    board[cellIndex] = currentPlayer;
    document.querySelectorAll(".cell")[cellIndex].textContent = currentPlayer;
    document.querySelectorAll(".cell")[cellIndex].classList.remove("x", "o");
    document.querySelectorAll(".cell")[cellIndex].classList.add("selected", currentPlayer);

    if (checkWin()) {
      document.getElementById("status").textContent = "¡Jugador " + currentPlayer + " ha ganado!";
      gameActive = false;
    } else if (board.every((cell) => cell !== "")) {
      document.getElementById("status").textContent = "¡Empate!";
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      document.getElementById("status").textContent = "Turno de Jugador " + currentPlayer;
    }
  }
}

function checkWin() {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
    [0, 4, 8], [2, 4, 6] // Diagonales
  ];

  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }
  return false;
}

function resetBoard() {
  currentPlayer = "X";
  board = ["", "", "", "", "", "", "", "", ""];
  gameActive = true;

  document.querySelectorAll(".cell").forEach((cell) => {
    cell.textContent = "";
    cell.classList.remove("selected", "X", "O");
  });

  document.getElementById("status").textContent = "Turno de Jugador X";
}

document.querySelector("button").addEventListener("click", resetBoard);

document.getElementById("status").textContent = "Turno de Jugador X";

