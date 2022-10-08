import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import EmailField from "../Emailfield/EmailField";
import Passfield from "../Passfield/Passfield";
import Button from "../Button/Button";
import "./style.css";
import useAut from "../../hook/aut";

  const LoginPage = () => {
  const { login } = useAut();
  const navigate = useNavigate();

  const [Email, setEmail] = useState("");
  const [Senha, setSenha] = useState("");
  const [Erro, setErro] = useState("");

  const handleLogin = () => {
    if (!Email | !Senha) {
      setErro("Preencha os campos");
      return;
    }

    const res = login(Email, Senha);

    if (res) {
      setErro(res);
      return;
    }
    navigate("/userlist");
  };

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
        <label>{Erro}</label>
        <Button type="submit" onClick={handleLogin} text="login" />
        <label>
          <Link to="/registerpage"></Link>
        </label>
        {/* TO REGISTER */}

      </form>
    </section>
  );
};

export default LoginPage;
