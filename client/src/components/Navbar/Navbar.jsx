import React from 'react';

import './Navbar.css'
import Input from "../common/Input/Input";
import Button from "../common/Button/Button";


const Navbar = props =>(
  <header className="navbar-header">
      <nav className="navbar_navigation">
          <div className="navbar_logo"><a href="/">My Students</a></div>
          <div className="spacer"></div>
          <Input onChange={props.handleChange} value={props.value} placeholder="search by ID or Name"/>
          <Button onClickSearchButton={props.onClickSearchButton} label="Search"/>
      </nav>

  </header>
);

export default Navbar;