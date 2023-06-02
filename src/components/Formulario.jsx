import React, { useState } from 'react';

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [usuario, setUsuario] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = 'https://formspree.io/f/xbjebpqy';

    const formData = {
      Nombre: nombre,
      Teléfono: telefono,
      Email: email,
      Usuario: usuario,
      Mensaje: mensaje,
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Formulario enviado correctamente');
          setNombre('');
          setTelefono('');
          setEmail('');
          setUsuario('');
          setMensaje('');
        } else {
          console.error('Error al enviar el formulario');
        }
      })
      .catch((error) => {
        console.error('Error al enviar el formulario', error);
      });
  };

  return (
    <div className="container-fluid d-flex flex-column align-items-center my-5 fondo_form">
      <h4 className="quicksand fw-bolder tituloformulario">¡Comunícate con nosotros!</h4>
      <div className="container m-5 mb-4 form">
        <div className="row">
          <div className="form">
            <form onSubmit={handleSubmit} className="p-5 paddingform">
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label text-light d-flex">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  placeholder="Escribe tu nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="telefono" className="form-label text-light d-flex">
                  Teléfono
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="telefono"
                  placeholder="Escribe tu número de teléfono"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label text-light d-flex">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Escribe tu correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="usuario" className="form-label text-light d-flex">
                  ¿Eres restaurante o proveedor?
                </label>
                <select
                  id="usuario"
                  className="form-select text-body-secondary"
                  value={usuario}
                  onChange={(e) => setUsuario(e.target.value)}
                >
                  <option value="">Seleccione una opción</option>
                  <option value="Restaurante">Restaurante</option>
                  <option value="Proveedor">Proveedor</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="mensaje" className="form-label text-light d-flex">
                  Mensaje
                </label>
                <textarea
                  className="form-control"
                  id="mensaje"
                  rows="3"
                  placeholder="Escribe tu mensaje aquí"
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                ></textarea>
              </div>
              <button className="btn_form fw-bolder p-2 mt-3" type="submit">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default Formulario;
