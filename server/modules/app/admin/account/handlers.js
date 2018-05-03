const createMiddleware = require('../../../common/jwt');
const User = require('../../models/user');
const {
  validationExc,
  notFoundExc,
  verifyToken,
} = require('../../../common/helpers');
const {
  validateLoginData,
  validateProfileData,
  validateForgotPwdData,
  validateResetPwdData,
  sendMailRequestResetPwd,
} = require('./helpers');

// Function Admin Login
async function login(req, res, next) {
  try {
    const data = req.body;
    const errors = validateLoginData(data);
    if (errors) {
      return next(validationExc('Please correct your input.', errors));
    }

    const user = await User.findOne({ email: data.loginId, userType: User.TYPE_ADMIN });
    if (!user || !user.checkPassword(data.password)) {
      return res.status(400).json(validationExc(
        'Invalid login information.',
        {
          password: ['Incorrect username or password'],
        },
      ));
    }

    return res.json({
      token: user.createToken(data.remember ? '30 days' : '3h'),
      user: user.toAdminObject(),
    });
  } catch (err) {
    return next(err);
  }
}

async function getProfile(req, res, next) {
  try {
    const user = await User.findById(req.user._id);
    return user ? res.json(user.toAdminObject()) : next(notFoundExc('No profile data found'));
  } catch (err) {
    return next(err);
  }
}

async function updateProfile(req, res, next) {
  try {
    const user = await User.findById(req.user._id);
    const data = req.body;
    if (user) {
      const errors = validateProfileData(data, user);
      if (errors) {
        return next(validationExc('Please check your form input', errors));
      }
      if (data.newPassword) {
        user.setPassword(data.newPassword);
      }
      const saved = await user.save();
      return res.json(saved.toAdminObject());
    }
    return next(notFoundExc('No profile data found'));
  } catch (err) {
    return next(err);
  }
}

const verifyUserToken = createMiddleware('jwtAdmin', jwtPayload => User.findById(jwtPayload.userId));

async function requestResetPassword(req, res, next) {
  try {
    const data = req.body;
    const errors = await validateForgotPwdData(data);
    if (errors) {
      return next(validationExc('Please correct your input.', errors));
    }

    const user = await User.findOne({
      email: data.email,
    });
    sendMailRequestResetPwd(user);
    return res.json({ message: 'Please check your email.' });
  } catch (err) {
    return next(err);
  }
}

async function resetPassword(req, res, next) {
  try {
    const data = req.body;
    const errors = await validateResetPwdData(data);
    if (errors) {
      return next(validationExc('Please correct your input.', errors));
    }

    const decoded = verifyToken(data.token);
    const user = await User.findOne({
      _id: decoded.userId,
      status: User.STATUS_ACTIVE,
    });
    user.setPassword(data.password);
    await user.save();

    return res.json({ message: 'Password updated successfully.' });
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  login,
  getProfile,
  updateProfile,
  verifyUserToken,
  requestResetPassword,
  resetPassword,
};
