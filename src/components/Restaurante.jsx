import React from 'react'
import AgilizaPedidos from './AgilizaPedidos';
import BeneficiosRestaurante from './BeneficiosRestaurante';
import EstasListo from './EstasListo';
import Pedidos from './Pedidos';
import Video from './Video';
import BtnSubir from "./BtnSubir"

function Restaurante() {
    return (
       <div>
        <Pedidos/>
        <BeneficiosRestaurante/>
        <AgilizaPedidos/>
        <Video/>
        <EstasListo/>
        <BtnSubir/>
        </div>
    )
}

export default Restaurante