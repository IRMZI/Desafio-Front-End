import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import EmailField from "../Emailfield/EmailField";
import Passfield from "../Passfield/Passfield";
import Button from "../Button/Button";
import "./style.css";
import useAut from "../../hook/aut";

const RegisterPage = () => {
  const [Email, setEmail] = useState("");
  const [Senha, setSenha] = useState("");
  const [senhaConf, setSenhaConf] = useState("");
  const [Erro, setErro] = useState("");
  const navigate = useNavigate();

  const { cadastrar } = useAut();

  const handleCadastro = () => {
    setErro("As senhas não são iguais!");
    if (!Email | !Senha | !senhaConf) {
      setErro("Preencha os campos");
      return;
    }

    const res = cadastrar(Email, Senha);

    if (res) {
      setErro(res);
      return;
    }

    alert("usuário cadastrado com sucesso");
    navigate("/userlist");
  };

  return (
    <section className="card">
      <h1 className="tittle">Bem-vindo(a)</h1>
      <form>
        <h1 className="loginTittle">Register</h1>
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
          onChange={(e) => [setSenhaConf(e.target.value), setErro("")]}
        />
        <p className="requirementsPass">
          A senha deve conter no mínimo 8 caracteres, um número, uma letra
          maiúscula e um caractere especial.
        </p>

        <label>{Erro}</label>
        <p></p>
        <Button type="submit" onClick={handleCadastro} text="Cadastrar" />
        <div className="toLogin">
          <label>
            Já possui cadastro?
            <Link to="/">Clique aqui</Link>
          </label>
        </div>
      </form>
    </section>
  );
};
export default RegisterPage;
