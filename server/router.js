const express = require('express');

const router = express.Router();
const appRouter = require('./modules/app/router');
const commonRouter = require('./modules/common/router');
const adminAccountRouter = require('./modules/app/admin/account/router');

const studentManagementRouter = require('./modules/app/admin/student/router');

router.use('/api/v1', [
  commonRouter,
  appRouter,

  // admin/*
  adminAccountRouter,

  studentManagementRouter,
]);

module.exports = router;
