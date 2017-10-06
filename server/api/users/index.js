const router = require('express').Router();

router.get('/', (request, response) => {      
    var users = require('./users.json');
    response.json(users)
});

module.exports = router;