import React from 'react'

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Herramientas</h3>

      <div className="skills__box">
        <div className="skills__group">       
          <div className="skills__data">
            <i class='bx bxl-git'></i>

            <div>
              <h3 className="skills__name">Git</h3>
              <span className="skills__level">Intermedio</span>
            </div>
          </div>     

          <div className="skills__data">
            <i class='bx bxl-figma'></i>

            <div>
              <h3 className="skills__name">Figma</h3>
              <span className="skills__level">Intermedio</span>
            </div>
          </div>
        </div>

        <div className="skills__group">         
          <div className="skills__data">
            <i class='bx bxl-github'></i>

            <div>
              <h3 className="skills__name">GitHub</h3>
              <span className="skills__level">Avanzado</span>
            </div>
          </div> 

          <div className="skills__data">
            <i class='bx bxl-wordpress'></i>

            <div>
              <h3 className="skills__name">WordPress</h3>
              <span className="skills__level">Avanzado</span>
            </div>
          </div>       
        </div>
      </div>
    </div>
  )
}

export default Backend