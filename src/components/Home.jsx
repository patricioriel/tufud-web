import React from "react";
import Info from "./Info";
import Beneficios from "./Beneficios";
import Info2 from "./Info2";
import Testimonios from "./Testimonios";
import Separador from "./Separador";
import Contactanos from "./Contactanos";
import Clientes from "./Clientes";

const Home = () => {
    return (
        <div>
            <Info/>
            <Beneficios/>
            <Info2/>
            <Testimonios/>
            <Separador/>
            <Contactanos/>
            <Clientes/>
        </div>
    )
}

export default Home;