const handlers = require('./handlers');
const express = require('express');

const router = express.Router();

router.route('/admin/students')
  .get(handlers.getStudents);

router.route('/admin/students/:studentId')
  .get(handlers.getStudentDetail);

module.exports = router;
