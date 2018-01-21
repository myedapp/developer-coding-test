import React, { Component } from 'react';
import { Grid, PageHeader, PanelGroup } from 'react-bootstrap';
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
    for (let q of this.state.questsData.quests) {
      if (q.user_id === userId) {
        return q;
      }
    }
    // If not found, return empty object
    return {
      user_id: 0,
      quest_paths: []
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Grid>
          <PageHeader>
            Students Quests Report
          </PageHeader>
          <PanelGroup accordion id="quest-accordion">
            {this.state.usersData.users.map(u => (
              <QuestPath key={u.id} user={u} qPath={this.getUserQuestPath(u.id)} />
            ))}
          </PanelGroup>
        </Grid>
      </div>
    );
  }
}

export default App;