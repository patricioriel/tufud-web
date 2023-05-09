import React from 'react'
import inicionoti from "../images/inicionoti.svg"

function InicioNoticias() {
  return (
    <div>
    <div class="container containernoti">
      <h1 class="titulocard fw-bold titulonoticias">NOTICIAS</h1>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-7 col-8">
        <h2 class="fw-bold quicksand titulo text-start tendencianoticia">Tendencias y novedades de nuestra plataforma.</h2>
      </div>
      <div class="col-md-4 col-4">
        <img src={inicionoti} alt="ilustración noticias" class="img-fluid mx-auto ilusnoticia" />
      </div>
    </div>
  </div>
  

  )
}

export default InicioNoticias