import React from 'react'
import BeneficiosProveedores from './BeneficiosProveedores'
import TabBar from './TabBar'
import Ventas from './Ventas'
import Video from './Video'
import Formulario from './Formulario'
import BtnSubir from './BtnSubir';



function Proveedores() {
  return (
    <div>
        <Ventas/>
        <BeneficiosProveedores/>
        <TabBar/>
        <Video/>
        <Formulario/>
        <BtnSubir/>
    </div>
  )
}

export default Proveedores