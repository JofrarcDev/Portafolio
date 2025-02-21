
import React from 'react';
import jofranicon from '../../logo/jofrandev.png';
import './header.css';  // Import the CSS file
// Create a functional component
const Header = () => {
  return (
    <header className="header">
        <div className="logo">
            <img src={jofranicon} className="logo" alt="logo" />
            <span>JOFRANDEV</span>
        </div>
        <nav className="navbar">
            <a href="">Inicio</a>
            <a href="">Proyectos</a>
            <a href="">Acercade mí</a>
            <a href="">Contacto</a>
        </nav>
      
    </header>
  );
};
// Export the component
export default Header;