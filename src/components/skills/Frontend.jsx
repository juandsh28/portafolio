import React from 'react'

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Desarrollo Web</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class='bx bxl-html5'></i>

            <div>
              <h3 className="skills__name">HTML5</h3>
              <span className="skills__level">Avanzado</span>
            </div>
          </div>

          <div className="skills__data">
            <i class='bx bxl-javascript'></i>

            <div>
              <h3 className="skills__name">JavaScript</h3>
              <span className="skills__level">Intermedio</span>
            </div>
          </div>     
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i class='bx bxl-css3'></i>

            <div>
              <h3 className="skills__name">CSS3</h3>
              <span className="skills__level">Avanzado</span>
            </div>
          </div>

          <div className="skills__data">
            <i class='bx bxl-react'></i>

            <div>
              <h3 className="skills__name">React JS</h3>
              <span className="skills__level">Intermedio</span>
            </div>
          </div>                    
        </div>
      </div>
    </div>
  )
}

export default Frontend