import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const userCreateDTO = Joi.object({
  username: Joi.string().min(5).required(),
  password: Joi.string().min(5).required(),
  name: Joi.string().min(2).required(),
  age: Joi.number().required(),
});

const validateUserCreation = (req: Request, res: Response, next: NextFunction) => {
  const { username, password, name, age } = req.body;
  const objToBeValidated = { username, password, name, age };

  const { error } = userCreateDTO.validate(objToBeValidated);
  if (error) { return next(error); }

  return next();
};

export { validateUserCreation };