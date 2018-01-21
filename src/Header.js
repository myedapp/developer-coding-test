import React, { Component } from 'react';
import { Grid, Navbar } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <Navbar inverse fixedTop>
        <Grid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">myEd App</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        </Grid>
      </Navbar>
    );
  }
}

export default Header;