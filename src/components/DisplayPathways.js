import React from 'react';
import DisplaySinglePath from './DisplaySinglePath';

export default function DisplayPathways(props) {
  return (
    <div>
      {
        props.pathways.map((path) => {
          return <DisplaySinglePath key={path.order} {...path} />;
        })
      }
    </div>
  );
}
