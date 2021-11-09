/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 */
/* // Bônus 1

console.log(numbers.sort(function(a, b){return a-b}));
 */

/* // Bônus 2

console.log(numbers.sort(function(a, b){return b-a}));
 */

// Bônus 3

/* let newArray = [];

for (let i = 0; i < (numbers.length); i += 1) {
    const multipleNext = numbers[i] * numbers[i+1];
    if (numbers) {
        newArray.push(numbers[i] * 2);
    } else {
        newArray.push(multipleNext);
    }
    

}
console.log(newArray); */

// Bônus 3-1 - Concluído

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let resultado = [];

for (let i = 0; i < numbers.length; i+=1) {
        if (i < (numbers.length - 1)) {
            multiplyNext = numbers[i] * numbers[i+1];
            resultado.push(multiplyNext);
        } else {
            multiplyPer2 = numbers[i] * 2;
            resultado.push(multiplyPer2);
        }
}

console.log('Nova array: ', resultado);