import React, { Component } from 'react';
import { Grid, Navbar, PageHeader } from 'react-bootstrap';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Grid>
          <PageHeader>
            Students Quests Report
          </PageHeader>
        </Grid>
      </div>
    );
  }
}

export default App;