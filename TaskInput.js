import React, { Component } from 'react';

class TaskInput extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      quest: '',
      completion: '',
      mark: ''
    }
  }
  componentWillMount(){
    const name = localStorage.getItem('name')
    if (name) {
      this.setState({name})
    }
  }
  handleNameChange (event) {
    this.setState({
      name: event.target.value
    })
  }
  handleQuestChange (event) {
    this.setState({
      quest: event.target.value
    })
  }
  handleCompletionChange (event) {
    this.setState({
      completion: event.target.value
    })
  }
  handleMarkChange (event) {
    this.setState({
      mark: event.target.value
    })
  }

  handleSubmit () {
    if (this.props.onSubmit) {
      const { name, quest, completion, mark } = this.state
      this.props.onSubmit({name, quest, completion, mark})
    }
    this.setState({ quest : '',completion:'',mark:'' })
  }

  handleNameBlur(event){
    localStorage.setItem('name', event.target.value)
  }
  render() {
    return (
      <tr>
          <td>
            <input value={this.state.name} onChange={this.handleNameChange.bind(this)}
            onBlur={(this.handleNameBlur.bind(this))} />
          </td>
          <td>
            <input value={this.state.quest} onChange={this.handleQuestChange.bind(this)} />
          </td>
          <td>
            <input type='number' value={this.state.completion} onChange={this.handleCompletionChange.bind(this)} />
          </td>
          <td>
            <input type='number' value={this.state.mark} onChange={this.handleMarkChange.bind(this)} />
          </td>
      </tr>
    )
  }
}

export default TaskInput;
