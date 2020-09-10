//model
var brett = ['1', '2', '3', '4', '5', '6', '7', '', '8'];
var rett = ['1', '2', '3', '4', '5', '6', '7', '8', ''];
var blank = null;
var row = ['0', '0', '0', '1', '1', '1', '2', '2', '2'];
var win = false;

//view
updateView();
function updateView() {
    let html = drawBrett();
    
    document.getElementById("app").innerHTML = html;
}



//controller
function drawBrett() {
    x = '';
    for (let i = 0; i < brett.length; i++) {
        x += `<div class="rute" onclick="move(${i})">${brett[i]}</div>`;
    }
    win ? x += `<h1>Du klarte det!<h1>` : '';
    return x;
}

function move(i,) {
    finnBlank();
    let x = brett[blank];
    if (nextToBlank(i)) {
        brett[blank] = brett[i];
        brett[i] = x;
    }
    checkWin();
    updateView();
}

function finnBlank() { 
    blank = brett.indexOf('');
}
function nextToBlank(i) {
    //left
    if (i == blank - 1 && row[i] == row[blank]) {
        return true;
    }
    //right
    else if (i == blank + 1 && row[i] == row[blank]) {
        return true;
    }
    //up
    else if (i == blank - 3 && row[i] == row[blank] - 1) {
        return true;
    }
    //down
    else if (i == blank + 3 && row[i] == +row[blank] + 1) {
        return true;
    } else { return false;}
}
function checkWin() {
    for (let i = 0; i < brett.length; i++) {
        if (brett[i] != rett[i]) {
            win = false;
            return;
        }
    }
    win = true;
}