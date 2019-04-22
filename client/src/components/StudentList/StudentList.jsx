import React from 'react';
const StudentList = (props) => {
    let width = window.innerWidth;
    let cabinContainerColumnClass = 'col-4 '+"flight-card-container-main";
    if(width<650){
        cabinContainerColumnClass = 'col-12 ' + "flight-card-container-main";
    }
    let content = '';
    if(props.id){
        content = <a href={"#/"+props.id} key={props.id} id={props.id}>ID:{props.id}&nbsp;<br/>Full Name: {props.name}</a>;
    }
    return (
        <div className={cabinContainerColumnClass}>
            <div className="flight-card-container-inner">
                <div className="flights">
                    <div className="flight">
                        {content}
                    </div>

                </div>
                <br/>

            </div>
        </div>
    );
};

export default StudentList;