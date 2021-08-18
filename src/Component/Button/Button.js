import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const Button = (props) => {
    return (
        <>
            {/* <Link to="sign-up">
               <button className="btn">{props.label}</button>
            </Link> */}
            
                <a href="https://momiji-west-linn.hrpos.heartland.us/menu"><button className="btn">{props.label}</button></a>
          
            </>
        
        
    );
};

export default Button;
