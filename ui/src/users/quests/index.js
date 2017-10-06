import axios from 'axios';
import React, { Component } from 'react';
import './quests.css';

class Quests extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : 
            {
                quest_paths : []
            }
        }
    }

    render() {
        return (
            <ul className="quests">
                {
                    this.state.data.quest_paths.map((item, index) =>
                    (
                        <li key={index}>                            
                            <strong className="Quest-name">{item.quest.name}</strong>
                            <div className="grid">
                                <label>Submitted</label>
                                {item.mark.submitted && (<span>Yes</span> )}
                                {!item.mark.submitted && (<span>No</span> )}
                                <label>Completion</label>
                                <span>{item.mark.completion}</span>
                                <label>Mark</label>
                                {item.mark.mark && (<span>{item.mark.mark}</span>)}
                                {item.mark.mark == null && (<span>-</span>)}
                                <label>Active</label>
                                {item.quest.is_active == null && (<span>Yes</span> )}
                                {item.quest.is_active == false && (<span>No</span> )}
                            </div>                            
                        </li>
                    ))
                }                
            </ul>            
        );
    }

    componentDidMount() {                
        // Just to illustrate using url attributes, we wouldn't want to make so many network calls in production
        axios
            .get(`http://localhost:3001/api/quests/pathways/${this.props.userId}`)
            .then((response) => {
                this.setState({ data : response.data });                      
            })
      }    
}

export default Quests;