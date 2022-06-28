import { authService } from "@services/auth.service";
import { NextFunction, Request, Response } from "express";

const authenticateUser = async (req: Request, res: Response, next: NextFunction) => {
  const token = await authService.getUserToPayload(req.body);

  if (token.status) {
    return next(token);
  }

  res.status(200).json(token);
  return;
};

const loginController = {
  authenticateUser,
};

export { loginController };