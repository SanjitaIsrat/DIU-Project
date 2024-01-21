const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorhandler");
const cloudinary = require("cloudinary")

const Status = require("../models/statusModel");
const Teacher = require("../models/teacherModel");
const Research = require("../models/researchModel");


/* ===================================================
        Create Status (/api/v1/create/status) (req : POST)
   =================================================== */
exports.createStatus = catchAsyncError(async (req, res, next) => {
  const { comment } = req.body;
  if (!comment) {
    return next(new ErrorHandler("Please enter your comment", 400));
  }

  const data = {
    owner: req.user._id,
    comment: comment,
  };
  const status = await Status.create(data);

  const teacher = await Teacher.findById(req.user._id);
  teacher.status.push(status._id);
  await teacher.save();

  res.status(200).json({
    success: true,
    message: "Successfully Created Status",
  });
});

/* ===================================================
        Delete Status (/api/v1/status/delete/:id) (req : Delete)
   =================================================== */
   exports.deleteStatus = catchAsyncError(async (req, res, next) => {
    const status = await Status.findById(req.params.id);
  
    if (!status) {
      return next(new ErrorHandler(`No Status Found`));
    }
    await Status.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Successfully Status Deleted",
    });
  });

/* ===================================================
        Create Research (/api/v1/create/research) (req : POST)
   =================================================== */
   exports.createResearch = catchAsyncError(async (req, res, next) => {
    const { title, desc,  category, link } = req.body;
   
    // const myCloud = cloudinary.v2.uploader.upload(req.body.file, {
    //   folder: "GetSmart",
    //   width: 200,
    //   crop: "scale",
    // })
    const data = {
      owner: req.user._id,
      title:title,
      desc : desc,
      // file: myCloud.secure_url,
      category:category,
      link:link
    };
    const research = await Research.create(data);
  
    const teacher = await Teacher.findById(req.user._id);
    await teacher.research.push(research._id);
    await teacher.save();
  
    res.status(200).json({
      success: true,
      message: "Successfully Created Research",
    });
  });
  
  /* ===================================================
        Delete Research (/api/v1/research/delete/:id) (req : Delete)
   =================================================== */
   exports.deleteResearch = catchAsyncError(async (req, res, next) => {
    const research = await Research.findById(req.params.id);
  
    if (!research) {
      return next(new ErrorHandler(`No Research Found`));
    }
    await Research.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Successfully Research Deleted",
    });
  });

  /* ===================================================
       Update Avatar Image (/api/v1/teacher/update/avatar) (req : put)
   =================================================== */
exports.updateAvatar = catchAsyncError(async (req, res, next) => {
  const newUserData = {};

  if (req.body.avatar !== "") {
    const user = await Teacher.findById(req.user._id);

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
  await Teacher.findByIdAndUpdate(req.user._id, newUserData, {
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
       Update Password (/api/v1/teacher/password/update) (req : put)
   =================================================== */
   exports.updatePassword = catchAsyncError(async (req, res, next) => {
    const user = await Teacher.findById(req.user._id)
      .select("+password")
      
    const isPassowrdMatched = await user.comparePassword(req.body.oldPassword);
  
    
  
    user.password = req.body.nPassword;
    await user.save();
  
    sendToken(user, 200, res);
  });

  /* ===================================================
       Update Profile (/api/v1/teacher/profile/update) (req : put)
   =================================================== */

   exports.updateProfile = catchAsyncError(async (req, res, next) => {
    const newUserData = {
      name: req.body.name,
      email:req.body.email,
      phone:req.body.phone,
      publication:req.body.publication,
      experience:req.body.experience,
      office:req.body.office,
    };
  
     await Teacher.findByIdAndUpdate(req.user._id, newUserData, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).json({
      success: true,
      message:"Successfully Profile Updated"
    });
  });
