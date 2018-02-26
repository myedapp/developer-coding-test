import React from 'react';
import ReactDOM from 'react-dom';

import './css/app.css';
import './scss/app.scss';

import SiteWrapper from './components/SiteWrapper';

const render = () => {
  ReactDOM.render(
    <SiteWrapper />,
    document.getElementById('root'));
}

render();
