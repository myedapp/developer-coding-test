import React, {Component} from 'react';

import "./StudentCard.css";
import {getReports} from "../../services/questService";
import Quest from "../Quest/Quest";

class StudentCard extends Component {

    state={
        questsData:[],
        studentsData:[]
    };

    async componentWillMount(){
        let {data:questsData} = await getReports();

        let data = JSON.parse(localStorage.getItem("cacheData"));

        let studentsData = data.studentsData;

        this.setState({questsData, studentsData});

    }

    getQuestData = (id) => {
        let filtered;
        let {questsData} = this.state;

        filtered =  questsData.filter(quest=>{
            if (quest.User_id.toString() === id){
                return quest;
            }
        });
        return filtered;

    };

    render(){

        let student_name = '';
        let data = [];

        let width = window.innerWidth;
        let cabinContainerColumnClass = 'col-6 '+"flight-card-container-main";
        if(width<650){
            cabinContainerColumnClass = 'col-12 ' + "flight-card-container-main";
        }
        let id =this.props.location.pathname.substring(1);

        let questData = this.getQuestData(id);

        let filtered = this.state.studentsData.filter(
            student=> {
                let student_id = student.id.toString();
                if (student_id ===id){
                    return student;
                }
            }
        );

        if (filtered.length>0){
            student_name = filtered[0].fullname;
        }

        if (questData.length>0){
            data = questData[0].Quest_paths;
        }

        return(
            <div className={cabinContainerColumnClass}>
                <div className="flight-card-container-inner">
                    <div>
                        <div >
                            <h5>Quest Details of: {student_name}</h5>
                            {data.map(quest_path=>{
                                return <Quest key={quest_path.Quest.Name} quest={quest_path.Quest} mark={quest_path.Mark}/>;

                            })}
                        </div>

                    </div>

                    <br/>


                </div>
            </div>
        )};


}

export default StudentCard;