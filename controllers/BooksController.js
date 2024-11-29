const mongoose = require("mongoose");
const Books = mongoose.model("Books");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const books = await Books.paginate({}, { page, limit: 100 });
    return res.json(books);
  },

  async store(req, res) {
    const books = await Books.create(req.body);
    return res.json(books);
  },

  async show(req, res) {
    const books = await Books.findById(req.params.id);
    return res.json(books);
  },

  async update(req, res) {
    const books = await Books.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.json(books);
  },

  async delete(req, res) {
    await Books.findByIdAndDelete(req.params.id);
    return res.send({ msg: "Registro apagado com sucesso!" });
  },
};
