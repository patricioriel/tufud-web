import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import noti4p from '../images/noti4p.svg';
import noti4s from '../images/noti4s.svg';

function Noticia4() {
  return (
    <div className='container-fluid row justify-content-center'>
      <Link to={"/noticias"} className='text-start btnatras'>
        <FontAwesomeIcon icon={faArrowLeft} size="2xl" style={{ color: 'black' }} />
      </Link>
      <h1 className='titulocard fw-bold mt-5'>NOTICIAS</h1>
      <span className="titulocard d-block text-start fechanoticia ms-5">12/05/22</span>

      <div className='text-start mt-5 detallenoticia'>
        <h2 className='titulo quicksand fw-bold mt-5 pt-5'>Tufud impulsa las ventas de proveedores.</h2>
        <p className='cuerpo'>Como proveedor, es fundamental poder ofrecer tus productos a la mayor cantidad de restaurantes posible. Sin embargo, muchas veces es difícil mantener una buena relación con tus clientes y hacer un seguimiento de tus ventas. Es aquí donde entra en juego Tufud, la plataforma que puede ayudarte a mejorar tus ventas y relaciones con tus clientes. </p>
        <img src={noti4p} alt="Don Julio" class="img-fluid mx-auto w-100 mb-5 mt-5" />
        <h3 className='titulocard fw-bold mb-3'>Beneficios principales para proovedores.</h3>
        <div className='row'>
          <div className='col-md-5 col-sm-12'>
            <img src={noti4s} alt="Restó" class="img-fluid mx-auto mt-3" />
          </div>
          <div className='col-md-7 col-sm-12'>
            <p className='pfoto cuerpo'>Uno de los principales beneficios de Tufud para los proveedores es la posibilidad de recibir las compras de todos tus clientes en un solo lugar. Esto significa que no tendrás que estar pendiente de múltiples correos electrónicos, llamadas telefónicas o facturas. En su lugar, podrás acceder a un panel de control en el que verás todas las compras de tus clientes en tiempo real. De esta forma, tendrás una visión completa de tus ventas y podrás tomar decisiones más informadas sobre tu negocio.</p>
          </div>
        </div>
        <p className='cuerpo mt-2'>Además, Tufud te permite enviar promociones a tus clientes de forma fácil y rápida. Podrás ofrecerles descuentos, promociones especiales y novedades sobre tus productos, lo que te permitirá mejorar la relación con tus clientes y aumentar tus ventas. También podrás ver reportes detallados sobre el comportamiento de tus clientes, lo que te permitirá entender mejor sus necesidades y adaptarte a ellas</p>
        <p className='cuerpo'>Otro beneficio para los proveedores es la posibilidad de hacer un seguimiento de tus cuentas corrientes con cada cliente. De esta forma, podrás asegurarte de que tus facturas estén al día y de que tus clientes no tengan ninguna deuda pendiente. Esto puede ayudarte a mantener una relación sana y transparente con tus clientes, lo que a su vez puede mejorar tus ventas a largo plazo.
          Una de las grandes ventajas frente a otras soluciones, es que a través de Tufud, tus clientes pueden incorporar al resto de sus proveedores, por lo que no deben estar entrando a diversas plataformas ni utilizando múltiples medios de comunicación con sus proveedores. De esta forma, los clientes compran más fácilmente y pueden dedicar su tiempo a lo que realmente importa. Esto mejorará sus negocios y aumentará sus compras.
          En resumen, Tufud es una plataforma que puede revolucionar la forma en que los proveedores hacen negocios. Con su capacidad de recibir las compras de todos tus clientes en un solo lugar, enviar promociones, ver reportes y hacer un seguimiento de tus cuentas corrientes con cada cliente, podrás mejorar tus relaciones con tus clientes y aumentar tus ventas. Si eres un proveedor que busca mejorar su negocio, no dudes en considerar Tufud como una herramienta valiosa para lograrlo.</p>
        <span className='titulofooter fw-semibold'>FUENTE: TUFUD.CO</span>
      </div>
    </div>
  )
}

export default Noticia4