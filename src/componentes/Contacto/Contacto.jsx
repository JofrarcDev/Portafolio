import React from 'react'
import "./Contacto.css"

const Contacto = () => {
  return (
    <section id="contacto" className="container__contacto">
      <h2>Contacto</h2>
      <form className='form__contacto'>
      <div className="contacto__form-div">
        <label className='contacto__form-tag'>Nombre</label>
        <input type="text" name="nombre" className='contacto__form-input'placeholder='Ingresar nombre'/>
      </div>
      <div className="contacto__form-div">
        <label className='contacto__form-tag'>Correo</label>
        <input type="text" name="nombre" className='contacto__form-input'placeholder='Ingresar Correo Electronico'/>
      </div>

      <div className="contacto__form-div contacto__form-area">
        <label className='contacto__form-tag'>Mensaje</label>
       <textarea name="mensaje" cols="30" rows="10" className='contacto__form-input'placeholder='Describe tu proyecto'></textarea>
      </div>
        
        <button className='enviar' type="submit">Enviar</button>
      </form>
    </section>
  )
}

export default Contacto