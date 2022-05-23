const connection = require('../db/ocorrencias-cidade');

const getAllOcurrences = async () => {
  const query = 'SELECT * FROM ocorrencias;';
  const [ocorrencias] = await connection.execute(query);

  console.log('log no model', ocorrencias);

  return ocorrencias;
};

module.exports = {
  getAllOcurrences,
}