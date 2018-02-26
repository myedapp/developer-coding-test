import React from 'react';
import getAPIData from '../services/userService';
import DisplayUsers from './DisplayUsers';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  componentWillMount() {
    this.loadUsers();
  }

  loadUsers() {
    let newUsers =[]; //eslint-disable-line

    return getAPIData('http://localhost:3100/api/users')
      .then((json) => {
        json.map(data => newUsers.push(data));
      })
      .then(() => {
        this.setState({ users: newUsers });
      });
  }

  render() {
    return (
      <div className="dashboard">
        <DisplayUsers users={this.state.users}/>
      </div>
    );

  }

}
