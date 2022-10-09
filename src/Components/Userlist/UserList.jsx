import React from "react";
import './style.css';
import Cardusuario from '../Cardusuario/Cardusuario'
const Userlist = () => {
    return (
        <section className="container">
        <h1>Lista de usuários</h1>
        <Cardusuario/>
        <Cardusuario/>
        </section>
    );
}


export default Userlist;