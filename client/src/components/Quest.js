import React from 'react';
import '../styles/Quest.scss';

const Quest = props => {
  const { quest, mark } = props;

  const progress = () => {
    let pbClass = ['Quest_progress-bar'];
    if (mark.completion > 80) pbClass = [...pbClass, 'success'];
    if (mark.completion < 50) pbClass = [...pbClass, 'fail'];
    const width = { width: mark.completion + '%' };
    return (
      <div className='Quest_mark-completion'>
        Completion:{' '}
        <div className='Quest_progress-bar-wrap'>
          <span style={width} className={pbClass.join(' ')} />
        </div>
        {mark.completion}%
      </div>
    );
  };

  return (
    <div className='Quest_item-wrap'>
      <h6 className='Quest_quest-name'>{quest.name}</h6>
      <span className='Quest_mark-submitted'>Submitted: {mark.submitted ? 'Yes' : 'No'}</span>
      {progress()}
      <span className='Quest_mark-mark'>Mark: {mark.mark ? mark.mark : 'N/A'}</span>
    </div>
  );
};

export default Quest;
