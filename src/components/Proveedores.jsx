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
        <div className="gradiente_verde">
          <TabBar/>
          <Formulario/>
        </div>
        <BtnSubir/>
    </div>
  )
}

export default Proveedores