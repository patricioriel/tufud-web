import React from 'react'
import InicioContacto from './InicioContacto'
import Preguntas from './Preguntas'
import Formulario from './Formulario'
import BtnSubir from './BtnSubir';

function Contacto() {
  return (
    <div>
        <InicioContacto/>
        <Preguntas/>
        <Formulario/>
        <BtnSubir/>
    </div>
  )
}

export default Contacto