import React from 'react'
import './acerca.css'
import imagenAcerca from '../../logo/acerca.png'   

const Acerca = () => {
  return (
    <div className="container__acerca" id="acerca">
      <h2 className="acerca__titulo">Acerca de mí</h2>
      <div className="container__contenido-acerca">
        <article>
          
        <p>Pasé de ser electricista a trabajar en un taller de reparación de computadoras, luego a ser maestro carpintero en la creación de muebles. Ahora me considero un desarrollador web.</p>
        <p>Soy un desarrollador web autodidacta. Esta nueva profesión me hace sentir capaz. Me encanta aprender cosas nuevas y compartir mis conocimientos con los demás.</p>
        <p>Tengo experiencia en el trabajo en equipo, supervisando personal y compartiendo mis conocimientos para solucionar problemas en corto tiempo.</p>
          <div className="container__boton">
            <a href="https://drive.google.com/file/d/15dTIvtKlhtjzHmwy3Ub8GI7tv-7f-fIL/view?usp=sharing"
            aria="noreferrer" target="_blank"
            className="boton">Descargar CV</a>
          </div>
        </article>
        <figure className='container__imagen'>
          <img src={imagenAcerca} alt="Imagen de perfil" className="acerca__imagen" />
        </figure>
      </div>
    </div>
  )
}

export default Acerca