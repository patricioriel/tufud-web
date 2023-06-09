import React from 'react'
import inicionoti from "../images/inicionoti.svg"

function InicioNoticias() {
  return (
    <div>
    <div class="container containernoti">
      <h1 class="titulonoticias">NOTICIAS</h1>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-6 col-12">
        <h2 class="fw-bold quicksand titulo text-start tendencianoticia mt-5">Las últimas tendencias en gastronomía, tecnología y novedades de nuestra plataforma</h2>
      </div>
      <div class="col-md-6 col-4 d-none d-md-block">
        <img src={inicionoti} alt="ilustración noticias" class="img-fluid mx-auto ilusnoticia" />
      </div>
    </div>
  </div>
  

  )
}

export default InicioNoticias