import React from "react";
import './style.css';
import Cardusuario from '../Cardusuario/Cardusuario'
import useAut from "../../hook/aut";
const Userlistdata = [{user:"rafael", token:"123"},{user:"henrique", token:"123"}]
const Userlist = () => {
    const autenticador = useAut();
    console.log(autenticador)
    return (
        <section className="container">
        <h1>Lista de usuários</h1>
        {Userlistdata.map((item, index) => (
        <Cardusuario name={item.user} token={item.token} key={`${index}${item.user}`}/>
        ))}
        <Cardusuario/>

        </section>
    );
}


export default Userlist;