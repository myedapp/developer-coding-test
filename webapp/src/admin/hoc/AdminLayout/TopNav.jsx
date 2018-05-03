import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { string, func } from 'prop-types';

import { clearIdentity } from '../../../common/actions';

/* eslint jsx-a11y/interactive-supports-focus: 0 */
/* eslint jsx-a11y/click-events-have-key-events: 0 */

const TopNav = ({ username, logout }) => (
  <div className="top_nav">
    <div className="nav_menu">
      <nav>
        <div className="nav toggle">
          <a id="menu_toggle">
            <i className="fa fa-bars" />
          </a>
        </div>

        <ul className="nav navbar-nav navbar-right">
          <li className="">
            <a role="button" className="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false" >
              {username} &nbsp;
              <span className=" fa fa-angle-down" />
            </a>
            <ul className="dropdown-menu dropdown-usermenu pull-right">
              <li>
                <Link to="/admin/profile">Profile</Link>
              </li>
              <li>
                <a role="button" onClick={logout} >
                  <i className="fa fa-sign-out pull-right" /> Log Out
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

TopNav.propTypes = {
  username: string,
  logout: func.isRequired,
};
TopNav.defaultProps = {
  username: '',
};

export default connect(
  state => ({
    username: state.common.identity.username,
  }),
  dispatch => ({
    logout: () => dispatch(clearIdentity()),
  }),
)(TopNav);
