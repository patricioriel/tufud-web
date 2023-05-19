import React, { useState } from 'react';

function NewsLetter() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Crear objeto de datos a enviar
    const data = {
      nombre,
      correo
    };
    
    // Enviar solicitud POST a Formspree utilizando Fetch API
    try {
      const response = await fetch('https://formspree.io/f/xbjebpqy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error('Error al enviar el formulario')
        alert("Error al enviar el formulario");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='container nl'>
      <div className='row'>
        <div className='col-md-6 col-sm-12 pt-3 pb-3'>
          <h3 className='nlact text-start'>MANTENTE ACTUALIZADO</h3>
          <h3 className='titulonl quicksand text-start'>Suscribite a nuestro canal</h3>
          <p className='cuerponl text-start'>Recibe en tu email todas las noticias relacionadas a la industria gastronómica y novedades de nuestra plataforma.</p>
        </div>

        <div className='col-md-6 col-sm-12 cajanl row align-items-center'>
          {submitted ? (
            <p className='fs-3 quicksand text-white'>¡Gracias por suscribirte!</p>
          ) : (
            <form className='row justify-content-center' onSubmit={handleSubmit}>
              <div className="mb-3 mt-3 w-75 text-start">
                <label htmlFor="nombre" className="form-label txtnl">Nombre y Apellido</label>
                <input type="text" className="form-control placeholdernl quicksand" id="nombre" placeholder="Escribe tu nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
              </div>
              <div className="mb-3 w-75 text-start">
                <label htmlFor="correo" className="form-label txtnl">Correo Electrónico</label>
                <input type="email" className="form-control placeholdernl quicksand" id="correo" placeholder="Escribe tu dirección de correo electrónico" value={correo} onChange={(e) => setCorreo(e.target.value)} />
              </div>
              <button type="submit" className="btnnl mt-3">Suscribirme</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
