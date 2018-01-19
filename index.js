import React from 'react';
import ReactDOM from 'react-dom';
import './display.css'
import Task from './Task';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Task />, document.getElementById('root'));
registerServiceWorker();
