import React from 'react'
import noti1 from "../images/LOGO_NOTICIA.png"
import noti2 from "../images/noti2.png"
import noti3 from "../images/noti3.png"
import noti4 from "../images/noti4.png"
import { Link } from 'react-router-dom';

function UltimasNoticias() {
    return (
        <div className='container mt-5 d-none d-lg-block'>
            <h3 className='fw-bold quicksand subtitulo mb-5 mt-5'>Últimas Noticias</h3>
            <div className="row flex-row justify-content-center align-items-center">
            <div className="col-md-3 col-sm-12 imagengrillanoticias h-100 mb-5">
                        <Link to={"/noticias/1"}><img src={noti1} alt="ilustración noticias" /></Link>
                    </div>
                    <div className="col-md-3 col-sm-12 grillanoticias mb-5">
                        <Link to={"/noticias/1"}>
                            <span className="titulocard d-block text-start">12/05/22</span>
                            <span className="titulocard d-block text-start">TECNOLOGÍA</span>
                            <h2 className="fw-semibold quicksand titulos_cards text-start me-5">Tufud está revolucionando la industria gastronómica.</h2>
                            <p className="cuerpocardnoticias text-start me-5">
                                La industria gastronómica ha experimentado cambios significativos en los últimos años debido a la creciente demanda de opciones digitales...
                            </p>
                        </Link>
                    </div>

                    <div className="col-md-3 col-sm-12 imagengrillanoticias h-100 mb-5">
                        <Link to={"/noticias/2"}><img src={noti2} alt="ilustración noticias" /></Link>
                    </div>
                    <div className="col-md-3 col-sm-12 grillanoticias mb-5">
                        <Link to={"/noticias/2"}>
                            <span className="titulocard d-block text-start">12/05/22</span>
                            <span className="titulocard d-block text-start">TECNOLOGÍA</span>
                            <h2 className="fw-semibold quicksand titulos_cards text-start me-5">
                                La tecnología en la trazabilidad y seguimiento de pedidos.
                            </h2>
                            <p className="cuerpocardnoticias text-start me-5">
                                El desperdicio de alimentos es un problema global que afecta a la cadena de suministro de frutas y verduras...
                            </p>
                        </Link>
                    </div>


                    <div className="col-md-3 col-sm-12 imagengrillanoticias h-100 mb-5">
                        <Link to={"/noticias/3"}><img src={noti3} alt="ilustración noticias" /></Link>
                    </div>
                    <div className="col-md-3 col-sm-12 grillanoticias mb-5">
                        <Link to={"/noticias/3"}>
                            <span className="titulocard d-block text-start">12/05/22</span>
                            <span className="titulocard d-block text-start">TECNOLOGÍA</span>
                            <h2 className="fw-semibold quicksand titulos_cards text-start me-5">
                                La importancia de la gestión eficiente de compras para los restaurantes
                            </h2>
                            <p className="cuerpocardnoticias text-start me-5">
                                La gestión eficiente de compras es una parte crucial del éxito de cualquier restaurante. Si no se hace de manera adecuada, puede haber consecuencias significativas...
                            </p>
                        </Link>
                    </div>


                    <div className="col-md-3 col-sm-12 imagengrillanoticias h-100 mb-5">
                        <Link to={"/noticias/4"}><img src={noti4} alt="ilustración noticias" /></Link>
                    </div>
                    <div className="col-md-3 col-sm-12 grillanoticias mb-5">
                        <Link to={"/noticias/4"}>
                            <span className="titulocard d-block text-start">12/05/22</span>
                            <span className="titulocard d-block text-start">TECNOLOGÍA</span>
                            <h2 className="fw-semibold quicksand titulos_cards text-start me-5">
                                Tufud impulsa las ventas de proveedores.
                            </h2>
                            <p className="cuerpocardnoticias text-start me-5">
                                Como proveedor, es fundamental poder ofrecer tus productos a la mayor cantidad de restaurantes posible. Sin embargo, muchas veces es difícil mantener una buena relación con...
                            </p>
                        </Link>
                    </div>

            </div>
        </div>


    )
}

export default UltimasNoticias