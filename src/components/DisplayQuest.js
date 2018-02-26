import React from 'react';

export default function DisplayQuest(props) {
  return (
      <div className="quest">
        <span><strong>{props.quest.id}</strong>. </span>
        <span>{props.quest.name}</span>
      </div>
  );
}
