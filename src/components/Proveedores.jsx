import React from 'react'
import BeneficiosProveedores from './BeneficiosProveedores'
import TabBar from './TabBar'
import Ventas from './Ventas'
import Video from './Video'
import Formulario from './Formulario'

function Proveedores() {
  return (
    <div>
        <Ventas/>
        <BeneficiosProveedores/>
        <TabBar/>
        <Video/>
        <Formulario/>
    </div>
  )
}

export default Proveedores