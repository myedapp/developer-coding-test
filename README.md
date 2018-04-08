# myEd Developer Coding Challenge

## Overview
 - Full-stack JavaScript application
 - Back-end built using Node.js & Express.js
 - Front-end built using ReactJS
 - Bundler: [Parcel](https://www.npmjs.com/package/parcel) 

## Setup Instructions

 1. Download the application directory. 

 2. Open your terminal, navigate to the application's API folder and install dependencies using your package manager of choice.

 		yarn install 
	  
 3. Start the API server (note: this will run at localhost:7000)  
 
  		yarn start
  
 4. Open a new terminal window, navigate to the application's web folder and install dependencies.

 		yarn install 
	  
 5. Run the bundler and start the client server  
 
  		yarn start
 
 6. View the application in your browser!
 
 7. *Note: the back-end also has a test suite which can be run by navigating to the API directory in your terminal*
	 
  		yarn tests
	
## Usage and features

1. Teachers can view each student's quests as a row in an interactive table. Each table row displays:

  - the student's name 
  - the quest's name
  - the percentage of the quest the student completed
  - whether the student has submitted the quest
  - the mark the student received (if any)

2. Each column of the table can be dynamically sorted by clicking on the header.

3. Table data for each column can be dynamically filtered by typing the desired data - for example, the student's name or the quest's name. The submission and mark columns can be filtered by drop down menu.

4. Each student's name can be clicked to display additional useful data for the teacher to gauge the student's progress:
  - the average mark the student has received for his or her quests (next to the average mark for all students)
  - the student's average quest completion rate (next to the average completion rate for all students)
  - how many quests the student has submitted
  - how many unsubmitted quests the student currently has
  - how many of the student's quests are unmarked

5. Each quest's name can be clicked to display additional useful data for the teacher to assess the quest:
  - the average mark the quest has received from all students
  - the quest's average completion rate across all students
  - how many of the quest's submissions are unmarked
