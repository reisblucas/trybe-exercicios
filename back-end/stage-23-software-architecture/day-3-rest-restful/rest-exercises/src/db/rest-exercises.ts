import { createPool } from "mysql2/promise";
import 'dotenv/config';

const connection = createPool({
  host: process.env.DB_HOST,
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

export default connection;
