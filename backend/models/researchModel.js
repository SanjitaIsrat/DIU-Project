const mongoose = require("mongoose");

const researchSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "teacher",
  },
  title: {
    type: String,
  },
  desc:{
    type:String,
  },
  file:{
    type: String,
  },
  link:{
    type:String
  },
  category:{
    type:String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("research", researchSchema);
