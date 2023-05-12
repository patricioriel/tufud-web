import React from 'react'
import Funcionamiento from "../Videos/Funcionamiento.mp4"
import Poster from '../images/poster.jpeg';

function Video() {
  return (
<div>
<h4 className="fw-semibold subtitulo quicksand mt-5 mb-4">Descubre cómo funciona nuestra <span className="morado">plataforma</span></h4>
    <video src={Funcionamiento} controls className='col-md-9 col-12' poster={Poster}/>
</div>

  )
}

export default Video