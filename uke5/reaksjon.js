//model
var antall = "25";
var blink = "5";
var blinks = "0";
var on = [false, false, false, false, false,
          false, false, false, false, false,
          false, false, false, false, false,
          false, false, false, false, false,
          false, false, false, false, false,
          false, false, false, false, false,
          false, false, false, false, false, false]
var timeID;
var startTime;
var finishTime;
var spentMilliseconds = '';
var totalTider = [];
var total = '';
var snitt = '';



//view
updateView();
function updateView() {
    let html = tegnSirkel();

    document.getElementById("app").innerHTML = `
        <div class="brett">${ html}</div>
        <div>
        <select name="blink" id="blinkS" onchange="blink=this.value">
            <option value="">hvor mange blink?</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
        </select>
        <select name="ruter" id="ruterS" onchange="antall=this.value">
            <option value="">hvor mange ruter?</option>
            <option value="9">9</option>
            <option value="16">16</option>
            <option value="25">25</option>
            <option value="36">36</option>
        </select>
</div>

        <div><div>tid per blink:${spentMilliseconds}ms. total tid:${total}ms. snitt tid:${snitt}ms.</div><button onclick="startGame()">Start Game</button></div>`;
}




//controller
//tegn sirkel med ternary onclick bool og ternary on class.
function tegnSirkel() {
    x = '';
for (let i = 0; i <= antall-1; i++) {
    x += `<div class="rute ${on[i] ? 'on' : ''}" onclick="${on[i] ? 'trykk()' : ''}"></div>`
}
    return x;
}
//skrur av en rute, setter finishTime stopper delayed off funskjon og regner ut 
function trykk() {
    on[i] = false;
    finishTime = new Date().getTime();
    clearTimeout(timeID);
    utregningTid();
    updateView();
}
// hvis ikke nok blink har hendt, blink random, start tid, start timeout for off()
function randomOn() {
    if (blinks < blink) {
    i = Math.floor(Math.random() * antall);
    on[i] = true;
    blinks++;
    startTime = new Date().getTime();
    updateView();
    timeID = setTimeout(off, 1500);
        updateView();
    } else { clearInterval(blinkID); }
    
}
//skrur av en rute, setter finishTime og regner ut
function off() {
    on[i] = false;
    finishTime = new Date().getTime();
    utregningTid();
    updateView();
}
// starter spill med valgt antall ruter og blink
function startGame() {
    gridFix()
    blinks = "0";
    totalTider = [];
    updateView();
    blinkID = setInterval(randomOn, 2000);    
}
// regner ut finish - startTime lagrer tidene for hvert klikk og regner total og snitt
function utregningTid() {
    spentMilliseconds = Math.floor(finishTime - startTime);
    //spentSeconds = spentMilliseconds / 1000;?
    totalTider.push(spentMilliseconds);
    total = totalTider.reduce((a, b) => a + b, 0);
    snitt = total / totalTider.length;
}
// setter ruterbredde var i css, til kvadratroten av antall
function gridFix() {
    x = Math.sqrt(antall);
    document.documentElement.style
        .setProperty('--ruterbredde', x);
}