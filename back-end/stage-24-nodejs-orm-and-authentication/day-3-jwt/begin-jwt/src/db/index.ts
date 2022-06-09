import * as dotenv from "dotenv";
import { createPool } from 'mysql2/promise';

dotenv.config();

const connection = createPool({
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
});

export { connection };