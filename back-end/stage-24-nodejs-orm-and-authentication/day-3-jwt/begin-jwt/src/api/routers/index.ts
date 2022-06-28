import { Router } from 'express';
import { usersRoutes } from './usersRoutes';
import { loginRoute } from './loginRoute';

const routers = Router();

routers.use('/users', usersRoutes);
routers.use('/login', loginRoute);

export { routers };