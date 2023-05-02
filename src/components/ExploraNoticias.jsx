import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { noticias } from '../data/DataNoticias';

function ExploraNoticias() {
    const [noticiaActual, setNoticiaActual] = useState(0);
    const esUltimaNoticia = noticiaActual === noticias.length - 1;
    const esPrimeraNoticia = noticiaActual === 0;

    const avanzarNoticia = () => {
        if (!esUltimaNoticia) {
            setNoticiaActual(noticiaActual + 1);
        }
    }

    const retrocederNoticia = () => {
        if (!esPrimeraNoticia) {
            setNoticiaActual(noticiaActual - 1);
        }
    }

    return (
        <div>
            <h2 className='fw-bold quicksand subtitulo mb-5 mt-5'>Explora las noticias más relevantes</h2>

            <div className='container containernoticias'>
                <div className='row justify-content-center align-items-center'>
                    <div className='col-md-5 col-sm-12 imagennoticia'>
                        <img src={noticias[noticiaActual].imagen} alt='ilustración noticias' />
                    </div>
                    <div className='col-md-7 col-sm-12 cajanoticias '>
                        <h2 className='fw-bold quicksand titulonoticia text-start mb-4 me-5'>{noticias[noticiaActual].titulo}</h2>
                        <p className='cuerpo text-start me-5'>{noticias[noticiaActual].texto}</p>
                        <Link className='morado leermas quicksand fw-bold text-end' to={`/noticia/${noticias[noticiaActual].id}`}>Leer más</Link>
                    </div>
                    <div className='d-flex justify-content-center align-items-center mt-5'>
                        <button className='btn btn-outline-secondary rounded-circle me-3 btn-lg' disabled={esPrimeraNoticia} onClick={retrocederNoticia}>
                            <FontAwesomeIcon icon={faArrowLeft} size="xl" />
                        </button>
                        <button className='btn btn-outline-secondary rounded-circle btn-lg' disabled={esUltimaNoticia} onClick={avanzarNoticia}>
                            <FontAwesomeIcon icon={faArrowRight} size="xl" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExploraNoticias;
