import { useState } from 'react';
import { preguntasRestaurants } from '../data/PreguntasRestaurants';
import { preguntasProveedores } from '../data/PreguntasProveedores';

function Preguntas() {
    const [activeTab, setActiveTab] = useState('restaurantes');

    const toggleTab = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };

    return (
        <div className='container'>
            <ul className="nav nav-tabs justify-content-center">
                <li className="nav-item col-md-5">
                    <a
                        className={`nav-link navfaq ${activeTab === 'restaurantes' ? 'active' : ''}`}
                        onClick={() => toggleTab('restaurantes')}
                    >
                        Restaurantes
                    </a>
                </li>
                <li className="nav-item col-md-5">
                    <a
                        className={`nav-link navfaq ${activeTab === 'proveedores' ? 'active' : ''}`}
                        onClick={() => toggleTab('proveedores')}
                    >
                        Proveedores
                    </a>
                </li>
            </ul>
            <div className="tab-content">
                <div className={`tab-pane ${activeTab === 'restaurantes' ? 'active' : ''}`}>
                    <div className="row justify-content-center">
                        {preguntasRestaurants.map((pregunta) => (
                            <div className="col-md-5 cajaacordeon" key={pregunta.id}>
                                <div className="accordion" id={`accordion-${pregunta.id}`}>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id={`heading-${pregunta.id}`}>
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#collapse-${pregunta.id}`}
                                                aria-expanded="false"
                                                aria-controls={`collapse-${pregunta.id}`}
                                            >
                                                {pregunta.pregunta}
                                            </button>
                                        </h2>
                                        <div
                                            id={`collapse-${pregunta.id}`}
                                            className="accordion-collapse collapse"
                                            aria-labelledby={`heading-${pregunta.id}`}
                                            data-bs-parent={`#accordion-${pregunta.id}`}
                                        >
                                            <div className="accordion-body text-start p-3">{pregunta.respuesta}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={`tab-pane ${activeTab === 'proveedores' ? 'active' : ''}`}>
                    <div className="row justify-content-center">
                        {preguntasProveedores.map((pregunta) => (
                            <div className="col-md-5 cajaacordeon" key={pregunta.id}>
                                <div className="accordion" id={`accordion-${pregunta.id}`}>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id={`heading-${pregunta.id}`}>
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#collapse-${pregunta.id}`}
                                                aria-expanded="false"
                                                aria-controls={`collapse-${pregunta.id}`}
                                            >
                                                {pregunta.pregunta}
                                            </button>
                                        </h2>
                                        <div
                                            id={`collapse-${pregunta.id}`}
                                            className="accordion-collapse collapse"
                                            aria-labelledby={`heading-${pregunta.id}`}
                                            data-bs-parent={`#accordion-${pregunta.id}`}
                                        >
                                            <div className="accordion-body bg-light p-3">{pregunta.respuesta}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Preguntas

