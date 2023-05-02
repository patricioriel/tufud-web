import React from 'react'
import ExploraNoticias from './ExploraNoticias'
import InicioNoticias from './InicioNoticias'

function Noticias() {
    return (
        <div className='container'>
            <InicioNoticias />
            <ExploraNoticias />
        </div>
    )
}

export default Noticias