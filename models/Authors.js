const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const AuthorsSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

AuthorsSchema.plugin(mongoosePaginate);
mongoose.model("Authors", AuthorsSchema);
