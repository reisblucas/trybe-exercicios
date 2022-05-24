const connection = require('../db/ocorrencias-cidade');

const getAllOcurrences = async () => {
  const query = 'SELECT * FROM ocorrencias;';
  const [ocorrencias] = await connection.execute(query);
  return ocorrencias;
};

module.exports = {
  getAllOcurrences,
}