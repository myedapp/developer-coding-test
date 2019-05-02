import React from 'react';
import PropTypes from 'prop-types';
import Student from './Student';
import Quest from './Quest';

//dynamic components
const Componets = {
  Student,
  Quest
};

const List = props => {
  const { items, tagName } = props;
  const showList = () => {
    return items.map((item, index) => {
      const Componet = Componets[tagName];
      return <Componet {...item} key={index} />;
    });
  };
  return <div className='List_wrap'>{showList()}</div>;
};

List.propTypes = {
  items: PropTypes.array.isRequired
};

export default List;
