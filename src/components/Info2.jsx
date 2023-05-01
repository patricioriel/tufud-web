import React from 'react'
import img2home from "../images/img2home.png"

function Info2() {
    return (
        <div className="gradiente_verde row mt-5 justify-content-center container-fluid">
            <div className="col-md-5">
                <img src={img2home} alt="Descripción de la imagen" className='imginfo mt-3' />
            </div>
            <div className="col-md-5">
                <div>
                    <h2 className='text-start display-3 fw-bold quicksand titulo'> <span className='morado'>Optimiza tu proceso</span> de pedidos con nuestra plataforma en línea fácil de usar</h2>
                    <p className='text-start cuerpo'>Nuestra interfaz rápida e intuitiva permite agilizar la generación y recepción de ordenes de compra. Adaptamos la tecnología al trabajo de cocineros, administradores y vendedores.</p>
                </div>
            </div>
        </div>
    )
}

export default Info2