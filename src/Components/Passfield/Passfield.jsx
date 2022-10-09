import React from "react";
import "./style.css";

const Passfield = ({ type, placeholder, value, onChange }) => {
  return (
    <section>
      <label for="password">
        <i class="fa-solid fa-lock fa-2xl"></i>
      </label>
      <input
        className="field-pass"
        onChange={onChange}
        value={value}
        type={type}
        placeholder={placeholder}
        required
        pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*+`~=?\|<>/]).{8,}"
      />
    </section>
  );
};

export default Passfield;
