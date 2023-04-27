import React from 'react'
import AgilizaPedidos from './AgilizaPedidos';
import BeneficiosRestaurante from './BeneficiosRestaurante';
import Pedidos from './Pedidos';
import Video from './Video';

function Restaurante() {
    return (
       <div>
        <Pedidos/>
        <BeneficiosRestaurante/>
        <AgilizaPedidos/>
        <Video/>
        </div>
    )
}

export default Restaurante