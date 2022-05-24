const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  port: 3306,
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "root",
  database: process.env.DB_DATABASE || "cep_lookup",
});

module.exports = connection;