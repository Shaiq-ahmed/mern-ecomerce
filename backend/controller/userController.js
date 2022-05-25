const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const ErrorHandler = require('../utils/errorHandler');
const sendToken = require('../utils/jwtToken');

//Register User

exports.registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
  });
  sendToken(user, 201, res);
});

exports.loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  //checking if the user has given email and password both

  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    return next(new ErrorHandler('Invalid email or password', 401));
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler('Invalid email or password', 401));
  }
  sendToken(user, 200, res);
});

exports.getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  if (user) {
    res.status(200).json({
      user,
    });
  } else {
    return next(new ErrorHandler('User not found', 400));
  }
});

//update user:
exports.updateUserProfile = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id).select('+password');
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }
    await user.save();

    sendToken(user, 200, res);
  } else {
    return next(new ErrorHandler('User not found', 400));
  }
});

// // update User password
// exports.updatePassword = catchAsyncError(async (req, res, next) => {
//   const user = await User.findById(req.user.id).select('+password');

//   const isPasswordMatched = await user.comparePassword(req.body.oldPassword);

//   if (!isPasswordMatched) {
//     return next(new ErrorHandler('old password is incorrect', 400));
//   }

//   if (req.body.newPassword !== req.body.confirmPassword) {
//     return next(new ErrorHandler('password does not match', 400));
//   }

//   user.password = req.body.newPassword;

//   await user.save();

//   sendToken(user, 200, res);
// });
