import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import List from './components/List';
import QuestContext from './components/context/QuestContext';
import './styles/App.scss';

const App = () => {
  const [students, setStudents] = useState([]);
  const [quests, setQuests] = useState([]);

  useEffect(() => {
    const promise = [];
    promise.push(fetch('api/users').then(res => res.json()));
    promise.push(fetch('api/quests').then(res => res.json()));
    Promise.all(promise).then(res => {
      setStudents([...res[0].data]);
      setQuests([...res[1].data]);
    });
  }, []);

  return (
    <QuestContext.Provider value={[...quests]}>
      <div className='App'>
        <Header />
        <div className='List_outline'>
          <List items={students} tagName='Student' />
        </div>
      </div>
    </QuestContext.Provider>
  );
};

export default App;
