import React, { Component } from "react";
import "./style.css";
const Emailfield = ({ type, placeholder, value, onChange }) => {
  return (
    <section>
      <label for="email">
        <i className="fa fa-envelope fa-2xl"></i>
      </label>
      <input
        value={value}
        onChange={onChange}
        className="field"
        type={type}
        placeholder={placeholder}
        required="required"
      />
    </section>
  );
};

export default Emailfield;
