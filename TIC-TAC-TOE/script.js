const cells = document.querySelectorAll('.cell');
const status = document.getElementById('status');
const restartBtn = document.getElementById('restart');

let currentPlayer = 'X';
let board = Array(9).fill('');
let gameActive = true;

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function handleClick(e) {
  const index = e.target.dataset.index;

  if (!gameActive || board[index] !== '') return;

  board[index] = currentPlayer;
  e.target.textContent = currentPlayer;

  if (checkWin()) {
    status.textContent = `${currentPlayer} wins! 🎉`;
    gameActive = false;
    return;
  }

  if (board.every(cell => cell !== '')) {
    status.textContent = "It's a draw!";
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  status.textContent = `Player ${currentPlayer}'s turn`;
}

function checkWin() {
  return winningCombinations.some(combination => {
    const [a, b, c] = combination;
    return (
      board[a] &&
      board[a] === board[b] &&
      board[a] === board[c]
    );
  });
}

function restartGame() {
  board.fill('');
  cells.forEach(cell => (cell.textContent = ''));
  currentPlayer = 'X';
  gameActive = true;
  status.textContent = `Player ${currentPlayer}'s turn`;
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
restartBtn.addEventListener('click', restartGame);

// Initial status
status.textContent = `Player ${currentPlayer}'s turn`;
