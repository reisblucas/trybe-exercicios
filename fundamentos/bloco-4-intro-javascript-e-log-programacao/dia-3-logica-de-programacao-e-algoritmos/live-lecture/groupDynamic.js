// EXEMPLO FOR DENTRO DE FOR
let qtd = 10;
let ingredientes = ["queijo","maionese", "salame", "tomate", "rosbife", "bacon", ];
let sacola = [];

const input = prompt();

function 
    let sanduicheCompleto = true;
    let sanduicheVegetariano = true;

if (sanduicheCompleto === true) {
    for(let index = 0; index < 2; index+=1){
        //console.log('exectuou fora: ', index)
        
            let pao = [];
        
            for( let index = 0; index < ingredientes.length; index+=1){
        // console.log('exectuou dentro: ', index);
            pao.push(ingredientes[index])
            }
        
        sacola.push(pao);
        
        }
}

console.log(sacola)