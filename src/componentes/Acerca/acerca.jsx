import React from 'react'
import './acerca.css'
import imagenAcerca from '../../logo/acerca.png'   

const Acerca = () => {
  return (
    <div className="container__acerca" id="acerca">
      <h2 className="acerca__titulo">Acerca de mí</h2>
      <div className="container__contenido-acerca">
        <article>
          <p>Soy un desarrollador web autodidacta, apasionado por la tecnología y el desarrollo web. Me encanta aprender cosas nuevas y compartir mis conocimientos con los demás.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eum debitis perferendis optio dolor doloribus corporis! Quas tenetur iure modi.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nisi architecto accusamus distinctio asperiores ducimus. Quisquam expedita unde excepturi officia?</p>
          <div className="container__boton">
            <a href="#" className="boton">Descargar CV</a>
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