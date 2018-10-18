/**
 * @file provides the entry point for React operations.
 * @author Anthony Smith
 * @version 1.0 
 */

import 'react-web-tabs/dist/react-web-tabs.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));