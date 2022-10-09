import React, { useContext } from "react";
import { AutProvider } from "../../Context/autenticador";
import useAut from "../../hook/aut";
import "./style.css";


const Cardusuario = () => {
  const aut = useAut;
  const users = localStorage.getItem("users_")
  const key = localStorage.key(0)
  const email = key.value

  return (

    <section className="container-usuario">
    <AutProvider>
    <div className="container-usuario">
    <h1 className="tittle-usuario"> </h1>
    <h1 className="id-usuario"></h1>
    </div>
    </AutProvider>
    </section>
  );
};

export default Cardusuario;
