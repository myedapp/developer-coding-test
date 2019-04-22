import React, { Component } from 'react';
import {Route, Switch, withRouter} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import Navbar from './components/Navbar/Navbar';
import './App.css';
import "react-toastify/dist/ReactToastify.css"
import moment from "moment";
import {getStudents, getReports} from "./services/questService";
import AllStudents from "./components/AllStudents/AllStudents";
import SuggestionBox from "./components/SuggestionBox/SuggestionBox";
import StudentCard from "./components/StudentCard/StudentCard";
class App extends Component {

    state={
        studentsData:[],
        questsData:[],
        filtered: [],
        inputValue:'',
        inputId:'',
    };

    //make server request and cache data
    async componentWillMount(){
        let setLocalStorage = true;
        // if (false){
        if (localStorage.getItem("cacheData")){
            let data = JSON.parse(localStorage.getItem("cacheData"));
            if (data.validity){
                let validity = moment(data.validity);
                if (validity>moment()){
                    let studentsData = data.studentsData;
                    let questsData = data.questsData;
                    this.setState({studentsData, questsData});
                    setLocalStorage = false;
                }
            }
        }
        //cache data if not already cached
        if (setLocalStorage) {
            let {data:studentsData} = await getStudents();
            let {data:questsData} = await getReports();

            this.setState({studentsData, questsData});

            let data = await {
                'studentsData': studentsData,
                'questsData' : questsData,
                'validity':moment().add(7, "days")
            };
            localStorage.setItem('cacheData', JSON.stringify(data));
        }
    }


    //handle search box input
    handleChange = (e) =>{
        let filtered;
        let {studentsData} = this.state;
        let search_student = e.currentTarget.value.toLowerCase();
        let id='';

        if (studentsData.length<=0){
            return;
        }
        else if (search_student.length <=0){
            console.log("here");
            filtered=[];
        }
        else{
            filtered = studentsData.filter(
                student=> {
                    let student_id = student.id.toString();
                    let student_name = student.fullname.toLowerCase();
                    if (student_id ===search_student || student_name.includes(search_student)){
                        // dog.breed = dog.breed.replace(search_breed, search_breed);
                        id=student_id;
                        return student;
                    }
                }
            );
        }
        this.setState({
            filtered,inputValue:search_student, inputId:id
        });
    };
    //handles hover over the suggestions box for search
    handleHover = (e) =>{
        let ele_value = e.currentTarget.innerHTML;

        let ele_data_id = e.currentTarget.getAttribute('data-id');
        this.setState({inputValue:ele_value, inputId:ele_data_id});

    };
    //suggestions box click handler
    handleOnClick = () =>{
        this.setState({filtered:[]});

    };

    //search button clikc handler
    onClickSearchButton = (e) =>{
        this.props.history.push("/"+this.state.inputId)

    };

    render() {
        let suggestionBox = null;
        if(this.state.filtered.length>0) suggestionBox= <SuggestionBox handleOnClick = {this.handleOnClick} handleHover = {this.handleHover} data = {this.state.filtered}/>;

        return (
            <React.Fragment>
                <ToastContainer/>
                <Navbar onClickSearchButton={this.onClickSearchButton} handleChange={this.handleChange} value={this.state.inputValue} />
                {suggestionBox}
                <main className="main-container" style={{marginTop:'60px'}}>
                    <Switch>
                        <Route path="/:id" component={StudentCard}/>
                        <Route path="/"
                               render={()=>(
                                   <AllStudents  {...this.state}/>
                               )}
                        />
                    </Switch>
                </main>
            </React.Fragment>
        );
    }
}

//component outside Router hence to make use of props.history wrap in withRouter before export
export default withRouter(App);
