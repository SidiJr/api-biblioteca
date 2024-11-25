const express = require("express");
const routes = express.Router();

const BooksController = require("./controllers/BooksController");

// Rotas Books
routes.get("/books", BooksController.index);
routes.get("/books/:id", BooksController.show);
routes.post("/books", BooksController.store);
routes.put("/books/:id", BooksController.update);
routes.delete("/books/:id", BooksController.delete);
module.exports = routes;
