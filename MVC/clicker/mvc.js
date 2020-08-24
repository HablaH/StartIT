// model
var points = 0;
var pointsPerClick = 1;
var smileyIndex = 0;
var hax = false;

// controller
function doClick() {
    points += pointsPerClick;
    smileyIndex = 1 - smileyIndex;
    updateView();
}

function buyUpgrade() {
    if (points < 10) return;
    points -= 10;
    pointsPerClick++;
    updateView();
}

function doCheat() {
    points = points * 10;
    pointsPerClick = pointsPerClick * 10;
    alert("Cheater");
    hax = true;
    updateView();
}



// view
updateView();
function updateView() {
    var smiley = smileyIndex == 0 ? '😀' : '😁';
    document.getElementById('app').innerHTML = `
                <div id="image" onclick="doClick()">${smiley}</div>
                <div id="pointsInfo">${points}</div>
                <button onclick="buyUpgrade()">Kjøp oppgradering (10 poeng)</button>
                <button onclick="doCheat()">H4x</button>
                <p>${(hax) ? "Du har jukset!" : ""} <p>
            `;
}