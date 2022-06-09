import { IUserSignin } from "@customTypes/shared";
import { usersModel } from "@models/users.model";
import { generateJWT } from "src/utils/JWT";
import { rowParser } from "src/utils/rowParser";

const getUserToPayload = async (body: IUserSignin) => {
  const [user] = await usersModel.getUserToPayload(body);

  const [userParsed] = rowParser(user);
  console.log('userParsed', userParsed);

  if (!userParsed) {
    return {
      status: 403,
      message: "Invalid username or password"
    };
  };

  const token = generateJWT(userParsed);
  return { token };
};

const authService = {
  getUserToPayload,
};

export { authService };