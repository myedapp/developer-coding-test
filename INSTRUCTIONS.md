# myEdOnline Developer Coding Challenge

This is coding challenge for potential recruits to myEdOnline. It should take about 2 hours, though feel free to spend more or less time as you see fit.

## Background

myEdOnline provides an app that lets teachers send out work (“quests”) to students in a personalised way. Rather than a “one sized fits all” approach where every student gets the same work at the same time, we focus on individualising the learning pathway for each student, so the are given work that is right for their interests and their skill level.

## The task

This repository contains static JSON files.
- `quest_pathways.json` - Represents the work that has been sent to students in a particular class.
- `users.json` - Students information

Your task is to
- Build a basic front end that clearly displays work in a way which would be easy for a teacher to take in
- Build a basic back end server that serves information from the json files.

## Requirements

* You must load the JSON file with a HTTP request, as if it were coming from an API server.
* The page must display all students, their individual quests, and the completion percentage and mark percentage (if available) for each quest.
* Include any instructions needed for how to compile or run your project.


## Recommendations

We suggest you start by setting up an HTTP server that will serve up these JSON files upon request. Once you’ve got the API available, use whatever client-side libraries or frameworks you like to build the application that consumes it.

* Be creative in considering how you might display the results.
* Feel free to use frameworks and libraries, but keep in mind that we are looking for something that demonstrates that you can write good code, not just wire up a framework.
* We like tests.

Beyond meeting the requirements above, it’s up to you where you want to focus. We’re happy for you to focus on whatever areas you feel best showcase your skills. Ideas might include working on a responsive UI, adding some interaction, or implementing developer tooling like Webpack, Docker, etc.

## Submitting your solution

Fork this repository, create a new branch in Git, and commit your changes on that branch. When you have finished, push your changes, and open a Pull Request against this repository.


We’re looking forward to your innovative solutions!
