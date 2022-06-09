import { NextFunction, Request, Response } from "express";
import Joi from 'joi';

const authDTO = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const validateSignin = (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  const objToBeValidated = { username, password };

  const { error } = authDTO.validate(objToBeValidated);
  if (error) { return next(error); }

  return next();
};

export { validateSignin };