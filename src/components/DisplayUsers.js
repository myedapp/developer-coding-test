import React from 'react';

import DisplaySingleUser from './DisplaySingleUser';

export default function DisplayUsers(props) {
  return (
    <div>
        {
          props.users.map((user) => {
            return <DisplaySingleUser key={user.id} {...user} />;
          })
        }
    </div>
  );
}
