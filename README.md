# myEd Developer Coding Challenge

## Overview

The myEd project provided allows teachers to view student quests through a simple one page interface. In the application, teachers can select individual students through a tab interface that then presents student quest cards.

## Technologies

Technologies used in this application include.
* React
* ReactStrap
* React-Web-Tabs
* Webpack
* Nodejs
* Jest for testing (use the command "npm test")

The reason behind using these technologies was to deliver the myEd project in a simple and efficient manner that is appropriate for the problem space. While I have experience with other technologies (such as Laravel for instance), it would be excessive for this problem space.

## Running the Application
Running the Application involves starting the nodejs server and then running the frontend application.
* Extract the Github project to your computer.
* Run the nodejs server: using a terminal navigate to the server directory and execute the command "node server.js".
* Run the frontend application: using another terminal navigate to the myedquests directory. Run "npm install" to fetch dependency packages, then execute the command "npm start". A production build can also be generated with npm run build.

## Troubleshooting
I have noticed that sometimes when cloning this repository the 'react-scripts' module cannot be found. If this occurs, run "npm install react-scripts"