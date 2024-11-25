const express = require("express");
const routes = express.Router();

const BooksController = require("./controllers/BooksController");
const AuthorsController = require("./controllers/AuthorsController");

// Rotas Books
routes.get("/books", BooksController.index);
routes.get("/books/:id", BooksController.show);
routes.post("/books", BooksController.store);
routes.put("/books/:id", BooksController.update);
routes.delete("/books/:id", BooksController.delete);

// Rotas Authors
routes.get("/authors", AuthorsController.index);
routes.get("/authors/:id", AuthorsController.show);
routes.post("/authors", AuthorsController.store);
routes.put("/authors/:id", AuthorsController.update);
routes.delete("/authors/:id", AuthorsController.delete);

module.exports = routes;