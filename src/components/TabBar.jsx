import React, { useState } from 'react';
import tabbar1 from '../images/tabbar1.png';
import tabbar2 from '../images/tabbar2.png';
import tabbar3 from '../images/tabbar3.png';

function TabBar() {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            title: 'Mejor frecuencia',
            content: <div className="row mt-5 justify-content-center container-fluid d-flex">
            <div className="col-md-5 mt-5 d-flex align-items-center">
              <img src={tabbar1} alt="Descripción de la imagen" className='imginfo mt-3 w-75' />
            </div>
            <div className="col-md-5 d-flex align-items-center">
              <div>
                <h2 className='fw-bold text-end quicksand titulo'><span className='morado'>Aumenta la frecuencia </span>de pedidos</h2>
                <p className='text-end cuerpo'>Simplifica el proceso de compra para tus clientes, brindándoles un catálogo actualizado y mostrando la disponibilidad de tus productos en tiempo real.</p>
              </div>
            </div>
          </div>
        },

        {
            title: 'Promocionar',
            content: <div className="row mt-5 justify-content-center container-fluid d-flex">
            <div className="col-md-5 mt-5 d-flex align-items-center">
              <img src={tabbar2} alt="Descripción de la imagen" className='imginfo mt-3 w-75' />
            </div>
            <div className="col-md-5 d-flex align-items-center">
              <div>
                <h2 className='fw-bold text-end quicksand titulo'>Será mucho <span className='morado'>más fácil promocionar </span>tus productos</h2>
                <p className='text-end cuerpo'>Mantén una comunicación directa con tus clientes y aumenta la efectividad de tus estrategias de marketing al enviar ofertas personalizadas.</p>
              </div>
            </div>
          </div>
        },

        {
            title: 'Mejor organización',
            content: <div className="row mt-5 justify-content-center container-fluid d-flex">
            <div className="col-md-5 mt-5 d-flex align-items-center">
              <img src={tabbar3} alt="Descripción de la imagen" className='imginfo mt-3 w-75' />
            </div>
            <div className="col-md-5 d-flex align-items-center">
              <div>
                <h2 className='fw-bold text-end quicksand titulo'>Procesa mucho <span className='morado'>más rápido </span>los pedidos de tus clientes</h2>
                <p className='text-end cuerpo'>Ahorra tiempo y aumenta la satisfacción de tus clientes al contar con un proceso de pedido más rápido y confiable.</p>
              </div>
            </div>
          </div>
        },
    ];

    return (
        <div className='container-fluid'>
  <div className="tab-bar d-flex justify-content-start ms-5 mt-5 mw-100">
    {tabs.map((tab, index) => (
      <div
        key={index}
        onClick={() => setActiveTab(index)}
        className={`tab-item ${activeTab === index ? 'active' : ''}`}
      >
        {tab.title}
      </div>
    ))}
  </div>
  <div className="tab-content">
    {tabs[activeTab].content}
  </div>
</div>
    );
}

export default TabBar;
