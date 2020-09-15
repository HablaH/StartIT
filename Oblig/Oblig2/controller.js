// controller
function selectBar(barNo) {
    if (chosenBar == barNo) {
        chosenBar = '';
    } else { chosenBar = barNo; }
    show();
}

function changeBar(val) {
    if ((inputValue >= 1) && (inputValue <= 10)) {
        numbers[(val - 1)] = inputValue;
        show();
    } else { alert('Verdi må være mellom 1 og 10'); }
}

function removeBar(num) {
    numbers.splice(num - 1, 1);
    show();
}
function addBar() {
    if (numbers.length < 10) {
        if ((inputValue >= 1) && (inputValue <= 10)) {
            x = parseInt(inputValue);
            numbers.push(x);
            inputValue = '';
            show();
        } else { alert('Verdi må være mellom 1 og 10'); }
    } else { alert('kan bare vise 10 stolper, du må fjerne for å lage plass til flere') }
}