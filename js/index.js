const a = parseFloat(prompt('Enter number:'));
const b = parseFloat(prompt('Enter number:'));
const c = parseFloat(prompt('Enter number:'));

function quadraticE(a, b, c) {
    const d = b * b - 4 * a * c;
    if (d > 0) {
        const x1 = (-b - Math.sqrt(d)) / (2 * a);
        const x2 = (b - Math.sqrt(d)) / (2 * a);
        const result = String(x1) + 'and' + String(x2);
        return ('You get two roots:' + result);
    }
    else if (d === 0) {
       const x1 = -b / (2 * a);
        const result = String(x1);
        return ('You get one root: ' + result);
    }
    else {
        return ('There are no real roots! Give me 2$ to get complex roots');
    }
}
const result = quadraticE(a, b, c);
alert(result)
