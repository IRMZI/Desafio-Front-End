import React, { useContext } from "react";
import { AutProvider } from "../../Context/autenticador";
import useAut from "../../hook/aut";
import "./style.css";


const Cardusuario = ({
  name,
  token,
}) => {
  return (  

    <section className="container-usuario">
    <AutProvider>
    <div className="container-usuario">
    <h1 className="tittle-usuario">{name}</h1>
    <h1 className="id-usuario">{token}</h1>
    </div>
    </AutProvider>
    </section>
  );
};

export default Cardusuario;
