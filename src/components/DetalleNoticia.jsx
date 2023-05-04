import React from 'react';
import { useParams } from 'react-router-dom';
import { noticias } from '../data/DataNoticias';

function DetalleNoticia() {
  const { id } = useParams();
  const noticia = noticias.find(noticia => noticia.id === id);

  return (
    <div>
      <h2>{noticia.titulo}</h2>
      <img src={noticia.imagen} alt={noticia.titulo} />
      <p>{noticia.texto}</p>
    </div>
  );
}

export default DetalleNoticia;
