import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import donjulio from "../images/donjulio.png"
import dnoticia1 from "../images/dnoticia1.png"

function Noticia1() {
    return (
        <div className='container-fluid row justify-content-center'>
            <Link to={"/noticias"} className='text-start btnatras'>
                <FontAwesomeIcon icon={faArrowLeft} size="2xl" style={{ color: 'black' }} />
            </Link>
            <h1 className='titulocard fw-bold mt-5'>NOTICIAS</h1>
            <span className="titulocard d-block text-start fechanoticia ms-5">12/05/22</span>
            <span className="titulocard d-block text-start categorianoticia ms-5 mt-5 ">CATEGORIA DE NOTICIA</span>

            <div className='text-start mt-5 detallenoticia'>
                <h2 className='titulo quicksand fw-bold mt-5 pt-5'>Tufud está revolucionando la industria gastronómica.</h2>
                <p className='cuerpo'>La industria gastronómica ha experimentado cambios significativos en los últimos años debido a la creciente demanda de opciones digitales por parte de los clientes y la necesidad de los restaurantes de adaptarse a la "nueva normalidad" tras la pandemia. La digitalización de la industria alimentaria ha llegado para quedarse y está transformando el sistema gastronómico en su totalidad. En este artículo hablaremos sobre cómo y por qué la tecnología está revolucionando la industria gastronómica y cómo los restaurantes pueden aprovechar al máximo las oportunidades que se les presentan.</p>
                <img src={donjulio} alt="Don Julio" class="img-fluid mx-auto w-100 mb-5 mt-5" />
                <h3 className='titulocard fw-bold mb-3'>¿Por qué la digitalización es un factor fundamental para la industria gastronómica?</h3>
                <div className='row'>
                    <div className='col-md-5 col-sm-12'>
                        <img src={dnoticia1} alt="Restó" class="img-fluid mx-auto mt-3" />
                    </div>
                    <div className='col-md-7 col-sm-12'>
                        <p className='pfoto cuerpo'>En la actualidad, es prácticamente inevitable no haber experimentado la transición hacia el mundo digital, ya sea realizando pedidos a través de las aplicaciones, dejando reseñas en línea a los establecimientos gastronómicos o incluso rasteando al delivery mientras reparte tu pedido.
                            Si bien esta práctica se ha convertido en una costumbre en la relación entre los clientes y los restaurantes, también resulta crucial la digitalización en la relación entre los restaurantes y sus proveedores.</p>
                    </div>
                </div>
                <p className='cuerpo'>Debido a la presión que ejerce el aumento de la demanda y las complicaciones en la cadena de suministro, es crucial para los restaurantes contar con procesos operativos eficientes. A pesar de ello, aún existen establecimientos que utilizan hojas físicas para llevar el control de los pedidos, lo que se traduce en un gasto significativo de tiempo y dinero.
                    Es muy frustrante para un restaurante tener que lidiar con papeles desordenados o escuchar mensajes de voz de un proveedor después de haber trabajado todo el día atendiendo a sus clientes. No obstante, la buena noticia es que la industria alimentaria ya ha experimentado la revolución digital, lo que permite optimizar los procesos de pedidos. Ahora, los restaurantes y proveedores pueden comunicarse y hacer pedidos en línea con total facilidad.
                </p>
                <h3 className='titulocard fw-bold mb-5 mt-5'>¿Cómo pueden los restaurantes utilizar la tecnología para mejorar su procesos?</h3>
                <p className='cuerpo'>Diversas herramientas tecnológicas han colaborado a que los restaurantes pueden mejorar su gestión y operación. Los sistemas de pedidos en línea, como PedidosYa o Rappi, son solo algunas de las opciones disponibles. Otras herramientas útiles incluyen sistemas de reservas de mesas en línea, la automatización de procesos de cocina y la gestión de inventarios. Sin embargo, no se han adoptado herramientas digitales para realizar los pedidos a sus proveedores.
                    Al adoptar un sistema de pedidos online, los restaurantes disponen de más tiempo para dedicarse a lo que realmente importa, como recibir opiniones de clientes o mejorar la experiencia general de tu restaurante.
                    La app de pedidos online de Tufud se ha creado justamente por los motivos mencionados anteriormente. Como restaurantero, podrás gestionar fácilmente todo el proceso de pedidos en cuestión de segundos, ahorrando tiempo, dinero y reduciendo el número de errores. Asimismo, Tufud te permite llevar un mejor control de tu negocio, con estadísticas y reportes generales y por proveedor, así como cuentas por pagar con cada uno de tus proveedores.</p>
                <span className='titulofooter fw-semibold'>FUENTE: TUFUD.CO</span>
            </div>
        </div>

    )
}

export default Noticia1