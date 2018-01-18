import React, { Component } from 'react'
import Display from './Display'
import TaskInput from './TaskInput';

class Task extends Component {

  constructor(){
    super()
    this.state = {
      users: [],
      quests: [],
      tasks: []
    }
  }

  getUser(){
    fetch('/users.json')
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      this.setState({
        users: json
      })
    })
    .catch((e)=>{
        alert(e);
    });
  }

  getQuest(){
    fetch('/quest_pathways.json')
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      this.setState({
        quests: json
      })
    })
    .catch((e)=>{
        alert(e);
    });
  }

  handleData(){
    let arr = []
    for (let i in this.state.users) {
      for (let q in this.state.quests) {
        if (this.state.users[i].id === this.state.quests[q].user_id) {
          arr.push({'user_id':this.state.users[i].id,'fullname':this.state.users[i].fullname,'quest':this.state.quests[q].quest_paths})
        }
      }
    }
    return arr
  }

  componentDidMount(){
    this.getUser()
    this.getQuest()
  }

  handleSubmit () {
      let tasks = this.state.tasks
      tasks.push('')
      this.setState({tasks:tasks})
  }

  render() {
    let arr = this.handleData()
    return (
      <div className='wrapper'>
        <table border='1'>
          <thead>
            <tr>
              <th className='fullname'>Full Name</th>
              <th className='quest'>Quest</th>
              <th className='completion'>Completion</th>
              <th className='mark'>Mark</th>
            </tr>
          </thead>
          <tbody className='table-body'>{arr.map((data, i) => <Display data={data} key={i} />)}
            {this.state.tasks.map((task,q) => <TaskInput task={task} key={q} />)}
          </tbody>
        </table>
        <div className='button-field'>
          <button className='btn btn-lg' onClick={this.handleSubmit.bind(this)}>
            Add New
          </button>

        </div>
      </div>
    )
  }
}

export default Task;
