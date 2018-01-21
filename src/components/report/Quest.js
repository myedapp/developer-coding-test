import React, { Component } from 'react';
import { Row, Col, Label } from 'react-bootstrap';

class Quest extends Component {

  render() {
    return (
      <div>
        <Row>
          <Col md={3}>
            <strong>{this.props.qPath.quest.name}</strong>
          </Col>
          <Col md={3}>
            <Label bsStyle={this.props.qPath.mark.submitted ? 'success' : 'danger'}>
              {this.props.qPath.mark.submitted ? 'Submitted' : 'Not Submitted'}
            </Label>
          </Col>
          <Col md={3}>
            {this.props.qPath.mark.completion}% completed
        </Col>
          <Col md={3}>
            Mark: {this.props.qPath.mark.mark}
          </Col>
        </Row>
        <hr />
      </div>
    );
  }
}

export default Quest;