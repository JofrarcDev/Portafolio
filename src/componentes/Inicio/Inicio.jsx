import React from "react";
import "./inicio.css"
import jofranicon from '../../logo/jofrandev.png';
import github from '../../iconos/github.svg';
import linkedin from '../../iconos/linkedin.svg';
import Twitter from '../../iconos/twitter.svg';   

const Inicio = () => {
    return (
        <main className="contenedor__inicio" id="inicio">
            <section className="contenedor__texto">
                <h1 className="titulo__inicio">¡Hola! Soy <span>Jofrannys</span></h1>
                <p className="parrafo__inicio">Desarrollador web front-end.</p>
                <div className="redes__sociales">
                        <a href="https://github.com/JofrarcDev" target="_blank" rel="noreferrer">
                            <img src={github} alt="GitHub" className="icono__redes" />
                        </a>
                        <a href="https://www.linkedin.com/in/jofrannys-arcila-75a9a967/" target="_blank" rel="noreferrer">
                            <img src={linkedin} alt="Linkedin" className="icono__redes" />
                        </a>
                        <a href="https://x.com/jofranDev" target="_blank" rel="noreferrer">
                            <img src={Twitter} alt="Twitter" className="icono__redes" />
                        </a>
                    
                </div>
            </section>
            <section className="contenedor__imagen">
                <img src={jofranicon} alt="JofranDev" className="imagen__inicio" />
            </section>
        </main>
    );
}

export default Inicio;