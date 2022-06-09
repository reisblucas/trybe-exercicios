import { loginController } from '@controllers/login.controller';
import { Router } from 'express';
import rescue from 'express-rescue';
import { mid } from '../middlewares';

const loginRoute = Router();

loginRoute.route('/')
  .post(mid.validateSignin, rescue(loginController.authenticateUser));

export { loginRoute };