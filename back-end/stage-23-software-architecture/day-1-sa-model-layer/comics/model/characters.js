const connection = require('../db');

const getAll = () => {
  return connection.execute("SELECT * FROM characters");
};

const getById = (id) => {
  return connection.execute("SELECT * FROM characters WHERE id = ?", [id]);
};

const add = async (name, cartoon, year) => {
  const [row] = await connection.execute("INSERT INTO characters (name, cartoon, year) VALUES (?, ?, ?)", [name, cartoon, year]);
  return { id: row.insertId, name, cartoon, year };
};

module.exports = {
  getAll,
  getById,
  add,
};
