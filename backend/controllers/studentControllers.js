const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorhandler");
const ApiFetaures = require("../utils/apifetures");
const cloudinary = require("cloudinary")

const Teacher = require("../models/teacherModel");
const Question = require("../models/questionModel");
const Routine = require("../models/routineModel");
const Student = require("../models/studentModel")
const Status = require("../models/statusModel");
const sendToken = require("../utils/jwtToken")


/* ===================================================
       All Teachers (/api/v1/get/teachers) (req : get)
   =================================================== */
exports.getAllTeacher = catchAsyncError(async (req, res, next) => {
  let apifeatures = new ApiFetaures(Teacher.find(), req.query).search()
  const teachers = await apifeatures.query;

  res.status(200).json({
    success: true,
    teachers,
  });
});


/* ===================================================
       Get Single Teacher (/api/v1/get/teacher/:id) (req : get)
   =================================================== */
   exports.getSingleTeacher = catchAsyncError(async (req, res, next) => {
    const teacher = await Teacher.findById(req.params.id).populate({path:"research"}).populate({path:"status"})
    // if(!teacher){
    //   return next(new ErrorHandler("Teacher Not Found", 401));

    // }

    res.status(200).json({
      success: true,
      teacher,
    });
  });

/* ===================================================
       All Questions (/api/v1/get/questions) (req : get)
   =================================================== */
exports.getAllQuestion = catchAsyncError(async (req, res, next) => {
  const apifeatures = new ApiFetaures(
    Question.find().sort({ createdAt: -1 }),
    req.query
  )
    .searchCode()
    .filter();
  const questions = await apifeatures.query;

  res.status(200).json({
    success: true,
    questions,
  });
});

/* ===================================================
       All Routine (/api/v1/get/routines) (req : get)
   =================================================== */
exports.getAllRoutine = catchAsyncError(async (req, res, next) => {
  const apifeatures = new ApiFetaures(
    Routine.find().populate({ path: "teacher" }).sort({ createdAt: -1 }),
    req.query
  ).filter();
  const routines = await apifeatures.query;

  res.status(200).json({
    success: true,
    routines,
  });
});

/* ===================================================
       Update Avatar Image (/api/v1/student/update/avatar) (req : put)
   =================================================== */
exports.updateAvatar = catchAsyncError(async (req, res, next) => {
  const newUserData = {};

  if (req.body.avatar !== "") {
    const user = await Student.findById(req.user._id);

    const imageId = user.avatar.public_id;

    if (imageId) {
      await cloudinary.v2.uploader.destroy(imageId);
    }

    const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
      folder: "GetSmart",
      width: 200,
      crop: "scale",
    });

    newUserData.avatar = {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    };
  }
  await Student.findByIdAndUpdate(req.user._id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    message:"Successfully Avatar Updated"
  });
});


/* ===================================================
       Update Password (/api/v1/student/password/update) (req : put)
   =================================================== */
   exports.updatePassword = catchAsyncError(async (req, res, next) => {
    const user = await Student.findById(req.user._id)
      .select("+password")
      
    const isPassowrdMatched = await user.comparePassword(req.body.oldPassword);
  
    if (!isPassowrdMatched) {
      return next(new ErrorHandler("Old password is incorrect", 400));
    }
    if (req.body.nPassword !== req.body.cPassword) {
      return next(new ErrorHandler("Password does not matched", 401));
    }
  
    user.password = req.body.nPassword;
    await user.save();
  
    sendToken(user, 200, res);
  });

  /* ===================================================
       Update Profile (/api/v1/student/profile/update) (req : put)
   =================================================== */

   exports.updateProfile = catchAsyncError(async (req, res, next) => {
    const newUserData = {
      name: req.body.name,
      email:req.body.email
    };
  
     await Student.findByIdAndUpdate(req.user._id, newUserData, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).json({
      success: true,
      message:"Successfully Profile Updated"
    });
  });


  /* ===================================================
       All Status (/api/v1/get/student/status) (req : get)
   =================================================== */
exports.getStudentStatus = catchAsyncError(async (req, res, next) => {
  const status = await Status.find().sort({createdAt:-1}).populate({path:"owner"});



  res.status(200).json({
    success: true,
    status,
  });
});