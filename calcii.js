function solve(val) {
    if (val === 'CLR') {
        let y = document.getElementById('input');
        y.value = "";
    }
    else if (val === '=') {
        let x = document.getElementById('input');
        let y = eval(x.value);
        x.value = y;
    }
    else {
        let x = document.getElementById('input');
        x.value += val;
    }
}
