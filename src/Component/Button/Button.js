import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const Button = ({label,link}) => {
    return (
        <>
                <a href={link}><button className="btn">{label}</button></a>
            </>
        
        
    );
};

export default Button;
