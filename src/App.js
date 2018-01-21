import React, { Component } from 'react';
import { Grid, PageHeader } from 'react-bootstrap';
import Header from './Header';
import QuestPath from './components/report/QuestPath';

class App extends Component {

  constructor() {
    super();
    // Init state
    this.state = {
      usersData: {
        error: null,
        isLoaded: false,
        users: []
      },
      questsData: {
        error: null,
        isLoaded: false,
        quests: []
      },
    };
  }

  // On component mount
  componentDidMount() {
    // The right way to update state is to copy the object, update and set back to state
    let usersData = Object.assign({}, this.state.usersData);    // Create a copy of usersData
    let questsData = Object.assign({}, this.state.questsData);  // Create a copy of questsData
    // Fetch users
    fetch("users.json")
      .then(res => res.json())
      .then(
      // On success  
      (result) => {
        usersData.isLoaded = true;
        usersData.users = result;
        this.setState({ usersData: usersData });
      },
      // Handle errors
      (error) => {
        usersData.isLoaded = true;
        usersData.error = error;
        this.setState({ usersData: usersData });
      }
      );
    // Fetch quests
    fetch("quest_pathways.json")
      .then(res => res.json())
      .then(
      // On success  
      (result) => {
        questsData.isLoaded = true;
        questsData.quests = result;
        this.setState({ questsData: questsData });


        console.log(this.state);

      },
      // Handle errors
      (error) => {
        questsData.isLoaded = true;
        questsData.error = error;
        this.setState({ questsData: questsData });
      }
      );
  }

  // Get user's quest path by id
  getUserQuestPath(userId) {
    return {};
  }

  render() {
    return (
      <div>
        <Header />
        <Grid>
          <PageHeader>
            Students Quests Report
          </PageHeader>
          {this.state.usersData.users.map(u => (
            <QuestPath key={u.id} user={u} questPath={this.getUserQuestPath(u.id)} />
          ))}
        </Grid>
      </div>
    );
  }
}

export default App;