const express = require("express");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const {
  getAllTeacher,
  getAllQuestion,
  getAllRoutine,
  updateProfile,
  updatePassword,
  updateAvatar,
  getSingleTeacher,
  getStudentStatus,
} = require("../controllers/studentControllers");

router
  .route("/get/teachers")
  .get(isAuthenticatedUser, authorizeRoles("Student"), getAllTeacher);

  
router
.route("/get/teacher/:id")
.get(isAuthenticatedUser, authorizeRoles("Student"), getSingleTeacher);

router
  .route("/get/questions")
  .get(isAuthenticatedUser, authorizeRoles("Student"), getAllQuestion);

router
  .route("/get/student/status")
  .get(isAuthenticatedUser, authorizeRoles("Student"), getStudentStatus);

router.route("/get/routines").get(getAllRoutine);
router.route("/student/profile/update").put(isAuthenticatedUser, authorizeRoles("Student"), updateProfile);
router.route("/student/password/update").put(isAuthenticatedUser, authorizeRoles("Student"), updatePassword);
router.route("/student/avatar/update").put(isAuthenticatedUser, authorizeRoles("Student"), updateAvatar);




module.exports = router;
