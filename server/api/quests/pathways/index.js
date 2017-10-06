const router = require('express').Router();

router.get('/', (request, response) => {      
    var pathways = require('./quest_pathways.json');

    response.json(pathways)
});

router.get('/:userId', (request, response) => {      
    var pathways = require('./quest_pathways.json');
    var filtered = pathways.filter(pathway => pathway.user_id == request.params.userId);        

    if (filtered.length == 0) {
        return [];
    }

    response.json(filtered[0])
});

module.exports = router;