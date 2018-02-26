import React from 'react';
import { Route } from 'react-router-dom';
// import PropTypes from 'prop-types';

import Dashboard from '../components/Dashboard'
import StudentProfile from '../components/StudentProfile'


export default class Routes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="routes">
        <Route exact path="/" render={() => ( // eslint-disable-line
          <div className="mainContainer">
            <Dashboard />
            <StudentProfile />
          </div>
        )}
        />

        <Route path="/profile/:id?" render={({match}) => ( // eslint-disable-line
          <div className="mainContainer">
            <Dashboard />
            <StudentProfile id={match.params.id} name={match.params.name} />
          </div>
        )}
        />
      </div>
    );
  }
}

Routes.propTypes = {
};
