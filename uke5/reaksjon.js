//model
var antall = "25";
var on = [false, false, false, false, false,
          false, false, false, false, false,
          false, false, false, false, false,
          false, false, false, false, false,
          false, false, false, false, false,]



//view
updateView();
function updateView() {
    let html = tegnSirkel();

    document.getElementById("app").innerHTML = html;
}




//controller
function tegnSirkel() {
    x = '';
for (let i = 0; i <= antall-1; i++) {
    x += `<div class="rute ${on[i] ? 'on' : ''}" onclick="${on[i] ? 'trykk()' : ''}"></div>`
}
    return x;
}

function trykk() {
    on[i] = false;
    updateView();
}

function randomOn() {
    i = Math.floor(Math.random() * 25);
    on[i] = true;
    updateView();
    setTimeout(off, 3000);
    
}
function off() {
    on[i] = false;
    updateView();
}
