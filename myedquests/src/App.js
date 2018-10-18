/**
 * @file provides an application for teachers to visualise student quests.
 * @author Anthony Smith
 * @version 1.0 
 */

import React, { Component } from 'react';
import './App.css';

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
  }

  /**
   * Renders the user and quest data using imported components.
  */
  render() {
  }
}

export default App;
