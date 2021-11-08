// Exercício 1:

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = ['Consultoria', 'Prestação de Serviços', 'Treinamentos']

menu.push(menuServices);

if (menu[1] === 'Serviços') {
    console.log(menuServices);
}

console.log(menu[1]);

// Exercício 2:

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

// Exercício 3:

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

menu.push('Contato');

console.log(menu);