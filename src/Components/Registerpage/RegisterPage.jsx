import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import EmailField from "../Emailfield/EmailField";
import Passfield from "../Passfield/Passfield";
import Button from "../Button/Button";
import "./style.css";
import useAut from "../../hook/aut";

const RegisterPage = () => {
    const [Email, setEmail] = useState("");
    const [Senha, setSenha] = useState ("");
    const [senhaConf, setSenhaConf] = useState("");
    const [Erro, setErro] = useState("");

    return (
         <section className="card">
      <h1 className="tittle">Bem-vindo(a)</h1>
      <form>
        <h1 className="loginTittle">Login</h1>
        {/* EMAIL */}
        <EmailField
          value={Email}
          type="Email"
          placeholder="Digite seu E-mail"
          onChange={(e) => [setEmail(e.target.value), setErro("")]}
        />
        {/* PASSWORD */}
        <Passfield
          type="Password"
          placeholder="Digite sua senha"
          value={Senha}
          onChange={(e) => [setSenha(e.target.value), setErro("")]}
        />
        <Passfield
          type="Password"
          placeholder="confirme sua senha"
          value={senhaConf}
          onChange={(e) => [setSenha(e.target.value), setErro("")]}
        />


        </form>
        </section>
    )
}
export default RegisterPage;