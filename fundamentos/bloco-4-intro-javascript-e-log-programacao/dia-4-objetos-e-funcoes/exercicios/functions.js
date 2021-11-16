// function verificaPalindromo(string) {
//     let a = string;
//     let newArray = a.split("").reverse().join("");
// }
// console.log(verificaPalindromo('arara'));

// Exercicio 2.1

// Só funciona para strings, devo incrementar o código para funcionar com integer
// function palindromeChecker(str) {
//     let newArray = str.split('').reverse().join('');
//     let isPalindrome;
//     if (str.length > 2) {
//         for (let i = 0; i < str.length; i+=1) {
//             if (str[i] === newArray[i]) {
//                 return isPalindrome = true;
//             } else {
//                 return isPalindrome = false;
//             };
//         };
//     } else {
//         return isPalindrome = false;
//     }
// };


// console.log(palindromeChecker('papapapapapap'));

// Exercicio 2.2


// Serve para retornar o valor do maior indice

// let array = [13, 22, 6, 36, 10, 1, 25, 26];

// function greaterIndex () {
//     let greater = 0;
//     for (let i = 0; i < array.length; i += 1) {
//         for (let j = 1 ; j < array.length ; j += 1) {
//             if (array[i] > array[j] && greater < array[i]) {
//                 greater = array[i];
//             } else {
//                 continue
//             };
//         };
//     };
//     return array.indexOf(greater);
// };

// console.log(greaterIndex());

// // Exercicio 2.3

// let array = [10, 222, -33, -40, -2, 50, 555, -1];

// function lessIndex () {
//     let less = array[0];
//     for (let i = 0; i < array.length; i += 1) {
//         for (let j = 1 ; j < array.length ; j += 1) {
//             if (less < array[i]) {
//                 continue
//             } else {
//                 less = array[i];
//             };
//         };
//     };
//     return array.indexOf(less);
// };

// console.log(lessIndex())

// Exercicio 2.4

let nameList = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function greaterWord () {
    let name1;
    let name2;
    let longestName;
    for (let i = 0; i < nameList.length; i += 1) {
        for (let j = 1; j < nameList.length; j += 1) {
            name1 = nameList[i];
            name2 = nameList[j];
            if (name1.length < name2.length) {
                continue
            } else {
                longestName = name1;
            }
        }
    }
    return longestName;
}

console.log(greaterWord());

console.log(nameList.length[1]);
