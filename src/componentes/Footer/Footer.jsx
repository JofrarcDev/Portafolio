import React from 'react'
import './Footer.css'
import jofran from '../../logo/jofrandev.png';

const Footer = () => {
  return (
    <footer>
    <div className="container__footer">
        <div className="footer__titulo">
            <h2>JofranDev</h2>
            <span>Hacemos tu proyectos realidad <i class="fa-solid fa-copyright"></i> 2025</span>
        </div>
        <div className="footer__nav">
            <div className="footer__nav-logo">
                <img src={jofran} className="logo__footer" alt="logo Footer"/>
                <span>JOFRANDEV</span>
               
            </div>
            <nav>
                <a href="#inicio">Inicio</a>
                <a href="#proyectos">Proyectos</a>
                <a href="#acerca">Acerca</a>
                <a href="#habilidades">Habilidades</a>
                <a href="#contacto">Contacto</a>
            </nav>
            <div className="footer__nav-social">
                <a href="https://github.com/JofrarcDev" target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i> GitHub
                </a>
                <a href="https://x.com/jofranDev" target="_blank" rel="noreferrer">
                    <i class="fa-brands fa-x-twitter"></i> Twitter
                </a>
                <a href="https://www.linkedin.com/in/jofrannys-arcila-6b6a6b1a2/" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin"></i> Linkedin
                </a>
                <a href="mailto:jofrarcdev@gmail.com" target="_blank" rel="noreferrer">
                    <i className="fas fa-envelope"></i> Contactame
                </a>
            </div>
        </div>
    </div>
  </footer>
  )
}

export default Footer