import React from 'react'
import AgilizaPedidos from './AgilizaPedidos';
import BeneficiosRestaurante from './BeneficiosRestaurante';
import EstasListo from './EstasListo';
import Pedidos from './Pedidos';
import Video from './Video';
import BtnSubir from "./BtnSubir"
import Formulario from './Formulario';

function Restaurante() {
    return (
       <div>
        <Pedidos/>
        <BeneficiosRestaurante/>
        <AgilizaPedidos/>
        <Video/>
        <div className="gradiente_verde">
            <EstasListo/>
        </div>
        <Formulario/>
        <BtnSubir/>
        </div>
    )
}

export default Restaurante