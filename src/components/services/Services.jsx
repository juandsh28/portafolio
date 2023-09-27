import React, { useState } from 'react'
import "./services.css"

const Services = () => {
  const[toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Servicios</h2>
      <span className="section__subtitle">Los trabajos que ofrezco</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">Diseño <br /> UI</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(2)}>Conoce Más
            <i class='bx bx-chevrons-right services__button-icon'></i>
          </span>

          <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title">Diseño UI</h3>
              <p className="services__modal-description">
              Ofrecemos servicios de diseño UX/UI para sitios web y aplicaciones.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>

                  <p className="services__modal-info">Mejora la experiencia del usuario.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>

                  <p className="services__modal-info">Aumenta la retención de clientes.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>

                  <p className="services__modal-info">Incrementa la tasa de conversión.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>

                  <p className="services__modal-info">Ahorra tiempo y dinero.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>

                  <p className="services__modal-info">Aumenta la visibilidad y la reputación de la marca.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>          
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">Sitios <br /> Web</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>Conoce Más 
            <i class='bx bx-chevrons-right services__button-icon'></i>
          </span>

          <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Sitios Web</h3>
              <p className="services__modal-description">
                Ofrecemos servicios de diseño y desarrollo de páginas web para todo tipo de negocios.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>

                  <p className="services__modal-info">Permite una mayor visibilidad en línea para el negocio.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>

                  <p className="services__modal-info">Facilita la promoción de productos y servicios.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>

                  <p className="services__modal-info">Mejora la imagen y la reputación de la marca.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>

                  <p className="services__modal-info">Mejora la comunicación y la atención al cliente.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>

                  <p className="services__modal-info">Aumenta la accesibilidad y la comodidad de los clientes.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">Base de <br /> Datos</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(3)}>Conoce Más
            <i class='bx bx-chevrons-right services__button-icon'></i>
          </span>

          <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Base de Datos</h3>
              <p className="services__modal-description">
                Ofrecemos servicios de diseño, implementación y mantenimiento de bases de datos.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>

                  <p className="services__modal-info">Mejora la calidad y precisión de los datos.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>

                  <p className="services__modal-info">Aumenta la seguridad y privacidad de la información.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>

                  <p className="services__modal-info">Permite la generación de informes y análisis de datos.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>

                  <p className="services__modal-info">Proporciona una mayor capacidad de almacenamiento.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>

                  <p className="services__modal-info">Facilita el acceso a la información relevante.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services