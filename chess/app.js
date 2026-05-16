const boardSize = 15;
const board = Array(boardSize).fill().map(() => Array(boardSize).fill(null));
let currentPlayer = 'black';
let gameOver = false;

const gameBoard = document.getElementById('game-board');
const statusDisplay = document.getElementById('status');
const resetButton = document.getElementById('reset-btn');

// 初始化棋盘
function initializeBoard() {
    gameBoard.innerHTML = '';
    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.addEventListener('click', handleCellClick);
            gameBoard.appendChild(cell);
        }
    }
}

// 处理点击事件
function handleCellClick(e) {
    if (gameOver) return;

    const row = parseInt(e.target.dataset.row);
    const col = parseInt(e.target.dataset.col);

    if (board[row][col] !== null) return;

    board[row][col] = currentPlayer;
    renderPiece(row, col, currentPlayer);

    if (checkWin(row, col)) {
        statusDisplay.textContent = `游戏结束! ${currentPlayer === 'black' ? '黑棋' : '白棋'}获胜!`;
        gameOver = true;
        return;
    }

    currentPlayer = currentPlayer === 'black' ? 'white' : 'black';
    statusDisplay.textContent = `当前回合: ${currentPlayer === 'black' ? '黑棋' : '白棋'}`;
}

// 渲染棋子
function renderPiece(row, col, player) {
    const cell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
    const piece = document.createElement('div');
    piece.classList.add('piece', player);
    cell.appendChild(piece);
}

// 检查胜利条件
function checkWin(row, col) {
    const directions = [
        [0, 1],   // 水平
        [1, 0],   // 垂直
        [1, 1],   // 对角线
        [1, -1]   // 反对角线
    ];

    for (const [dx, dy] of directions) {
        let count = 1;

        // 正向检查
        for (let i = 1; i < 5; i++) {
            const newRow = row + dx * i;
            const newCol = col + dy * i;
            if (newRow < 0 || newRow >= boardSize || newCol < 0 || newCol >= boardSize || 
                board[newRow][newCol] !== currentPlayer) {
                break;
            }
            count++;
        }

        // 反向检查
        for (let i = 1; i < 5; i++) {
            const newRow = row - dx * i;
            const newCol = col - dy * i;
            if (newRow < 0 || newRow >= boardSize || newCol < 0 || newCol >= boardSize || 
                board[newRow][newCol] !== currentPlayer) {
                break;
            }
            count++;
        }

        if (count >= 5) return true;
    }

    return false;
}

// 重置游戏
function resetGame() {
    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            board[i][j] = null;
        }
    }
    currentPlayer = 'black';
    gameOver = false;
    statusDisplay.textContent = '当前回合: 黑棋';
    initializeBoard();
}

resetButton.addEventListener('click', resetGame);

// 初始化游戏
initializeBoard();
