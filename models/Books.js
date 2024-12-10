const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

// Define o schema do Curso
const BooksSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  pageCount: {
    type: Number,
    required: true,
  },
  excerpt: {
    type: String,
    required: true,
  },
  publishDate: {
    type: Date,
    required: true,
  },
  idAuthor: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

BooksSchema.plugin(mongoosePaginate);
mongoose.model("Books", BooksSchema);
