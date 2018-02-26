import React from 'react';

export default function DisplayMark(props) {
  return (
    <div className="mark">
      <div>
        <strong>Submitted:</strong>&nbsp;{props.mark.submitted ? 'Yes' : 'No'}
      </div>
      <div>
        <strong>Completion:</strong>&nbsp;{props.mark.completion}%
      </div>
      <div>
        <strong>Mark:</strong>&nbsp;{props.mark.mark ? `${props.mark.mark}%` : 'N/A'}
      </div>
    </div>
    );
}
