import React from 'react'
import instituciones from "../images/instituciones.png"

function Instituciones() {
  return (
    <div>
    <h2 className='display-6 mb-4'>Estamos respaldados por grandes instituciones</h2>
    <img src={instituciones} alt="instituciones" className='institucionesimg' />
    </div>
  )
}

export default Instituciones