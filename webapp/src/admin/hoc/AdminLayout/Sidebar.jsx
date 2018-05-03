import React from 'react';
import { Link } from 'react-router-dom';

/* eslint jsx-a11y/anchor-is-valid: 0 */

const styles = {
  percentStyle: {
    border: '1px solid white',
    padding: '2px 8px',
    fontSize: 10,
    marginRight: 5,
    marginLeft: '-3px',
    borderRadius: 5,
  },
};

const SideBar = () => (
  <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
    <div className="menu_section">
      <ul className="nav side-menu">
        <li>
          <Link to="/admin/#dashboard">
            <i className="fa fa-home" />
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/admin/manage-students">
            <i className="fa fa-cube" />
            Student Management
          </Link>
        </li>
        <li>
          <Link to="/admin/#transactions">
            <i className="fa fa-refresh" />
            Transactions
          </Link>
        </li>
        <li>
          <Link to="/admin/#discount-codes">
            <i className="fa fa-percent" style={styles.percentStyle} />
            Discount Codes
          </Link>
        </li>
        <li>
          <Link to="/admin/#analytics">
            <i className="fa fa-line-chart" />
            Analytics
          </Link>
        </li>
        <li>
          <Link to="/admin/#settings">
            <i className="fa fa-gear" />
            Settings
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default SideBar;
