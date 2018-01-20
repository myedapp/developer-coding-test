var express = require('express');
var router = express.Router();
var request = require('request');
var users = require('../users.json');
var quest_pathways = require('../quest_pathways.json');

router.get('/home', getQuest_pathways, getUsers, function(req, res){
    let quests = res.locals.quest_pathways;
    // add user fullname
    quests = quests.map(function(pathways) {
        for(student in res.locals.users){
            if(pathways["user_id"] == res.locals.users[student]["id"]){
                pathways["fullname"] = res.locals.users[student]["fullname"];
            }
        }
        return pathways;
    });
    res.locals.quests = quests;
    // render page with full data on express views
    res.render('index');
});

router.get('/hidden', getQuest_pathways, getUsers, function(req, res){
    let quests = res.locals.quest_pathways;
    // add user fullname
    quests = quests.map(function(pathways) {
        for(student in res.locals.users){
            if(pathways["user_id"] == res.locals.users[student]["id"]){
                pathways["fullname"] = res.locals.users[student]["fullname"];
            }
        }
        return pathways;
    });
    res.locals.quests = quests;
    // render page with full data on express views
    res.render('hidden');
});

function getQuest_pathways(req, res, next){
    request("http://localhost:3031/quest_pathways" , function (error, response, body) {
			if(error){
				console.log('error:', error); // handle network error
				console.log('statusCode:', response && response.statusCode);
				throw error;
			}
            res.locals.quest_pathways = JSON.parse(body);
            next();
	});
}

function getUsers(req, res, next){
    request("http://localhost:3031/users" , function (error, response, body) {
			if(error){
				console.log('error:', error); // handle network error
				console.log('statusCode:', response && response.statusCode);
				throw error;
			}
            res.locals.users = JSON.parse(body);
            next();
	});
}

router.get('/users', function(req, res){
    res.json(users);
});

router.get('/quest_pathways', function(req, res){
    res.json(quest_pathways);
});

router.get('/*', function(req, res){
    res.send("Hello world!");
});

module.exports = router;
