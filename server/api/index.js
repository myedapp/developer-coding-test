var router = require('express').Router();

router.use('/users', require('./users'));
router.use('/quests', require('./quests'));

module.exports = router;