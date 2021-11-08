const a = 35;
const b = 35;
const c = 110;
const plusSides = a + b + c;
const iaTriangle = 180; // ia = intern angle.
let invalid;
const result = plusSides === iaTriangle;

//Validar lados.

if (a === 0) {
    invalid = 'Invalid angle';
} else if (a < 0) {
    invalid = 'Invalid angle';
} else if (a >= 180) {
    invalid = "It's not a triangle";
} else if (b === 0) {
    invalid = 'Invalid angle';
} else if (b < 0) {
    invalid = 'Invalid angle';
} else if (b >= 180) {
    invalid = "It's not a triangle";
}  else if (c === 0) {
    invalid = 'Invalid angle';
} else if (c < 0) {
    invalid = 'Invalid angle';
} else if (c >= 180) {
    invalid = "It's not a triangle";
} else {
    invalid = 'Ok';
}

//Mostrar o resultado;

if (invalid === 'Ok') {
    console.log(result);
} else if (invalid === 'Invalid angle') {
    console.log('Inválido');
} else {
    console.log("Sorry, it's not a triangle.");
}