const handlers = require('./handlers');
const express = require('express');

const router = express.Router();

// user login
router.post('/admin/account/sessions', handlers.login);

// forgot password: send reset password email
router.post('/admin/account/password-reset/requests', handlers.requestResetPassword);

// forgot password: reset account's password
router.put('/admin/account/password', handlers.resetPassword);

// all routers after this middleware require an access token
router.use(/^\/admin.*?/, handlers.verifyUserToken);

router.route('/admin/account/profile')
  // get account's data
  .get(handlers.getProfile)
  // update account's data
  .put(handlers.updateProfile);

module.exports = router;
