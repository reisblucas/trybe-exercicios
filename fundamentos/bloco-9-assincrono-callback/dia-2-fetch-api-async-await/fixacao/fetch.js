const fetch = require('node-fetch');

// const fetchJoke = async () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   const result = await fetch(url)
//     .then((response) => response.json())
//     .then((data) => data.value)
//     .catch((error) => `Algo deu errado :( \n${error}`);

//   console.log(result);
// }

// fetchJoke();

// Algo deu errado :( 
// TypeError: Only absolute URLs are supported

// Refatorando com Try e Catch

const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.value);
  } catch(error) {
    console.log(`Algo deu errado :( \n${error}`);
  }
}

fetchJoke();

fetch()

// fixacao

// 1 - O que é um código que é executado de modo assíncrono? Qual é a diferença disso para um código que é executado de modo síncrono?

/* 
Resposta:

Quando ele é jogado para backgroun e outras coisas do código são executadas ao longo do código. Assim que terminar a tarefa atual, e o código assincrono tiver obtido uma resposta/terminado, será retornado consecutivamente após o termino do código que estiver rodando.

*/

// 2 - Quando você tem que enfileirar várias callbacks , que problema surge?

/* 
Resposta:

Surge a callback hell e para isso o JS foi implementado com as Promises, junto com o asyn e await que deixam nosso código mais organizado, legível e conciso.

*/

// 3 - Por que as Promises são uma forma de resolver esse problema?

/* 
Resposta:

Além de resolver o problema de pirâmide, organização e legibilidade,foi criado justamente para testar, buscar a api, com as requisições e a gente trabalhar em cima da Promise dependendo do retorno dessa. Sendo, 200 ou 404. 
200 -> true, fullfilled e retorno da requisição. 
404 -> false, rejected e retorno com o erro.

Quando for true, trabalharemos em cima do retorno da requisição que foi retornada.

*/

// 4 - Quando você vai se comunicar com uma API , tal comunicação deve ser síncrona ou assíncrona? Lembre-se de que o serviço ao qual você está se conectando pode demorar muito ou pouco para dar retorno, pode estar fora do ar etc.

/* 
Resposta:

Assincrona pelo fato do tempo de resposta da API e o retorno da sua requisição, não sabe o imprevisto que pode haver, diante disso, sempre será trabalhado de modo assincrono quando for se comunicar com um servidor externo, já que a sua máquina local, sempre te trará na menor velocidade possível, além de, possivelmente, ser uma garantia de retorno. Já uma API não pode se dizer o mesmo.

*/

// 5 - Dada a resposta anterior, o que é fetch e para que ele serve?

/* 
Resposta:

fetch é a função primária da Fetch API, a qual é a base para ser feita requisição do que está querendo buscar. Só então determinamos o código seguinte.

*/
