import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import Quest from './Quest';

class QuestPath extends Component {

  render() {
    return (
      <Panel eventKey={this.props.user.id} bsStyle="primary">
        <Panel.Heading>
          <Panel.Title toggle>{this.props.user.fullname}</Panel.Title>
        </Panel.Heading>
        <Panel.Body collapsible>
        {this.props.qPath.quest_paths.map(q => (
          <Quest key={q.order} qPath={q} />
          ))}
        </Panel.Body>
      </Panel>
    );
  }
}

export default QuestPath;