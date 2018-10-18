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

    return null;
  }
}

export default App;
