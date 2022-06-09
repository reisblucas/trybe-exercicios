import { usersController } from "@controllers/users.controller";
import { Router } from "express";
import rescue from 'express-rescue';
import { mid } from "../middlewares";

const usersRoutes = Router();

usersRoutes.route('/')
  .get(usersController.getAll)
  .post(mid.validateUserCreation, rescue(usersController.createUser));

export { usersRoutes };