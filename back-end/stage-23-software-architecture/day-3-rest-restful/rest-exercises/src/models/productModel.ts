import connection from "../db/rest-exercises";
import queryParserTS from "../utils/queryParserTS";

const add = async (name: string, brand: string) => {
  try {
    const [result] = await connection.query('INSERT INTO products (name, brand) VALUES (?, ?);', [name, brand]);

    const parsedResults = queryParserTS(result);

    return { id: parsedResults.insertId, name, brand };
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const getAll = async () => {
  try {
    const [rows] = await connection.query('SELECT * FROM products');
    return rows;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const getById = async (id: number) => {
  try {
    const [result] = await connection.query('SELECT * FROM products WHERE id = ?', [id]);

    const parsedResults = queryParserTS(result);

    if (!parsedResults.length) return null;
    return parsedResults[0];
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const update = async (id: number, name: string, brand: string) => {
  try {
    const [result] = await connection.query(
      'UPDATE products SET name = ?, brand = ? WHERE id = ?',
      [name, brand, id],
    );
    return result;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const exclude = async (id: number) => {
  try {
    const product = await getById(id);
    if (!product) return {};
    await connection.query('DELETE FROM products WHERE id = ?', [id]);
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

export default { add, getAll, getById, update, exclude };
