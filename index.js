var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');
for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;
        if (btntext == 'x') {
            btntext = '*';
        }
        screen.value += btntext;

    });
}

function sin() {
    screen.value = Math.sin(screen.value);
}

function cos() {
    screen.value = Math.cos(screen.value);
}

function tan() {
    screen.value = Math.tan(screen.value);
}

function sinh() {
    screen.value = Math.sinh(screen.value);
}

function cosh() {
    screen.value = Math.cosh(screen.value);
}

function tanh() {
    screen.value = Math.tanh(screen.value);
}

function sqr() {
    screen.value = Math.pow(screen.value, 2);
}

function cube() {
    screen.value = Math.pow(screen.value, 3);
}

function sqrt() {
    screen.value = Math.sqrt(screen.value, 2);
}

function log() {
    screen.value = Math.log(screen.value, 2);
}

function pi() {
    screen.value = 3.14159;
}

function e() {
    screen.value = 2.718;
}

function fact() {
    var i, f, num;
    f = 1;
    num = screen.value;
    for (i = 1; i <= num; i++) {
        f *= i;
    }
    i = i - 1;
    screen.value = f;

}

function reciprocal() {
    screen.value = eval(1 / screen.value);
}


function exp() {
    screen.value = Math.exp(screen.value);
}

function backspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}