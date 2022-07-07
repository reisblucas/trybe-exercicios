import { Router } from "express";
import { BookController } from "../repositories/controllers/book.controller";

const bookRoute = Router();
const booksController = new BookController();

bookRoute.get('/', booksController.getAll)

export default bookRoute;
