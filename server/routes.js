const express = require('express');
const routes = express.Router();
const fs = require('fs');

routes.get('/users', (req, res, next) => {
  fs.readFile(__dirname + '/users.json', (error, data) => {
    const users = JSON.parse(data);
    if (error) console.log(error); // will handle error
    res.status(200).json({
      data: users
    });
  });
});

routes.get('/quests', (req, res, next) => {
  fs.readFile(__dirname + '/quest_pathways.json', (error, data) => {
    const quests = JSON.parse(data);
    if (error) console.log(error); // will handle error
    res.status(200).json({
      data: quests
    });
  });
});

module.exports = routes;
