const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  code: {
    type: String,
  },

  title: {
    type: String,
  },
  image: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  dept: {
    type: String,
  },
  semester: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("question", questionSchema);
