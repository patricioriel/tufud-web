import React from "react";
import Info from "./Info";
import Beneficios from "./Beneficios";
import Info2 from "./Info2";
import Testimonios from "./Testimonios";
import Separador from "./Separador";
import Contactanos from "./Contactanos";
import Clientes from "./Clientes";
import BtnSubir from "./BtnSubir";
import Instituciones from "./Instituciones";

const Home = () => {
    return (
        <div>
            <Info/>
            <Beneficios/>
            <div className="gradiente_verde">
                <Instituciones/>
                <Info2/>
                <Testimonios/>
            </div>
            <Separador/>
            <div className="gradiente_verde">
                <Contactanos/>
                <Clientes/>
            </div>
            <BtnSubir/>
        </div>
    )
}

export default Home;