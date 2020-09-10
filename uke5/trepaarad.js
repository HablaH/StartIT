//model
var board = ['', '', '', '', '', '', '', '', ''];
var blankBoard = ['', '', '', '', '', '', '', '', ''];
var winner = '';
let boardMatrix = document.getElementById("app");
var ledige = [];

//view
showBoard();
function showBoard()
{
    let html = drawBoard();
    // tegn brett eller endscreen med restart
    gameOver() ? html = drawEnd() : html = drawBoard();
    
    boardMatrix.innerHTML = html;
    
}


//controller

function drawBoard() {
    //tegn board.length ruter med onclick="setX"
    let x = '';
    for (let i = 0; i < board.length; i++) {
        x += `<div class="rute ${board[i]} a${i}" onclick="setX(${i}, this.innerText)">${board[i]}</div>`;
    }
    return x;
}

function drawEnd() {
    // tegn end screen med hvem som vant og restart knappp
    let x = '';
    let b = `<button onclick="restart()">Restart</button>`
    if (winner != 'Draw') { x = `<h1>${winner} wins!</h1></br>${b}` } else { x = `<h1>${winner}!</h1></br>${b}`}
    return x;
}
function restart() {
    //restart setter winner og board til blank
    winner = '';
    board = ['', '', '', '', '', '', '', '', ''];
    showBoard();
}

function setX(i, txt) {
    //set X i en rute, lag array for ledige ruter, check win og set O i random ledige rute.
    if (txt == '') {
        board.splice(i, 1, 'X');
        x = Ledige();
        checkWinning()
        showBoard();
        setRandomO(x);
        showBoard();
    } else { return;}
    
}
function setRandomO(i) {
    //set O i ledig rute, check win,
    if (ledige.length != 0) {
        board.splice(i, 1, 'O');
        checkWinning();
    } else { return;}
} 

function Ledige() {
    //lag array av ledige ruter
    ledige = Array.from(board.keys()).filter(i => board[i] === '');
    i = Math.floor(Math.random() * (ledige.length));
    return ledige[i];
}

function checkWinning()
{
    // kjør winCheck på alle vanrette, loddrette og diagonale
    if (winCheck(0, 1, 2)
        || winCheck(6, 7, 8)
        || winCheck(3, 4, 5)
        || winCheck(0, 3, 6)
        || winCheck(1, 4, 7)
        || winCheck(2, 5, 8)
        || winCheck(0, 4, 8)
        || winCheck(2, 4, 6)) {
        console.log(winner)
    }
}

function winCheck(p1, p2, p3) {
    //sjekk mønster for checkWinning
    var c1 = board[p1];
    var c2 = board[p2];
    var c3 = board[p3];
    if (c1 != '' && c1 == c2 && c1 == c3) {
        winner = c1;
        return true;
    } else { return false;}
}

function gameOver() {
    //sjekk om spillet er over
    if (board[0, 1, 2, 3, 4, 5, 6, 7, 8] == blankBoard[0, 1, 2, 3, 4, 5, 6, 7, 8] ) { return false; }
    else if (ledige.length == 0 && winner == '') {
        winner = 'Draw';
        return true;
    }
    else if (winner != '') {
        return true;
    } else { return false;}
}