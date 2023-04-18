import React from 'react'
import AgilizaPedidos from './AgilizaPedidos';
import BeneficiosRestaurante from './BeneficiosRestaurante';
import Pedidos from './Pedidos';

function Restaurante() {
    return (
       <div>
        <Pedidos/>
        <BeneficiosRestaurante/>
        <AgilizaPedidos/>
        </div>
    )
}

export default Restaurante