const handlers = require('./handlers');
const express = require('express');

const router = express.Router();

router.route('/cm/files/upload-params').get(handlers.getUploadParams);

module.exports = router;
