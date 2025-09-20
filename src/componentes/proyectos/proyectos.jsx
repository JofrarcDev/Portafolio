import React from 'react'
import './proyectos.css'
import Proyecto from './proyecto.jsx';

const Proyectos = () => {
  return (
    <div className="contenedor__proyectos" id="proyectos">
         
            <section className="contenedor__proyectos-seccion">
                <h2 className="titulo__inicio">Proyectos</h2>
                <div className="contenedor__proyectos-cajas">
                    <Proyecto 
                    nombre="Encripador de Texto" 
                    imagen="01" 
                    descripcion="Te permite convertir texto normal en texto encriptado y viceversa. Utiliza JavaScript para realizar la encriptación y desencriptación."
                    link="https://jofrarcdev.github.io/Encriptador/"
                    codigo="https://github.com/JofrarcDev/Encriptador"/>

                    <Proyecto 
                    nombre="SuperServi" 
                    imagen="02" 
                    descripcion="Es de una Empresa muliservicios, donde puedes ver los servicios que ofrece y un formulario de contacto. Utiliza Astro y CSS para su desarrollo."
                    link="https://proyecto-personal-three.vercel.app/"
                    codigo="https://github.com/JofrarcDev/proyecto-personal"/>

                    <Proyecto 
                    nombre="Clima" 
                    imagen="03" 
                    descripcion="Es una app sencilla y funcional que te permite ingresar el nombre de una ciudad y obtener información meteorológica actualizada."
                    link="https://clima-gskk.onrender.com/"
                    codigo="https://github.com/JofrarcDev/App-Clima"/>

                    <Proyecto 
                    nombre="Mi Tienda" 
                    imagen="04" 
                    descripcion="na aplicación de e-commerce desarrollada en React que permite a los usuarios explorar productos, ver detalles y gestionar un carrito de compras."
                    link="https://mi-tienda-lemon.vercel.app/"
                    codigo="https://github.com/JofrarcDev/MiTienda"/>

                   
                    
                    
                
                    
                </div>
            </section>
           
        
    </div>
  )
}

export default Proyectos