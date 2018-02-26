import React from 'react';

import DisplayQuest from './DisplayQuest';
import DisplayMark from './DisplayMark';

export default function DisplaySinglePath(props) {
  return (
    <div className="path">
      <div>
        <div className="card">
          <DisplayQuest quest={props.quest} />
          <DisplayMark mark={props.mark} />
        </div>
      </div>
    </div>
  );
}
