const connection = require('../db');

const getAll = () => {
  return connection.execute("SELECT * FROM characters");
}

const getById = (id) => {
  return connection.execute("SELECT * FROM characters WHERE id = ?", [id]);
}

module.exports = {
  getAll,
  getById,
};
