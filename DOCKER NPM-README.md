#Purpose
This application serves the purpose of a solution for myEd developer coding test. This solution is designed by Usama Saddiq.

# Student portal environment setup
This Readme has included the instructions of how to setup the portal locally and how to build the development environment. Please make sure you have the following installed in your computer if you want to setup the portal in your local machine
- Docker
- npm

If you'r facing any dependency problem in Linux, just run sudo apt install -f and the dkpg will install whatever needed.


## Build ('dev') Environment

-  To Start Build Instance Locally

```
docker-compose build
```

- To Start Build Instance 

```
docker-compose.yml up -d
```


- To Access Build Instance Locally     --- NOTE THAT THIS NEEDS TO BE TAGGED OR YOU NEED TO USE THE CONTAINER ID

```
docker exec -it forum_app_1 bash
```

-- All the content can be found in #/app inside the container
-- You can access the webapp via localhost:8009


###Building and installing dependencies###

-Change to the forum directory in outside docker build instance and make sure you have npm
-Firstly install all of the dependencies of the project using
```
npm install 

```
- This should install all the dependencies of the project 


-- To build the assets of the project change to the forum directory on the command line outside docker instance
```
npm run dev
npm run watch - should add a watcher to the files and the files build as you change anything
```
This should build all of the dependencies and assests and bundle them into two files to display.