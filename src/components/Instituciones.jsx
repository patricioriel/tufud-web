import React from 'react'
import logo_ani from "../images/logoanni.png"
import logo_500 from "../images/logo-500-latam.png"

function Instituciones() {
  return (
<div className="container my-5">
  <h2 className='mb-5 titulos_cards fw-bolder quicksand'>Grandes instituciones nos respaldan:</h2>
  <div className="d-flex flex-wrap justify-content-center align-items-center">
    <img src={logo_ani} width="295" height="60" alt="Logo Ani" className="img-fluid me-2" />
    <img src={logo_500} width="95" height="60" alt="Logo 500" className="img-fluid ms-2" />
  </div>
</div>


  )
}

export default Instituciones