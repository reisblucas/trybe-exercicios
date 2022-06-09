import { validateSignin } from "./validateSignin";
import { validateUserCreation } from "./validateUserCreation";
import errorHandler from "./errorHandler";

const mid = {
  validateUserCreation,
  validateSignin,
  errorHandler,
};

export { mid };