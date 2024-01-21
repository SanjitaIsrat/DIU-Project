const crypto = require("crypto");
const cloudinary = require("cloudinary");
const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorhandler");
const sendToken = require("../utils/jwtToken");
const sendMail = require("../utils/sendMail");

const Admin = require("../models/adminModel");
const Student = require("../models/studentModel");
const Teacher = require("../models/teacherModel");

/* ===================================================
        Login User (/api/v1/user/login) (req : POST)
   =================================================== */
exports.loginUser = catchAsyncError(async (req, res, next) => {
  const { id, password, role } = req.body;
  if (!id | !password) {
    return next(new ErrorHandler("Please enter id & password", 400));
  }
  if (!role) {
    return next(new ErrorHandler("Please enter your role", 400));
  }

  if (role === "Student") {
    const user = await Student.findOne({ id }).select("+password");
    if (!user) {
      return next(new ErrorHandler("Invalid username or password", 401));
    }
    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
      return next(new ErrorHandler("Invalid username or password", 401));
    }
    sendToken(user, user.role, 200, res);
  } else if (role === "Teacher") {
    const user = await Teacher.findOne({ id }).select("+password").populate({path:"research"}).populate({path:"status"});
    if (!user) {
      return next(new ErrorHandler("Invalid username or password", 401));
    }
    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
      return next(new ErrorHandler("Invalid username or password", 401));
    }
    sendToken(user, user.role, 200, res);
  } else {
    return next(new ErrorHandler("Choose your proffesion", 401));
  }
});

/* ======================================================================
        Forgot Password (/api/v1/forgot/password) (req : Post)
   ====================================================================== */
exports.forgotPassword = catchAsyncError(async (req, res, next) => {
  const { email, role } = req.body;
  if (!email) {
    return next(new ErrorHandler("Please enter your email", 400));
  }
  if (role === "Student") {
    const user = await Student.findOne({ email });

    if (!user) {
      return next(new ErrorHandler("User not found", 404));
    } else {
      //Get Reset Password Token
      const resetToken = user.getResetPasswordToken();
      await user.save({ validateBeforeSave: false });
      const resetPasswordUrl = `${process.env.FONTEND_URL}/password/reset/${resetToken},${role}`;
      const message = `Your password reset token is :-\n\n ${resetPasswordUrl}\n\nIf you have not requested this email then, please ignore it`;

      try {
        await sendMail({
          email: user.email,
          subject: `Get Smart -- ${role} Password Recovary`,
          message,
        });
        res.status(200).json({
          success: true,
          message: `Email sent to ${user.email} successfully`,
        });
      } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({ validateBeforeSave: false });
        return next(new ErrorHandler(error.message, 500));
      }
    }
  } else if (role === "Teacher") {
    const user = await Teacher.findOne({ email });

    if (!user) {
      return next(new ErrorHandler("User not found", 404));
    } else {
      //Get Reset Password Token
      const resetToken = user.getResetPasswordToken();
      await user.save({ validateBeforeSave: false });
      const resetPasswordUrl = `${process.env.FONTEND_URL}/password/reset/${resetToken},${role}`;
      const message = `Your password reset token is :-\n\n ${resetPasswordUrl}\n\nIf you have not requested this email then, please ignore it`;

      try {
        await sendMail({
          email: user.email,
          subject: `Get Smart -- ${role} Password Recovary`,
          message,
        });
        res.status(200).json({
          success: true,
          message: `Email sent to ${user.email} successfully`,
        });
      } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({ validateBeforeSave: false });
        return next(new ErrorHandler(error.message, 500));
      }
    }
  } else {
    return next(new ErrorHandler("Choose your role", 401));
  }
});

/* ==============================================================
        Reset Password (/api/v1/password/reset) (req : Post)
   ============================================================== */
exports.resetPassword = catchAsyncError(async (req, res, next) => {
  //Creating Token Hash
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.body.token)
    .digest("hex");

  //resetFunction For All Type User Database Auth
  const resetFunction = async (user) => {
    if (!user) {
      return next(
        new ErrorHandler(
          "Reset Password Token is invalid or has been expired",
          400
        )
      );
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();
    res.status(200).json({
      success: true,
      message: "Successfully reset your password",
    });
  };

  if (req.body.role === "Student") {
    const user = await Student.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    //One Function calling for checking reset authentication
    resetFunction(user);
  } else if (req.body.role === "Teacher") {
    const user = await Teacher.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    //One Function calling for checking reset authentication
    resetFunction(user);
  } else {
    return next(new ErrorHandler("Role is Invalid", 401));
  }
});

/* ===================================================
        Logout User (/api/v1/logout) (req : GET)
   =================================================== */
exports.logout = catchAsyncError(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});

/* ===================================================
        User Details (/api/v1/user/me) (req : GET)
   =================================================== */
exports.getUserDetails = catchAsyncError(async (req, res, next) => {
  let user;
  if(req.user.role === "Student"){
    user = await Student.findById(req.user._id);
  }else if(req.user.role ==="Teacher"){
    user = await Teacher.findById(req.user._id).populate({path:"research"}).populate({path:"status"});
  }else{
    user = req.user
  }
  res.status(200).json({
    success: true,
    user,
  });
});

/* ===================================================
        Login Admin (/api/v1/admin/login) (req : POST)
   =================================================== */
exports.loginAdmin = catchAsyncError(async (req, res, next) => {
  const { userName, password } = req.body;
  if (!userName | !password) {
    return next(new ErrorHandler("Please enter username & password", 400));
  }

  const user = await Admin.findOne({ userName }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid username or password", 401));
  }
  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid username or password", 401));
  }
  sendToken(user, user.role, 200, res);
});
