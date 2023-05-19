import React from 'react'
import anii from "../images/anii.png"
import logo_500 from "../images/logo-500-latam.png"

function Instituciones() {
  return (
<div className="container my-5">
  <h2 className='mb-5 titulos_cards fw-bolder quicksand'>Grandes instituciones nos respaldan:</h2>
  <div className="d-flex flex-wrap justify-content-center align-items-center">
    <img src={anii} width="250" height="100" alt="Logo Ani" className="img-fluid me-5 inst1" />
    <img src={logo_500} width="250" height="100" alt="Logo 500" className="img-fluid ms-5 inst2" />
  </div>
</div>


  )
}

export default Instituciones