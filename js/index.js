const a = parseInt(prompt('Enter number:'));
const b = parseInt(prompt('Enter number:'));
const c = parseInt(prompt('Enter number:'));
let x1
let x2

function quadraticE(a, b, c) {
    let d = b * b - 4 * a * c;
    if (d > 0) {
        x1 = (-b - Math.sqrt(d)) / 2 * a;
        x2 = (-b - Math.sqrt(d)) / 2 * a;
        let result = String(x1) + 'and' + String(x2);
        alert('You get two roots:' + result);
    }
    else if (d === 0) {
        x1 = x2 = -b / 2 * a;
        let result = String(x1);
        alert('You get one root: ' + result);
    }
    else {
        alert('There are no real roots! Give me 2$ to get complex roots');
    }
}
quadraticE(a, b, c);
