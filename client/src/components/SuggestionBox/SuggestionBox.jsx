import React from 'react';
import './SuggestionBox.css';

const SuggestionBox = (props) => {
    let options = '';
    if (props.data){
        options = props.data.map(r => {
            let displayString = "ID: "+r.id+" Name: "+r.fullname;
            return (
                <span onClick={() => props.handleOnClick()} onMouseEnter={(e) => props.handleHover(e)} data-id={r.id}
                      key={r.id}>
                {displayString}
            </span>)
        });
    }

    return <div className="suggestions-items"><div>{options}</div></div>
};

export default SuggestionBox;