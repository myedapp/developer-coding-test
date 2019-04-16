import React from 'react';
import PropTypes from 'prop-types';
import Student from './Student';

const List = props => {
  const items = props.items;
  const showList = () => {
    return items.map((item, index) => {
      const { id, fullname, quests } = item;
      return <Student id={id} fullname={fullname} quests={quests} key={index} />;
    });
  };
  return <div className='List_wrap'>{showList()}</div>;
};

List.propTypes = {
  items: PropTypes.array.isRequired
};

export default List;
