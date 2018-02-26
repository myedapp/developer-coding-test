import React from 'react';

import getAPIData from '../services/userService';
import DisplayPathways from './DisplayPathways';

export default class StudentProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      quest_paths: [],
    };
  }

  componentWillMount() {
    this.loadPathway();
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.id !== nextProps.id) {
      this.setState( {id : nextProps.id }, this.loadPathway);
    }
  }

  loadPathway() {
    return getAPIData(`http://localhost:3100/api/quest_pathways/${this.state.id}`)
      .then((pathway) => {
        this.setState({ quest_paths: pathway.quest_paths });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  render() {
    return (
      <div className="profile">
        <h1>{this.props.name}</h1>
          <DisplayPathways pathways={this.state.quest_paths} />
      </div>
    );

  }

}
