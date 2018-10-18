/**
 * @file a simple nodejs http server for serving the myEd user and quest data
 * @author Anthony Smith
 * @version 1.0 
 */

/** @constant
    @description Provides the HTTP module.
    @default
*/
const HTTP = require('http');

/** @constant
    @description Provides the FileSystem module.
    @default
*/
const FILE_SYSTEM = require('fs');

/** @constant
    @type {number} 
    @description the HTTP server's listening port.
    @default
*/
const PORT = 3000;

const API = {
    USERS: "/users",
    QUEST_PATHWAYS: "/questpathways"
}

const FILES = {
    USERS: "users.json",
    QUEST_PATHWAYS: "quest_pathways.json"
}

/**
 * Handles incoming request routing
 * @param request, the HTTP request object.
 * @param response, the HTTP response object.
*/
const requestHandler = (request, response) => {

    //Converts the request url to lowercase for simple matching.
    let resource = request.url.toLowerCase();  

    //Allows cross origin sharing.
	response.setHeader('Access-Control-Allow-Origin', '*');

    //Routes the request
    switch(resource) {
        case API.USERS:
            retrieveData(FILES.USERS, response);
            break;
        case API.QUEST_PATHWAYS:
            retrieveData(FILES.QUEST_PATHWAYS, response);
            break;
        default:
            response.end("Unknown Request");
    }
}

/**
 * Retrieves data and sends to client
 * @param fileName, specifies the file to be retrieved.
 * @param response, the HTTP response object.
*/
const retrieveData  = (fileName, response) => {

    FILE_SYSTEM.readFile(fileName, 'utf8', function (err,data) {

        if (err) {
            return console.log('The file system has failed ', err);
        }

        response.end(data);
    });
}

/** @constant
    @type {number} 
    @description initialises the server.
    @default
*/
const SERVER = HTTP.createServer(requestHandler);

/**
 * Sets up the server for listening
 * @param PORT, the server port number.
 * @param err, handles error codes.
*/
SERVER.listen(PORT, (err) => {

  if (err) {
    return console.log('The server has failed ', err);
  }

  console.log(`Server is listening on ${PORT}`);
})