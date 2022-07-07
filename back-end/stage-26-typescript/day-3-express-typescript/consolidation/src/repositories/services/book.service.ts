import connection from "../../db";
import Book from "../../interfaces/book.interface";
import BookModel from "../models/book.model";

class BookService {
  public model: BookModel;

  constructor() {
    this.model = new BookModel(connection);
  }

  public getAll = async (): Promise<Book[]> => this.model.getAll();
}

export default BookService;
