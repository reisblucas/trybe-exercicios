const a = -5;
let classification;

if (a < 0) {
    classification = 'Negativo';
} else if (a > 0) {
    classification = 'Positivo';
} else if (a === 0) {
    classification = 'Neutro';
} else {
    classification = 'There is no number.'
}

console.log(classification);