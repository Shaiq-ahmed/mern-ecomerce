const express = require('express');
const {
  getUserProfile,
  loginUser,
  registerUser,
  updateUserProfile,
} = require('../controller/userController');
const { isAuthenticatedUser } = require('../middlewares/authMiddleware');
const router = express.Router();

//register user
router.route('/').post(registerUser);

//login user
router.route('/login').post(loginUser);

//get user Profile Private Route
router
  .route('/profile')
  .get(isAuthenticatedUser, getUserProfile)
  .put(isAuthenticatedUser, updateUserProfile);

//update user:
router.route('/me/update').put(isAuthenticatedUser, updateUserProfile);
module.exports = router;
