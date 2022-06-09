import { IUserSignup } from "@customTypes/shared";
import { usersModel } from "@models/users.model";
import { rowParser } from "src/utils/rowParser";

const getAll = () => usersModel.getAll();

const createUser = async (body: IUserSignup) => {
  const [response] = await usersModel.createUser(body);

  return rowParser(response);
};

const usersService = {
  getAll,
  createUser,
};

export { usersService };