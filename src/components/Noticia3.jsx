import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import noti3p from '../images/noti3p.svg';
import noti3s from '../images/noti3s.svg';
import BtnSubir from './BtnSubir';

function Noticia3() {
  return (
    <div className='container-fluid row justify-content-center fondo_noticias mb-5'>
            <Link to={"/noticias"} className='text-start btnatras'>
                <FontAwesomeIcon icon={faArrowLeft} size="2xl" style={{ color: 'black' }} />
            </Link>
            <h1 className='titulocard fw-bold mt-5'>NOTICIAS</h1>
            <span className="titulocard d-block text-start fechanoticia ms-5">12/05/22</span>

            <div className='text-start mt-5 detallenoticia'>
                <h2 className='titulo quicksand fw-bold mt-5 pt-5'>La importancia de la gestión eficiente de compras para los restaurantes</h2>
                <p className='cuerpo'>La gestión eficiente de compras es una parte crucial del éxito de cualquier restaurante. Si no se hace de manera adecuada, puede haber consecuencias significativas en la rentabilidad y la eficiencia del negocio. En este sentido, Tufud es una plataforma que puede ayudar a los restaurantes a mejorar su gestión de compras y obtener resultados positivos en su negocio.</p>
                <img src={noti3p} alt="Don Julio" class="img-fluid mx-auto w-100 mb-5 mt-5" />
                <h3 className='titulocard fw-bold mb-3'>Tufud: Centralización y Seguimiento de Compras para Restaurantes</h3>
                <div className='row'>
                    <div className='col-md-5 col-sm-12'>
                        <img src={noti3s} alt="Restó" class="img-fluid mx-auto mt-3" />
                    </div>
                    <div className='col-md-7 col-sm-12'>
                        <p className='pfoto cuerpo'>La primera manera en que Tufud puede ayudar a los restaurantes es a través de la centralización de sus compras. Con Tufud, los restaurantes pueden realizar y gestionar todas sus compras en un solo lugar, lo que les permite tener una visión más clara de sus gastos y hacer ajustes en su presupuesto si es necesario. Además, esta centralización también ayuda a evitar la duplicación de órdenes y a mantener un registro más preciso de las compras realizadas.</p>
                    </div>
                </div>
                <p className='cuerpo'>Otro beneficio de Tufud es la capacidad de realizar un seguimiento de las estadísticas del negocio. Con la plataforma, los restaurantes pueden acceder a informes detallados sobre sus compras, lo que les permite tener una mejor comprensión de sus patrones de gastos, las tendencias en el mercado y los productos más populares. Esto les permite tomar decisiones más informadas sobre las compras futuras y mejorar su rentabilidad.
 Además, Tufud también ayuda a los restaurantes a seguir sus cuentas por pagar de manera más efectiva. Al centralizar sus compras, los restaurantes pueden hacer un seguimiento más preciso de las facturas pendientes de pago y asegurarse de que no se les olvide pagar ninguna cuenta. Esto puede ayudar a evitar cargos por mora y a mantener una buena relación con los proveedores.
                </p>
                <h3 className='titulocard fw-bold mb-5 mt-5'> Mejora la Comunicación y Gestión de Compras en Restaurantes</h3>
                <p className='cuerpo'>Finalmente, Tufud también ayuda a los restaurantes a mejorar su comunicación con sus proveedores. Al recibir las compras de todos sus proveedores en un solo lugar, los restaurantes pueden comunicarse de manera más eficiente y reducir la cantidad de correos electrónicos y llamadas telefónicas necesarias para hacer un seguimiento de las órdenes. Esto ayuda a reducir el tiempo y los costos de comunicación, lo que a su vez puede mejorar la eficiencia del negocio.
En resumen, la gestión eficiente de compras es fundamental para el éxito de cualquier restaurante. Tufud puede ayudar a los restaurantes a mejorar su gestión de compras a través de la centralización de sus compras, el seguimiento de estadísticas del negocio, la gestión de cuentas por pagar y la mejora de la comunicación con los proveedores. Si eres un restaurante que busca mejorar su eficiencia y rentabilidad, Tufud es tu herramienta ideal.</p>
                <span className='titulofooter fw-semibold'>FUENTE: TUFUD.CO</span>
            </div>
            <BtnSubir/>
        </div>
  )
}

export default Noticia3