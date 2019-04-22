import React, {Component} from 'react';
import './AllStudents.css';
import StudentList from "../StudentList/StudentList";


class AllStudents extends Component {

    render() {

        let {studentsData} = this.props;
        return (
            <div className="row flight-result-container-main">
                <div className="col-2 flight-result-container-left">


                </div>
                <div className="flight-result-container-center">
                    <h5></h5>
                    <br/>
                    <div className="row flight-result">
                        {studentsData.map(student=> {
                            return <StudentList key={student.id} name={student.fullname}
                                            id={student.id}/>
                        })}

                    </div>
                </div>
                <div className="col-2 flight-result-container-right">
                </div>
            </div>
        );
    }
}

export default AllStudents;