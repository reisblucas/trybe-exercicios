// // Exercicio 1.1

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: 'Sim',
// };

// console.log(info);

// console.log('Bem-vinda, ' + info.personagem + '.');

// // Exercicio 1.2

// console.log(info);

// // Exercicio 1.3

// for (let key in info) {
//     console.log(key);
// }

// // Exercicio 1.4

// for (let key in info) {
//     console.log(info[key]);
// }

// Exercicio 1.5

// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//     nota: 'O último MacPatinhas',
//     recorrente: 'Sim',
// };

// function adiciona() {
//     for (let key in info) {
//         columnInfo = info[key];
//         if (info[key] !== 'Sim') {
//             console.log(info[key]);
//         } else {
//             break
//         }
//     };
//     for (let coin in info2) {
//         columnInfo2 = info2[coin];
//         if (info[coin] !== 'Sim') {
//             console.log(info2[coin]);
//         } else {
//             break
//         }
//     };
// };

// function data() {
//     let columnInfo = 2;
//     let columnInfo2 = 1;
//     while (columnInfo != columnInfo2) {
//         for (let key in info) {
//             columnInfo = info[key];
//             if (info[key] !== 'Sim') {
//                 console.log(info[key]);
//             } else {
//                 break
//             }
//         };
//         for (let coin in info2) {
//             columnInfo2 = info2[coin];
//             if (info[coin] !== 'Sim') {
//                 console.log(info2[coin]);
//             } else {
//                 break
//             }
//         };
//     }
    
// };

// console.log(data());

// // Exercicio 1.6

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

let livro = leitor.livrosFavoritos[0];

console.log('O livro de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + livro.titulo);

// // Exercicio 1.7

let harryPotter = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editor: 'Rocco',
};

leitor.livrosFavoritos.push(harryPotter);

console.log(leitor.livrosFavoritos);

// Exercicio 1.8

console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');