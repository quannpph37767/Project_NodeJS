import express from "express";
const booksRouter = express.Router();
import BooksController from "../controllers/books.js";

const booksContrller = new BooksController();

booksRouter.get("/", booksContrller.getAllBooks);
booksRouter.post("/", booksContrller.createBook);
booksRouter.get("/:id", booksContrller.getBookDetail);
booksRouter.put("/:id", booksContrller.updateBook);
booksRouter.delete("/:id", booksContrller.deleteBook);

export default booksRouter;
