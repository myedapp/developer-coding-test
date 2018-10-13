var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require("body-parser");
const cors = require('cors');

const quests = require('../quest_pathways.json');
const users = require('../users.json');
//test app
app.use(cors());
app.use('/', express.static(__dirname + '/front-end/myApp/dist/myApp'));
app.use(bodyParser.json({ limit: '10mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));


app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/getallquest.htm', async function (req, res) {
    res.json(quests);
})
app.get('/getallusers.htm', async function (req, res) {
    res.json(users);
})
// app.get('*', function(req, res) {
//     res.sendfile('../front-end/myApp/dist/myApp'); // load the single view file (angular will handle the page changes on the front-end)
// });
var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Listening on: http://%s:%s", host, port)

})



