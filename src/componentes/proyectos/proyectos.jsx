import React from 'react'
import './proyectos.css'

const Proyectos = () => {
  return (
    <div className="contenedor__proyectos" id="proyectos">
         
            <section className="contenedor__proyectos-seccion">
                <h2 className="titulo__inicio">Proyectos</h2>
                <div className="contenedor__proyectos-cajas">
                    <div className="proyecto__caja">
                        <img src="img/proyecto1.jpg" alt="proyecto1" className="proyecto__img"/>
                        <h3 className="proyecto__titulo">Proyecto 1</h3>
                        <p className="proyecto__descripcion">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus sit amet nunc.</p>  
                        <div className="proyecto__caja-botones">
                            <a href="#" className="proyecto__boton">Ver Proyecto</a>
                            <a href="#" className="proyecto__boton">Ver Código</a>

                        </div> 
                    </div>
                    <div className="proyecto__caja">
                        <img src="img/proyecto2.jpg" alt="proyecto2" className="proyecto__img"/>
                        <h3 className="proyecto__titulo">Proyecto 2</h3>
                        <p className="proyecto__descripcion">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus sit amet nunc.</p>  
                        <div className="proyecto__caja-botones">
                            <a href="#" className="proyecto__boton">Ver Proyecto</a>
                            <a href="#" className="proyecto__boton">Ver Código</a>

                        </div>
                    </div>
                    <div className="proyecto__caja">
                        <img src="img/proyecto3.jpg" alt="proyecto3" className="proyecto__img"/>
                        <h3 className="proyecto__titulo">Proyecto 3</h3>
                        <p className="proyecto__descripcion">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus sit amet nunc.</p>  
                        <div className="proyecto__caja-botones">
                            <a href="#" className="proyecto__boton">Ver Proyecto</a>
                            <a href="#" className="proyecto__boton">Ver Código</a>

                        </div>
                    </div>
                    <div className="proyecto__caja">
                        <img src="img/proyecto4.jpg" alt="proyecto4" className="proyecto__img"/>
                        <h3 className="proyecto__titulo">Proyecto 4</h3>
                        <p className="proyecto__descripcion">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus sit amet nunc.</p>  
                        <div className="proyecto__caja-botones">
                            <a href="#" className="proyecto__boton">Ver Proyecto</a>
                            <a href="#" className="proyecto__boton">Ver Código</a>

                        </div>
                    </div>
                    <div className="proyecto__caja">
                        <img src="img/proyecto5.jpg" alt="proyecto5" className="proyecto__img"/>
                        <h3 className="proyecto__titulo">Proyecto 5</h3>
                        <p className="proyecto__descripcion">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus sit amet nunc.</p>  
                        <div className="proyecto__caja-botones">
                            <a href="#" className="proyecto__boton">Ver Proyecto</a>
                            <a href="#" className="proyecto__boton">Ver Código</a>

                        </div>
                    </div>
                    <div className="proyecto__caja">
                        <img src="img/proyecto6.jpg" alt="proyecto6" className="proyecto__img"/>
                        <h3 className="proyecto__titulo">Proyecto 6</h3>
                        <p className="proyecto__descripcion">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus sit amet nunc.</p>  
                        <div className="proyecto__caja-botones">
                            <a href="#" className="proyecto__boton">Ver Proyecto</a>
                            <a href="#" className="proyecto__boton">Ver Código</a>

                        </div>
                    </div>
                </div>
            </section>
           
        
    </div>
  )
}

export default Proyectos