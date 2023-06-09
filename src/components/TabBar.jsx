import React, { useState } from 'react';
import tabbar1 from '../images/TAB_BAR 1.png';
import tabbar2 from '../images/TAB_BAR 2.png';
import tabbar3 from '../images/TAB_BAR 3.png';

function TabBar() {
    const [activeTab, setActiveTab] = useState(0);
    const [hoverTab, setHoverTab] = useState(null);

    const tabs = [
        {
            title: 'Mejor frecuencia',
            content: <div className="row mt-5 justify-content-center container-fluid d-flex divtabs">
                <div className="col-md-5 mt-5 d-flex align-items-center cajatabs">
                    <img src={tabbar1} alt="Descripción de la imagen" className='imginfo mt-3 w-75' />
                </div>
                <div className="col-md-5 d-flex contenedor_tab">
                    <div>
                        <h2 className='fw-bold text-end quicksand titulo mt-5'><span className='morado'>Aumenta la frecuencia </span>de pedidos</h2>
                        <p className='text-end cuerpo'>Simplifica el proceso de compra para tus clientes, brindándoles un catálogo actualizado y mostrando la disponibilidad de tus productos en tiempo real.</p>
                    </div>
                </div>
            </div>
        },

        {
            title: 'Promocionar',
            content: <div className="row mt-5 justify-content-center container-fluid d-flex divtabs">
                <div className="col-md-5 mt-5 d-flex align-items-center cajatabs">
                    <img src={tabbar2} alt="Descripción de la imagen" className='imginfo mt-3 w-75' />
                </div>
                <div className="col-md-5 d-flex contenedor_tab">
                    <div>
                        <h2 className='fw-bold text-end quicksand titulo mt-5'><span className='morado'>Promociona más fácil </span>tus productos</h2>
                        <p className='text-end cuerpo'>Mantén una comunicación directa con tus clientes y aumenta la efectividad de tus estrategias de marketing al enviar ofertas personalizadas.</p>
                    </div>
                </div>
            </div>
        },

        {
            title: 'Mejor organización',
            content: <div className="row mt-5 justify-content-center container-fluid d-flex divtabs">
                <div className="col-md-5 mt-5 d-flex align-items-center cajatabs">
                    <img src={tabbar3} alt="Descripción de la imagen" className='imginfo mt-3 w-75' />
                </div>
                <div className="col-md-5 d-flex contenedor_tab">
                    <div>
                        <h2 className='fw-bold text-end quicksand titulo mt-5'><span className='morado'>Agiliza </span>los pedidos de tus clientes</h2>
                        <p className='text-end cuerpo'>Ahorra tiempo y aumenta la satisfacción de tus clientes al contar con un proceso de pedido más rápido y confiable.</p>
                    </div>
                </div>
            </div>
        },
    ];

    return (
        <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-12">
          <h4 className="quicksand mt-5 mb-5 titulotabbar">¿Qué es lo que <span className="morado">conseguirás?</span></h4>
            <div className="tab-bar d-flex overflow-auto justify-content-start align-items-centers ms-5">
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  onClick={() => setActiveTab(index)}
                  onMouseOver={() => setHoverTab(index)}
                  onMouseLeave={() => setHoverTab(null)}
                  className={`tab-item ${activeTab === index ? 'active' : ''} ${hoverTab === index ? 'hover' : ''}`}
                >
                  {tab.title}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 containertabs">
            <div className="tab-content">
              {tabs[activeTab].content}
            </div>
          </div>
        </div>
      </div>
    );
}

export default TabBar;
