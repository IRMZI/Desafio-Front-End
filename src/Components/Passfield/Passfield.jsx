import React, { Component } from "react";
import "./style.css";

class Passfield extends Component {
  render() {
    return (
      <section>
        {/* PASSWORD */}
        <div className="password-container">
          <label for="password">
            <i class="fa-solid fa-lock fa-2xl"></i>
          </label>
          <input
            className="field"
            type="password"
            placeholder="Password"
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*+`~=?\|<>/]).{8,}"
          />
        </div>
      </section>
    );
  }
}

export default Passfield;

