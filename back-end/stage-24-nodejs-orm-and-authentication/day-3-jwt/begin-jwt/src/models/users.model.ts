// import { coo } from "src/db";
import { IUserSignin, IUserSignup } from "@customTypes/shared";
import { connection } from "../db";

const getAll = () => {
  const query = 'SELECT * FROM users;';

  return connection.execute(query);
};

const createUser = (body: IUserSignup) => {
  const { name, password, username, age } = body;
  const query = 'INSERT INTO users (name, password, username, age) VALUES (?, ?, ?, ?);'

  return connection.execute(query, [name, password, username, age]);
};

const getUserToPayload = (body: IUserSignin) => {
  const { username, password } = body;
  const query = `SELECT u.id, u.name, u.username, u.age FROM users AS u WHERE username = ? AND password = ?;`;

  return connection.execute(query, [username, password]);
};

const usersModel = {
  getAll,
  createUser,
  getUserToPayload,
};

export { usersModel };