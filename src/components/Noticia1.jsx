import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import donjulio from "../images/donjulio.png"
import dnoticia1 from "../images/dnoticia1.png"

function Noticia1() {
    return (
        <div className='container-fluid'>
            <Link to={"/noticias"} className='float-start ms-5'>
                <FontAwesomeIcon icon={faArrowLeft} size="2xl" style={{ color: 'black' }} />
            </Link>
            <h1 className='titulocard fw-bold mt-5'>NOTICIAS</h1>
            <span className="titulocard d-block text-start fechanoticia ms-5">12/05/22</span>
            <span className="titulocard d-block text-start ms-5">CATEGORIA DE NOTICIA</span>

            <div className='w-50 text-start ms-5 mt-5 border border-black ps-5 pe-5'>
                <h2>Tufud está revolucionando la industria gastronómica.</h2>
                <p>La industria gastronómica ha experimentado cambios significativos en los últimos años debido a la creciente demanda de opciones digitales por parte de los clientes y la necesidad de los restaurantes de adaptarse a la "nueva normalidad" tras la pandemia. La digitalización de la industria alimentaria ha llegado para quedarse y está transformando el sistema gastronómico en su totalidad. En este artículo hablaremos sobre cómo y por qué la tecnología está revolucionando la industria gastronómica y cómo los restaurantes pueden aprovechar al máximo las oportunidades que se les presentan.</p>
                <img src={donjulio} alt="Don Julio" class="img-fluid mx-auto" />
                <h3>¿Por qué la digitalización es un factor fundamental para la industria gastronómica?</h3>
                <img src={dnoticia1} alt="Restó" class="img-fluid mx-auto" />
                <p>En la actualidad, es prácticamente inevitable no haber experimentado la transición hacia el mundo digital, ya sea realizando pedidos a través de las aplicaciones, dejando reseñas en línea a los establecimientos gastronómicos o incluso rasteando al delivery mientras reparte tu pedido.
                    Si bien esta práctica se ha convertido en una costumbre en la relación entre los clientes y los restaurantes, también resulta crucial la digitalización en la relación entre los restaurantes y sus proveedores.</p>
                <p>Debido a la presión que ejerce el aumento de la demanda y las complicaciones en la cadena de suministro, es crucial para los restaurantes contar con procesos operativos eficientes. A pesar de ello, aún existen establecimientos que utilizan hojas físicas para llevar el control de los pedidos, lo que se traduce en un gasto significativo de tiempo y dinero.
                    Es muy frustrante para un restaurante tener que lidiar con papeles desordenados o escuchar mensajes de voz de un proveedor después de haber trabajado todo el día atendiendo a sus clientes. No obstante, la buena noticia es que la industria alimentaria ya ha experimentado la revolución digital, lo que permite optimizar los procesos de pedidos. Ahora, los restaurantes y proveedores pueden comunicarse y hacer pedidos en línea con total facilidad.
                 </p>
                 
            </div>
        </div>

    )
}

export default Noticia1