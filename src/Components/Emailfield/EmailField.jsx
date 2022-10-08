import React, { Component } from "react";
import './style.css'
class Emailfield extends Component {
  render() {
    return (
      <section>
        {/* EMAIL */}
        <div className="email-container">
          <label for="email">
            <i className="fa fa-envelope fa-2xl"></i>
          </label>
          <input
            className="field"
            type="email"
            placeholder="Email"
            required="required"
          />
        </div>
      </section>
    );
  }
}

export default Emailfield;