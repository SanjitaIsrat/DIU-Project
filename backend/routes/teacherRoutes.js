const express = require("express");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const { createStatus, createResearch, deleteStatus, deleteResearch, updateAvatar, updatePassword, updateProfile } = require("../controllers/teacherControllers");

router
  .route("/create/status")
  .post(isAuthenticatedUser, authorizeRoles("Teacher"), createStatus);

router
  .route("/create/research")
  .post(isAuthenticatedUser, authorizeRoles("Teacher"), createResearch);
router
  .route("/delete/status/:id")
  .delete(isAuthenticatedUser, authorizeRoles("Teacher"), deleteStatus);
router
  .route("/delete/research/:id")
  .delete(isAuthenticatedUser, authorizeRoles("Teacher"), deleteResearch);

router.route("/teacher/profile/update").put(isAuthenticatedUser, authorizeRoles("Teacher"), updateProfile);
router.route("/teacher/password/update").put(isAuthenticatedUser, authorizeRoles("Teacher"), updatePassword);
router.route("/teacher/avatar/update").put(isAuthenticatedUser, authorizeRoles("Teacher"), updateAvatar);
module.exports = router;
