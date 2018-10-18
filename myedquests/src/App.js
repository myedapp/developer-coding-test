/**
 * @file provides an application for teachers to visualise student quests.
 * @author Anthony Smith
 * @version 1.0 
 */

import React, { Component } from 'react';
import {Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import {Alert, Badge, Card, CardBody, CardTitle, Container, Progress} from 'reactstrap'

/**
 * @constant
 * @type {Object} 
 * @description stores API information.
 * @property {String} USERS defines the get users operation.
 * @property {String} QUEST_PATHWAYS defines the get quest pathways operation.
 */
const API = {
  HOST: "http://localhost:3000/",
  USERS: "users",
  QUEST_PATHWAYS: "questpathways"
};

/** Class that represents a simple application for viewing student quests. */
class App extends Component {
  
  /**
   * Creates the app with a state for users and quests.
  */
  constructor() {
    super();
    this.state = {
      users: [],
      quests: []
    };
  }

  /**
   * Fetches the user and quest data.
  */
  componentDidMount() {

    fetch(API.HOST+API.USERS).then(data => {
      return data.json();
    }).then(
      json => {
        this.setState({
          users: json
        });
    });

    fetch(API.HOST+API.QUEST_PATHWAYS).then(data => {
        return data.json();
    }).then(
      json => {
        this.setState({
          quests: json
        });
    });
  }

  /**
   * Renders the user and quest data using imported components.
  */
  render() {

    let studentTabs=[];     //Stores student name tabs for navigation
    let questPanels = [];   //Stores questPanels to display student cards
    let cards = [];         //Stores card components for displaying quests
    let mark;               //Stores the student mark

    //Prevents component processing/rendering before data is available.
    if(this.state.users.length === 0 || this.state.quests.length === 0)
    {
      return null;
    }

    //Iterates over each student building their tab and questPanel
    for(let i=0;i<this.state.users.length;i++) {

      //Create the student's tab
      studentTabs.push(<Tab tabFor={this.state.users[i].fullname}>{this.state.users[i].fullname}</Tab>);

      //Reset the cards variable and prepare to setup quest cards
      cards = [];
      for(let j=0; j<this.state.quests[i].quest_paths.length; j++)
      {
        //Set the mark variable to 0 if it is absent from the json markup
        if(this.state.quests[i].quest_paths[j].mark.mark === null)
        {
          mark = 0;
        }
        else
        {
          mark = this.state.quests[i].quest_paths[j].mark.mark;
        }

        //Create the quest card and push it to cards
        cards.push(
          <Card className="questCard">
            <CardBody>
              <CardTitle>{this.state.quests[i].quest_paths[j].order+1}. {this.state.quests[i].quest_paths[j].quest.name}</CardTitle>
              <div className="text-center">Mark</div>
              <Alert className="text-center" color={this.state.quests[i].quest_paths[j].mark.mark > 50 ? 'success' : 'danger'}>
                { mark }%
              </Alert>
              <Badge className="submittedBadge" color={this.state.quests[i].quest_paths[j].mark.submitted ? 'success' : 'secondary'}>Submitted</Badge>
              <Badge color={this.state.quests[i].quest_paths[j].quest.is_active ? 'success' : 'secondary'}>Active</Badge>
              <div className="completionHeader text-center">Completion</div>
              <Progress striped value={this.state.quests[i].quest_paths[j].mark.completion} min="0" max="100">{this.state.quests[i].quest_paths[j].mark.completion}%</Progress>
            </CardBody>
          </Card>);
      }

      //Create the questPanel using the cards
      questPanels.push(<TabPanel tabId={this.state.users[i].fullname}>{cards}</TabPanel>);
    }

    //Prepare and return the processed student tabs and quest panels
    return (
      <Container>
        <h1 className="display-5">Student Quests</h1>
        <p className="lead">Select a student below to view their quests.</p>
        <Tabs defaultTab="vertical-tab-one" vertical>
          <TabList>
            {studentTabs}
          </TabList>
            {questPanels}
        </Tabs>
      </Container>
    );
  }
}

export default App;
