const mongoose = require("mongoose");
const Authors = mongoose.model("Authors");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const authors = await Authors.paginate({}, { page, limit: 100 });
    return res.json(authors);
  },

  async store(req, res) {
    const authors = await Authors.create(req.body);
    return res.json(authors);
  },

  async show(req, res) {
    const authors = await Authors.findById(req.params.id);
    return res.json(authors);
  },

  async update(req, res) {
    const authors = await Authors.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.json(authors);
  },

  async delete(req, res) {
    await Authors.findByIdAndDelete(req.params.id);
    return res.send({ msg: "Registro apagado com sucesso!" });
  },
};
