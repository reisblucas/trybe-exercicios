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

// let array = [10, 222, -33, -40, -2, 50, -555, -1];

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

// let nameList = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

// function greaterWord () {
//     let resultado = nameList[0];
//     for(let i = 0; i < nameList.length - 1; i += 1) {
//         if (nameList[i] > nameList[i + 1]) {
//             if (nameList[i] > resultado) {
//                 resultado = nameList[i + 1];
//             }
//         }
//     }
//     return resultado;
// }

// Exercicio 2.5

let array = [2, 3, 2, 5, 8, 2, 3, 5, 5, 5, 6, 6, 6, 6, 6, 7];

function highestRepeat() {
    let object = {};
    for (let i = 0; i < array.length; i += 1) {
        if (object[array[i]]) {
            object[array[i]] += 1
        } else {
            object[array[i]] = 1
        }
    }
    let objectLength = Object.keys(object).length;
    console.log(objectLength)

    let objectReversed = Object.keys(object).reverse()
    console.log(objectLength);
    console.log(objectReversed)

    console.log(objectReversed[0] == 8)
    limite de 10 no contador

    console.log(object)
    let resultado = 0;
    for (let i = 0; i < 10; i += 1) {
        if (object[i] > object[i + 1]) {
            resultado = object[i];
            console.log(resultado)
        } 
    }
    
    return resultado;
}
console.log(highestRepeat(array));

// Exercicio 2.6

// function sum(n) {
//     if (n === 1) {
//         return n;
//     } else {
//         let resultado = 0;
//         for (let i = 1; i <= n; i += 1) {
//             resultado += i;
//         }
//         return resultado;
//     }
// }

// console.log(sum(256))

// Exercicio 2.7

function endVerify (a, b) {
    
}