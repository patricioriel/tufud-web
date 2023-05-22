import React from 'react'
import img2home from "../images/img2home.png"

function Info2() {
    return (
        <div className="gradiente_verde row my-5  container-fluid">
            <div className="row justify-content-center column-gap-2">
                <div className="col-md-5">
                    <img src={img2home} alt="Descripción de la imagen" className='imginfo mt-3' />
                </div>
                <div className="col-md-5">
                    <div>
                        <h2 className='text-end display-3 fw-bold quicksand titulo mb-5 optimiza'> <span className='morado'>Optimiza tu proceso</span> de pedidos con nuestra plataforma en linea</h2>
                        <p className='text-end cuerpo'>Nuestra interfaz rápida e intuitiva permite agilizar la generación y recepción de ordenes de compra. Adaptamos la tecnología al trabajo de cocineros, administradores y vendedores.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info2