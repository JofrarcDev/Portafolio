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
                    descripcion="Este proyecto te permite convertir texto normal en texto encriptado y viceversa. Utiliza JavaScript para realizar la encriptación y desencriptación de manera eficiente."
                    link="https://jofrarcdev.github.io/Encriptador/"
                    codigo="https://github.com/JofrarcDev/Encriptador"/>

                    <Proyecto 
                    nombre="Proyecto personal" 
                    imagen="02" 
                    descripcion="Este proyecto es de una empresa muliservicios, donde puedes ver los servicios que ofrece la empresa y un formulario de contacto. Utiliza Astro y CSS para su desarrollo."
                    link="https://proyecto-personal-three.vercel.app/"
                    codigo="https://github.com/JofrarcDev/proyecto-personal"/>

                    <Proyecto 
                    nombre="Clima" 
                    imagen="03" 
                    descripcion="Clima es una app sencilla y funcional que permite al usuario ingresar el nombre de una ciudad y obtener información meteorológica actualizada."
                    link="https://jofrarcdev.github.io/Encriptador/"
                    codigo="https://clima-gskk.onrender.com/"/>

                    <Proyecto 
                    nombre="Encripador de Texto" 
                    imagen="01" 
                    descripcion="Este proyecto te permite convertir texto normal en texto encriptado y viceversa. Utiliza JavaScript para realizar la encriptación y desencriptación de manera eficiente."
                    link="https://jofrarcdev.github.io/Encriptador/"
                    codigo="https://github.com/JofrarcDev/Encriptador"/>

                   
                    
                    
                
                    
                </div>
            </section>
           
        
    </div>
  )
}

export default Proyectos