import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Routes from '../routes/Routes';

export default function SiteWrapper() {
  const logo = '//static1.squarespace.com/static/59f146e0f09ca489e15d0ba8/t/59f692a110952624f56c841f/1516762551047/?format=1500w';

  return (
    <div className="flexContainer">
      <header>
        <img src={logo} alt="myEd - Embrace Difference" />
        <span>LOG IN</span>
      </header>
      <main>
        <Router>
          <Routes/>
        </Router>
      </main>
    </div>
  );
}
