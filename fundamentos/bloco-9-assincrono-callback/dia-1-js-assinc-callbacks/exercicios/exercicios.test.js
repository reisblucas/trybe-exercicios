// ex 7 - escrever um teste que nao de falso positivo
// const uppercase = require('./exercicios');

const uppercase = (str, callback) => {
  setTimeout(() => {
    const upper = str.toUpperCase();
    console.log(upper);
    callback(upper);
  }, 500);
};

describe('Verifica se nao da falso positivo', () => {
  test('Caso passe', (done) => {

    setTimeout(() => {
      uppercase('stomatopoda', (result) => {
        try {
          expect(result).toBe('STOMATOPODA');
          done();
        } catch(error) {
          done(error);
        }
      }, 2000);
    });
  });

  test('Caso falhe', (done) => {

    setTimeout(() => {
      uppercase('stomatopoda', (result) => {
        try {
          expect(result).toBe('STOMAT'); // a diferença nos testes está aqui
          done();
        } catch(error) {
          const message = `Erro 002 - String não é igual o resultado ${result}!`
          done(message);
        }
      }, 2000);
    });
  });
});
