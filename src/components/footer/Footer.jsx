import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h2 className="footer__title">Juan Diaz</h2>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              Sobre Mi
            </a>
          </li>

          <li>
            <a href="#services" className="footer__link">
              Servicios
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Proyectos
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/juandsh28"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://www.instagram.com/juandsh28"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-instagram"></i>
          </a>

          <a
            href="https://www.tiktok.com/@juandsh02"
            className="footer__social-link"
            target="_blank"
          >
            <i class='bx bxl-tiktok'></i>
          </a>      
        </div>

        <span className="footer__copy">&#169; Juan Diaz 2023. Todos los derechos reservados.</span>
      </div>
    </footer>
  )
}

export default Footer
