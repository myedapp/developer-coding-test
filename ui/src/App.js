import React, { Component } from 'react';
import logo from './assets/images/myed-logo-white.png';
import './App.css';
import Users from './users';

class App extends React.Component {

  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">            
          <img className="nav-bar-logo" src={logo}></img>
          <h1 className="App-title">Technical Assessment</h1>
        </header>        
        <Users></Users>
      </div>
    );
  }
}

export default App;