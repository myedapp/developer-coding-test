import React from 'react';

import { NavLink } from 'react-router-dom';

export default function DisplaySingleUser(props) {
  const profileURL = `/profile/${props.id}`;

  return (
    <div className="user">
      <div>
        <NavLink activeClassName="selectedUser" to={profileURL}>
          <span>{props.fullname}</span>
        </NavLink>
      </div>
    </div>
  );
}
