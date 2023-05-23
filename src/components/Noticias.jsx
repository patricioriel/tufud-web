import React from 'react'
import ExploraNoticias from './ExploraNoticias'
import InicioNoticias from './InicioNoticias'
import NewsLetter from './NewsLetter'
import UltimasNoticias from './UltimasNoticias'
import BtnSubir from './BtnSubir';

function Noticias() {
    return (
        <div className='container my-5'>
            <InicioNoticias />
            <ExploraNoticias />
            <UltimasNoticias/>
            <NewsLetter/>
            <BtnSubir/>
        </div>
    )
}

export default Noticias