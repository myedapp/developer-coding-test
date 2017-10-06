var router = require('express').Router();

router.use('/pathways', require('./pathways'));

module.exports = router;