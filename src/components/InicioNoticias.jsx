import React from 'react'
import inicionoti from "../images/inicionoti.svg"

function InicioNoticias() {
  return (
    <div>
  <div className='container'>
    <h1 className='titulocard fw-bold'>NOTICIAS</h1>
  </div>
  <div className='row justify-content-center'>
    <div className='col-md-7 col-sm-12'>
      <h2 className='fw-bold quicksand titulo text-start'>Las últimas tendencias en gastronomía, tecnología y novedades de nuestra plataforma</h2>
    </div>
    <div className='col-md-4 col-sm-12'>
    <img src={inicionoti} alt="ilustración noticias" class="img-fluid mx-auto" />
    </div>
  </div>
</div>

  )
}

export default InicioNoticias