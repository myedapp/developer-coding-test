import React, { Component } from 'react';
import Header from './components/Header';
import List from './components/Student/List';

class App extends Component {
  state = {
    students: [],
    quests: []
  };

  componentDidMount() {
    const promise = [];
    promise.push(fetch('api/users').then(res => res.json()));
    promise.push(fetch('api/quests').then(res => res.json()));
    Promise.all(promise).then(res =>
      this.setState({ students: [...res[0].data], quests: [...res[1].data] })
    );
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <List items={this.state.students} tagName='Student' />
      </div>
    );
  }
}

export default App;
