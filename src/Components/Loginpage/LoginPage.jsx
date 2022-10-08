import React, { Component } from "react";
import EmailField from "../Emailfield/EmailField";
import Passfield from "../Passfield/Passfield";
import "./style.css";
class LoginPage extends Component {
  render() {
    return (
        <section className="card">
          <h1 className="tittle">Bem-vindo(a)</h1>
          <form>
            <h1 className="loginTittle">Login</h1>
            <EmailField/>
            <Passfield/>
                
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
