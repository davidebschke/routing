import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Curry({...props}){

    const navigate = useNavigate();
return(
    <>
    <input type={"text"}  onChange={e => {props.setInputValue(e.target.value)}}/>
    <button onClick={()=> {navigate('/'+props.inputValue)}}> Drück mich </button>
    </>
)}