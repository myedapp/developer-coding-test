# myEdOnline Developer Coding Challenge

Applicant: Bill Peibing Gu
Email: peibing.gu@Hotmail.com

## How to make it work --- SIMPLE

- checkout branch billgu, go to your local folder:
----
  |-- INSTRUCTIONS.md
  |-- public
  |    |-- README.md
  |    |-- app.js
  |    |-- client.html
  |    |-- server.php
  |
  |-- quest_pathways.json
  |-- users.json


## 1. Run 'API Server' first

assume you have php installed on your local machine, so we can run php in command line / Terminal:
 [project folder]> cd public
 [project folder]> php -S 0.0.0.0:8000
 now you should get information  "
 Listening on http://0.0.0.0:8000
 Document root is [full path to project folder]/public
 Press Ctrl-C to quit
 "
KEEP IT RUNNING, DON'T PRESS Ctrl-C or CLOSE THAT WINDOW

Congraduations! let's test it. Open your web browser, type in http://0.0.0.0:8000/server.php/?file=users, you should get response of users.json on the page, and get response of quest_pathways.json if you type in http://0.0.0.0:8000/server.php/?file=quest_pathways

## 2. Show the work

Now open another web browser, or just open new tab in your browser, type in http://0.0.0.0:8000/client.html
Make sure your machine is on internet, the page needs:
https://ajax.googleapis.com/ajax/libs/angularjs/1.7.6/angular.min.js
https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css

All students and their quests information should be showing up now.

##