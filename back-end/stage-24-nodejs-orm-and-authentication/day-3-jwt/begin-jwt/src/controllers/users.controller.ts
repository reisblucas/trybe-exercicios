import { usersService } from "@services/users.service";
import { NextFunction, Request, Response } from "express";

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  const [users] = await usersService.getAll();

  if (!users) {
    return next({ message: 'User not found.'});
  }

  res.status(200).json(users);
  return;
};

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const response = await usersService.createUser(req.body);

  if (!response) {
    return next({ status: 401, message: 'It\'s not possible create this user' });
  }

  res.status(200).json({ id: response.insertId, ...req.body});
  return;
};

const usersController = {
  getAll,
  createUser,
};

export { usersController };