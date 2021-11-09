let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* // Bônus 1

console.log(numbers.sort(function(a, b){return a-b}));
 */

/* // Bônus 2

console.log(numbers.sort(function(a, b){return b-a}));
 */

// Bônus 3

let newArray = [];

for (let i = 0; i < (numbers.length); i += 1) {
    const multipleNext = numbers[i] * numbers[i+1];
    if (numbers) {
        newArray.push(numbers[i] * 2);
    } else {
        newArray.push(multipleNext);
    }
    

}
console.log(newArray);