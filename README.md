# Introduction
This is my submission to the coding challenge. 

My apologies in advance as this is quite a lengthy submission. This is due to the fact that I have re-used a stack that I've been working on at home.

The code is split up into front-end and back-end. The front-end is the main focus of the challenge, however, as I am a full stack dev, I wanted to show that I was confident with both.

### Back-end 
./docker, ./
The backend is Lumen and I have used a pre-made OAuth2+RESTful API config. I have customised it to add in a student controller which outputs the static JSON excerpts. The Lumen OAuth2 also requires a valid login as the student controller route is protected - the credentials are "user@gmail.com"/ "abc123".

The Lumen machine is created by a custom Docker/Docker-compose configuration file. The configuration files were completely created by myself.

### Front-end 
/frontend
The front end uses React + Redux. I wanted to demonstrate a sound knowledge of modern front-end technologies.  All the code, with the exception of some minor helper functions, is mine. I have also created some front-end tests - I would have liked to write more, however, I ran out of time.

The front end use case is as follows 

 1. User Submits Login user@gmail.com / abc123
 2. Client sends credentials
 3. Server sends authorisation code
 4. Client requests token
 5. Server sends token
 6. Client requests student quest paths report + Token
 7. Server sends student quest paths
 8. Client determines (in theory) which students it needs to query and requests students information + Token
 9. Server sends student information
 10.Client Renders student data in Table Component 

I have made the assumption that Quest Paths JSON occurs first followed by Students JSON Information. 

In order to show a certain level of compentency I have opted to code the datagrid/table component myself as opposed to using a library such as jQuery Datatables. 

Tests are run using Karma + Enzyme.

# Installation Guide
### Requirements
1. Docker
2. Ability to run npm/nodejs etc in CLI

### From the host HOST Machine:

 1. Edit the docker-compose file
cd docker
vi docker-compose.yaml
Look for 
      - /Volumes/src/torosolutions/api:/var/www/api
      - Change /Volumes/src/torosolutions/api with your repo location

2. Run ./npm start (from the /docker folder)
Note: Enter root password to enable XDebug port forwarding aliases from docker
Note: Docker-compose will need to build the image from scratch so it will take some time

### From the GUEST Machine
3. Docker Connect to localmachine via ssh ubuntu@localhost -p 2223 (Password is ubuntu)
2. Create an .env file place the following in /var/www/api/.env
APP_ENV=local
APP_DEBUG=true
APP_KEY=base64:VQ4Ga2VAkkCbsvcu70TJKh1pjm6LoPtg8ZZ/EBo1bQc=
DB_HOST=api-db
DB_DATABASE=api
DB_USERNAME=root
DB_PASSWORD=root12
CACHE_DRIVER=file
SESSION_DRIVER=file
QUEUE_DRIVER=sync

3. /var/www/api/composer install
4. php artisan migrate
5. php artisan db:seed

### From the HOST Machine
8. Verify it is working 
Run http://localhost:8000/ 
Browser should respond with {status: 1,data: "Laravel 5.5.* Lumen 5.5.0 RESTful API with OAuth2"}

9. Run the front end
10. cd frontend
11. npm install
12. npm start

13. Verify it is working
Run http://localhost:5555

14. Tests are executed by running
npm test

