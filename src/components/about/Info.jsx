import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class='bx bx-award about__icon'></i>

        <h3 className="about__title">Experiencia</h3>
        <span className='about__subtitle'>Más de 2 años</span>
      </div>

      <div className="about__box">
        <i class='bx bx-briefcase-alt about__icon'></i>

        <h3 className="about__title">Trabajo</h3>
        <span className='about__subtitle'>+15 Proyectos</span>
      </div>

      <div className="about__box">
        <i class='bx bx-support about__icon' ></i>

        <h3 className="about__title">Soporte</h3>
        <span className='about__subtitle'>24h / 7d</span>
      </div>
    </div>
  )
}

export default Info