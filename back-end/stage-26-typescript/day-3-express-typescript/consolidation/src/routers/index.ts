import { Router } from "express";
import bookRoute from "./books.routes"

const routers = Router();

routers.use('/book', bookRoute);

export { routers };