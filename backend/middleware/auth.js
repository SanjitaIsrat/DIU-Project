const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError = require("./catchAsyncError");
const jwt = require("jsonwebtoken");
const Student = require("../models/studentModel");
const Teacher = require("../models/teacherModel");
const Admin = require("../models/adminModel");

exports.isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    next(new ErrorHandler("Please Login to access this resource", 401));
  } else {
    const tokenData = token.split(",");
    const decodeData = jwt.verify(tokenData[0], process.env.JWT_SECRET);
    if (tokenData[1] === "Student") {
      req.user = await Student.findById(decodeData.id);
    }
    if (tokenData[1] === "Teacher") {
      req.user = await Teacher.findById(decodeData.id);
    }
    if (tokenData[1] === "Admin") {
      req.user = await Admin.findById(decodeData.id);
    }
    // console.log(typeof token);
    next();
  }
});

exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `Role: ${req.user.role} is not allowed to access this resource`,
          403
        )
      );
    }
    next();
  };
};
