const express = require('express');
const mongojs = require('mongojs');

const router = express.Router();
const db = mongojs('mongodb://myEdUser:myEdUser@ds247178.mlab.com:47178/my-ed', ['users', 'quest_pathways']);

// Get All Users From DB
router.get('/users', function(request, response, next) {
  db.users.find().sort({ id : 1 }).toArray(
    function(error, users) {
     if(error) {
       response.send(error);
     }
     response.json(users);
    }
  )
});

   
// Get All Pathways From DB
router.get('/quest_pathways', function(request, response, next) {
  db.quest_pathways.find().sort({ id : 1 }).toArray(
    function(error, pathways) {
      if(error) {
        response.send(error);
      }
      response.json(pathways);
     }
   )
});


// Get Single Pathway For Given student
router.get('/quest_pathways/:id', function(request, response, next) {
  const query = { user_id: Number(request.params.id) };
  db.quest_pathways.findOne(query,
    function(error, data) {
      if(error) {
        response.send(error);
      }
      response.json(data);
    }
  );
});

module.exports = router;
