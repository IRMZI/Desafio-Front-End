import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import EmailField from "../Emailfield/EmailField";
import Passfield from "../Passfield/Passfield";
import Button from "../Button/Button";
import "./style.css";
import useAut from "../../hook/aut";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [senhaConf, setSenhaConf] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const { signup } = useAut();

  const handleCadastro = () => {
    if (!email | !senha | !senhaConf) {
      setErro("Preencha os campos");
      return;
    } else if (senha !== senhaConf) {
      setErro("As senhas não são iguais!");
      return;
    }

    const res = signup(email, senha, senhaConf);

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
          value={email}
          type="Email"
          placeholder="Digite seu E-mail"
          onChange={(e) => [setEmail(e.target.value), setErro("")]}
        />
        {/* PASSWORD */}
        <Passfield
          type="Password"
          placeholder="Digite sua senha"
          value={senha}
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

        <label>{erro}</label>
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
