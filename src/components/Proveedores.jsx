import React from 'react'
import BeneficiosProveedores from './BeneficiosProveedores'
import TabBar from './TabBar'
import Ventas from './Ventas'

function Proveedores() {
  return (
    <div>
        <Ventas/>
        <BeneficiosProveedores/>
        <TabBar/>
    </div>
  )
}

export default Proveedores