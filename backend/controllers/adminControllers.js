const cloudinary = require("cloudinary");
const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorhandler");
const ApiFetaures = require("../utils/apifetures");
const Admin = require("../models/adminModel");
const Student = require("../models/studentModel");
const Teacher = require("../models/teacherModel");
const Question = require("../models/questionModel");
const Routine = require("../models/routineModel");

/* =============================================================
        Register Admin (/api/v1/register/admin) (req : POST)
   ============================================================= */
exports.registerAdmin = catchAsyncError(async (req, res, next) => {
  const { userName, password, name } = req.body;
  const nameUser = await Admin.findOne({ userName });
  if (nameUser) {
    return next(new ErrorHandler("This Admin already exist.", 400));
  }
  await Admin.create({ userName, password, name });
  res.status(200).json({
    success: true,
    message: "Admin Register Successfully",
  });
});
/* ==================================================================
        Register Student (/api/v1/register/student) (req : POST)
   ================================================================== */
exports.registerStudent = catchAsyncError(async (req, res, next) => {
  const { id, password, name, email, dept } = req.body;
  const studentId = await Student.findOne({ id });
  if (studentId) {
    return next(new ErrorHandler("This Student already exist.", 400));
  }
  await Student.create({ id, password, name, email, dept });
  res.status(200).json({
    success: true,
    message: "Student Register Successfully",
  });
});
/* ==============================================================
      All Student (/api/v1/all/student) (req : GET)
   ============================================================== */
exports.getStudents = catchAsyncError(async (req, res, next) => {
  const students = await Student.find();

  res.status(200).json({
    success: true,
    students,
  });
});

/* ==============================================================
      Single Student (/api/v1/student/:id) (req : GET)
   ============================================================== */
   exports.getStudent = catchAsyncError(async (req, res, next) => {
    const student = await Student.findById(req.params.id);
  
    res.status(200).json({
      success: true,
      student,
    });
  });

/* ==============================================================
      Register Teacher (/api/v1/register/teacher) (req : POST)
   ============================================================== */
exports.registerTeacher = catchAsyncError(async (req, res, next) => {
  const { id, password, name, email, dept, designation } = req.body;
  const teacherId = await Teacher.findOne({ id });
  if (teacherId) {
    return next(new ErrorHandler("This Teacher already exist.", 400));
  }
  await Teacher.create({ id, password, name, email, dept, designation });
  res.status(200).json({
    success: true,
    message: "Teacher Register Successfully",
  });
});

/* ==============================================================
      All Teacher (/api/v1/all/teacher) (req : GET)
   ============================================================== */
exports.getTeachers = catchAsyncError(async (req, res, next) => {
  const teachers = await Teacher.find();

  res.status(200).json({
    success: true,
    teachers,
  });
});


/* ==============================================================
      Single Teacher (/api/v1/teacher/:id) (req : GET)
   ============================================================== */
   exports.getTeacher = catchAsyncError(async (req, res, next) => {
    const teacher = await Teacher.findById(req.params.id).populate({path:"research"}).populate({path:"status"});
  
    res.status(200).json({
      success: true,
      teacher,
    });
  });

/* ==============================================================
      Create Question (/api/v1/create/question) (req : POST)
   ============================================================== */
exports.createQuestion = catchAsyncError(async (req, res, next) => {
  const { code, title, image, dept, semester } = req.body;

  if (!code | !title | !dept | !semester) {
    return next(new ErrorHandler("All field are required!", 400));
  }

  const result = await cloudinary.uploader.upload(req.body.image, {
    folder: "post",
    height: 600,
    width: 650,
  });

  await Question.create({
    code,
    title,
    dept,
    semester,
    image:{
      public_id:result.public_id,
      url:result.secure_url
    }
  });

  res.status(200).json({
    success: true,
    message: "Question Create Successfully",
  });
});


/* ==============================================================
      All Question (/api/v1/all/question) (req : Get)
   ============================================================== */
   exports.allQuestion = catchAsyncError(async (req, res, next) => {
    const apifeatures = new ApiFetaures(
      Question.find().sort({ createdAt: -1 }),
      req.query
    )
      .search()
      .filter();
    const questions = await apifeatures.query;
  
    res.status(200).json({
      success: true,
      questions,
    });
  });
  
/* ==============================================================
      Create Routine (/api/v1/create/routine) (req : POST)
   ============================================================== */
exports.createRoutine = catchAsyncError(async (req, res, next) => {
  const { code, room, section, dept, semester, day, time, teacherId, title } =
    req.body;

  // const result = await cloudinary.uploader.upload(image, {
  //   folder: "post",
  //   height: 600,
  //   width: 650,
  // });

  const data = {
    code,
    room,
    section,
    dept,
    semester,
    day,
    time,
    teacher: teacherId,
    title,
  };
  await Routine.create(data);

  res.status(200).json({
    success: true,
    message: "Routine Create Successfully",
  });
});

/* ==============================================================
      All Routine(/api/v1/all/routine) (req : GET)
   ============================================================== */
exports.getRoutines = catchAsyncError(async (req, res, next) => {
  const apifeatures = new ApiFetaures(
    Routine.find().populate({ path: "teacher" }).sort({ createdAt: -1 }),
    req.query
  )
    .searchCode()
    .filter();
  const routines = await apifeatures.query;

  res.status(200).json({
    success: true,
    routines,
  });
});


/* ==============================================================
      Teacher Routine Update(/api/v1/teacher/routine/update/:id) (req : Put)
   ============================================================== */
   exports.updateTeacherRoutine = catchAsyncError(async (req, res, next) => {
    const teacher = await Teacher.findById(req.params.id)
    if(!teacher){
      return next(new ErrorHandler("Teacher Not Found", 404));
    }

    const myCloud = await cloudinary.v2.uploader.upload(req.body.routine, {
      folder: "GetSmart",
      width: 750,
      height:550,
      crop: "scale",
    });
    await Teacher.findByIdAndUpdate(req.params.id, {routine:myCloud.secure_url},{
      new: true,
      runValidators: true,
      useFindAndModify: false,
    })
    res.status(200).json({
      success: true,
      message:"Successfully Routine Updated"
    });
  });