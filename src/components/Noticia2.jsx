import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import noti2p from '../images/noti2p.svg';
import noti2s from '../images/noti2s.svg';

function Noticia2() {
  return (
    <div className='container-fluid row justify-content-center'>
            <Link to={"/noticias"} className='text-start btnatras'>
                <FontAwesomeIcon icon={faArrowLeft} size="2xl" style={{ color: 'black' }} />
            </Link>
            <h1 className='titulocard fw-bold mt-5'>NOTICIAS</h1>
            <span className="titulocard d-block text-start fechanoticia ms-5">12/05/22</span>

            <div className='text-start mt-5 detallenoticia'>
                <h2 className='titulo quicksand fw-bold mt-5 pt-5'>La tecnología en la trazabilidad y seguimiento de pedidos.</h2>
                <p className='cuerpo'>El desperdicio de alimentos es un problema global que afecta a la cadena de suministro de frutas y verduras. Según la FAO, aproximadamente un tercio de los alimentos producidos en todo el mundo se pierden o desperdician cada año. La naturaleza perecedera de estos alimentos hace que la cadena de abastecimiento de frutas y verduras sea particularmente vulnerable a este problema.</p>
                <img src={noti2p} alt="Don Julio" class="img-fluid mx-auto w-100 mb-5 mt-5" />
                <h3 className='titulocard fw-bold mb-3'>Soluciones para garantizar frescura y calidad.</h3>
                <p className='cuerpo'>Para abordarlo, es crucial mejorar la trazabilidad y el seguimiento de los pedidos en la cadena de abastecimiento, y la tecnología puede desempeñar un papel fundamental en este sentido. La cadena de abastecimiento de frutas y verduras es una red compleja de productores, transportistas, mayoristas, minoristas y otros intermediarios que trabajan juntos para llevar los productos desde los campos hasta los consumidores finales.
                </p>
                <div className='row'>                    
                    <div className='col-md-7 col-sm-12'>
                        <p className='pfoto cuerpo'>Las soluciones de seguimiento y monitoreo pueden proporcionar información detallada sobre el estado de los productos en tiempo real, lo que permite a los productores y transportistas tomar decisiones informadas sobre cuándo y cómo cosechar, transportar y almacenar los productos para garantizar su frescura y calidad. Además, las herramientas de seguimiento y monitoreo también pueden ayudar a los minoristas a reducir el desperdicio de alimentos.</p>
                    </div>
                    <div className='col-md-5 col-sm-12'>
                        <img src={noti2s} alt="Restó" class="img-fluid mx-auto mt-3" />
                    </div>
                </div>
                
                <h3 className='titulocard fw-bold mb-5 mt-5'>Tecnología para eficiencia en cadena alimentaria</h3>
                <p className='cuerpo'>Tufud, una startup centrada en mejorar la eficiencia de los pedidos entre restaurantes y proveedores, cuenta con una plataforma en la nube que conecta a los restaurantes con proveedores locales de frutas y verduras frescas, lo que les permite realizar pedidos precisos, transparentes, claros y en tiempo real.
En conclusión, la tecnología tiene un papel clave en la reducción del desperdicio de alimentos en la cadena de abastecimiento de frutas y verduras. Las soluciones de seguimiento y monitoreo, así como las soluciones de trazabilidad, pueden ayudar a los actores de la cadena de suministro a tomar decisiones más informadas y a reducir el desperdicio de alimentos en cada etapa del proceso. Es importante abordar este problema para mejorar la eficiencia de la cadena de suministro, reducir los costos y minimizar el desperdicio de alimentos.</p>
                <span className='titulofooter fw-semibold'>FUENTE: TUFUD.CO</span>
            </div>
        </div>
  )
}

export default Noticia2