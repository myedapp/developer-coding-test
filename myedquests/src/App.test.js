/**
 * @file provides simple tests for the React application.
 * @author Anthony Smith
 * @version 1.0 
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/** TODO: Normally I would provide more JestJs tests here. I've succesfully used JestJs
 * setups such as nodejs etc. React, however, is a newer library to me so I am not fully familiar with
 * unit testing these components. This is an area I am currently upskilling in.
 */

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
