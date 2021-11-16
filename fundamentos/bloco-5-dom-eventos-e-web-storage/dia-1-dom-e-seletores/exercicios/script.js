let size = document.getElementsByTagName("p");

console.log(size.length);

let message = 'Trabalhando, viajando, conquistando meus objetivos e crescendo como pessoa.'; 
let upperCase = message.toUpperCase('Trabalhando, viajando, conquistando meus objetivos e crescendo como pessoa.');


for (let i = 0; i < size.length; i += 1) {
    size[i].innerText = upperCase;
    console.log(size[i].innerText);
}

document.getElementById('color').style.backgroundColor = 'rgb(76,164,109)';

document.getElementById('center-color').style.backgroundColor = 'white';

document.getElementsByTagName('h1')[0].innerText = 'Exercício 5.1 - JavaScript';