//model
var board = ['', '', '',
             '', '', '',
             '', '', ''];
var winner;
var player = ['x', 'o'];
let boardMatrix = document.getElementById("app");
var ledige = [];

//view
showBoard();
function showBoard() {
    let html = '';
    for (let i = 0; i < board.length; i++) {
        html += `<div class="rute ${board[i]} a${i}" onclick="setX(${i}, this.innerText)">${board[i]}</div>`
    }
    boardMatrix.innerHTML = html;
    ;
}


//controller

function setX(i, txt) {
    
    if (txt == '') {
        board.splice(i, 1, 'X');
        console.log(board);
        ledige = Array.from(board.keys()).filter(i => board[i] === '')
        console.log(ledige);
    }
    showBoard();
}
function setRandomO() {

}