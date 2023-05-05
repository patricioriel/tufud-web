import React from 'react'
import ExploraNoticias from './ExploraNoticias'
import InicioNoticias from './InicioNoticias'

function Noticias() {
    return (
        <div className='container my-5'>
            <InicioNoticias />
            <ExploraNoticias />
        </div>
    )
}

export default Noticias