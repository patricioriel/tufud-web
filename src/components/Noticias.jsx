import React from 'react'
import ExploraNoticias from './ExploraNoticias'
import InicioNoticias from './InicioNoticias'
import NewsLetter from './NewsLetter'
import UltimasNoticias from './UltimasNoticias'

function Noticias() {
    return (
        <div className='container my-5'>
            <InicioNoticias />
            <ExploraNoticias />
            <UltimasNoticias/>
            <NewsLetter/>
        </div>
    )
}

export default Noticias