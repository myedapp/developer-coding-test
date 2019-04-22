import React from "react";
import "./Button.css";


const Button = props =>(
    <button onClick={(e)=>props.onClickSearchButton(e)} className="btn btn-primary search-button">{props.label}</button>
);

export default Button;