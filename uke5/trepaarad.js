//model
var board = ['', '', '', '', '', '', '', '', ''];
var blankBoard = ['', '', '', '', '', '', '', '', ''];
var winner = '';
var player = ['x', 'o'];
let boardMatrix = document.getElementById("app");
var ledige = [];

//view
showBoard();
function showBoard()
{
    let html = drawBoard();
    gameOver() ? html = drawEnd() : html = drawBoard();
    
    
    boardMatrix.innerHTML = html;
    
}


//controller

function drawBoard() {
    let x = '';
    for (let i = 0; i < board.length; i++) {
        x += `<div class="rute ${board[i]} a${i}" onclick="setX(${i}, this.innerText)">${board[i]}</div>`;
    }
    return x;
}
function drawEnd() {
    let x = '';
    let b = `<button onclick="restart()">Reset</button>`
    if (winner != 'Draw') { x = `<h1>${winner} wins!</h1></br>${b}` } else { x = `<h1>${winner}!</h1></br>${b}`}
    return x;
}
function restart() {
    winner = '';
    board = ['', '', '', '', '', '', '', '', ''];
    showBoard();
}

function setX(i, txt) {
    
    if (txt == '') {
        board.splice(i, 1, 'X');
        console.log(board);
        x = Ledige();
        checkWinning()
        setRandomO(x);
        showBoard();
    } else { return;}
    
}
function setRandomO(i) {
    if (ledige.length != 0) {
        board.splice(i, 1, 'O');
        checkWinning();
    } else { return;}
} 

function Ledige() {
    ledige = Array.from(board.keys()).filter(i => board[i] === '');
    i = Math.floor(Math.random() * (ledige.length));
    return ledige[i];
}

function checkWinning() {
    if (winCheck(0, 1, 2)
        || winCheck(3, 4, 5)
        || winCheck(6, 7, 8)
        || winCheck(0, 3, 6)
        || winCheck(1, 4, 7)
        || winCheck(2, 5, 8)
        || winCheck(0, 4, 8)
        || winCheck(2, 4, 6)) {
        console.log(winner); 
    }
}
function winCheck(p1, p2, p3) {
    var c1 = board[p1];
    var c2 = board[p2];
    var c3 = board[p3];
    if (c1 != '' && c1 == c2 && c1 == c3) {
        winner = c1;
        return true;
    } else { return false;}
}
function gameOver() {
    if (board[0, 1, 2, 3, 4, 5, 6, 7, 8] == blankBoard[0, 1, 2, 3, 4, 5, 6, 7, 8] ) { return false; }
    else if (ledige.length == 0 && winner == '') {
        console.log("Draw")
        winner = 'Draw';
        return true;
    }
    else if (winner != '') {
        console.log(winner)
        return true;
    } else { return false;}
}