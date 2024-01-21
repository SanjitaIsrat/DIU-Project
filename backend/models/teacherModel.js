const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  id: {
    type: String,
  },
  avatar: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  email: {
    type: String,
  },
  password: {
    type: String,
    select: false,
  },
  dept: {
    type: String,
  },
  designation: {
    type: String,
  },
  phone: {
    type: String,
  },
  publication: {
    type: String,
  },
  status: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "status",
    },
  ],
  research: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref:"research"
    },
  ],
  experience: {
    type: String,
  },
  role: {
    type: String,
    default: "Teacher",
  },
  office: {
    type: String,
  },
  routine:{
    type:String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  resetPasswordToken: String,
  resetPasswordExpire: String,
});

//Hashing Password
teacherSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcryptjs.hash(this.password, 10);
});

//JWT Token
teacherSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

//Compare Password
teacherSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcryptjs.compare(enteredPassword, this.password);
};

//Generating Password Reset Token
teacherSchema.methods.getResetPasswordToken = function () {
  //Generating Token
  const resetToken = crypto.randomBytes(20).toString("hex");

  //Hashing and adding resetPasswordToken to userSchema
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
  return resetToken;
};

module.exports = mongoose.model("teacher", teacherSchema);
