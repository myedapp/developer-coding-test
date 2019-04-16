import React from 'react';
import propTypes from 'prop-types';

const Student = props => {
  const { id, fullname, quests } = props;
  return (
    <div className='Student_wrap'>
      <h5>{fullname}</h5>
    </div>
  );
};

Student.propTypes = {
  id: propTypes.number.isRequired,
  fullname: propTypes.string.isRequired,
  quests: propTypes.array
};

export default Student;
