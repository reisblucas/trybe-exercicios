let fruits = [3, 4, 10, 1, 12];
let resultado = 0;

for (let i = 0; i < fruits.length; i+=1) {
    resultado += fruits[i];
}

if (resultado > 15) {
    console.log(resultado);
} else {
    console.log('Valor menor que 16.')
}
