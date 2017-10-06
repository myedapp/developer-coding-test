import axios from 'axios';
import React, { Component } from 'react';
import './user.css';
import Quests from './quests';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users : []
        }
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.users.map((item, index) => 
                        ( 
                            <li key={item.id}>
                                <span className="name">{item.fullname}</span>
                                <Quests userId={item.id}></Quests>
                            </li> 
                        ))
                    }
                </ul>                
            </div>
        );
    }

    componentDidMount() {
        axios
            .get('http://localhost:3001/api/users')
            .then((response) => {
                this.setState({ users : response.data });            
            })
      }    
}

export default Users;