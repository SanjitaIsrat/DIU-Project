const mongoose = require("mongoose");

const routineSchema = new mongoose.Schema({
  code: {
    type: String,
  },
  title: {
    type: String,
  },
  room: {
    type: String,
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "teacher",
  },
  section: {
    type: String,
  },
  dept: {
    type: String,
  },
  semester: {
    type: String,
  },
  day: {
    type: String,
  },
  time: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("routine", routineSchema);
