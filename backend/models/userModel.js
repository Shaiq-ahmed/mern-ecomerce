const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [, 'please enter your name'],
      maxLength: [30, 'Name length must be less than 30 characters'],
      minLength: [4, 'Name must be greater than 4 characters'],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validator.isEmail, 'please enter a valid email'],
    },
    password: {
      type: String,
      required: [true, 'Please your password'],
      minLength: [8, 'password must be greater than 8 characters'],
      select: false,
    },
    isAdmin: {
      required: true,
      default: false,
      type: Boolean,
    },
  },
  { timestamps: true }
);

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  this.password = await bcrypt.hash(this.password, 10);
});

// JWT TOKEN

userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: '15d',
  });
};

//compare password

userSchema.methods.comparePassword = async function (enterPassword) {
  return await bcrypt.compare(enterPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
