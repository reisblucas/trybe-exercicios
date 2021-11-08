const { PassThrough } = require("stream");
const { resourceLimits } = require("worker_threads");

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* // 1 - Imprime todos os valores da array.

for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
} */

/* // 2 - Soma todos os valores contidos no array e imprima o resultado;

let result = 0;

for (let i = 0; i < numbers.length; i += 1) {
    result += numbers[i];
}

console.log(result); */

/* // 3 - Calcular a média e imprimir
let result = 0;

for (let i = 0; i < numbers.length; i += 1) {
    result += numbers[i];
}

let arithmeticMean = (result / numbers.length);
console.log(arithmeticMean); */

/* // 4 - mensagem

let result = 0;

for (let i = 0; i < numbers.length; i += 1) {
    result += numbers[i];
}

let arithmeticMean = (result / numbers.length);

if (arithmeticMean > 20) {
    console.log('Valor maior que 20.');
} else { 
    console.log('Valor menor ou igual a 20.');
} */

/* // 5 - imprimir o maior número no array
let printGreater = 0;

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > numbers[i + 1]) {
        if (numbers[i] >= printGreater){
            printGreater = numbers[i]
        }
    }
}

console.log(printGreater); */

/* // 6 - odd number in array

let oddNumbers = [];

for (let i = 0; i < numbers.length; i+= 1) {
    const isItOddNumbers = numbers[i] % 2;
    if (isItOddNumbers > 0) {
        oddNumbers.push(numbers[i]);
    }
}

console.log(oddNumbers); */

/* // 7 - menor valor na array;
let fewerNumber = 0;

for (let i = 0; i < numbers.length; i += 1) {
    if (i === 0) {
        fewerNumber = numbers[0];
    }
    if (numbers[i] < fewerNumber) {
        fewerNumber = numbers[i];
    }
}

console.log(fewerNumber); */

/* // 8 - array de 1 até 25
let oneUntil25 = [];

for (let i = 0; i < numbers.length; i += 1) {
    numbers.sort(function(a, b){return a-b});
    if (numbers[i] < 25) {
        oneUntil25.push(numbers[i]);
    }
}

console.log(oneUntil25); */

// 9 - array do exercicio 8, print resultado por 2

let oneUntil25 = [];

for (let i = 0; i < numbers.length; i += 1) {
    numbers.sort(function(a, b){return a-b});
    if (numbers[i] < 25) {
        oneUntil25.push(numbers[i]);
    }
}

for (let i = 0; i < oneUntil25.length; i += 1) {
    divFor2 = oneUntil25[i] / 2;
    console.log(divFor2);
}