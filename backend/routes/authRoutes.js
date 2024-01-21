const express = require("express");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const {
  loginUser,
  logout,
  forgotPassword,
  getUserDetails,
  loginAdmin,
  resetPassword,
} = require("../controllers/authControllers");

router.route("/user/login").post(loginUser);
router.route("/admin/login").post(loginAdmin);
router.route("/logout").get(logout);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset").put(resetPassword);
router.route("/user/me").get(isAuthenticatedUser, getUserDetails);
// router.route("/password/update").put(isAuthenticatedUser, updatePassword);
// router.route("/me/update").put(isAuthenticatedUser, updateProfile);

// router
//   .route("/user/delete")
//   .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser);

module.exports = router;
