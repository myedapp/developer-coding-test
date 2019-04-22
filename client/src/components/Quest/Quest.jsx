import React from 'react';
import "./Quest.css";

const Quest = (props) => {
    return (
        <div className="quest-container">
            <h5>Quest Name: {props.quest.Name}</h5>
            <h6>Status: {props.mark.Submitted?"Submitted":"Not Submitted"}</h6>
            <h6>Completion: {props.mark.Completion}%</h6>
            <h6>Marks: {props.mark.Mark}%</h6>


            <p></p>

        </div>
    );
};

export default Quest;