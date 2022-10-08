import React, { Component } from "react";
import "./style.css";

const Button = ({ text, onClick, type = "button" }) => {
    return (
        <button
         className="button-login" 
         type={type}
         onClick={onClick}> {text}
        
         </button>
    );
  }
export default Button;
