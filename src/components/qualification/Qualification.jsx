import React, { useState } from 'react'
import "./qualification.css"

const Qualification = () => {
  const[toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <section className="qualification section">
      <h2 className="section__title">Estudios</h2>
      <span className="section__subtitle">Mi rendimiento personal</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
          onClick={() => toggleTab(1)} >
            <i className="uil uil-graduation-cap qualification__icon"></i> Educación
          </div>

          <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
          onClick={() => toggleTab(2)} >
            <i className="uil uil-briefcase-alt qualification__icon"></i> Experiencia
          </div>
        </div>

        <div className="qualification__sections">
          <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Desarrollo de Sistemas</h3>
                <span className="qualification__subtitle">Instituto SISE</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Titulación en Sistemas</h3>
                <span className="qualification__subtitle">Instituto SISE</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022
                </div>
              </div>           
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Ing. de Sistemas</h3>
                <span className="qualification__subtitle">Universidad Científica del Sur</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2023 - Presente
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>          
          </div>

          <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Soporte Técnico</h3>
                <span className="qualification__subtitle">Grupo Delpra I.E.R.L.</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2021
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Programador Junior</h3>
                <span className="qualification__subtitle">Aleme, Auditores y Consultores</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022
                </div>
              </div>           
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Desarrolador Web</h3>
                <span className="qualification__subtitle">Grupo DMD S.A.C.</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2023 - Presente
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualification