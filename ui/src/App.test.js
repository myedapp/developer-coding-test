import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Users from './users';
import Quests from './users/quests';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

var mock = new MockAdapter(axios);

mock.onGet('http://localhost:3001/api/users').reply(200, [{"id":1,"fullname":"Ryan Grey"},{"id":2,"fullname":"Jacqueline Myers"},{"id":3,"fullname":"Henry Bloggs"},{"id":4,"fullname":"Michael McManns"},{"id":5,"fullname":"Vanessa Riley"}]);
mock.onGet('http://localhost:3001/api/quests/pathways/1').reply(200, {"user_id":1,"quest_paths":[{"order":0,"quest":{"id":1,"name":"Curiosity - The Space Rover"},"mark":{"submitted":true,"completion":100,"mark":100}},{"order":1,"quest":{"id":2,"name":"The 4 Hour Work Week","is_active":false},"mark":{"submitted":true,"completion":55,"mark":null}},{"order":2,"quest":{"id":3,"name":"Let's Learn about Economics"},"mark":{"submitted":true,"completion":27,"mark":10}}]});
mock.onGet('http://localhost:3001/api/quests/pathways/2').reply(200, {"user_id":1,"quest_paths":[{"order":0,"quest":{"id":1,"name":"Curiosity - The Space Rover"},"mark":{"submitted":true,"completion":100,"mark":100}},{"order":1,"quest":{"id":2,"name":"The 4 Hour Work Week","is_active":false},"mark":{"submitted":true,"completion":55,"mark":null}},{"order":2,"quest":{"id":3,"name":"Let's Learn about Economics"},"mark":{"submitted":true,"completion":27,"mark":10}}]});
mock.onGet('http://localhost:3001/api/quests/pathways/3').reply(200, {"user_id":1,"quest_paths":[{"order":0,"quest":{"id":1,"name":"Curiosity - The Space Rover"},"mark":{"submitted":true,"completion":100,"mark":100}},{"order":1,"quest":{"id":2,"name":"The 4 Hour Work Week","is_active":false},"mark":{"submitted":true,"completion":55,"mark":null}},{"order":2,"quest":{"id":3,"name":"Let's Learn about Economics"},"mark":{"submitted":true,"completion":27,"mark":10}}]});
mock.onGet('http://localhost:3001/api/quests/pathways/4').reply(200, {"user_id":1,"quest_paths":[{"order":0,"quest":{"id":1,"name":"Curiosity - The Space Rover"},"mark":{"submitted":true,"completion":100,"mark":100}},{"order":1,"quest":{"id":2,"name":"The 4 Hour Work Week","is_active":false},"mark":{"submitted":true,"completion":55,"mark":null}},{"order":2,"quest":{"id":3,"name":"Let's Learn about Economics"},"mark":{"submitted":true,"completion":27,"mark":10}}]});
mock.onGet('http://localhost:3001/api/quests/pathways/5').reply(200, {"user_id":1,"quest_paths":[{"order":0,"quest":{"id":1,"name":"Curiosity - The Space Rover"},"mark":{"submitted":true,"completion":100,"mark":100}},{"order":1,"quest":{"id":2,"name":"The 4 Hour Work Week","is_active":false},"mark":{"submitted":true,"completion":55,"mark":null}},{"order":2,"quest":{"id":3,"name":"Let's Learn about Economics"},"mark":{"submitted":true,"completion":27,"mark":10}}]});

describe('App', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });    

    it('renders <Users />', () => {        
    });        
})

describe('Users', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Users />, div);    
    });   

    it('renders 5 users', () => {        
    });    

    it('renders user name', () => {        
    });
});

describe('Quests', () => {
    it('renders without crashing', () => {        
    });   

    it('renders quest name', () => {        
    });    

    it('renders mark', () => {        
    });    

    it('renders completion', () => {        
    });    
});

