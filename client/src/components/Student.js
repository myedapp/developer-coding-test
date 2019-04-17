import React, { useState, useContext } from 'react';
import propTypes from 'prop-types';
import List from './List';
import QuestContext from './context/QuestContext';
import '../styles/Student.scss';
// Image borrow from https://www.google.com/search?biw=1920&bih=978&tbm=isch&sa=1&ei=Ofe2XKG3JNXerQHgt7iAAg&q=user+photo+unknown&oq=user+photo+unknown&gs_l=img.3..0i8i30.20229.22441..22744...1.0..0.189.1492.1j9......1....1..gws-wiz-img.......0i24.1JenS3cJm9k#imgdii=ioCPmfSwZJ2UNM:&imgrc=QgSXRbrZBitosM:
import photo from '../images/no-photo.png';

const Student = props => {
  const [showQuests, toggleShowQuests] = useState(false);
  const { id, fullname } = props;
  const allQuests = useContext(QuestContext);
  const getQuest = allQuests.filter(q => q.user_id === id);
  let quest = [];
  if (getQuest.length > 0) quest = getQuest[0].quest_paths;

  const questsPanel = () => {
    if (showQuests)
      return (
        <article>
          <List items={quest} tagName='Quest' />
        </article>
      );
    return null;
  };

  const togglePanel = () => {
    const label = showQuests ? 'Close' : 'Detials';
    return (
      <button className='Student_toggle-button' onClick={() => toggleShowQuests(!showQuests)}>
        {label}
      </button>
    );
  };

  return (
    <section className='Student_wrap'>
      <div className='Student_photo-wrap'>
        <img className='Student_photo' src={photo} alt={fullname} />
      </div>
      <h5>{fullname}</h5>
      <div className='Student_course-num'>Courses: {quest.length}</div>
      {togglePanel()}
      {questsPanel()}
    </section>
  );
};

Student.propTypes = {
  id: propTypes.number.isRequired,
  fullname: propTypes.string.isRequired
};

Student.defaultProps = {
  id: 0,
  fullname: ''
};

export default Student;
