const mongoose = require('mongoose');
const passwordGenerator = require('generate-password');
const {
  encryptPassword,
  verifyPassword,
  createToken,
} = require('../../common/helpers');
const { generate: generateCode } = require('../../common/code');

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String },
  status: { type: String, required: true },
  deletedAt: { type: Date, default: null },
  avatar: { type: String },
  userType: {
    type: String,
    required: true,
    enum: [
      'admin',
    ],
  },

}, { timestamps: true });

// user method for setting password
userSchema.methods.setPassword = function setPassword(value) {
  this.password = encryptPassword(value);
};

// user method for validating password
userSchema.methods.checkPassword = function checkPassword(value) {
  try {
    return verifyPassword(value, this.password);
  } catch (err) {
    return false;
  }
};

// set random password and return random generated password to send to user
userSchema.methods.autoSetRandomPassword = function setRandomPassword(len = 10) {
  const password = passwordGenerator.generate({
    length: len,
    numbers: true,
  });
  this.setPassword(password);
  return password;
};

// create json web token that present this user
userSchema.methods.createToken = function createUserToken(duration = '1h') {
  return createToken(this, duration);
};

// create json web token that present this user
userSchema.methods.createCode = function createUserCode(duration = '10m') {
  return generateCode(this._id.toString(), duration);
};


// convert user data to customer data
userSchema.methods.toAdminObject = function toAdminObject() {
  return {
    _id: this._id,
    email: this.email,
    status: this.status,
    userType: this.userType,
    avatar: this.avatar,
  };
};


// define mogoose model
const User = mongoose.model('users', userSchema);

// available user statuses
User.STATUS_PENDING = 'Pending';
User.STATUS_ACTIVE = 'Active';
User.STATUS_INACTIVE = 'Inactive'; // can not login
User.STATUS_DISABLED = 'Disabled'; // can login but other relevant data is excluded from search result
User.STATUS_DECLINED = 'Declined';
User.STATUS_DELETED = 'Deleted';
User.STATUS_OPTIONS = [User.STATUS_ACTIVE, User.STATUS_INACTIVE];

// available user types
User.TYPE_ADMIN = 'admin';

module.exports = User;
