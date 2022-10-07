import React, { Component } from "react";
import "./style.css";
class LoginPage extends Component {
  render() {
    return (
        <section className="card">
          <h1 className="tittle">Bem-vindo(a)</h1>
          <form>
            <h1 className="loginTittle">Login</h1>
  
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
  
            {/* PASSWORD */}
              <div className="password-container">
                <label for="password">
                  <i class="fa-solid fa-lock fa-2xl"></i>
                </label>
                <input
                  className="field"
                  type="password"
                  placeholder="Password"
                  required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*+`~=?\|<>/]).{8,}"
                />
              </div>
                
              {/* BUTTON */}
              <button className="button-login" type="submit" value="SignIn"> Login </button>

              {/* TO REGISTER */}
            <div className="toRegister">
            </div>
          
          </form>
        </section>
      );
  }
}

export default LoginPage;
